/**
 * Optional subpath when the app is not served at the server root.
 * Leave empty for root deployment (e.g. custom domain or user.github.io).
 * If you use GitHub **project** pages (user.github.io/repo/), set to `"/repo"`.
 */
export const BASE_PATH = "";

/** Absolute path to a static demo HTML file (same origin). */
export function exampleHtmlSrc(slug: string): string {
  const path = `/${slug}.html`;
  return BASE_PATH ? `${BASE_PATH}${path}` : path;
}
