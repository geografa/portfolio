import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";

export function Pull() {
  return (
    <Section>
      <div className="pull">
        <div>
          <Eyebrow>03 · How we work</Eyebrow>
          <p className="lead-quote" style={{ marginTop: "var(--s-4)" }}>
            Geografa is committed to a <em>customer- and client-centered</em>{" "}
            approach — assembling just the right team for each project, then
            keeping the relationship close as it grows.
          </p>
        </div>
        <div className="body">
          <p>
            Most engagements start with a conversation, not a SOW. We listen
            first, then scope: what&apos;s already working, where the bottlenecks
            are, who on your team will own this after we hand it off.
          </p>
          <p>
            From there, we tap a committed network of engineers, designers, and
            developers and assemble the smallest team that can ship the work well.
            Everything routes through one P&amp;E manager so you get high-touch,
            consistent account support — no rotating contacts, no relearning your
            stack on every new ticket.
          </p>
          <p>
            And we leave you the code, the docs, and a clear way to keep going
            without us.
          </p>
          <span className="signature">— Rafa</span>
        </div>
      </div>
    </Section>
  );
}
