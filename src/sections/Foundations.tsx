import * as React from "react";

function FrameEl({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={`rounded-xl border border-border bg-card p-5 shadow-xs ${className ?? ""}`}>{children}</div>
  );
}

const CONTAINER_WIDTHS: [string, string][] = [
  ["max-w-3xl", "Main app content (Home / Schedule / Stalls / Profile)"],
  ["max-w-full", "Schedule page — the timeline needs full width"],
  ["max-w-md", "Centered dialogs (Fest Dates, App Settings)"],
  ["max-w-4xl", "Admin dashboard content"],
  ["max-w-sm", "Login page card"],
];

const RESPONSIVE_RULES = [
  "Top bar app name hides on the Schedule page on mobile to make room for the day-tab switcher.",
  "Day-tab switcher: centered inline on mobile, absolutely centered on the header at md+.",
  "Bottom nav + max-w-3xl wrapper keeps a phone-width column even inside a wide viewport — there is no desktop redesign.",
  "Explore grid: fixed grid-cols-4 at all sizes — icon tiles shrink rather than reflow.",
  "Stalls masonry: fixed columns-2 at all sizes.",
];

function LayoutFoundations() {
  return (
    <div className="space-y-4">
      <p className="max-w-2xl text-sm text-muted-foreground">
        Junction's product surfaces are a mobile-first, single-column PWA. The app shell caps
        content width even on desktop rather than expanding into a multi-column layout — a
        deliberate "phone-shaped" constraint, not a responsive grid system.
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        <FrameEl>
          <h4 className="mb-3 text-sm font-semibold">Container widths</h4>
          <ul className="space-y-2 text-sm">
            {CONTAINER_WIDTHS.map(([cls, note]) => (
              <li key={cls} className="flex justify-between gap-4 border-b border-border pb-2 last:border-0 last:pb-0">
                <span className="font-mono text-xs">{cls}</span>
                <span className="text-right text-xs text-muted-foreground">{note}</span>
              </li>
            ))}
          </ul>
        </FrameEl>
        <FrameEl>
          <h4 className="mb-3 text-sm font-semibold">Responsive logic</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {RESPONSIVE_RULES.map((rule) => (
              <li key={rule}>• {rule}</li>
            ))}
          </ul>
        </FrameEl>
      </div>
      <FrameEl>
        <h4 className="mb-2 text-sm font-semibold">Safe-area / PWA spacing</h4>
        <p className="text-sm text-muted-foreground">
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">.pb-safe</code> →{" "}
          <span className="font-mono text-xs">padding-bottom: env(safe-area-inset-bottom, 0px)</span>,
          applied to the bottom nav so it clears the iOS home indicator. The main content area gets a
          flat <span className="font-mono text-xs">pb-20</span> to clear the fixed bottom nav height.
        </p>
      </FrameEl>
    </div>
  );
}

const UTILITY_CLASSES: [string, string][] = [
  [".glass", "85% background + 12px backdrop blur. Used on the top app bar."],
  [".text-gradient", "Linear gradient clipped to text, primary → primary-light."],
  [".press-effect", "active:scale-[0.98] transform, 200ms — the app's universal tap-feedback micro-interaction."],
  [".no-scrollbar", "Hides scrollbars cross-browser while preserving native scroll — used on every horizontal/filter row."],
  [".snap-x-mandatory / .snap-center", "CSS scroll-snap for the featured-events carousel."],
  [".pb-safe", "env(safe-area-inset-bottom) — clears the iOS home indicator on the bottom nav."],
];

const ANIMATIONS: [string, string][] = [
  ["animate-fade-in", "opacity + translateY(10px → 0), 0.3s"],
  ["animate-slide-up", "translateY(100% → 0), 0.3s"],
  ["animate-slide-down", "translateY(-100% → 0), 0.3s"],
];

function UtilityPatterns() {
  return (
    <div className="space-y-4">
      <p className="max-w-2xl text-sm text-muted-foreground">
        Hand-written CSS utility classes layered on top of Tailwind — kept as utilities rather than
        components since they modify existing elements, not stand alone.
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        {UTILITY_CLASSES.map(([cls, note]) => (
          <FrameEl key={cls}>
            <code className="font-mono text-xs text-primary">{cls}</code>
            <p className="mt-1 text-sm text-muted-foreground">{note}</p>
          </FrameEl>
        ))}
      </div>
      <FrameEl>
        <h4 className="mb-2 text-sm font-semibold">Animation keyframes</h4>
        <div className="flex flex-wrap gap-4 font-mono text-xs text-muted-foreground">
          {ANIMATIONS.map(([name, note]) => (
            <span key={name}>
              <span className="font-bold text-primary">{name}</span> — {note}
            </span>
          ))}
        </div>
      </FrameEl>
    </div>
  );
}

const NOT_PRESENT = [
  "Desktop mega menu (the app has no desktop-specific nav — the same shell scales down)",
  "Breadcrumbs",
  "Pagination controls (lists are fully loaded / infinite, not paged)",
  "Data tables (admin lists use stacked cards, not <table>)",
  "Marketing footer (this is an app shell, not a marketing site)",
  "Image gallery / lightbox component",
  "Tooltip component (Popover/Menu exist, but no Tooltip primitive is used)",
  "Slider/carousel library (the carousel is CSS scroll-snap only)",
];

function NotPresentInSource() {
  return (
    <div>
      <p className="mb-4 max-w-2xl text-sm text-muted-foreground">
        These common web-app patterns are <strong>intentionally omitted</strong> rather than
        fabricated, because nothing in the product surfaces this system was reverse-engineered from
        uses them. If a future task calls for one of these, it's new scope — not a gap to fill in
        from this library.
      </p>
      <FrameEl>
        <ul className="grid list-inside list-disc gap-x-8 gap-y-2 text-sm text-muted-foreground sm:grid-cols-2">
          {NOT_PRESENT.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </FrameEl>
    </div>
  );
}

function MenuList() {
  const items: [string, string, string][] = [
    ["solar:ticket-linear", "My Tickets", "bg-chart-1/10 text-chart-1"],
    ["solar:bell-bing-linear", "Notifications", "bg-chart-2/10 text-chart-2"],
    ["solar:settings-linear", "Settings", "bg-muted-foreground/10 text-muted-foreground"],
  ];
  return (
    <div className="max-w-sm space-y-3">
      <p className="mb-1 text-sm text-muted-foreground">
        Vertically stacked full-width rows — icon-in-circle + label on the left, chevron on the
        right. Used for the Settings / Tickets / Notifications menu on the profile page.
      </p>
      {items.map(([icon, label, tint]) => (
        <button
          key={label}
          className="flex w-full items-center justify-between rounded-xl border border-border bg-card p-4 shadow-xs transition-transform active:scale-[0.99]"
        >
          <span className="flex items-center gap-3">
            <span className={`flex h-8 w-8 items-center justify-center rounded-full ${tint}`}>
              <iconify-icon icon={icon} width="18" />
            </span>
            <span className="text-sm font-semibold">{label}</span>
          </span>
          <iconify-icon icon="solar:alt-arrow-right-linear" className="text-muted-foreground" />
        </button>
      ))}
    </div>
  );
}

export { LayoutFoundations, UtilityPatterns, NotPresentInSource, MenuList };
