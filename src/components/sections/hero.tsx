"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/icons/github-icon";
import { site } from "@/data/site";

const floatingWords = ["Django", "Python", "React", "SQL", "Bootstrap"];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border pt-20 pb-24 sm:pt-28 sm:pb-32"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_10%,transparent_75%)]" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background-elevated px-4 py-1.5 text-sm text-foreground-muted"
          >
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Based in {site.location}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 font-display text-4xl leading-[1.1] font-semibold tracking-tight text-foreground sm:text-6xl"
          >
            Hi, I&apos;m{" "}
            <span className="text-gradient">{site.name.split(" ")[0]}</span>
            <br />
            {site.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 flex flex-wrap gap-2 text-sm font-medium text-foreground-muted"
          >
            {site.roles.map((role, i) => (
              <span key={role} className="flex items-center gap-2">
                {i > 0 && <span className="text-border">·</span>}
                {role}
              </span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-foreground-muted"
          >
            {site.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={site.cvUrl}
              download
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
            <Link
              href="#contact"
              className="text-sm font-semibold text-foreground-muted transition-colors hover:text-foreground"
            >
              Contact Me
            </Link>
            <a
              href={site.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto aspect-square w-full max-w-md"
        >
          <div className="absolute inset-6 rounded-[2.5rem] border border-border bg-background-elevated shadow-2xl shadow-accent/5">
            <div className="flex h-full flex-col justify-between p-8">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-accent-2/60" />
                <span className="h-3 w-3 rounded-full bg-accent/60" />
                <span className="h-3 w-3 rounded-full bg-border" />
              </div>
              <div className="space-y-3 font-mono text-xs text-foreground-muted sm:text-sm">
                <p>
                  <span className="text-accent">const</span> developer = {"{"}
                </p>
                <p className="pl-4">
                  name: <span className="text-accent-2">&quot;Maltilda&quot;</span>,
                </p>
                <p className="pl-4">
                  stack: [<span className="text-accent-2">&quot;Python&quot;</span>,{" "}
                  <span className="text-accent-2">&quot;Django&quot;</span>],
                </p>
                <p className="pl-4">
                  focused: <span className="text-accent-2">true</span>
                </p>
                <p>{"}"}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {floatingWords.map((word, i) => (
                  <motion.span
                    key={word}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + i * 0.08 }}
                    className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground-muted"
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 flex h-20 w-20 items-center justify-center rounded-2xl border border-border bg-background-elevated shadow-lg"
          >
            <span className="font-display text-2xl font-bold text-accent">9</span>
          </motion.div>
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 rounded-2xl border border-border bg-background-elevated px-4 py-3 shadow-lg"
          >
            <span className="text-xs font-medium text-foreground-muted">Projects shipped</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
