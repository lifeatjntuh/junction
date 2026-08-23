import * as React from "react";
import { Toast as ToastPrimitive } from "@base-ui-components/react/toast";
import { cn } from "@/lib/utils";

/**
 * ⚠️ Base UI's Toast primitive only shipped in July 2026. This wrapper follows
 * the documented Provider + Viewport + useToastManager() shape as of that
 * release — double-check the exact API against base-ui.com/react/components/toast
 * before relying on this in production; it is the newest, least-battle-tested
 * primitive in this library.
 */
export const ToastProvider = ToastPrimitive.Provider;
export const useToastManager = ToastPrimitive.useToastManager;

export function ToastViewport({ className, ...props }: React.ComponentProps<typeof ToastPrimitive.Viewport>) {
  return (
    <ToastPrimitive.Portal>
      <ToastPrimitive.Viewport
        data-slot="toast-viewport"
        className={cn("fixed bottom-4 right-4 z-50 flex w-80 flex-col gap-2", className)}
        {...props}
      />
    </ToastPrimitive.Portal>
  );
}

/** Renders the current toast list from useToastManager(). Mount once, near the app root. */
export function ToastList() {
  const { toasts } = useToastManager();
  return (
    <>
      {toasts.map((toast) => (
        <ToastPrimitive.Root
          key={toast.id}
          toast={toast}
          className={cn(
            "rounded-lg border border-border bg-card p-4 text-card-foreground shadow-lg",
            "transition-[transform,opacity] data-[starting-style]:translate-y-2 data-[starting-style]:opacity-0",
            "data-[ending-style]:opacity-0",
          )}
        >
          <ToastPrimitive.Title data-slot="toast-title" className="text-sm font-semibold" />
          <ToastPrimitive.Description
            data-slot="toast-description"
            className="text-sm text-muted-foreground"
          />
          <ToastPrimitive.Close
            data-slot="toast-close"
            aria-label="Dismiss"
            className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
          >
            <iconify-icon icon="solar:close-circle-linear" />
          </ToastPrimitive.Close>
        </ToastPrimitive.Root>
      ))}
    </>
  );
}
