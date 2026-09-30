# Lajapathy V49 — Hero Background Replacement

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

## Background replacement

Replaced the V48 Home hero background asset with the exact supplied `background1.png` image.

- Existing live portrait remains separate.
- Existing hero content, navigation, typography, CTA, smoke/fog and V48 CSS remain unchanged.
- Background is wired through `assets/css/lp-v48-hero-cleanup.css`.
