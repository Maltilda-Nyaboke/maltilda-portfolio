import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { timeline } from "@/data/timeline";

export function Journey() {
  return (
    <section id="journey" className="border-b border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Journey"
          title="How I got here"
          align="center"
          className="mx-auto"
        />

        <div className="relative mt-16">
          <div className="absolute top-0 bottom-0 left-[15px] w-px bg-border sm:left-1/2 sm:-translate-x-1/2" />

          <ol className="space-y-10">
            {timeline.map((entry, i) => {
              const alignRight = i % 2 === 0;
              return (
                <li key={`${entry.year}-${entry.title}`} className="relative">
                  <AnimatedSection delay={i * 0.06}>
                    <div className="grid grid-cols-1 items-start gap-4 sm:grid-cols-2 sm:gap-10">
                      <div
                        className={
                          alignRight
                            ? "sm:order-1 sm:text-right"
                            : "sm:order-2 sm:col-start-2"
                        }
                      >
                        <div className="rounded-2xl border border-border bg-background-elevated p-5 pl-12 sm:pl-5">
                          <span className="text-sm font-semibold text-accent">
                            {entry.year}
                          </span>
                          <h3 className="mt-1 font-display text-lg font-semibold text-foreground">
                            {entry.title}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                            {entry.description}
                          </p>
                        </div>
                      </div>
                      <div className={alignRight ? "sm:order-2" : "sm:order-1 sm:col-start-1 sm:row-start-1"} />
                    </div>
                  </AnimatedSection>

                  <span className="absolute top-6 left-[9px] h-3.5 w-3.5 rounded-full border-2 border-accent bg-background sm:left-1/2 sm:-translate-x-1/2" />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
