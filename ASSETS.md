# Kindred asset guide

This demo intentionally supports imperfect real-world images: JPG, JPEG, PNG, WebP, AVIF, GIF, small files, portrait crops, landscape crops, and mixed aspect ratios.

## Folder structure

```text
assets/
  people/
  places/
  sponsors/
  circles/
  brand/
  icons/
  custom-images.js
  ASSETS.md
```

## Auto-detected filenames

The app tries these extensions automatically:

```text
.webp, .jpg, .jpeg, .png, .avif, .gif
```

For every image ID, it tries the local file first, then the remote demo image, then a styled fallback.

### People IDs

```text
maya
leo
sofia
arturo
noor
ren
amelia
jules
ines
mina
```

Examples:

```text
assets/people/maya.jpg
assets/people/leo.webp
assets/people/sofia.jpeg
```

### Place IDs

```text
library
bookstore
cinema
cafe
museum
park
gallery
gamecafe
studio
market
```

Examples:

```text
assets/places/library.jpg
assets/places/cinema.webp
assets/places/gamecafe.jpeg
```

### Sponsor IDs

```text
aurora
nook
cafe
museum
```

Examples:

```text
assets/sponsors/aurora.jpg
assets/sponsors/nook.webp
```

### Circle IDs

```text
readers
film
walkers
cafe
```

Examples:

```text
assets/circles/readers.jpg
assets/circles/film.webp
```

## Arbitrary filenames

Static websites cannot scan a folder for unknown filenames. If you add images with arbitrary names, edit `assets/custom-images.js`:

```js
window.KINDRED_ASSET_OVERRIDES = {
  people: {
    maya: 'assets/people/any-file-name-from-google.webp'
  },
  places: {
    library: 'assets/places/small-library-photo.jpeg'
  },
  sponsors: {
    aurora: 'assets/sponsors/aurora-cinema-ad.png'
  },
  circles: {
    readers: 'assets/circles/book-club-real-photo.jpg'
  }
};
```

## Recommended visual tone

Prefer:

- Real public places: libraries, cafés, bookstores, cinemas, museums, parks.
- Natural lighting.
- Public, staffed, safe-looking environments.
- Small groups or solo activity imagery.
- Warm urban evening or cozy daylight images.

Avoid:

- Nightclub or hookup-coded imagery.
- Isolated/private homes for first-meet contexts.
- Overly romantic couple imagery.
- Aggressive party scenes.
- Corporate stock-photo smiles.

## Demo web images

The current demo uses remote web image URLs as visual placeholders after trying local assets. Replace them before any public or commercial launch if licensing, likeness, or attribution matters.

## v2.1 image reminder

Small images, mixed ratios, JPEGs, and WebPs are okay. The UI now clips images into safe containers, so oversized photos should no longer overlap plan text.

Static websites cannot automatically scan a folder for arbitrary filenames. To use images with names like `my-library-photo.webp` or `friend-01.jpeg`, add them to `assets/custom-images.js`.
