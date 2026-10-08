# Lajapathy — Local Portfolio

## Local preview

Double-click `preview.command` on macOS, or run `./preview.command` from a terminal.
It serves this folder on an available loopback port and opens the site in your
browser. Keep the terminal open while previewing; press Control-C to stop.
Python 3 is required.

Alternatively, run `python3 -m http.server 8765 --bind 127.0.0.1` in this folder
and visit <http://127.0.0.1:8765/>.

Opening `index.html` as a `file://` URL prevents the cinematic hero from working:
Chromium and WebKit reject the geology image upload to WebGL (`texImage2D`) and
the mountain lighting pixel read (`getImageData`) with cross-origin
`SecurityError`s. The background and portrait can still display as ordinary
images. Serve the page over HTTP so those image operations share its origin.

## Performance maintenance

The homepage loads minified copies of the main and icon stylesheets. After
editing either source stylesheet, regenerate its copy:

```sh
npx clean-css-cli -o assets/css/style.min.css assets/css/style.css
npx clean-css-cli -o assets/css/vendor/fontawesome.min.css assets/css/vendor/fontawesome.css
```

The cinematic hero draws at up to 30 fps with a maximum canvas pixel ratio of
1.25. Layout and portrait resolution are unchanged. The CPU planet fallback is
only prepared when WebGL is unavailable. Portfolio card images load lazily.

## Component map

- `assets/css/lp-home-hero.css` contains the active homepage hero rules previously spread across ten versioned patches. Keep its current cascade position in `index.html`.
- `assets/css/lp-selected-work.css`, `assets/js/lp-selected-work.js` and `assets/js/lp-portfolio-data.js` power Selected Work on Home and Case Studies. The listing adds its existing library-specific stylesheet.
- `assets/js/hero-3d-core.js` supplies the shared renderer and lifecycle; page scene modules retain their individual artwork and reduced-motion rotation clocks. The footer controller imports its renderer only when nearby.
- Swiper and Odometer assets load on Home and About, text typing on Home, and Tilt on Leadership. Keep these libraries on the pages that use them.
- The contact page's native submit handler owns submission; do not also load the legacy `contact.form.js` handler.

## Image and legacy asset maintenance

Case-study PNG masters remain in place. Referenced `*-lossless.webp` variants preserve the masters' decoded pixels and dimensions; regenerate them losslessly if a master changes. Below-fold screenshots carry intrinsic dimensions and load lazily. Social metadata keeps its existing image URLs.

Unreferenced versioned hero styles and legacy scripts remain physically present for rollback. Check live HTML references, module imports, and component selectors before deleting old assets. The shared template CSS, icon fonts, menu/footer overrides and existing back-to-top handlers remain because broader removal requires separate visual verification.
