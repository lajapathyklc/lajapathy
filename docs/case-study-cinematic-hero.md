# Case-study cinematic heroes

All 23 production case-study pages opt in with `case-study-cinematic-hero` and an exact `data-case-study` ID. Product copy, artwork, layout, navigation and body sections remain in their existing HTML.

- `assets/js/lp-case-study-worlds.js`: project palettes, terrain/crater/ridge variation, tilt, roughness, atmospheric density, rotation and artwork inventory.
- `assets/js/lp-case-study-cinematic-hero.js`: one renderer using the existing planet factory, geology atlas, lifecycle and Home meteor adapter.
- `assets/css/lp-case-study-cinematic-hero.css`: scoped environment layers and loading/fallback states.
- `assets/images/hero-cinematic/case-*.webp`: matching desktop/mobile fallback renders; used only when WebGL fails.

Copy lines, metadata, navigation and opaque artwork bands exclude meteor trajectories. Impact targets also stay above the foreground horizon. Planet shaders and rotating impact marks use the same configured geological axis. Home/About/Portfolio/Contact and footer meteor options retain their defaults.

On localhost, use `window.lpCaseStudyHeroDebug.forceMeteor()`, `.forceImpact()`, `.forceSkim()`, `.pause()`, `.resume()` or `.stats()`. These controls have no production UI.

QA covers all projects on desktop/mobile, E-Wallet across 1920/1600/1440/1366/1024/390 widths, ten forced visible E-Wallet impacts, rotating mark attachment, a ten-minute meteor simulation, reduced motion, offscreen pause, context-loss fallback and original HTML preservation. Matching fallback images are generated from the live scenes, without project text or artwork baked into them.

## Complete world rollout

The production inventory contains 21 product pages plus two genuine narrative case studies (`ewallet_leadership` and `eddiebauer_leadership`). `staffee.html` is the repository's actual workforce-project filename. HomeNest uses an organic emerald smart-home world. Main pages and the general Leadership page are excluded.

Every world has a fixed FNV-derived seed, a geology family and an atmosphere family. Seeds affect atlas sampling, minerals, crater distribution, clouds and environmental haze. Seven geology families alter broad formations, layered shelves, ridges, fractures, basins and crater density; six atmosphere families vary shell thickness and density. E-Wallet's seed is calibrated to retain its approved atlas sampling. Its diameter, position, sun and surface relief remain the master settings.

Rotation accumulates clamped delta into a continuous local geological UV phase. All configurations run at 90–110 seconds per revolution; resizing does not reset phase. The fixed sun does not rotate. Impact marks use that same tilt and phase, keeping residual effects attached to terrain. Product artwork transformations stay in the existing page styles.

Legacy hero background-image rules were removed from both case-study layout stylesheets. Loading shows the cosmic base and original content until the first valid frame; the canvas fades in over 500ms. Updated project-specific desktop/mobile posters are reserved for renderer failure or context loss.

Run `node scripts/validate-case-study-worlds.mjs` to validate the discovered HTML inventory, shared initializer, profiles, seeds, colors and rotation ranges. In local development, `lpCaseStudyHeroDebug` also exposes `getWorldConfig()`, `getRotation()` (radians), `getRotationSeconds()` and `validate()`. No debug controls are added to production pages.

### World identity refinement

The first rollout's palettes and geological families were too similar in the visible hero crop. Non-master worlds now use broader mineral deposits, more readable material reflectance and a larger tinted portion of the physically lit atmospheric rim. Terrain families have stronger macro differences: enterprise shelves, fractured security terrain, rugged canyon relief, dusty commerce basins, smooth healthcare terrain and flowing consumer bands. E-Wallet's approved rendering remains calibrated unchanged. Layout, sunlight, project art and content are unchanged. All case-study entry modules use the `worlds-v4` version to refresh cached scripts.
