import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Button has no Base UI primitive backing it — shadcn's own Button is a plain
 * `<button>` under Radix too. We keep the same `render` composition pattern
 * Base UI primitives use elsewhere in this library (see menu.tsx / dialog.tsx)
 * so a `<Button render={<a href="/register" />}>Register</Button>` works the
 * same way `asChild` would in a Radix-based shadcn build.
 */
export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium " +
    "transition-colors disabled:pointer-events-none disabled:opacity-50 " +
    "outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 " +
    "[&_iconify-icon]:shrink-0 [&_iconify-icon]:text-base",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        outline:
          "border border-border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        destructive:
          "bg-destructive text-destructive-foreground shadow-xs hover:bg-destructive/90",
        /** Junction-only: register / primary CTA buttons — pill shape + glow shadow. */
        cta: "rounded-full bg-primary text-primary-foreground shadow-glow hover:bg-primary/90",
        /** Junction-only: Admin role-action tile. */
        gradientPurple:
          "bg-gradient-to-br from-[--color-chart-2] to-primary text-primary-foreground shadow-md hover:opacity-95",
        /** Junction-only: Organizer role-action tile. */
        gradientOrange:
          "bg-gradient-to-br from-brand-secondary-500 to-brand-secondary-700 text-primary-foreground shadow-md hover:opacity-95",
        /** Junction-only: Google sign-in — card surface, hairline border, minimal shadow. */
        google:
          "border border-border bg-card text-foreground shadow-xs hover:bg-accent",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-lg px-6 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Render onto a different element (e.g. an `<a>`) while keeping button styling/behavior. */
  render?: React.ReactElement;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, render, ...props }, ref) => {
    const classes = cn(buttonVariants({ variant, size }), className);

    if (render) {
      return React.cloneElement(render, {
        className: cn(classes, render.props.className),
        ...props,
      } as React.HTMLAttributes<HTMLElement>);
    }

    return (
      <button data-slot="button" className={classes} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";
