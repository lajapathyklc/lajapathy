// Vercel serverless function backing the contact form.
//
// Requires two environment variables in the Vercel project:
//   RESEND_API_KEY  - API key from resend.com
//   CONTACT_TO      - where enquiries land (defaults to info@lajapathy.com)
// Optional:
//   CONTACT_FROM    - verified sender, e.g. "Lajapathy site <site@lajapathy.com>"
//
// Uses Resend's REST API over fetch, so there are no npm dependencies to install.
// Passing the visitor's address as reply_to (never as the From header) keeps the
// sender domain authenticated and makes header injection structurally impossible.

const { createHash } = require('node:crypto');

const MAX = { name: 120, email: 200, subject: 200, phone: 40, message: 5000 };

// Per-instance throttle. Serverless instances are short-lived and not shared, so
// this trims casual abuse rather than acting as a hard rate limit.
const hits = new Map();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;

function throttled(ip, now) {
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 500) {
    for (const [k, v] of hits) if (!v.some((t) => now - t < WINDOW_MS)) hits.delete(k);
  }
  return recent.length > MAX_PER_WINDOW;
}

async function readBody(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  const raw = await new Promise((resolve, reject) => {
    let d = '';
    req.on('data', (c) => {
      d += c;
      if (d.length > 100_000) reject(new Error('payload too large'));
    });
    req.on('end', () => resolve(d));
    req.on('error', reject);
  });
  if (!raw) return {};
  const type = String(req.headers['content-type'] || '');
  if (type.includes('application/json')) {
    try { return JSON.parse(raw); } catch { return {}; }
  }
  return Object.fromEntries(new URLSearchParams(raw));
}

const clean = (v, max) =>
  String(v ?? '')
    .replace(/[\u0000-\u001f\u007f]/g, ' ')
    .trim()
    .slice(0, max);

const escapeHtml = (v) =>
  String(v).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Use POST.' });
  }

  const ip = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim() || 'unknown';
  if (throttled(ip, Date.now())) {
    return res.status(429).json({ ok: false, error: 'Too many messages. Please try again shortly.' });
  }

  let body;
  try {
    body = await readBody(req);
  } catch {
    return res.status(413).json({ ok: false, error: 'Message too large.' });
  }

  // Honeypot: real people leave this hidden field empty.
  if (clean(body.website, 100)) return res.status(200).json({ ok: true });

  const name = clean(body.name, MAX.name);
  const email = clean(body.email, MAX.email);
  const message = clean(body.message, MAX.message);
  const subject = clean(body.subject, MAX.subject);
  const phone = clean(body.phone, MAX.phone);

  const requestId = String(body.requestId || '');
  if (requestId && !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(requestId)) {
    return res.status(400).json({ ok: false, error: 'Invalid enquiry ID.' });
  }

  const problems = [];
  if (!name) problems.push('name');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) problems.push('email');
  if (!message) problems.push('message');
  if (problems.length) {
    return res.status(400).json({ ok: false, error: `Please check these fields: ${problems.join(', ')}.` });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO || 'info@lajapathy.com';
  const from = process.env.CONTACT_FROM || 'Lajapathy Website <onboarding@resend.dev>';

  if (!apiKey) {
    // Configuration gap, not the visitor's fault. The form surfaces the mailto fallback.
    return res.status(503).json({
      ok: false,
      error: 'The form is not connected to email yet. Please email info@lajapathy.com directly.',
    });
  }

  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    subject ? `Subject: ${subject}` : null,
    '',
    message,
  ].filter((l) => l !== null);

  // Bind retry protection to both the enquiry ID and its normalized contents.
  const sendHeaders = { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' };
  if (requestId) {
    sendHeaders['Idempotency-Key'] = 'contact/' + createHash('sha256')
      .update(JSON.stringify([requestId, from, to, name, email, phone, subject, message])).digest('hex');
  }

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: sendHeaders,
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: subject ? `Website enquiry: ${subject}` : `Website enquiry from ${name}`,
        text: lines.join('\n'),
        html: `<h2>New website enquiry</h2>
<p><strong>Name:</strong> ${escapeHtml(name)}<br>
<strong>Email:</strong> ${escapeHtml(email)}${phone ? `<br><strong>Phone:</strong> ${escapeHtml(phone)}` : ''}${
          subject ? `<br><strong>Subject:</strong> ${escapeHtml(subject)}` : ''
        }</p>
<p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
      }),
    });

    if (!r.ok) {
      const detail = await r.text().catch(() => '');
      console.error('Resend rejected the message:', r.status, detail.slice(0, 500));
      return res.status(502).json({
        ok: false,
        error: 'Could not send right now. Please email info@lajapathy.com directly.',
      });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Contact form error:', err && err.message);
    return res.status(502).json({
      ok: false,
      error: 'Could not send right now. Please email info@lajapathy.com directly.',
    });
  }
};
