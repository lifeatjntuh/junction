import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const tagVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full font-body font-semibold whitespace-nowrap",
  {
    variants: {
      tone: {
        white: "bg-ploy-background-secondary/80 text-ploy-text-primary",
        dark: "bg-ploy-background-inverse text-ploy-text-inverse",
        pink: "bg-ploy-accent-primary text-ploy-text-on-accent-primary",
        glass: "bg-white/20 text-white backdrop-blur",
        pinkSoft: "bg-[var(--panel-pink)] text-ploy-accent-primary-800",
        lime: "bg-[var(--panel-lime)] text-ploy-text-primary",
        blue: "bg-[var(--panel-blue)] text-ploy-text-primary",
        yellow: "bg-[var(--panel-yellow)] text-ploy-text-primary",
        lavender: "bg-[var(--panel-lavender)] text-ploy-text-primary",
        peach: "bg-[var(--panel-peach)] text-ploy-text-primary",
        muted: "bg-ploy-neutral-primary-s2 text-ploy-text-secondary",
        role: "bg-ploy-background-inverse text-ploy-text-inverse uppercase tracking-[0.06em]",
      },
      kit: {
        web: "",
        app: "font-app font-medium",
      },
      size: {
        xs: "px-2 py-0.5 text-[10px]",
        sm: "px-3 py-1 text-xs",
        md: "px-4 py-2 text-sm",
      },
    },
    defaultVariants: { tone: "white", size: "md", kit: "web" },
  },
);

export interface TagProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof tagVariants> {}

/**
 * Rounded pill chip for activities, roles and small labels. Tones white,
 * dark, pink, glass, pastel category tones (pinkSoft, lime, blue, yellow,
 * lavender, peach), muted (draft, sold out) and role (Organizer, Admin).
 * Sizes sm/md. kit="app" uses Lexend for app screens.
 */
export function Tag({ tone, size, kit, className, ...props }: TagProps) {
  return <span className={cn(tagVariants({ tone, size, kit }), className)} {...props} />;
}
