import Link from "next/link";
import {
  ArrowUpRight,
  Boxes,
  ChefHat,
  Globe,
  Layers,
  ShieldCheck,
  Terminal,
  Users,
  Utensils,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PlaceholderArt } from "@/components/placeholder-art";
import type { Project } from "@/data/projects";

const categoryIcon: Record<string, LucideIcon> = {
  picwise: Layers,
  ujamaa: Globe,
  rewardds: ShieldCheck,
  mjenzi: Boxes,
  "photo-booth": Layers,
  "insurance-website": ShieldCheck,
  "kikwetu-treats": Utensils,
  "password-locker": Terminal,
  "recipe-hub": ChefHat,
};

export function ProjectCard({ project }: { project: Project }) {
  const Icon = categoryIcon[project.slug] ?? Layers;

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block h-full rounded-2xl border border-border bg-background-elevated p-4 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5"
    >
      <PlaceholderArt accent={project.accent} icon={Icon} label={project.category} />

      <div className="mt-5 flex items-start justify-between gap-3 px-1">
        <div>
          <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-foreground">
            {project.title}
            {project.team && (
              <span
                title="Team project"
                className="flex items-center gap-1 rounded-full bg-accent-soft px-2 py-0.5 text-[10px] font-semibold tracking-wide text-accent uppercase"
              >
                <Users className="h-3 w-3" />
                Team
              </span>
            )}
          </h3>
          <p className="mt-1 text-sm text-foreground-muted">{project.tagline}</p>
        </div>
        <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-foreground-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
      </div>

      <div className="mt-4 flex flex-wrap gap-2 px-1">
        {project.technologies.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-border px-2.5 py-1 text-xs font-medium text-foreground-muted"
          >
            {tech}
          </span>
        ))}
      </div>
    </Link>
  );
}
