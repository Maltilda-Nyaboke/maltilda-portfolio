import {
  Braces,
  Database,
  GitBranch,
  KanbanSquare,
  Layout,
  MonitorSmartphone,
  PenTool,
  Server,
  SquareCode,
  Table2,
  Terminal,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { AnimatedSection } from "@/components/animated-section";
import { GithubIcon } from "@/components/icons/github-icon";
import { SectionHeading } from "@/components/section-heading";
import { skillGroups, widthFor } from "@/data/skills";

const icons: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  HTML: SquareCode,
  CSS: Layout,
  Bootstrap: MonitorSmartphone,
  JavaScript: Braces,
  Python: Terminal,
  Django: Server,
  PostgreSQL: Database,
  SQLite: Database,
  SQL: Table2,
  Git: GitBranch,
  GitHub: GithubIcon,
  "VS Code": SquareCode,
  Figma: PenTool,
  Trello: KanbanSquare,
};

export function Skills() {
  return (
    <section id="skills" className="border-b border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Skills"
          title="A full-stack toolkit, sharpened through real projects"
          description="Every skill below was exercised directly in the projects on this page — not just studied in isolation."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {skillGroups.map((group, i) => (
            <AnimatedSection key={group.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-background-elevated p-6">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {group.title}
                </h3>
                <p className="mt-1 text-sm text-foreground-muted">
                  {group.description}
                </p>

                <ul className="mt-6 space-y-5">
                  {group.skills.map((skill) => {
                    const Icon = icons[skill.name] ?? SquareCode;
                    return (
                      <li key={skill.name}>
                        <div className="flex items-center justify-between gap-3">
                          <span className="flex items-center gap-2.5 text-sm font-medium text-foreground">
                            <Icon className="h-4 w-4 text-accent" strokeWidth={1.8} />
                            {skill.name}
                          </span>
                          <span className="text-xs text-foreground-muted">
                            {skill.level}
                          </span>
                        </div>
                        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-border">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-accent to-accent-2"
                            style={{ width: `${widthFor(skill.level)}%` }}
                          />
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
