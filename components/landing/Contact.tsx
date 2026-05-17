import { PaperGrain } from "@/components/chrome/PaperGrain";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function Contact() {
  return (
    <section className="contact" id="contact">
      <PaperGrain />
      <div className="container">
        <Eyebrow center>06 · Get in touch</Eyebrow>
        <h2>
          Let&apos;s <em>make a map</em>.
        </h2>
        <p>
          Whether you&apos;re optimizing a stack you already have, scoping a new
          product, or just trying to figure out which basemap to use — drop a note.
          Most replies come within a day.
        </p>
        <div
          style={{
            display: "flex",
            gap: "var(--s-3)",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Button href="mailto:rafa@geografa.io" external variant="primary">
            rafa@geografa.io <span className="arrow">→</span>
          </Button>
          <Button
            href="https://www.linkedin.com/in/geografa/"
            external
            variant="secondary"
          >
            LinkedIn
          </Button>
          <Button href="https://github.com/geografa" external variant="secondary">
            GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}
