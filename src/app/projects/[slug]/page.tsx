import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Blocks,
  Compass,
  Layers,
  Lightbulb,
  ListChecks,
  Puzzle,
  Target,
  Users,
} from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { GithubIcon } from "@/components/icons/github-icon";
import { PlaceholderArt } from "@/components/placeholder-art";
import { getProjectBySlug, projects } from "@/data/projects";
import { site } from "@/data/site";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: `${project.title} — ${site.name}`,
      description: project.summary,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <article>
      <section className="border-b border-border pt-14 pb-16 sm:pt-20">
        <div className="mx-auto max-w-5xl px-6">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground-muted">
              {project.category}
            </span>
            <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground-muted">
              {project.year}
            </span>
            {project.team && (
              <span className="flex items-center gap-1.5 rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">
                <Users className="h-3.5 w-3.5" />
                Team Project
              </span>
            )}
          </div>

          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-foreground-muted">
            {project.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
            >
              <GithubIcon className="h-4 w-4" />
              View Code
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                Live Demo
                <ArrowRight className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </section>

      <section className="border-b border-border py-14">
        <div className="mx-auto max-w-5xl px-6">
          <AnimatedSection>
            <PlaceholderArt
              accent={project.accent}
              icon={Layers}
              label={project.category}
              className="aspect-[21/9]"
            />
          </AnimatedSection>
        </div>
      </section>

      <section className="border-b border-border py-16">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 lg:grid-cols-[1fr_1fr]">
          <AnimatedSection>
            <SectionBlock icon={Compass} title="Project Overview">
              <p>{project.summary}</p>
            </SectionBlock>
          </AnimatedSection>
          <AnimatedSection delay={0.05}>
            <SectionBlock icon={Target} title="Problem Statement">
              <p>{project.problem}</p>
            </SectionBlock>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <SectionBlock icon={Lightbulb} title="Solution">
              <p>{project.solution}</p>
            </SectionBlock>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <SectionBlock icon={Blocks} title="Technologies">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border px-3 py-1 text-sm font-medium text-foreground-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </SectionBlock>
          </AnimatedSection>
        </div>
      </section>

      <section className="border-b border-border py-16">
        <div className="mx-auto max-w-5xl px-6">
          <AnimatedSection>
            <SectionBlock icon={ListChecks} title="Features">
              <ul className="grid gap-3 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 rounded-xl border border-border bg-background-elevated p-4 text-sm text-foreground-muted"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </SectionBlock>
          </AnimatedSection>
        </div>
      </section>

      <section className="border-b border-border py-16">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 lg:grid-cols-[1fr_1fr]">
          <AnimatedSection>
            <SectionBlock icon={Layers} title="Architecture">
              <p>{project.architecture}</p>
            </SectionBlock>
          </AnimatedSection>
          <AnimatedSection delay={0.05}>
            <SectionBlock icon={Puzzle} title="Challenges">
              <p>{project.challenges}</p>
            </SectionBlock>
          </AnimatedSection>
        </div>
        <div className="mx-auto mt-12 max-w-5xl px-6">
          <AnimatedSection delay={0.1}>
            <SectionBlock icon={Lightbulb} title="Lessons Learned">
              <p>{project.lessons}</p>
            </SectionBlock>
          </AnimatedSection>
        </div>
      </section>

      <section className="border-b border-border py-16">
        <div className="mx-auto max-w-5xl px-6">
          <AnimatedSection>
            <SectionBlock icon={Layers} title="Screenshots">
              <div className="grid gap-4 sm:grid-cols-3">
                {[0, 1, 2].map((i) => (
                  <PlaceholderArt
                    key={i}
                    accent={project.accent}
                    icon={Layers}
                    label="Screenshot"
                    dense
                  />
                ))}
              </div>
              <p className="mt-3 text-xs text-foreground-muted">
                Placeholder previews — swap these for real screenshots of the app.
              </p>
            </SectionBlock>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <Link
            href={`/projects/${next.slug}`}
            className="group flex items-center justify-between rounded-2xl border border-border bg-background-elevated p-6 transition-colors hover:border-accent/40"
          >
            <div>
              <span className="text-xs font-medium tracking-wide text-foreground-muted uppercase">
                Next project
              </span>
              <p className="mt-1 font-display text-xl font-semibold text-foreground">
                {next.title}
              </p>
            </div>
            <ArrowRight className="h-5 w-5 text-foreground-muted transition-transform group-hover:translate-x-1 group-hover:text-accent" />
          </Link>
        </div>
      </section>
    </article>
  );
}

function SectionBlock({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof Compass;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center gap-2.5">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-soft text-accent">
          <Icon className="h-4 w-4" strokeWidth={1.8} />
        </span>
        <h2 className="font-display text-xl font-semibold text-foreground">
          {title}
        </h2>
      </div>
      <div className="mt-4 space-y-3 text-sm leading-relaxed text-foreground-muted">
        {children}
      </div>
    </div>
  );
}
