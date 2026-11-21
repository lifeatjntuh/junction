import * as React from "react";
import { cn } from "@/lib/utils";

const control =
  "w-full bg-ploy-input-background font-body text-base text-ploy-text-primary shadow-app-xs outline-none transition-shadow placeholder:text-ploy-text-secondary/60 focus-visible:ring-2 focus-visible:ring-ploy-accent-primary aria-[invalid=true]:ring-2 aria-[invalid=true]:ring-destructive disabled:opacity-50";

/**
 * Pill text input on white with a soft shadow and pink focus ring;
 * aria-invalid shows a red ring. Use inside Field for label, helper and
 * error text.
 */
export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input ref={ref} className={cn(control, "h-12 rounded-input px-5", className)} {...props} />
  ),
);
Input.displayName = "Input";

/**
 * Multi-line text box matching Input, with rounded app corners.
 */
export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea ref={ref} className={cn(control, "min-h-28 rounded-app px-5 py-3.5", className)} {...props} />
  ),
);
Textarea.displayName = "Textarea";

export interface FieldProps {
  label: string;
  /** id of the control inside; wires label, helper and error text to it. */
  htmlFor: string;
  description?: string;
  error?: string;
  children: React.ReactElement<Record<string, unknown>>;
  className?: string;
}

/**
 * Form field wrapper: Lexend label, the control (Input, Textarea or any
 * input), helper text, and an error message that replaces the helper and
 * sets aria-invalid on the control.
 */
export function Field({ label, htmlFor, description, error, children, className }: FieldProps) {
  const hintId = `${htmlFor}-hint`;
  const hint = error ?? description;
  const control = React.cloneElement(children, {
    id: htmlFor,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": hint ? hintId : undefined,
  });
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={htmlFor} className="px-1 font-app text-sm font-medium text-ploy-text-primary">
        {label}
      </label>
      {control}
      {hint && (
        <p id={hintId} className={cn("px-1 font-body text-sm", error ? "text-destructive" : "text-ploy-text-secondary")}>
          {hint}
        </p>
      )}
    </div>
  );
}
