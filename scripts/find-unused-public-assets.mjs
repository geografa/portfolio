/**
 * Lists public/ asset files not referenced in HTML/JS/CSS/JSON/GeoJSON sources.
 * Run: node scripts/find-unused-public-assets.mjs [--delete]
 */
import { readFileSync, readdirSync, statSync, unlinkSync, rmSync } from "fs";
import { join, relative } from "path";

const PUBLIC = "public";
const ASSET_DIRS = ["models", "data", "img", "fonts", "styles"];
const SOURCE_EXT = new Set([
  ".html",
  ".js",
  ".css",
  ".json",
  ".geojson",
  ".gpx",
  ".qmd",
]);

function walk(dir, files = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) files = walk(p, files);
    else files.push(p);
  }
  return files;
}

function readText(path) {
  try {
    return readFileSync(path, "utf8");
  } catch {
    return "";
  }
}

/** Drop HTML comments so commented-out asset paths are not treated as used. */
function stripHtmlComments(text) {
  return text.replace(/<!--[\s\S]*?-->/g, "");
}

const allFiles = walk(PUBLIC);
const sources = allFiles.filter(
  (p) =>
    SOURCE_EXT.has(p.slice(p.lastIndexOf("."))) && !p.endsWith("mapbox-config.js")
);
let corpus = sources
  .map((p) => {
    const text = readText(p);
    return p.endsWith(".html") ? stripHtmlComments(text) : text;
  })
  .join("\n");

const assets = allFiles
  .map((p) => relative(PUBLIC, p))
  .filter((rel) => ASSET_DIRS.some((d) => rel.startsWith(`${d}/`)));

const used = new Set();
for (const rel of assets) {
  if (
    corpus.includes(rel) ||
    corpus.includes(`/${rel}`) ||
    corpus.includes(`./${rel}`)
  ) {
    used.add(rel);
  }
}

// Files referenced from other used assets (e.g. geojson properties)
let changed = true;
while (changed) {
  changed = false;
  for (const rel of assets) {
    if (used.has(rel)) continue;
    const base = rel.split("/").pop();
    for (const u of used) {
      const text = readText(join(PUBLIC, u));
      if (text.includes(rel) || text.includes(`./${rel}`) || text.includes(base)) {
        used.add(rel);
        changed = true;
        break;
      }
    }
  }
}

const unused = assets.filter((a) => !used.has(a));
const size = (rel) => statSync(join(PUBLIC, rel)).size;

const totalUnused = unused.reduce((s, u) => s + size(u), 0);
console.log(
  `Assets: ${assets.length} | Used: ${used.size} | Unused: ${unused.length} | ${(totalUnused / 1024 / 1024).toFixed(1)} MB\n`
);

const byDir = {};
for (const u of unused) {
  const top = u.split("/")[0];
  byDir[top] ??= { n: 0, b: 0 };
  byDir[top].n++;
  byDir[top].b += size(u);
}
for (const [k, v] of Object.entries(byDir).sort((a, b) => b[1].b - a[1].b)) {
  console.log(`  ${k}: ${v.n} files, ${(v.b / 1024 / 1024).toFixed(1)} MB`);
}

if (process.argv.includes("--delete")) {
  for (const u of unused) {
    unlinkSync(join(PUBLIC, u));
  }
  // prune empty dirs
  for (const d of ASSET_DIRS) {
    pruneEmpty(join(PUBLIC, d));
  }
  console.log(`\nDeleted ${unused.length} files.`);
} else {
  console.log("\nTop 30 largest unused:");
  unused
    .sort((a, b) => size(b) - size(a))
    .slice(0, 30)
    .forEach((u) => console.log(`  ${(size(u) / 1024 / 1024).toFixed(1)} MB  ${u}`));
  console.log("\nRun with --delete to remove listed files.");
}

function pruneEmpty(dir) {
  let entries;
  try {
    entries = readdirSync(dir);
  } catch {
    return;
  }
  for (const e of entries) pruneEmpty(join(dir, e));
  try {
    if (readdirSync(dir).length === 0) rmSync(dir, { recursive: true });
  } catch {
    /* */
  }
}
