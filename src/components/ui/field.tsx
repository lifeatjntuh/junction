import * as React from "react";
import { Field as FieldPrimitive } from "@base-ui-components/react/field";
import { cn } from "@/lib/utils";

/**
 * Field.Root wraps Field.Label + Field.Control (+ Field.Description / Field.Error).
 * This replaces a raw `<label>` + `<input>` pair with a real accessible primitive:
 * ids, aria-describedby, and validation state are wired by Base UI instead of by hand.
 */
export function Field({ className, ...props }: React.ComponentProps<typeof FieldPrimitive.Root>) {
  return (
    <FieldPrimitive.Root data-slot="field" className={cn("flex flex-col gap-1.5", className)} {...props} />
  );
}

export function FieldLabel({ className, ...props }: React.ComponentProps<typeof FieldPrimitive.Label>) {
  return (
    <FieldPrimitive.Label
      data-slot="field-label"
      className={cn("text-sm font-medium text-foreground", className)}
      {...props}
    />
  );
}

export const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<typeof FieldPrimitive.Control>
>(({ className, ...props }, ref) => (
  <FieldPrimitive.Control
    ref={ref}
    data-slot="input"
    className={cn(
      "h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-xs",
      "outline-none transition-colors placeholder:text-muted-foreground",
      "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      "data-[invalid]:border-destructive data-[invalid]:ring-destructive/40",
      "disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    {...props}
  />
));
Input.displayName = "Input";

export function FieldDescription({
  className,
  ...props
}: React.ComponentProps<typeof FieldPrimitive.Description>) {
  return (
    <FieldPrimitive.Description
      data-slot="field-description"
      className={cn("text-xs text-muted-foreground", className)}
      {...props}
    />
  );
}

export function FieldError({ className, ...props }: React.ComponentProps<typeof FieldPrimitive.Error>) {
  return (
    <FieldPrimitive.Error
      data-slot="field-error"
      className={cn("text-xs font-medium text-destructive", className)}
      {...props}
    />
  );
}
