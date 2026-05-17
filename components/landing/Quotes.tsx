import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";

export function Quotes() {
  return (
    <Section>
      <Eyebrow>04 · Kind words</Eyebrow>
      <h2 className="section-title">From the people we&apos;ve worked alongside.</h2>
      <p className="section-sub">
        A few notes from former teammates at Mapbox — the kind of context that
        doesn&apos;t fit on a résumé.
      </p>

      <div className="quotes">
        <div className="quote">
          <span className="mark">&ldquo;</span>
          <blockquote>
            In a fast-paced environment, he shined as an empathetic leader. Always
            ready to pair with a teammate or experiment with a new process to
            improve the team&apos;s workflow, Rafa leads by example.
          </blockquote>
          <div className="who">
            <strong>Former Mapbox colleague</strong>
            Customer Solutions
          </div>
        </div>

        <div className="quote">
          <span className="mark">&ldquo;</span>
          <blockquote>
            Rafa and I worked side-by-side helping Mapbox customers understand the
            product and work through technical problems. He&apos;s one of the most
            empathetic, encouraging, and relentlessly helpful people I&apos;ve ever
            worked with.
          </blockquote>
          <div className="who">
            <strong>Former Mapbox colleague</strong>
            Technical Support Engineering
          </div>
        </div>

        <div className="quote">
          <span className="mark">&ldquo;</span>
          <blockquote>
            Not a day passes that I&apos;m not amazed by Rafa&apos;s institutional
            knowledge of the Mapbox universe. He&apos;s a walking encyclopedia of
            our products and the history behind them — why they were built, what was
            unique about them, which challenges they helped users solve.
          </blockquote>
          <div className="who">
            <strong>Former Mapbox colleague</strong>
            Product
          </div>
        </div>
      </div>
    </Section>
  );
}
