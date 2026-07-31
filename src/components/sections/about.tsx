import { Code2, Heart, MessageSquare, Sparkles } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";

const beats = [
  {
    icon: Sparkles,
    title: "Where it started",
    body: "My journey into code began at Nairobits Trust in 2019, and went further in 2022 at Moringa School, where I trained in full-stack web development — Python, Django, HTML, CSS, JavaScript, SQL, and Bootstrap.",
  },
  {
    icon: Code2,
    title: "Building to learn",
    body: "Rather than stop at theory, I shipped a series of real applications — a social photo-sharing app, a neighborhood community platform, a project showcase site, and more — each one pushing me to reason through authentication, data modeling, and UI decisions from scratch.",
  },
  {
    icon: MessageSquare,
    title: "A turn toward people",
    body: "My career then moved into customer service and operations, work that's just as much about problem-solving as engineering is — except the 'bugs' are miscommunications, and the 'users' are people I talk to directly.",
  },
  {
    icon: Heart,
    title: "Why this still matters",
    body: "Software development stayed a core skill underneath it all. It sharpened how I break down problems, and customer experience sharpened how I communicate the solution — this portfolio is where those two sides meet.",
  },
];

export function About() {
  return (
    <section id="about" className="border-b border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="About"
          title="From writing my first Django view to talking to real customers every day"
          description="A technical foundation built through training, and a communication edge built through experience — here's how the two connect."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {beats.map((beat, i) => (
            <AnimatedSection key={beat.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-background-elevated p-6 transition-colors hover:border-accent/40">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <beat.icon className="h-5 w-5" strokeWidth={1.8} />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                  {beat.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                  {beat.body}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
