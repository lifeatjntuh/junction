import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const panelVariants = cva("relative rounded-card", {
  variants: {
    color: {
      white: "bg-ploy-background-secondary",
      cream: "bg-ploy-background-primary",
      pink: "bg-[var(--panel-pink)]",
      lime: "bg-[var(--panel-lime)]",
      blue: "bg-[var(--panel-blue)]",
      yellow: "bg-[var(--panel-yellow)]",
      lavender: "bg-[var(--panel-lavender)]",
      peach: "bg-[var(--panel-peach)]",
      hot: "bg-ploy-accent-primary text-ploy-text-on-accent-primary",
      orange: "bg-ploy-accent-secondary text-ploy-text-on-accent-secondary",
      dark: "bg-ploy-background-inverse text-ploy-text-inverse",
    },
    padding: {
      none: "",
      md: "p-6 md:p-8",
      lg: "p-7 md:p-12 lg:p-16",
    },
  },
  defaultVariants: { color: "white", padding: "md" },
});

export interface PanelProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color">,
    VariantProps<typeof panelVariants> {}

/**
 * Big soft rounded block with no border, in the pastel panel palette (pink,
 * lime, blue, yellow, lavender, peach) or solid hot pink, orange, dark,
 * white, cream. Used for cards and full-width section panels.
 */
export function Panel({ color, padding, className, ...props }: PanelProps) {
  return <div className={cn(panelVariants({ color, padding }), className)} {...props} />;
}
