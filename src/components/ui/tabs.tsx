import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const TabsStyle = React.createContext<"pill" | "underline">("pill");

const listVariants = cva("no-scrollbar inline-flex max-w-full items-center overflow-x-auto font-app", {
  variants: {
    variant: {
      pill: "gap-1 rounded-full bg-ploy-background-secondary p-1 shadow-app-sm",
      underline: "gap-6 border-b border-ploy-border-primary",
    },
  },
  defaultVariants: { variant: "pill" },
});

const triggerVariants = cva(
  "press-effect shrink-0 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ploy-accent-primary",
  {
    variants: {
      variant: {
        pill: "rounded-full px-4 py-2 text-ploy-text-secondary hover:text-ploy-text-primary data-[state=active]:bg-ploy-accent-primary data-[state=active]:text-white data-[state=active]:shadow-glow",
        underline:
          "-mb-px border-b-2 border-transparent pb-3 pt-1 text-ploy-text-secondary hover:text-ploy-text-primary data-[state=active]:border-ploy-accent-primary data-[state=active]:text-ploy-text-primary",
      },
    },
    defaultVariants: { variant: "pill" },
  },
);

/**
 * App tabs (Radix). TabsList variant pill = white pill track with a hot-pink
 * active pill (day switcher); underline = admin-style tab bar with a pink
 * underline. Scrolls sideways when tabs overflow. Compose
 * Tabs > TabsList > TabsTrigger, then TabsContent.
 */
export const Tabs = TabsPrimitive.Root;

export function TabsList({
  variant = "pill",
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List> & VariantProps<typeof listVariants>) {
  const v = variant ?? "pill";
  return (
    <TabsStyle.Provider value={v}>
      <TabsPrimitive.List className={cn(listVariants({ variant: v }), className)} {...props} />
    </TabsStyle.Provider>
  );
}

export function TabsTrigger({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  const variant = React.useContext(TabsStyle);
  return <TabsPrimitive.Trigger className={cn(triggerVariants({ variant }), className)} {...props} />;
}

export function TabsContent({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return <TabsPrimitive.Content className={cn("mt-4 font-body text-ploy-text-secondary focus-visible:outline-none", className)} {...props} />;
}
