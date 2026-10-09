# Cinematic page transitions — local QA

Completed locally, 9 October 2026. No commit, push, deployment or publication.

## Files changed

- Added `assets/css/lp-page-transition.css` and `assets/js/lp-page-transition.js`.
- Updated `assets/js/main.js` to bind the legacy one-page-nav plugin only to hash links. This removes its pre-existing HTML-link offset error and stops it competing with multipage navigation. Existing hash animation settings remain unchanged.
- Added one stylesheet and one early script include to each of the 32 root public HTML pages (listed below).
- Added QA runners `scripts/validate-page-transitions.cjs` and `scripts/validate-transition-cards.cjs`.
- Saved this report, runtime results, card results, lifecycle results and four visual captures under `docs/transition-qa/`.

No existing layout, typography, scene, form, API, metadata, destination URL or navigation-structure rules were edited for this enhancement. The overlay is injected once by the shared script and does not participate in document layout.

## Timing and appearance

| Mode | Leave | Enter | Animation total |
|---|---:|---:|---:|
| Desktop/tablet, 768px+ | 280ms | 200ms | 480ms |
| Mobile, below 768px | 170ms | 140ms | 310ms |
| Reduced motion | 0ms | 0ms | Native immediate navigation |

Actual page-loading time is additional. The desktop enter includes a 30ms black hold, then a 170ms fade; mobile holds 21ms and fades for 119ms. Durations favor the brief's overall 350–550ms desktop and 250–380ms mobile targets over stacking the longer illustrative leave/enter timelines.

A fixed black veil dims the current document. One restrained orange bloom at 66% viewport height peaks during leave and disappears before navigation. Incoming pages start behind a black veil, then reveal once the DOM is ready. A 1.2s parsing fallback prevents the entry veil from waiting indefinitely. A 4s recovery resets the leaving veil if navigation is cancelled or fails to leave the document. Idle opacity is zero; no constant animation, blur, page transform, spinner, logo or progress indicator.

First visits and refreshes remain visible with no intro/loading sequence. Reduced motion uses immediate native navigation without glow.

## Link routing and safety

Intercepted: unmodified primary clicks on same-origin links to another HTML page or directory index. This includes header navigation, internal footer and CTA links, all 21 Selected Work cards, and case-study previous/next links. One document listener supports dynamically rendered cards. The first eligible click owns the destination while leaving; duplicate internal clicks are blocked until the transition resets.

Excluded: external/LinkedIn, mailto, tel, javascript, hash-only and same-document anchors, same-page/query controls, downloads, non-page assets, `_blank` and named browsing-context targets, Cmd/Ctrl/Shift/Alt clicks and middle clicks. Buttons, forms, portfolio tabs and mobile menu controls are not transition targets. The overlay is aria-hidden, cannot receive focus, never captures pointer events, and does not change semantic content.

## Browser lifecycle

Uses `pagehide` and `pageshow`, with no `unload` or `beforeunload`. `pagehide` clears animation/timers; a persisted `pageshow` immediately restores a hidden, usable overlay. Session storage carries only the upcoming URL/timestamp and is consumed on arrival; unavailable storage does not stop navigation.

Back and Forward passed at all eight viewports. A synthetic persisted-page test passed during an active leave. A separate native lifecycle harness also passed normal Back/Forward with opacity zero. **Actual BFCache restoration could not be verified:** the automation host reports `BackForwardCacheDisabledForDelegate` and `BrowsingInstanceNotSwapped`, including when the usual Playwright BFCache-disabling launch argument is omitted. This is recorded in `bfcache-browser.log`; it is not reported as a successful cached restore.

## Verification

- 32 public pages checked for exactly one injected overlay, aria-hidden state, idle invisibility, and duplicate-script idempotence.
- 56 real page navigation flows: seven routes at eight viewports.
- Viewports: 390×844, 430×932, 768×1024, 1024×1366, 1366×768, 1440×900, 1920×1080, 2560×1440.
- Routes: Home → About; About → Portfolio; Portfolio → E-Wallet; E-Wallet → ZapPay (next); Portfolio → Contact; Contact → Home; footer → About.
- All 21 project cards intercepted across all five categories; category tabs did not trigger the overlay.
- Mobile menu open/close stayed independent; mobile menu → About transitioned and reset successfully. A valid hash target and a modified real header click were also checked.
- 17 excluded link/click cases retained native handling; native navigation was suppressed only by the QA harness to avoid launching external destinations.
- Double internal click selected the first destination.
- Refresh and first-visit checks passed with no entry animation.
- Reduced-motion navigation passed without overlay animation.
- Contact form submitted a local mocked POST, showed its existing success popup and never triggered the overlay. No email was sent; live Vercel/Resend delivery was not exercised or changed.
- Shared header rail coordinates remained unchanged when leaving began at every tested viewport.
- Existing Selected Work validator passed (21 projects); existing cinematic case-study validator passed (23 pages).

Console/runtime status after the scoped legacy smooth-scroll fix: 0 uncaught page errors in the automated runtime checks. Local request interception intentionally blocks images/fonts/media for geometry and navigation checks; network resource warnings in that setup are not a production-console audit. Separate visual captures load local artwork and use the existing fallback fonts where external font requests are unavailable.

Visual captures: `idle-390.png`, `horizon-390.png`, `idle-1440.png`, `horizon-1440.png`. Horizon frames pause the CSS animations at their midpoint for deterministic inspection, rather than delaying a real navigation.

## Reproduce

With Playwright installed:

```sh
node scripts/validate-page-transitions.cjs
node scripts/validate-transition-cards.cjs
```

Or set `LP_PLAYWRIGHT_PATH` to an existing Playwright package. The runners serve project files through browser request interception and require no running server.

Local interactive preview: http://localhost:8765/index.html

## Public HTML files

- `404.html`
- `Casestudies.html`
- `Leadership.html`
- `about.html`
- `amazon.html`
- `contact.html`
- `coverride.html`
- `dailymart.html`
- `dronline.html`
- `eater.html`
- `eddiebauer.html`
- `eddiebauer_leadership.html`
- `ewallet.html`
- `ewallet_leadership.html`
- `fluxcrm.html`
- `gocart.html`
- `homenest.html`
- `index.html`
- `lider.html`
- `mydoc.html`
- `norton.html`
- `privacy.html`
- `process.html`
- `quickcart.html`
- `slurrpfarm.html`
- `smartfin.html`
- `staffee.html`
- `taskee.html`
- `terms.html`
- `unipay.html`
- `zappay.html`
- `zmeet.html`
