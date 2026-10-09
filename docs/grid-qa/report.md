# Site-wide content grid QA

Implemented locally on 9 October 2026. No commit, push, deployment, or publication.

## Canonical shell

The token owner `assets/css/lp-cinematic-footer.css` now owns the single `.lp-shell` rule:

```css
.lp-shell,
.container.lp-shell,
.container.lp-shell.lp-hero-shell {
  box-sizing: border-box;
  width: min(calc(100% - (var(--lp-page-gutter) * 2)), var(--lp-content-max));
  max-width: var(--lp-content-max);
  margin-inline: auto;
  padding-inline: 0;
}
```

The existing content-max progression (1258, 1360, 1440, 1500, 1560, 1600px) is retained. Mobile below 768px uses 24px; tablet consumes the existing shared token (32px at 768 and 1024px).

## Results by page family

- Homepage: Impact, client rail, capabilities (`#service`), problem spaces, execution approach, Selected Work, and testimonial parents use the canonical shell. Internal metric/card padding and testimonial composition remain page-owned. The 768px hero width exception was removed.
- About: intro and metrics now opt into the shell; existing process, execution, capabilities, tools, certifications, and hero shells retain it. Narrow copy measures remain intact.
- Portfolio: hero and Selected Work consume the same shell. The redundant Selected Work width rule was removed; its card/grid rules remain unchanged.
- Contact: body and form parent use the same shell as the hero. Removed the contact wrapper's additional horizontal chapter inset. Existing 5/7 columns, field styling, and mobile stacking remain intact.
- All 21 case studies: header, hero and navigation containers opt into `.lp-shell`. Snapshot, story rows, results and galleries preserve full-width backgrounds and use `padding-inline: var(--lp-content-start)` as the equivalent inner canvas; no story DOM wrappers or column relationship changes were needed.
- Process, Leadership, both leadership detail pages, 404, privacy and terms: primary containers opt into the same shell. Leadership galleries already have rail padding, so their inner containers fill that canvas without adding another gutter.
- Footer: existing CTA, navigation and legal shells retain their layout and token widths. Mobile width calculations now reference the gutter token.

## Cleanup and scope

Removed the competing 1600px Bootstrap container normalization, duplicate hero and Selected Work shell definitions, case-study Bootstrap calculations based on 540/720/960/1140/1320px, Impact's 20px outer mobile padding, and the homepage divider's 1240px calculation. Case-study mobile 20px/15px outer insets now consume the rail token. Internal component spacing remains unchanged.

All HTML differences are shell class changes. No content, metadata, section order, imagery, animation, typography, or scene-position rules were edited. Card sizing remains governed by the existing card/grid rules within the normalized canvas.

## Geometry verification

32 pages × 11 viewports; 4,653 shell/content-canvas measurements. Reference: `header .lp-shell`. Tolerance: 2 CSS pixels. For full-bleed narrative sections the measured canvas excludes their rail padding. Narrow paragraph and card children are not treated as outer shells.

The browser geometry pass uses local files and blocks images, media and fonts to avoid resource-loading variability; separate full-page screenshot QA loads local artwork. External web-font requests were unavailable in this offline-style QA route, so screenshots use the existing fallback fonts. Heights tested: 844, 932, 1024, 1366, 768, 900, 864, 1080, 1440, 1440, 2160 respectively.

| Viewport | Reference left | Reference right | Max page deviation |
|---|---:|---:|---:|
| 390 | 24px | 366px | 0.00px |
| 430 | 24px | 406px | 0.00px |
| 768 | 32px | 736px | 0.00px |
| 1024 | 32px | 992px | 0.00px |
| 1366 | 54px | 1312px | 0.00px |
| 1440 | 91px | 1349px | 0.00px |
| 1536 | 139px | 1397px | 0.00px |
| 1920 | 240px | 1680px | 0.00px |
| 2560 | 500px | 2060px | 0.00px |
| 3440 | 920px | 2520px | 0.00px |
| 3840 | 1120px | 2720px | 0.00px |

Existing Selected Work validator: passed, 21 projects. Existing cinematic case-study validator: passed, 23 pages including leadership details.

Full-page debug screenshots captured at 390 and 1440px for Home, About, Portfolio, Contact, E-Wallet, E-Wallet leadership, Process and Privacy. Reviewed representative full-page images for content rails and retained scene/layout composition. These screenshots supplement the geometry checks; they are not pixel-diff regression tests.

## Local debug and reproducibility

Debug rails are inactive by default. Enable in DevTools:

```js
document.documentElement.classList.add('lp-debug-grid');
```

Remove with `classList.remove('lp-debug-grid')`.

Run `node scripts/validate-content-grid.cjs` with Playwright installed, or set `LP_PLAYWRIGHT_PATH` to an existing Playwright package. The runner serves local files through request interception and needs no server. An optional list of viewport widths reruns those widths and replaces their entries in `geometry.json`.

## Files changed

CSS:

- `assets/css/ewallet-case-study.css`
- `assets/css/lp-case-study-pages.css`
- `assets/css/lp-cinematic-footer.css`
- `assets/css/lp-hero-alignment.css`
- `assets/css/lp-home-cinematic.css`
- `assets/css/lp-home-hero.css`
- `assets/css/lp-selected-work.css`

HTML (all public root pages):

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

QA artifacts: `scripts/validate-content-grid.cjs`, this report, `docs/grid-qa/geometry.json`, and 16 full-page debug screenshots under `docs/grid-qa/`.
