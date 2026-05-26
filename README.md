# Kindred static demo — v2 fixed pass

Kindred is an activity-first social discovery mockup: plans first, compatible people second, safety always visible.

This version is designed to be a single static site. There is no backend, build step, package install, or database.

## Run locally

```bash
cd kindred-static-demo-v2-fixed
python3 -m http.server 8080
```

Open:

```text
http://localhost:8080
```

You can also open `index.html` directly in a browser, though a local server is recommended.

## GitHub Pages

1. Upload the contents of this folder to the root of a GitHub repo.
2. Go to Settings → Pages.
3. Choose the `main` branch and `/root`.
4. Save.

The `.nojekyll` file is included so GitHub Pages serves the assets exactly as-is.

## What changed in this fix pass

- Phone mode is now a contained device shell, not a narrow desktop layout.
- The phone bottom nav is positioned inside the phone frame and clipped by the phone mask.
- Sheets/modals live inside the app shell, so in phone mode they open inside the device.
- Light mode and dusk mode use the same theme variables in desktop and phone mode.
- The app no longer assumes SVG assets exist.
- Images are resilient: local JPG/JPEG/WebP/PNG/AVIF/GIF candidates are tried first, then web demo images, then a styled fallback.
- Added `assets/custom-images.js` so arbitrary local filenames can be mapped without changing app code.
- Discovery search and filters are functional front-end behavior.
- Navigation is simplified to Today / Explore / Plans / Circles / You.

## Replacing demo images

See `ASSETS.md` or `assets/ASSETS.md`.

The quickest path: put files in these folders using the matching IDs:

```text
assets/people/maya.jpg
assets/people/leo.webp
assets/places/library.jpeg
assets/places/cinema.png
assets/sponsors/aurora.jpg
assets/circles/readers.webp
```

The app checks common extensions automatically.

For arbitrary filenames, edit:

```text
assets/custom-images.js
```

Example:

```js
window.KINDRED_ASSET_OVERRIDES = {
  people: {
    maya: 'assets/people/portrait-from-google.webp'
  },
  places: {
    library: 'assets/places/tiny-library-photo.jpeg'
  },
  sponsors: {},
  circles: {}
};
```

Small images are fine. The UI uses `object-fit: cover`, so mixed sizes and aspect ratios should not break layout.

## v2.1 polish notes

This pass tightens the phone simulator and the front-end demo interactions:

- Phone mode is now more aggressively isolated from desktop layout rules.
- Plan detail sheets use a fixed, clipped media area so large or oddly shaped photos cannot overlap text.
- Save and “I’m curious” are simulated in front-end state and update the Plans lifecycle board.
- Plan Composer now generates a demo plan, closes the sheet, moves to Plans, and shows a success toast.
- Safety opens as a wider desktop sheet and a full phone sheet.
- Image loading still accepts `.webp`, `.jpg`, `.jpeg`, `.png`, `.avif`, and `.gif` and falls back gracefully.

If you use arbitrary filenames for your own images, edit `assets/custom-images.js` and map each app id to your file path.
