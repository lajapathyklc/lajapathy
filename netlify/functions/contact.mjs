// Netlify Request/Response adapter. The existing validated mail handler stays shared.
import legacyContact from '../../api/contact.js';

const MAX_BODY_BYTES = 100_000;
const RESPONSE_HEADERS = {
  'Content-Type': 'application/json; charset=utf-8',
  'Cache-Control': 'no-store',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'SAMEORIGIN',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=()',
};
const json = (body, status = 200, extra = {}) => new Response(JSON.stringify(body), {
  status, headers: { ...RESPONSE_HEADERS, ...extra },
});

async function readBody(request) {
  const declared = Number(request.headers.get('content-length'));
  if (Number.isFinite(declared) && declared > MAX_BODY_BYTES) throw new Error('oversize');
  if (!request.body) return {};
  const reader = request.body.getReader();
  const chunks = [];
  let total = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      total += value.byteLength;
      if (total > MAX_BODY_BYTES) { await reader.cancel(); throw new Error('oversize'); }
      chunks.push(value);
    }
  } finally { reader.releaseLock(); }
  const bytes = new Uint8Array(total);
  let offset = 0;
  for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.byteLength; }
  const text = new TextDecoder().decode(bytes);
  if (!text) return {};
  if ((request.headers.get('content-type') || '').includes('application/json')) {
    try { return JSON.parse(text); } catch { return {}; }
  }
  return Object.fromEntries(new URLSearchParams(text));
}

export default async function contact(request, context = {}) {
  let body = {};
  if (request.method === 'POST') {
    try { body = await readBody(request); }
    catch { return json({ ok: false, error: 'Message too large.' }, 413); }
    if (!body || typeof body !== 'object' || Array.isArray(body)) {
      return json({ ok: false, error: 'Invalid enquiry payload.' }, 400);
    }
  }
  // Netlify's trusted context IP takes precedence over visitor-supplied proxy headers.
  const req = { method: request.method, body, headers: { 'x-forwarded-for': context.ip || 'unknown' } };
  let status = 200, response;
  const headers = {};
  const res = {
    setHeader(name, value) { headers[name] = String(value); },
    status(code) { status = code; return this; },
    json(payload) { response = json(payload, status, headers); return response; },
  };
  await legacyContact(req, res);
  return response || json({ ok: false, error: 'The form is temporarily unavailable.' }, 503);
}

// Exact route, all methods: unsupported methods must return JSON 405 + Allow: POST.
export const config = { path: '/api/contact' };
