import Link from "next/link";
import { MORE_PROJECTS, getLocalExample } from "@/lib/examples";

export function MoreProjects() {
  return (
    <div className="more-projects">
      {MORE_PROJECTS.map((row) =>
        row.type === "local" ? (
          <Link key={row.slug} href={`/examples/${row.slug}/`}>
            <span className="name">
              {getLocalExample(row.slug)?.title ?? row.slug}
            </span>
            <span className="tag">{row.tag}</span>
          </Link>
        ) : (
          <a key={row.href} href={row.href} target="_blank" rel="noreferrer">
            <span className="name">{row.title}</span>
            <span className="tag">{row.tag}</span>
          </a>
        ),
      )}
    </div>
  );
}
