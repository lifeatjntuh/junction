import * as React from "react";
import { Toggle as TogglePrimitive } from "@base-ui-components/react/toggle";
import { ToggleGroup as ToggleGroupPrimitive } from "@base-ui-components/react/toggle-group";
import { cn } from "@/lib/utils";

export function ToggleGroup({
  className,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive>) {
  return (
    <ToggleGroupPrimitive
      data-slot="toggle-group"
      className={cn("flex flex-wrap items-center gap-2", className)}
      {...props}
    />
  );
}

export function Toggle({ className, ...props }: React.ComponentProps<typeof TogglePrimitive>) {
  return (
    <TogglePrimitive
      data-slot="toggle"
      className={cn(
        "inline-flex h-8 items-center rounded-full border border-border bg-background px-3.5 text-sm font-medium",
        "text-muted-foreground transition-colors outline-none",
        "hover:bg-accent hover:text-accent-foreground",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "data-[pressed]:border-transparent data-[pressed]:bg-primary data-[pressed]:text-primary-foreground data-[pressed]:shadow-glow",
        className,
      )}
      {...props}
    />
  );
}
