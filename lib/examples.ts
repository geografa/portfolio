import fs from "fs";
import path from "path";

export type ThumbVariant =
  | "isochrones"
  | "pins"
  | "lights"
  | "snow"
  | "terrain"
  | "generic";

/** Local map: served as `/<slug>.html` at site root (see `lib/basePath.ts` if using a subpath). */
export type LocalExample = {
  kind: "local";
  slug: string;
  title: string;
  description: string;
  tags: string[];
  thumbVariant: ThumbVariant;
  featured?: boolean;
  inMoreProjects?: boolean;
};

export type ExternalProject = {
  kind: "external";
  title: string;
  description: string;
  href: string;
  tags: string[];
  thumbVariant: ThumbVariant;
};

export type FeaturedItem = LocalExample | ExternalProject;

function titleCase(slug: string): string {
  return slug
    .split(/[-_.]/)
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

/** Rich copy for selected demos; everything else gets sensible defaults. */
const META: Record<
  string,
  Partial<
    Omit<LocalExample, "kind" | "slug"> & { title?: string; description?: string }
  >
> = {
  "fwc26-travel-times": {
    title: "FWC26 Travel Times",
    description:
      "Isochrones to every World Cup 2026 host venue — by car, transit, and air — across the U.S., Mexico, and Canada.",
    tags: ["Travel time", "Mapbox GL"],
    thumbVariant: "isochrones",
    featured: true,
    inMoreProjects: true,
  },
  "boise-lights": {
    title: "Boise Lights",
    description:
      "Every streetlight in Boise mapped at night — a soft glow at city scale built from open infrastructure data.",
    tags: ["Open data", "Personal"],
    thumbVariant: "lights",
    featured: true,
    inMoreProjects: true,
  },
  strava: {
    title: "Strava Routes",
    description: "Terrain and 3D route visualization.",
    tags: ["Terrain", "3D"],
    thumbVariant: "terrain",
    inMoreProjects: true,
  },
  "simple-line-designer": {
    title: "Simple Line Designer",
    description: "Draw and style lines on the map.",
    tags: ["Tool", "Mapbox GL"],
    thumbVariant: "generic",
    inMoreProjects: true,
  },
  orienteering: {
    title: "Orienteering",
    description: "Field-style orienteering map.",
    tags: ["Field", "Mapbox GL"],
    thumbVariant: "terrain",
    inMoreProjects: true,
  },
  "portland-trees": {
    title: "Portland Street Trees",
    description: "Civic tree inventory on the map.",
    tags: ["Civic", "Data"],
    thumbVariant: "pins",
    inMoreProjects: true,
  },
  marine: {
    title: "Realtime Marine Tracking",
    description: "Live vessel positions.",
    tags: ["Live", "Mapbox GL"],
    thumbVariant: "generic",
    inMoreProjects: true,
  },
  climate_solutions: {
    title: "Climate Solutions Companies",
    description: "Mapped climate tech organizations.",
    tags: ["Data", "Mapbox GL"],
    thumbVariant: "pins",
    inMoreProjects: true,
  },
  snow: {
    title: "Custom Winter Style",
    description: "Snow and pitch-aware labels in Mapbox Standard.",
    tags: ["Style", "Mapbox GL"],
    thumbVariant: "snow",
    inMoreProjects: true,
  },
  model_swapper: {
    title: "Model Swapper",
    description: "3D models and draw tools on the map.",
    tags: ["3D", "Mapbox GL"],
    thumbVariant: "generic",
    inMoreProjects: true,
  },
};

export function getLocalHtmlSlugs(): string[] {
  const dir = path.join(process.cwd(), "public");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".html"))
    .map((f) => f.replace(/\.html$/, ""));
}

export function getLocalExample(slug: string): LocalExample | undefined {
  if (!getLocalHtmlSlugs().includes(slug)) return undefined;
  const m = META[slug] ?? {};
  return {
    kind: "local",
    slug,
    title: m.title ?? titleCase(slug),
    description:
      m.description ??
      "An interactive map experiment — open the archive entry to explore.",
    tags: m.tags ?? ["Mapbox GL"],
    thumbVariant: m.thumbVariant ?? "generic",
    featured: m.featured,
    inMoreProjects: m.inMoreProjects,
  };
}

export function getAllLocalExamples(): LocalExample[] {
  return getLocalHtmlSlugs()
    .map((slug) => getLocalExample(slug)!)
    .sort((a, b) => a.title.localeCompare(b.title));
}

/** Featured row on the landing page (order matches original geografa.html). */
export function getFeaturedRow(): FeaturedItem[] {
  const firefly: ExternalProject = {
    kind: "external",
    title: "Firefly Health · Nearby",
    description:
      "A clinic locator and care-network explorer for a virtual-first primary-care provider — built to feel calm under load.",
    tags: ["Healthcare", "Client"],
    thumbVariant: "pins",
    href: "https://www.fireflyhealth.com/firefly-nearby/",
  };
  const a = getLocalExample("fwc26-travel-times");
  const b = getLocalExample("boise-lights");
  const out: FeaturedItem[] = [];
  if (a) out.push(a);
  out.push(firefly);
  if (b) out.push(b);
  return out;
}

export type MoreProjectRow =
  | { type: "local"; slug: string; tag: string }
  | { type: "external"; title: string; href: string; tag: string };

/** “More projects” list from geografa.html */
export const MORE_PROJECTS: MoreProjectRow[] = [
  { type: "local", slug: "strava", tag: "terrain · 3D" },
  { type: "local", slug: "simple-line-designer", tag: "tool" },
  { type: "external", title: "Global Stadiums", href: "https://leftfut.com/", tag: "leftfut.com" },
  {
    type: "external",
    title: "Visit Roosevelt Island",
    href: "https://visitri.nyc/",
    tag: "visitri.nyc",
  },
  { type: "local", slug: "orienteering", tag: "field" },
  { type: "local", slug: "portland-trees", tag: "civic" },
  { type: "local", slug: "marine", tag: "live" },
  { type: "local", slug: "climate_solutions", tag: "data" },
  { type: "local", slug: "snow", tag: "style" },
  { type: "local", slug: "model_swapper", tag: "3D" },
];
