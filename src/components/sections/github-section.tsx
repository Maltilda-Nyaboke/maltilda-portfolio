import { ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { GithubIcon } from "@/components/icons/github-icon";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export function GithubSection() {
  const username = site.githubUsername;

  return (
    <section id="github" className="border-b border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="GitHub"
          title="Open source of truth"
          description="Every project on this site links straight back to its real commit history — nothing here is staged for show."
        />

        <AnimatedSection className="mt-12">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&hide_title=true&count_private=true&hide_border=true&bg_color=00000000&text_color=8a93ad&icon_color=4f8cff&title_color=4f8cff`}
              alt={`${site.name}'s GitHub stats`}
              className="w-full rounded-2xl border border-border bg-background-elevated p-2"
              loading="lazy"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&hide_border=true&bg_color=00000000&text_color=8a93ad&title_color=4f8cff`}
              alt={`${site.name}'s most used languages`}
              className="w-full rounded-2xl border border-border bg-background-elevated p-2"
              loading="lazy"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mt-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://ghchart.rshah.org/4f8cff/${username}`}
            alt={`${site.name}'s GitHub contribution graph`}
            className="w-full rounded-2xl border border-border bg-background-elevated p-4"
            loading="lazy"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.15} className="mt-10">
          <div className="flex flex-wrap gap-3">
            {projects.map((project) => (
              <a
                key={project.slug}
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2 rounded-full border border-border bg-background-elevated px-4 py-2 text-sm font-medium text-foreground-muted transition-colors hover:border-accent/40 hover:text-foreground"
              >
                {project.title}
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="mt-10">
          <a
            href={site.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
          >
            <GithubIcon className="h-4 w-4" />
            View GitHub Profile
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
