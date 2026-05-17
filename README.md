# Geografa portfolio

Next.js (App Router) static site for [Geografa](https://geografa.io) — landing page plus an archive of interactive Mapbox demos.

## Scripts

```bash
npm install
npm run dev      # http://localhost:3000/
npm run build    # static export → ./out
```

The app is built for the **server root** (no `basePath`). Local dev is `http://localhost:3000/`.

## Subpath deploy (e.g. GitHub Project Pages)

If the site is served under a prefix (e.g. `https://user.github.io/portfolio/`), set **`basePath`** in `next.config.mjs` and the same string as **`BASE_PATH`** in `lib/basePath.ts`, then rebuild.

## Demos

- Each legacy demo is a static HTML file at the **root of `public/`** (e.g. `public/snow.html`), so relative asset URLs like `./data/…` and `./img/…` resolve to `/data/…` and `/img/…` when the demo is served as `/snow.html`.
- The archive at **`/examples/`** lists them; **`/examples/<slug>/`** wraps the same HTML in an iframe (`iframe src="/<slug>.html"` at root, or prefixed when `BASE_PATH` is set).

Reference HTML in the repo root: `geografa.html`, `design-system.html` (not built by Next).

## Deploy

Build produces `out/`. Publish the **contents** of `out/` to your host (e.g. `gh-pages` branch, or any static host at your chosen root).

## Config

- `public/config.js` — stub for demos that expect `SMTConfig` (e.g. `service-area.html`).
