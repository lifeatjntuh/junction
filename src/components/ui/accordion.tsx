import * as React from "react";
import { Accordion as AccordionPrimitive } from "@base-ui-components/react/accordion";
import { cn } from "@/lib/utils";

export const Accordion = AccordionPrimitive.Root;
export const AccordionItem = AccordionPrimitive.Item;

export function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "flex flex-1 items-center justify-between gap-4 py-4 text-sm font-medium outline-none",
          "text-left transition-colors hover:text-primary",
          "[&>iconify-icon]:transition-transform [&>iconify-icon]:duration-200 data-[panel-open]:[&>iconify-icon]:rotate-180",
          className,
        )}
        {...props}
      >
        {children}
        <iconify-icon icon="solar:alt-arrow-down-linear" aria-hidden="true" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

export function AccordionPanel({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Panel>) {
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-panel"
      className={cn(
        "overflow-hidden text-sm text-muted-foreground",
        "h-[var(--accordion-panel-height)] transition-[height] duration-200 ease-out",
        className,
      )}
      {...props}
    >
      <div className="pb-4">{children}</div>
    </AccordionPrimitive.Panel>
  );
}
