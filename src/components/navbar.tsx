"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const hrefFor = (href: string) => (isHome ? href : `/${href}`);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors",
        scrolled
          ? "border-border bg-background/80 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href={hrefFor("#top")}
          className="font-display text-lg font-semibold tracking-tight text-foreground"
        >
          Maltilda<span className="text-accent">.</span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={hrefFor(item.href)}
                className="text-sm font-medium text-foreground-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Link
            href={hrefFor("#contact")}
            className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
          >
            Let&apos;s talk
          </Link>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background px-6 py-4 lg:hidden">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={hrefFor(item.href)}
                  onClick={() => setOpen(false)}
                  className="block text-sm font-medium text-foreground-muted hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={site.cvUrl}
                download
                className="mt-2 inline-flex rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white"
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
