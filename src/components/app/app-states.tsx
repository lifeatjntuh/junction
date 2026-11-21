import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Loading placeholder: a soft pulsing cream block. Size it with className
 * (h-*, w-*, rounded-*) to match the content it stands in for.
 */
export function Skeleton({ className }: { className?: string }) {
  return <div aria-hidden className={cn("animate-pulse rounded-app bg-ploy-neutral-primary-s3", className)} />;
}

/**
 * Empty or error message for app lists. tone empty = pastel lavender
 * circle; tone error = pale pink circle. Takes an optional 3D object image
 * or icon, a Lexend title, one line of help and an optional action (usually
 * a Button kit="app").
 */
export function AppState({
  title,
  body,
  icon: Icon,
  image,
  action,
  tone = "empty",
  className,
}: {
  title: string;
  body?: string;
  icon?: React.ComponentType<{ className?: string }>;
  image?: string;
  action?: React.ReactNode;
  tone?: "empty" | "error";
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col items-center px-6 py-10 text-center", className)} role={tone === "error" ? "alert" : undefined}>
      {image ? (
        <img src={image} alt="" width={112} height={112} className="size-28 object-contain" />
      ) : Icon ? (
        <span
          className={cn(
            "flex size-16 items-center justify-center rounded-full",
            tone === "error" ? "bg-[var(--panel-pink)] text-ploy-accent-primary-700" : "bg-[var(--panel-lavender)] text-ploy-accent-tertiary",
          )}
        >
          <Icon className="size-7" />
        </span>
      ) : null}
      <p className="mt-4 font-app text-lg font-semibold text-ploy-text-primary">{title}</p>
      {body && <p className="mt-1 max-w-xs font-body text-sm text-ploy-text-secondary">{body}</p>}
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}
