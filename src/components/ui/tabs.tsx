import * as React from "react";
import { Tabs as TabsPrimitive } from "@base-ui-components/react/tabs";
import { cn } from "@/lib/utils";

export const Tabs = TabsPrimitive.Root;

type TabsVariant = "pill" | "underline";
const TabsVariantContext = React.createContext<TabsVariant>("underline");

export function TabsList({
  className,
  variant = "underline",
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List> & { variant?: TabsVariant }) {
  return (
    <TabsVariantContext.Provider value={variant}>
      <TabsPrimitive.List
        data-slot="tabs-list"
        className={cn(
          "relative flex items-center",
          variant === "pill" && "gap-1 rounded-full bg-muted p-1",
          variant === "underline" && "gap-6 border-b border-border",
          className,
        )}
        {...props}
      />
    </TabsVariantContext.Provider>
  );
}

export function TabsTab({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Tab>) {
  const variant = React.useContext(TabsVariantContext);
  return (
    <TabsPrimitive.Tab
      data-slot="tabs-tab"
      className={cn(
        "relative z-10 select-none whitespace-nowrap text-sm font-medium outline-none transition-colors",
        "text-muted-foreground data-[selected]:text-foreground",
        variant === "pill" && "rounded-full px-4 py-1.5",
        variant === "underline" && "pb-3",
        className,
      )}
      {...props}
    />
  );
}

/**
 * Tabs.Indicator is styled as a sliding pill for the day switcher (`bg-background`
 * `shadow-sm`, matches shadcn's default underline swap for a segmented control) or
 * as a 2px bottom border for the admin tab bar — set via `variant`, not two components.
 */
export function TabsIndicator({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Indicator>) {
  const variant = React.useContext(TabsVariantContext);
  return (
    <TabsPrimitive.Indicator
      data-slot="tabs-indicator"
      className={cn(
        "absolute z-0 transition-all duration-300 ease-out",
        variant === "pill" &&
          "top-1 left-0 h-[calc(100%-0.5rem)] w-[var(--active-tab-width)] translate-x-[var(--active-tab-left)] rounded-full bg-background shadow-sm",
        variant === "underline" &&
          "bottom-0 left-0 h-0.5 w-[var(--active-tab-width)] translate-x-[var(--active-tab-left)] bg-primary",
        className,
      )}
      {...props}
    />
  );
}

export function TabsPanel({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Panel>) {
  return (
    <TabsPrimitive.Panel
      data-slot="tabs-panel"
      className={cn("pt-4 outline-none", className)}
      {...props}
    />
  );
}
