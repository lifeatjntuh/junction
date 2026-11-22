import * as React from "react";
import { AltArrowRightIcon } from "@solar-icons/react/linear/alt-arrow-right";
import { cn } from "@/lib/utils";

type IconType = React.ComponentType<{ className?: string }>;

/**
 * Sticky blurred app header for Event Tracker and Buddy apps: optional
 * leading slot (logo or back button), Lexend title, optional trailing slot
 * (icon buttons). Sits inside AppShell's phone-width column.
 */
export function AppTopBar({
  title,
  leading,
  trailing,
  className,
}: {
  title: string;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  className?: string;
}) {
  return (
    <header className={cn("glass sticky top-0 z-40 flex h-16 items-center gap-3 px-4", className)}>
      {leading}
      <p className="min-w-0 flex-1 truncate font-app text-lg font-semibold text-ploy-text-primary">{title}</p>
      {trailing && <div className="flex items-center gap-1">{trailing}</div>}
    </header>
  );
}

/**
 * Round 40px icon-only button for app bars and cards; white with a soft
 * shadow, tap-shrink feedback. label is required for screen readers.
 */
export function AppIconButton({
  icon: Icon,
  label,
  className,
  ...props
}: { icon: IconType; label: string } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      aria-label={label}
      className={cn(
        "press-effect inline-flex size-10 items-center justify-center rounded-full bg-ploy-background-secondary text-ploy-text-primary shadow-app-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ploy-accent-primary",
        className,
      )}
      {...props}
    >
      <Icon className="size-5" />
    </button>
  );
}

export interface AppNavItem {
  label: string;
  href: string;
  icon: IconType;
}

/**
 * Fixed bottom tab bar for app screens: 3-5 items with Solar icon and
 * Lexend label; the active item gets a pale pink pill behind its icon.
 * Clears the iPhone home bar (pb-safe). Pass items and the active href.
 */
export function AppBottomNav({
  items,
  active,
  fixed = true,
  className,
}: {
  items: AppNavItem[];
  active: string;
  /** false renders it in place (for previews). */
  fixed?: boolean;
  className?: string;
}) {
  return (
    <nav
      className={cn(
        "z-40 border-t border-ploy-border-primary bg-ploy-background-secondary/95 pb-safe backdrop-blur",
        fixed && "fixed inset-x-0 bottom-0",
        className,
      )}
    >
      <ul className="mx-auto flex h-[68px] max-w-3xl items-stretch">
        {items.map(({ label, href, icon: Icon }) => {
          const on = href === active;
          return (
            <li key={href} className="flex-1">
              <a
                href={href}
                aria-current={on ? "page" : undefined}
                className={cn(
                  "press-effect flex h-full flex-col items-center justify-center gap-1 font-app text-[11px] font-medium",
                  on ? "text-ploy-accent-primary" : "text-ploy-text-secondary",
                )}
              >
                <span className={cn("flex h-7 w-12 items-center justify-center rounded-full", on && "bg-ploy-accent-primary-50")}>
                  <Icon className="size-[22px]" />
                </span>
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

/**
 * Phone-width app column on the cream background: optional top bar, content
 * capped at max-w-3xl even on desktop, and bottom padding that clears
 * AppBottomNav. Use as the page wrapper for Event Tracker and Buddy app
 * screens.
 */
export function AppShell({
  topBar,
  bottomNav,
  children,
  className,
}: {
  topBar?: React.ReactNode;
  bottomNav?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="min-h-dvh bg-ploy-background-primary text-ploy-text-primary">
      <div className="mx-auto max-w-3xl">
        {topBar}
        <main className={cn("px-4 pb-24 pt-2", className)}>{children}</main>
      </div>
      {bottomNav}
    </div>
  );
}

/**
 * Full-width settings row: icon in a pastel circle, Lexend label, optional
 * hint, chevron on the right. Stack several inside a white rounded card for
 * Settings, Tickets or Notifications menus. Renders a link when href is
 * set, else a button.
 */
export function AppMenuRow({
  icon: Icon,
  label,
  hint,
  href,
  onClick,
  tint = "var(--panel-pink)",
}: {
  icon: IconType;
  label: string;
  hint?: string;
  href?: string;
  onClick?: () => void;
  tint?: string;
}) {
  const inner = (
    <>
      <span className="flex size-10 shrink-0 items-center justify-center rounded-full text-ploy-text-primary" style={{ background: tint }}>
        <Icon className="size-5" />
      </span>
      <span className="min-w-0 flex-1 text-left">
        <span className="block font-app text-[15px] font-medium text-ploy-text-primary">{label}</span>
        {hint && <span className="block truncate font-body text-xs text-ploy-text-secondary">{hint}</span>}
      </span>
      <AltArrowRightIcon className="size-5 text-ploy-text-secondary" />
    </>
  );
  const cls = "press-effect flex w-full items-center gap-3 px-4 py-3.5 hover:bg-ploy-neutral-primary-50";
  return href ? (
    <a href={href} className={cls}>
      {inner}
    </a>
  ) : (
    <button type="button" onClick={onClick} className={cls}>
      {inner}
    </button>
  );
}
