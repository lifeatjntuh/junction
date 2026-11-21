import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const textVariants = cva("font-body typography-body text-pretty", {
  variants: {
    size: {
      lg: "text-lg md:text-xl",
      md: "text-base md:text-lg",
      sm: "text-sm md:text-base",
      xs: "text-xs md:text-sm",
    },
    tone: {
      default: "text-ploy-text-primary",
      muted: "text-ploy-text-secondary",
      inverse: "text-ploy-text-inverse",
      "inverse-muted": "text-ploy-text-inverse-secondary",
    },
  },
  defaultVariants: { size: "md", tone: "default" },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  as?: "p" | "span" | "div";
}

/**
 * Body text in Plus Jakarta Sans. Sizes lg/md/sm/xs; tones default, muted,
 * inverse, inverse-muted.
 */
export function Text({ as: Tag = "p", size, tone, className, ...props }: TextProps) {
  return <Tag className={cn(textVariants({ size, tone }), className)} {...props} />;
}
