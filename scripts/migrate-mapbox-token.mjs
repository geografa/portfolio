/**
 * One-time / idempotent migration: wire static HTML demos to mapbox-config.js.
 */
import { readFileSync, writeFileSync, readdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const publicDir = join(dirname(fileURLToPath(import.meta.url)), "..", "public");
const CONFIG_TAG =
  '<script src="/mapbox-config.js"></script>';
const TOKEN_ASSIGN = "mapboxgl.accessToken = window.MAPBOX_ACCESS_TOKEN";

const PK_TOKEN =
  /pk\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+/g;
const ACCESS_TOKEN_ASSIGN =
  /mapboxgl\.accessToken\s*=\s*(['"])pk\.[^'"]+\1/g;
const ACCESS_TOKEN_ASSIGN_DQ =
  /mapboxgl\.accessToken\s*=\s*"pk\.[^"]+"/g;
const ACCESS_TOKEN_ASSIGN_SQ =
  /mapboxgl\.accessToken\s*=\s*'pk\.[^']+'/g;
const ROUTING_TOKEN_DQ =
  /mapboxgl\.routingAccessToken\s*=\s*"pk\.[^"]+"/g;
const SEARCH_BOX_TOKEN_DQ =
  /searchBoxToken\s*=\s*"pk\.[^"]+"/g;
const URL_ACCESS_TOKEN = /access_token=pk\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+/g;
const WINDOW_TOKEN = "window.MAPBOX_ACCESS_TOKEN";

let changedFiles = 0;

for (const name of readdirSync(publicDir)) {
  if (!name.endsWith(".html")) continue;

  const path = join(publicDir, name);
  let html = readFileSync(path, "utf8");

  if (!html.includes("mapbox-gl") && !PK_TOKEN.test(html)) {
    PK_TOKEN.lastIndex = 0;
    continue;
  }
  PK_TOKEN.lastIndex = 0;

  const original = html;

  if (!html.includes("mapbox-config.js")) {
    html = html.replace(
      /(<script[^>]*mapbox-gl[^>]*><\/script>)/i,
      `$1\n    ${CONFIG_TAG}`
    );
  }

  html = html.replace(ACCESS_TOKEN_ASSIGN_DQ, TOKEN_ASSIGN);
  html = html.replace(ACCESS_TOKEN_ASSIGN_SQ, TOKEN_ASSIGN);
  html = html.replace(ROUTING_TOKEN_DQ, `mapboxgl.routingAccessToken = ${WINDOW_TOKEN}`);
  html = html.replace(SEARCH_BOX_TOKEN_DQ, `searchBoxToken = ${WINDOW_TOKEN}`);
  html = html.replace(
    URL_ACCESS_TOKEN,
    "access_token=${mapboxgl.accessToken}"
  );
  // Fix directions URLs built with double-quoted strings (need template literals).
  html = html.replace(
    /"([^"]*\$\{mapboxgl\.accessToken\}[^"]*)"/g,
    "`$1`"
  );

  if (html !== original) {
    writeFileSync(path, html, "utf8");
    changedFiles += 1;
    console.log(`Updated ${name}`);
  }
}

console.log(`Done. ${changedFiles} file(s) updated.`);
