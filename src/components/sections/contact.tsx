"use client";

import { useState } from "react";
import { CheckCircle2, Mail, MapPin, Phone, Send } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { GithubIcon } from "@/components/icons/github-icon";
import { LinkedinIcon } from "@/components/icons/linkedin-icon";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/data/site";

const contactLinks = [
  { icon: Mail, label: site.email, href: `mailto:${site.email}` },
  { icon: Phone, label: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
  { icon: MapPin, label: site.location, href: undefined },
];

const socialLinks = [
  { icon: GithubIcon, label: "GitHub", href: site.githubUrl },
  { icon: LinkedinIcon, label: "LinkedIn", href: site.linkedinUrl },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name")?.toString() ?? "";
    const email = form.get("email")?.toString() ?? "";
    const message = form.get("message")?.toString() ?? "";

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something worth showing off"
          description="Open to software development, web development, and customer experience roles — reach out however is easiest for you."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <AnimatedSection>
            <div className="space-y-4">
              {contactLinks.map((item) => {
                const content = (
                  <span className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                      <item.icon className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      {item.label}
                    </span>
                  </span>
                );
                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block rounded-2xl border border-border bg-background-elevated p-4 transition-colors hover:border-accent/40"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-border bg-background-elevated p-4"
                  >
                    {content}
                  </div>
                );
              })}

              <div className="flex gap-3 pt-2">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground-muted transition-colors hover:border-accent hover:text-accent"
                  >
                    <item.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="space-y-5 rounded-2xl border border-border bg-background-elevated p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-accent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-accent"
                    placeholder="you@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="mt-2 w-full resize-none rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-accent"
                  placeholder="Tell me a bit about what you're looking for..."
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.01] sm:w-auto"
              >
                {sent ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    Opening your mail app…
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
