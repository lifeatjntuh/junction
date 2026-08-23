import * as React from "react";
import { Dialog as DialogPrimitive } from "@base-ui-components/react/dialog";
import { cn } from "@/lib/utils";
import { DialogBackdrop } from "./dialog";

/**
 * A Sheet is not a separate Base UI primitive — it's the same Dialog used in
 * dialog.tsx, with Popup pinned to the bottom edge and given a slide-up
 * transform instead of the centered scale/fade. This mirrors exactly how
 * shadcn's own Sheet component wraps Radix's Dialog.
 */
export const Sheet = DialogPrimitive.Root;
export const SheetTrigger = DialogPrimitive.Trigger;
export const SheetClose = DialogPrimitive.Close;

export function SheetContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Popup>) {
  return (
    <DialogPrimitive.Portal>
      <DialogBackdrop />
      <DialogPrimitive.Popup
        data-slot="sheet-content"
        className={cn(
          "fixed inset-x-0 bottom-0 z-50 max-h-[85vh] rounded-t-xl border-t border-border bg-card p-6 text-card-foreground shadow-xl outline-none",
          "transition-transform data-[starting-style]:translate-y-full data-[ending-style]:translate-y-full",
          className,
        )}
        {...props}
      >
        <div className="mx-auto mb-4 h-1.5 w-10 rounded-full bg-border" aria-hidden="true" />
        {children}
      </DialogPrimitive.Popup>
    </DialogPrimitive.Portal>
  );
}

export const SheetTitle = DialogPrimitive.Title;
export const SheetDescription = DialogPrimitive.Description;
