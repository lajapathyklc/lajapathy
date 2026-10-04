# About cinematic hero

Scope: About hero and its fade into the existing My Story introduction. Home, navigation, footer, portfolio and other About content are unchanged.

## Home pipeline inspection

`assets/js/lp-hero-cinematic.js` implements the Home planet with native WebGL, not Three.js. Its renderer uses a fullscreen quad and analytical ray/sphere intersection, with viewport coordinates acting as an orthographic camera. Native Image loading supplies `geology-4k.webp`; there is no planet model loader or separate authored normal/roughness/height/AO map set.

The geology atlas supplies warped albedo, fine and broad height-derived normals, radial displacement, geological palette, roughness and cavity/horizon shading. Photographic luminance is inferred relief, not measured topography. The atmosphere, low/high dust and directional sun are integrated in the fragment shader. ACES, bloom, horizontal glare and scattered rays run in that same pass; there is no EffectComposer. Canvas layers supply stars and meteors.

Home uses requestAnimationFrame with delta time, a 30 FPS drawing cap, DPR up to 1.25 with adaptive reduction, mipmaps/anisotropy, intersection/document-visibility pausing, size-based placement and reduced-motion handling. Its 200-second planet rotation and meteor behavior remain untouched.

## About architecture

`hero-3d-core.js` exposes the Home-derived geology GLSL plus Three.js renderer, TextureLoader and lifecycle helpers. `about-hero-scene.js` imports those helpers instead of copying the Home controller. The bundled Three.js entry point referenced a nonexistent `three.core.min.js`; its imports now point to the existing `three.core.js`. Home does not import this module.

About has an orthographic Three.js camera and actual sphere geometry, height displacement, the shared terrain shader, two transparent independently rotating dust shells, directional Fresnel/Rayleigh/Mie-style atmosphere, and a small additive sun plane. Fog uses continuous noise advection in a lightweight separate WebGL pass. No meteors or portrait are imported.

Tune `aboutHeroConfig` at the top of the scene module. Rotation accumulates delta time at one turn per 240 seconds; dust speeds are 1.012× and 1.022×. Geometry, stars, fog iterations and DPR are reduced on initial tablet/mobile load. DPR adapts downward when render cost rises. Intersection and document visibility pause rendering. Reduced motion freezes all shader time, removes parallax and pulses, and pauses/hides the SVG traveler.

The provided mountain image is preserved exactly at a relative URL, covered without distortion, masked into the black background and darkened in the text zone. Mountains and planet have separate restrained scroll offsets. Timeline nodes are sampled directly from the SVG orbit and illuminate once, 420 ms apart.

## QA — 1 October 2026

Visually inspected localhost at 1920×1080, 1440×900, 1366×768, 820×1180 and 390×844, including the lower mobile composition and My Story fade. No horizontal overflow. Tablet/mobile label spacing was corrected after visual inspection.

At 1440×900, a three-second browser sample measured approximately 60.2 FPS. Surface rotation advanced continuously; cloud movement measured exactly 1.012×. All five milestones remained fully visible after their introduction. Offscreen rotation stopped. Reduced motion produced zero surface/cloud rotation delta, zero parallax, no node animation and a hidden orbit traveler.

All hero module, Three.js, geology and mountain requests returned HTTP 200. No browser console errors. Existing unrelated GSAP “target not found” warnings remain. Home was visually smoke-tested and its HTML and cinematic controller checksums matched the pre-change snapshot.

Performance measurements describe this test browser, not a guarantee across devices. The shared photographic geology pipeline remains the available asset source; no separate measured displacement or authored PBR texture pack was supplied.

## Visual correction pass

Applied the subsequent written correction specification to the existing hero: 82vh planet diameter, center at 70% width / 47% height, darker desaturated blue-charcoal terrain, a localized lower-right sunrise, orange emphasis on DESIGNING SYSTEMS, white PRODUCTS & TEAMS, raised copy, rounded glowing CTA, and an adjacent mouse/scroll indicator. The mountain layer is now 32% of desktop hero height with 22% brightness reduction and a dark foreground fade. Fog layers advect in opposing directions; cloud speeds remain 1.012× / 1.020×.

Desktop orbit coordinates derive from the sphere silhouette with a small clearance. Milestone heights are 16%, 27%, 39%, 52%, 65%; horizontal coordinates consequently follow the actual globe edge rather than an unrelated curve. Tablet/mobile use the existing stacked composition, reduced globe and responsive lighting that keeps the sunrise visible on the cropped limb.

Captured and visually inspected the correction at 1920×1080, 1440×900, 1366×768, 820×1180 and 390×844. The correction measured approximately 60 FPS at 1440×900, with correct 1.012× cloud motion, all nodes visible after the intro, successful HTTP asset loads and no console errors. Reduced-motion checks showed zero rotation and hidden traveler. About markup outside the hero compares identically to the pre-correction snapshot; Home checksums remain identical.

The image was unavailable during this earlier pass. The subsequently supplied approved reference supersedes these provisional measurements; see the final comparison below.


## Approved-reference comparison — 2 October 2026

The supplied 1671×941 image is now the art-direction reference. Its actual composition supersedes the earlier approximate numbers: the globe is lower and farther left, with its right limb near 85–86% width. The scene uses a 58.5% horizontal center and 60% vertical center, with width-aware desktop scaling. The milestone centers were traced from the reference at (74.8%,15.5%), (81%,25%), (84.6%,36%), (86.5%,47.5%), (86.8%,59.8%). A smooth SVG curve passes through these exact points; the dotted upper continuation, node bloom and descriptions to the right now follow the image.

At the reference dimensions, visually compared headline alignment, its three line breaks and orange gradient emphasis, supporting-copy spacing, pill button, adjacent separator/mouse/line indicator, planet edge, milestone distribution, sunrise and lower foreground. The headline line spacing was tightened after comparison. The planet now has selective slate mineral deposits, a cyan upper atmospheric edge, a warm lower-right rim, and a soft outer scattering shell. Atmospheric fog spans the valley with counter-motion; the lower darkness carries a My Story label matching the reference transition.

Final screenshots were also inspected at 1920×1080, 1440×900, 1366×768, tablet and mobile, with no horizontal overflow or clipped timeline text. The browser measurement was about 60.2 FPS. Surface/cloud deltas retain the 1.012 ratio; reduced motion freezes both and hides the traveler. The Now pulse is also disabled in reduced motion. Assets return HTTP 200 and no console errors were recorded. About markup outside the hero and Home checksums remain unchanged.

The existing LP logo/navigation and supplied mountain asset remain as requested. The planet remains real Three.js geometry using the shared geological atlas, not the static planet from the reference. Consequently, terrain and mountain pixels differ from the approved artwork while their layout, color hierarchy and lighting have been matched as closely as practical with these retained assets.


Live-site alignment correction (2 October 2026): measured Home, About and Portfolio headers at 1920×1080 after fonts settled. Their header container is 1290px, x315; logo x331 and menu x1146.125. Retained shared header styles. About hero now follows the live About 1320px container, 620px copy column, x316 and vertically centered layout. Verified 1920, 1440, 1366 and mobile without horizontal overflow. Stylesheet URL versioned to prevent stale hero CSS.

Header-grid correction: removed the 1320px hero override that introduced a 15px offset from Home. The About copy and My Story marker now use the shared header container. Verified exact x331 alignment of logo/copy/marker at 1920 and x91 at 1440. Restored upper hero placement instead of vertical centering.

Home layout structure reused: About hero now contains the original container/banner-one-main-wrapper/row/col-12 col-lg-7/inner hierarchy and col-lg-5 companion. Removed custom absolute text positioning. Desktop uses the Home centered-row behavior; About-scoped mobile padding overrides hero_integrated.css global wrapper padding reset. Visually tested desktop and mobile; Home remains byte-identical to original.

Final composition refinement (2 October 2026): About-scoped 65px logo and existing desktop nav enabled from 1024px. Planet radius .72, center .72/.54; clouds .13/.05, reduced relief and pale-mineral contrast, higher coherent sunrise. Right-only milestone curve at (78%,18%), (86.5%,26.5%), (90.5%,37.5%), (93%,49%), (92.5%,61.5%); removed back arc. Pixel-computed label widths prevent clipping. Terrain height24%, brightness.62/saturation.79; lower-opacity counter-moving fog. Final screenshots visually inspected at 1920×1080,1440×900,1366×768; additional 1024 and mobile smoke checks. No browser errors or horizontal overflow; Home HTML verified identical to original.

Revision 4: fixed unsafe pre-texture timeline coordinates, removed duplicate module tag, versioned scene and CSS, raised planet center to .52, restored lower environment to28%. Final desktop screenshots reviewed again; existing navigation,65px logo,right-only milestones and no overflow confirmed.

Restored old About base from Downloads/lajapathy-main - old/about.html. Original header, grids, headline, supporting copy, stats and CTA retained. Hero portrait/name/signature and signature handler removed; added existing rotating Three scene, independent clouds, procedural fog, mountain layer and2006–Now orbit. New lp-about-restored-scene.css scopes environment to restored hero; former lp-about-hero.css no longer loaded. All markup after hero verified byte-identical to old source except scene script insertion. Desktop screenshots and mobile inspected, scene ready without errors.

Final polish: restored approved 20 YEARS headline, paragraph and journey CTA; removed hero mini metrics. Existing header verified identical to old base. Planet reduced6%, moved28px right/10px up at1920, orbit projection fixed to previous positions; cloud speeds1.014/1.022, subdued cool scattering and dusty cloud tone. Sun uniform time adds low-strength11-second ray breathing; compact core slightly brighter. Foreground-only darkening, fog-edge mask, quiet10-second node glow and subtle2.4-second scroll drift. Final3desktop screenshots inspected; continuous rotation/cloud movement and reduced-motion state verified. Home unchanged.

## Geometry refinement — 2026-10-02
- Replaced independent milestone coordinates / Catmull-Rom path with a projected circular arc. Sphere center and orthographic radius drive the orbit, nodes, and traveling point on resize; desktop offset is 24px, mobile 18px.
- Desktop sphere reduced 3%; softened terrain normal influence and existing relief, added faint terminator fill, and varied roughness using existing geology. No extra texture noise or geometry pipeline replacement.
- Maximum DPR 1.75 with existing antialiasing/adaptation. Sunrise has a restrained 5.5% / 10-second breathing cycle; independent clouds remain 1.014x and haze 1.022x. Existing fog, foreground fade, navigation and copy retained.
- Orbit intro stays paused/hidden until scene is ready, avoiding old HTML coordinates flashing during texture loading.
- Visually inspected 1920x1080,1600x900,1440x900,1366x768,820x1180 and390x844 (including lower hero). Captures: output/about-hero-review/final-refinement/.
- Browser QA: approximately60.3 animation frames/sec over3seconds in this environment (not a hardware-wide benchmark); node radius error below1e-12px, gap24px; surface/cloud/fog advance independently. Reduced motion freezes all three. Browser errors empty. Original header matches old source byte-for-byte; homepage matches original ZIP.

## Compositing and label separation — 2026-10-02
- Captured the pre-edit1920 hero; retained earlier viewport baselines in output/about-hero-review/compositing/comparison.html for side-by-side review.
- Restored selective nebula/background visibility with lower saturation and a protected copy region. Planet lighting now reveals existing geology and reflected terminator light without raising the black base globally. The custom shader already applies ACES and sRGB encoding; no second renderer tone-mapping pass was added.
- Clouds receive slightly warmer lighting, without opacity increase. Six asymmetric soft ray lobes share the hidden sun location; slow modulation remains frozen by reduced motion.
- Mountain scale/asset preserved. A noise-displaced alpha mask feathers the top boundary; three procedural fog/dust layers use spatially varying horizon heights and slow counter-motion. No baked new cloud image.
- Timeline nodes remain concentric. Separate measured label blocks use radial anchors, rectangle collision avoidance and sampled-arc exclusion, with short connectors. Below1500px, a6% responsive sphere reduction and a2vw leftward adjustment reserve label space; the orbit recalculates from the same sphere geometry.
- Visually inspected1920x1080,1600x900,1440x900,1366x768,820x1180,390x844. Automated sampled-path checks found zero arc/label collisions, no horizontal overflow, desktop right margins>=24px and neighbor spacing approximately16px or more.
- Current browser measured60.2 animation frames/sec over3seconds; surface/cloud/fog motion independent. Reduced motion froze all three. Header and all markup after the hero verified unchanged against pre-pass backup. Copy and CTA styling preserved.

## Horizon band removal — 2026-10-02
- Isolated the scene, mountains and fog in browser. Two sources were found: the old inline About hero ::after bottom30% black gradient, and a mountain alpha mask that was already faintly opaque at its cropped rectangular top edge.
- Removed the legacy pseudo-element definition. The noise-displaced mountain mask now has a fully transparent leading region before its soft irregular feather, preventing an alpha step at the image boundary.
- Fog renders through the full hero canvas with shader-native spatial bands and soft alpha extinction, rather than a rectangular CSS mask. Three restrained layers use opacity .06/.11/.07 and existing slow counter-motion. Foreground darkness remains owned by the mountain treatment.
- Local terminator fill and normal response refined without global exposure lift. Slightly stronger asymmetric atmosphere, smaller sun core, faint secondary rays, and16px connector maximum. Shared geology atlas intentionally remains data-space because it also supplies height; albedo is explicitly linearized and ACES-mapped in the existing surface shader.
- Planet placement/scale, orbit geometry, header, copy, CTA and lower sections preserved. Desktop and mobile config values verified against pre-pass backup.
- Visually checked final screenshots at1920x1080,1600x900,1440x900,1366x768 and390x844 in output/about-hero-review/horizon-polish/. No sampled orbit/label intersections, no overflow, desktop text right clearance>=24px and neighbor gaps>=15.6px.
- Browser motion sample60.1fps over3seconds in this environment; independent surface/cloud/fog movement confirmed. Reduced motion freezes all three; browser errors empty.

## Final micro-polish — 2026-10-03
- Approved composition locked. Planet center/radius, orbit angles,240-second rotation,1.014/1.022 cloud ratios, mountain mask/asset, background exposure, header/copy/CTA verified unchanged.
- Existing reflected/terminator contributions raised10% locally; normal mix .55. Albedo and global exposure unchanged. Cloud pattern softly averages nearby atlas samples, maintaining the separate transparent shell.
- Sun core contribution reduced, six asymmetric primary rays modestly strengthened with5% length drift. Atmosphere receives5% warm-side modulation over10seconds, controlled by the shared frozen reduced-motion time.
- Orbit opacity .48→.42 (12.5% reduction). Label descriptions have6px year gap;2006/2010 text gap nowapproximately24px desktop. Now label lifted10px where collision safeguards allow. Nodes/arc unchanged;16px connectors retained.
- Fog speed increased20% only; opacity/color/mountain composition unchanged. No horizon mask or overlay regression.
- Final captures visually inspected at1920x1080,1600x900,1440x900,1366x768,820x1180,390x844. No sampled arc intersections or page overflow; desktop label right clearance>=24px, all neighbor spacing>=15.6px.
- Recorded and observed22-second motion sample in output/about-hero-review/micro-polish/motion.webm;60.0fps animation cadence in this environment. Surface advanced .09173 revolutions, cloud .09302, fog22.02seconds. Reduced motion freezes surface/cloud/fog and the same time drives atmosphere/rays. Browser errors empty.
