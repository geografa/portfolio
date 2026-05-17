import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";

export function ApproachPillars() {
  return (
    <Section id="approach">
      <Eyebrow>01 · The work</Eyebrow>
      <h2 className="section-title">
        A small studio that scales like a collective.
      </h2>
      <p className="section-sub">
        Geografa runs lean by default and assembles the right team from a
        trusted network of engineers, designers, and developers — under one
        P&amp;E manager so support and continuity stay high-touch.
      </p>

      <div className="approach">
        <article className="pillar">
          <svg
            className="icon"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M8 36 L18 24 L26 30 L40 12" />
            <circle cx="40" cy="12" r="3" fill="#C97B5C" stroke="none" />
            <path d="M6 40 L42 40" />
            <path
              d="M14 40 V36 M22 40 V32 M30 40 V30 M38 40 V20"
              strokeOpacity="0.4"
            />
          </svg>
          <h3>Optimization</h3>
          <p>
            Slow tiles, heavy bundles, jittery interactions — we audit your stack
            and bring map performance back into spec. Vector tile pipelines, style
            refactors, render budgets.
          </p>
        </article>

        <article className="pillar">
          <svg
            className="icon"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <rect x="6" y="10" width="36" height="28" rx="2" />
            <path d="M6 10 L24 24 L42 10" />
            <circle cx="24" cy="24" r="3" fill="#C97B5C" stroke="none" />
          </svg>
          <h3>Custom map products</h3>
          <p>
            From a single embed to a full application — Mapbox GL, MapLibre,
            Three.js, vector tiles, custom geocoding, geofencing, 3D models.
            Delivered as code your team can own.
          </p>
        </article>

        <article className="pillar">
          <svg
            className="icon"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <circle cx="24" cy="24" r="14" />
            <path d="M24 10 V38 M10 24 H38" strokeOpacity="0.4" />
            <path d="M14 18 C 20 14, 28 14, 34 18" stroke="#C97B5C" />
            <path d="M14 30 C 20 34, 28 34, 34 30" stroke="#C97B5C" />
          </svg>
          <h3>Strategy &amp; advisory</h3>
          <p>
            Choosing a basemap provider, scoping a migration, hiring your first geo
            engineer. Twenty years of &quot;I&apos;ve seen this before&quot; —
            applied to the decisions that matter most.
          </p>
        </article>
      </div>
    </Section>
  );
}
