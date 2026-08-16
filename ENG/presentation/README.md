# HTML presentation

The deck works offline and uses no external libraries.

## Run

From the `ENG` directory:

```bash
npm run serve
```

Open `http://localhost:4173/presentation/` and press `F` to enter full-screen mode.

You can also open `index.html` directly, but the local server gives more predictable behavior for JavaScript modules and links.

## Navigation

- arrows / PageUp / PageDown / Space,
- `O` — overview,
- `F` — full screen,
- `?` — help,
- hash `#/17` — open slide 17 directly.

## PDF

Use your browser's print function. The stylesheet includes `@media print` rules for a 16:9 page with one slide per page. Enable background graphics.

## Sources

Sources for material claims are shown on the slides and listed in `../SOURCES.md`. The presentation does not load external images or fonts.
