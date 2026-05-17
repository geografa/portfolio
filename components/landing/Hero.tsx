import { PaperGrain } from "@/components/chrome/PaperGrain";
import { HeroArt } from "@/components/icons/HeroArt";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { HandNote } from "@/components/ui/HandNote";

export function Hero() {
  return (
    <section className="hero" id="top">
      <PaperGrain />
      <div className="blob" aria-hidden />
      <div className="blob-2" aria-hidden />
      <HeroArt />
      <div className="container">
        <Eyebrow>Geografa · est. 2005 · Portland, OR</Eyebrow>
        <h1>
          Web mapping support <em>at the ready</em>
        </h1>
        <p className="lede">
          Twenty years of geospatial work — from environmental GIS, to building
          Mapbox&apos;s startup technical-support engineering team, to a long,
          ongoing list of small experiments in the open. We help teams ship maps
          that hold up under pressure.
        </p>
        <div
          style={{
            display: "flex",
            gap: "var(--s-3)",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Button href="/#work" variant="primary">
            See the work <span className="arrow">→</span>
          </Button>
          <Button href="/#contact" variant="secondary">
            Start a conversation
          </Button>
          <HandNote>— let&apos;s make a map</HandNote>
        </div>
      </div>
    </section>
  );
}
