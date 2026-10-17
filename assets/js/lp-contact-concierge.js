/* Contact-only presentation; the existing API payload and delivery contract stay intact. */
(function () {
    var form = document.getElementById('contact-form');
    if (!form || form.__lpConciergeBound) return;
    form.__lpConciergeBound = true;
    var area = form.closest('.contact-form');
    var conversation = area.querySelector('.lp-contact-conversation');
    var success = area.querySelector('.lp-contact-success');
    var status = document.getElementById('form-messages');
    var topic = form.elements.subject;
    var customSubject = document.getElementById('contact-custom-subject');
    var customArea = area.querySelector('.lp-contact-topic__custom');
    var submitButton = form.querySelector('button[type="submit"]');
    var buttonText = submitButton.querySelector('.btn-text');
    var originalText = buttonText.textContent;
    var motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    var submitting = false;
    var enquiry = null;
    var finishWait = function () {};

    function wait(duration) {
        if (motion.matches) return Promise.resolve();
        return new Promise(function (resolve) {
            var timer = window.setTimeout(function () { finishWait = function () {}; resolve(); }, duration);
            finishWait = function () { window.clearTimeout(timer); resolve(); };
        });
    }
    motion.addEventListener('change', function () { if (motion.matches) finishWait(); });

    function updateTopic() {
        customArea.hidden = topic.value !== 'Something Else';
        topic.classList.toggle('has-topic', topic.value !== '');
    }
    topic.addEventListener('change', updateTopic);
    updateTopic();

    function clearStatus() {
        status.replaceChildren();
        status.classList.remove('is-error');
        status.setAttribute('role', 'status');
        status.setAttribute('aria-live', 'polite');
    }
    function showError(kind) {
        status.classList.add('is-error');
        status.setAttribute('role', 'alert');
        status.setAttribute('aria-live', 'assertive');
        var title = document.createElement('strong');
        title.textContent = kind === 'unconfirmed' ? 'SEND NOT CONFIRMED' : 'MESSAGE NOT SENT';
        var details = {
            invalid: 'Please check your name, email and message before trying again. ',
            limited: 'Too many attempts. Please wait a minute before trying again. ',
            unavailable: 'The form is temporarily unavailable. ',
            unconfirmed: 'I could not confirm that your message was received. Your text is still here. '
        };
        var explanation = details[kind] || 'Something went wrong. Your text is still here. ';
        var email = document.createElement('a');
        email.href = 'mailto:info@lajapathy.com';
        email.textContent = 'info@lajapathy.com';
        status.replaceChildren(title, document.createTextNode(explanation + 'You can email me directly at '), email, document.createTextNode('.'));
    }
    async function showSuccess() {
        area.style.setProperty('--concierge-height', Math.ceil(conversation.getBoundingClientRect().height) + 'px');
        clearStatus();
        var moveFocus = conversation.contains(document.activeElement) || document.activeElement === document.body;
        conversation.inert = true;
        conversation.classList.add('is-leaving');
        await wait(140);
        conversation.hidden = true;
        conversation.classList.remove('is-leaving');
        success.hidden = false;
        success.classList.add('is-entering');
        form.reset();
        customSubject.value = '';
        updateTopic();
        if (moveFocus) {
            var heading = success.querySelector('h3');
            heading.focus({ preventScroll: true });
            heading.scrollIntoView({ block: 'center', behavior: 'instant' });
        }
        await wait(260);
        success.classList.remove('is-entering');
    }

    form.addEventListener('submit', async function (event) {
        event.preventDefault();
        if (submitting || conversation.hidden) return;
        if (typeof form.reportValidity === 'function' && !form.reportValidity()) return;
        submitting = true;
        submitButton.disabled = true;
        buttonText.textContent = 'SENDING…';
        clearStatus();
        status.textContent = 'Sending your message…';
        form.setAttribute('aria-busy', 'true');
        var payload = {};
        new FormData(form).forEach(function (value, key) { payload[key] = value; });
        if (topic.value === 'Something Else') payload.subject = customSubject.value;
        var fingerprint = JSON.stringify(payload);
        if (!enquiry || enquiry.fingerprint !== fingerprint) {
            enquiry = { fingerprint: fingerprint, id: crypto.randomUUID() };
        }
        payload.requestId = enquiry.id;
        try {
            var response = await fetch(form.getAttribute('action'), {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify(payload)
            });
            var body = await response.json().catch(function () { return null; });
            if (response.ok && body && body.ok === true) { enquiry = null; await showSuccess(); }
            else if (response.status === 400) showError('invalid');
            else if (response.status === 429) showError('limited');
            else if (response.status === 503) showError('unavailable');
            else showError(response.ok ? 'unconfirmed' : 'failed');
        } catch (_) { showError('unconfirmed'); }
        finally {
            submitting = false;
            submitButton.disabled = false;
            buttonText.textContent = originalText;
            form.removeAttribute('aria-busy');
        }
    });
})();
