import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";

export function About() {
  return (
    <Section id="about">
      <Eyebrow>05 · About</Eyebrow>
      <h2 className="section-title">Twenty years of paying attention to maps.</h2>

      <div className="about">
        <div className="portrait">
          <svg
            viewBox="0 0 200 250"
            xmlns="http://www.w3.org/2000/svg"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
            aria-hidden
          >
            <g fill="none" stroke="#3E6B89" strokeOpacity="0.4">
              <path
                d="M0 200 C 40 170, 80 220, 120 190 S 200 170, 200 200"
                strokeWidth="1"
              />
              <path
                d="M0 180 C 40 150, 80 200, 120 170 S 200 150, 200 180"
                strokeWidth="1"
              />
              <path
                d="M0 160 C 40 130, 80 180, 120 150 S 200 130, 200 160"
                strokeWidth="1"
              />
              <path
                d="M0 140 C 40 110, 80 160, 120 130 S 200 110, 200 140"
                strokeWidth="1"
              />
            </g>
            <g>
              <circle cx="100" cy="120" r="20" fill="#C97B5C" fillOpacity="0.25" />
              <circle cx="100" cy="120" r="6" fill="#C97B5C" />
            </g>
          </svg>
          <span className="label">Portland · OR</span>
        </div>

        <div className="body">
          <p>
            Rafa Gutierrez has spent the last two decades in geospatial — first as
            a GIS manager in environmental consulting, then helping build out
            Mapbox&apos;s startup technical-support engineering team during the
            years it grew from a small group into a global product.
          </p>
          <p>
            Geografa is what he runs now: a focused dev shop for web mapping, with a
            roster of long-time collaborators on call when projects call for more
            hands.
          </p>

          <div className="resume">
            <div className="row">
              <span className="when">2024 →</span>
              <span className="what">
                <strong>Geografa</strong>
                <span>Founder · web-mapping consultancy</span>
              </span>
            </div>
            <div className="row">
              <span className="when">2018 — 2024</span>
              <span className="what">
                <strong>Mapbox</strong>
                <span>Built &amp; led startup technical-support engineering</span>
              </span>
            </div>
            <div className="row">
              <span className="when">2005 — 2018</span>
              <span className="what">
                <strong>Environmental consulting</strong>
                <span>GIS management · field-to-data workflows</span>
              </span>
            </div>
            <div className="row">
              <span className="when">Always</span>
              <span className="what">
                <strong>Maps in the open</strong>
                <span>
                  40+ experiments in the{" "}
                  <Link href="/examples/">archive</Link>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
