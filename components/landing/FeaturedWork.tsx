import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { getFeaturedRow } from "@/lib/examples";
import { ProjectCard } from "@/components/examples/ProjectCard";
import { ProjectGrid } from "@/components/examples/ProjectGrid";
import { MoreProjects } from "./MoreProjects";

export function FeaturedWork() {
  const row = getFeaturedRow();
  return (
    <Section id="work">
      <Eyebrow>02 · Selected work</Eyebrow>
      <h2 className="section-title">
        Maps in production, and a few in the wild.
      </h2>
      <p className="section-sub">
        A mix of client work and personal experiments — most of the experiments
        end up teaching us something we use the next time around.
      </p>

      <ProjectGrid asymmetric>
        {row.map((item) => (
          <ProjectCard
            key={item.kind === "local" ? item.slug : item.href}
            item={item}
          />
        ))}
      </ProjectGrid>

      <MoreProjects />

      <div style={{ marginTop: "var(--s-7)" }}>
        <Button href="/examples/" variant="secondary">
          Browse the full archive <span className="arrow">→</span>
        </Button>
      </div>
    </Section>
  );
}
