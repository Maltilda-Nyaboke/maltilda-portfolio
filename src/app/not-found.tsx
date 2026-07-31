import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-32 text-center">
      <span className="font-display text-6xl font-bold text-gradient">404</span>
      <h1 className="mt-4 font-display text-2xl font-semibold text-foreground">
        This page doesn&apos;t exist
      </h1>
      <p className="mt-2 max-w-sm text-sm text-foreground-muted">
        The page you&apos;re looking for may have moved or never existed.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
      >
        <ArrowLeft className="h-4 w-4" />
        Back home
      </Link>
    </div>
  );
}
