import Link from "next/link";
import type { FeaturedItem } from "@/lib/examples";
import { Chip } from "@/components/ui/Chip";
import { MapThumb } from "./MapThumb";

function chipTone(
  tag: string,
): "default" | "warm" | "green" {
  const t = tag.toLowerCase();
  if (t.includes("health") || t.includes("personal") || t.includes("open data"))
    return t.includes("health") ? "green" : "warm";
  if (t.includes("client")) return "green";
  return "default";
}

export function ProjectCard({ item }: { item: FeaturedItem }) {
  if (item.kind === "external") {
    const [a, b] = item.tags;
    return (
      <a className="card" href={item.href} target="_blank" rel="noreferrer">
        <div className="thumb">
          <MapThumb variant={item.thumbVariant} />
        </div>
        <div className="body">
          <div className="meta">
            {a ? <Chip tone={chipTone(a)}>{a}</Chip> : null}
            {b ? <Chip tone={chipTone(b)}>{b}</Chip> : null}
          </div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <span className="read-more">Open project →</span>
        </div>
      </a>
    );
  }

  const [a, b] = item.tags;
  return (
    <Link className="card" href={`/examples/${item.slug}/`}>
      <div className="thumb">
        <MapThumb variant={item.thumbVariant} />
      </div>
      <div className="body">
        <div className="meta">
          {a ? <Chip tone={chipTone(a)}>{a}</Chip> : null}
          {b ? <Chip tone={chipTone(b)}>{b}</Chip> : null}
        </div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <span className="read-more">Open project →</span>
      </div>
    </Link>
  );
}
