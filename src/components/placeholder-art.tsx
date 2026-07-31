import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

const accentClasses = {
  blue: {
    from: "from-[#2f6fe0] dark:from-[#4f8cff]",
    to: "to-[#12b981] dark:to-[#6ee7b7]",
    ring: "border-[#2f6fe0]/25 dark:border-[#4f8cff]/25",
  },
  mint: {
    from: "from-[#12b981] dark:from-[#6ee7b7]",
    to: "to-[#2f6fe0] dark:to-[#4f8cff]",
    ring: "border-[#12b981]/25 dark:border-[#6ee7b7]/25",
  },
  violet: {
    from: "from-[#7c6df2] dark:from-[#9b8bff]",
    to: "to-[#2f6fe0] dark:to-[#4f8cff]",
    ring: "border-[#7c6df2]/25 dark:border-[#9b8bff]/25",
  },
} as const;

export function PlaceholderArt({
  accent,
  icon: Icon,
  label,
  className,
  dense = false,
}: {
  accent: "blue" | "mint" | "violet";
  icon: LucideIcon;
  label: string;
  className?: string;
  dense?: boolean;
}) {
  const palette = accentClasses[accent];

  return (
    <div
      className={cn(
        "relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-2xl border bg-background-elevated",
        palette.ring,
        className,
      )}
    >
      <div className="bg-grid absolute inset-0 opacity-40" />
      <div
        className={cn(
          "absolute -top-16 -right-16 h-48 w-48 rounded-full bg-gradient-to-br opacity-30 blur-3xl",
          palette.from,
          palette.to,
        )}
      />
      <div
        className={cn(
          "absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-gradient-to-tr opacity-20 blur-3xl",
          palette.from,
          palette.to,
        )}
      />
      <div className="relative flex flex-col items-center gap-3 px-6 text-center">
        <div
          className={cn(
            "flex items-center justify-center rounded-2xl border bg-background-elevated/80 shadow-sm backdrop-blur",
            palette.ring,
            dense ? "h-12 w-12" : "h-16 w-16",
          )}
        >
          <Icon
            className={cn("text-accent", dense ? "h-5 w-5" : "h-7 w-7")}
            strokeWidth={1.6}
          />
        </div>
        {!dense && (
          <span className="text-xs font-medium tracking-wide text-foreground-muted uppercase">
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
