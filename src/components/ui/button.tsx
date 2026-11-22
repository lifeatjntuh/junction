import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-button font-button typography-button transition-[background-color,transform,box-shadow] duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ploy-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-ploy-background-primary disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0 [&_img]:size-5 [&_img]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-ploy-button-primary-background text-ploy-button-primary-text shadow-[0_10px_30px_-10px_rgb(240_32_143/0.7)] hover:bg-ploy-accent-primary-600",
        secondary:
          "bg-ploy-button-secondary-background text-ploy-button-secondary-text shadow-[0_10px_30px_-14px_rgb(31_18_53/0.35)] hover:bg-ploy-neutral-primary-50",
        dark: "bg-ploy-background-inverse text-ploy-text-inverse hover:bg-ploy-neutral-inverse-800",
        ghost: "text-ploy-text-primary hover:bg-ploy-neutral-primary-s2",
        link: "text-ploy-accent-primary underline-offset-4 hover:underline hover:translate-y-0",
        soft: "bg-ploy-accent-primary-50 text-ploy-accent-primary-600 hover:bg-ploy-accent-primary-100",
        google: "bg-ploy-background-secondary text-ploy-text-primary shadow-app-sm hover:bg-ploy-neutral-primary-50",
        danger: "bg-destructive text-white hover:opacity-90",
      },
      kit: {
        web: "",
        app: "font-app font-semibold tracking-normal press-effect hover:translate-y-0",
      },
      size: {
        xs: "h-8 px-3.5 text-xs [&_svg]:size-4",
        sm: "h-10 px-5 text-sm",
        md: "h-12 px-6 text-base",
        lg: "h-14 px-7 text-base md:text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      kit: "web",
    },
    compoundVariants: [
      { kit: "app", variant: "primary", class: "shadow-glow hover:shadow-action" },
      { kit: "app", variant: "secondary", class: "shadow-app-sm" },
    ],
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Render as the child element instead of a `<button>` (e.g. an `<a>`). */
  asChild?: boolean;
}

/**
 * Pill-shaped button with no borders. Variants: primary (hot pink with soft
 * pink shadow), secondary (white), dark (deep plum), ghost, link, soft (pale
 * pink), google (white sign-in), danger. Sizes xs/sm/md/lg. kit="app"
 * switches to the app look for Event Tracker and Buddy apps: Lexend,
 * tap-shrink instead of lift, pink glow shadow on primary. Use asChild to
 * render a link.
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, kit, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, kit }), className)}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
