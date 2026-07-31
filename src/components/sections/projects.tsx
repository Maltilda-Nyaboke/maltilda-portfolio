import { AnimatedSection } from "@/components/animated-section";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="border-b border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Projects built during my software development training"
          description="Each card opens a dedicated case study — the problem, the solution, the architecture, and what I'd do differently now."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <AnimatedSection key={project.slug} delay={(i % 3) * 0.08}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
