import Link from "next/link";
import { Footer } from "@/components/chrome/Footer";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MapThumb } from "@/components/examples/MapThumb";
import { Chip } from "@/components/ui/Chip";
import { getAllLocalExamples } from "@/lib/examples";

export default function ExamplesArchivePage() {
  const examples = getAllLocalExamples();

  return (
    <>
      <div className="examples-archive-header">
        <div className="container">
          <Eyebrow>Archive</Eyebrow>
          <h1>Map experiments &amp; demos</h1>
          <p className="section-sub" style={{ marginBottom: 0 }}>
            Each entry opens in a full viewer. Static HTML demos are preserved as
            shipped — Mapbox tokens and scripts are unchanged from the originals.
          </p>
        </div>
      </div>

      <section className="block" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cards">
            {examples.map((ex) => (
              <Link key={ex.slug} href={`/examples/${ex.slug}/`} className="card">
                <div className="thumb">
                  <MapThumb variant={ex.thumbVariant} />
                </div>
                <div className="body">
                  <div className="meta">
                    {ex.tags.slice(0, 2).map((t, i) => (
                      <Chip key={`${ex.slug}-${i}-${t}`}>{t}</Chip>
                    ))}
                  </div>
                  <h3>{ex.title}</h3>
                  <p>{ex.description}</p>
                  <span className="read-more">Open demo →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
