import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariants = cva("typography-heading text-balance", {
  variants: {
    font: {
      round: "font-heading",
      grotesk: "font-display font-extrabold uppercase tracking-[-0.02em] [font-stretch:75%]",
    },
    size: {
      display: "text-6xl sm:text-7xl lg:text-8xl xl:text-9xl leading-[0.92]",
      xl: "text-5xl md:text-6xl lg:text-7xl leading-[0.95]",
      lg: "text-4xl md:text-5xl leading-[1]",
      md: "text-3xl md:text-4xl leading-[1.05]",
      sm: "text-2xl md:text-3xl leading-[1.1]",
      xs: "text-xl md:text-2xl leading-[1.15]",
    },
  },
  defaultVariants: { size: "lg", font: "round" },
});

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "p";
}

/**
 * Brand heading. font="round" (default) is the bubbly Fredoka used across
 * the website; font="grotesk" is condensed extra-bold uppercase Bricolage
 * Grotesque for social media and loud one-off moments. Sizes: display
 * (hero), xl, lg (section), md, sm, xs. `as` sets the tag independently
 * of size.
 */
export function Heading({ as: Tag = "h2", size, font, className, ...props }: HeadingProps) {
  return <Tag className={cn(headingVariants({ size, font }), className)} {...props} />;
}

export { headingVariants };
