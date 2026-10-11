# Static LP social cards

Build/design utilities only. Production pages reference only the final JPEG files through metadata. No renderer scripts, fonts or scene captures are loaded by the website.

Run from the repository root, with the project served at `http://localhost:8765`:

```sh
npm install --prefix scripts/social-cards
node scripts/social-cards/capture-scenes.cjs
node scripts/social-cards/render.cjs
python3 scripts/social-cards/update-metadata.py
node scripts/validate-social-metadata.cjs
python3 scripts/social-cards/review.py
```

`review.py` requires Pillow. The other Python utility uses only the standard library. Install Playwright Chromium if unavailable: `scripts/social-cards/node_modules/.bin/playwright install chromium`. Existing installations can be selected with `LP_PLAYWRIGHT_PATH`; the local task environment already provides one. `LP_SOCIAL_BASE_URL` overrides the localhost server URL.

`manifest.json` is the page/card source of truth: four top-level cards and 21 project cards. Six additional public routes reuse an appropriate brand/product card. `404.html` is excluded because robots.txt disallows this error utility. Documentation/review HTML is outside the production public-route audit.

The renderer uses the site's existing Poppins and Montserrat families, copied from Google Fonts into this build-only directory. Their original OFL notices are included alongside the fonts. The LP logo, portrait and product mockups remain unchanged existing site assets. Scene captures are taken from the approved About and Contact WebGL environments with text/UI removed only in the capture browser.

All cards are 1200×630 JPEGs at quality 97. The renderer checks actual rendered text bounds against a 72px horizontal / 60px vertical safe area; product images use contain sizing, with source resolution above their displayed size. The validator parses HTML through an inert DOM, checks required tag counts, exact manifest values, routes, duplicate canonicals, absolute production URLs, local image existence, stale thumbnail/experience references, and decoded image dimensions/nonblank/opaque output. Exit status is nonzero on failure. `LP_SOCIAL_ROOT` can target an isolated fixture for validator tests.

Changing a card later may require a new filename and updated manifest for cache invalidation. External social-platform cache/preview checks are intentionally deferred until a separately authorized deployment; this task is local only.
