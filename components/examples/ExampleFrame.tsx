import Link from "next/link";
import type { LocalExample } from "@/lib/examples";
import { exampleHtmlSrc } from "@/lib/basePath";
import { Chip } from "@/components/ui/Chip";
import { Button } from "@/components/ui/Button";

export function ExampleFrame({ example }: { example: LocalExample }) {
  const src = exampleHtmlSrc(example.slug);

  return (
    <div className="example-page">
      <div className="example-chrome">
        <div className="example-chrome-inner">
          <div className="example-breadcrumb">
            <Link href="/">Home</Link>
            {" · "}
            <Link href="/examples/">Archive</Link>
            {" · "}
            <span>{example.title}</span>
          </div>
          <div className="example-title-row">
            <h1>{example.title}</h1>
            <div className="example-meta">
              {example.tags.map((t) => (
                <Chip key={t}>{t}</Chip>
              ))}
              <Button href={src} external variant="secondary">
                Open raw HTML
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="example-frame-wrap">
        <iframe title={example.title} src={src} />
      </div>
    </div>
  );
}
