import * as React from "react";
import { Drawer } from "vaul";
import { cn } from "@/lib/utils";

/**
 * Bottom sheet for app screens (vaul): drag handle, cream panel with big
 * rounded top corners, Lexend title, optional description, safe-area
 * padding. Swipe down or tap outside to close. Compose
 * Sheet > SheetTrigger asChild + SheetContent title=...
 */
export const Sheet = Drawer.Root;
export const SheetTrigger: typeof Drawer.Trigger = Drawer.Trigger;
export const SheetClose: typeof Drawer.Close = Drawer.Close;

export function SheetContent({
  title,
  description,
  children,
  className,
}: {
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <Drawer.Portal>
      <Drawer.Overlay className="fixed inset-0 z-50 bg-ploy-background-inverse/40" />
      <Drawer.Content
        className={cn(
          "fixed inset-x-0 bottom-0 z-50 mx-auto flex max-h-[85vh] max-w-3xl flex-col rounded-t-[2rem] bg-ploy-background-primary px-6 pb-safe pt-3 shadow-app-xl outline-none",
          className,
        )}
      >
        <div className="mx-auto mb-5 h-1.5 w-12 rounded-full bg-ploy-neutral-primary-s4" aria-hidden />
        <Drawer.Title className="font-app text-xl font-semibold text-ploy-text-primary">{title}</Drawer.Title>
        {description ? (
          <Drawer.Description className="mt-1 font-body text-sm text-ploy-text-secondary">{description}</Drawer.Description>
        ) : (
          <Drawer.Description className="sr-only">{title}</Drawer.Description>
        )}
        <div className="mt-5 overflow-y-auto pb-6">{children}</div>
      </Drawer.Content>
    </Drawer.Portal>
  );
}
