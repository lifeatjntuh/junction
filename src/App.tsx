import { Showcase } from "@/sections/Showcase";

const NAV = [
  "tokens", "typography", "layout", "buttons", "badges", "forms", "cards",
  "tabs", "dropdown", "popover", "accordion", "lists", "modals", "toasts",
  "states", "utilities", "not-present",
];

const CUSTOM_PATTERNS = [
  ["Bottom navigation", "Mobile tab bar with a linear→bold icon swap on the active state."],
  ["Hero / countdown card", "Gradient hero with a live day/hour/minute countdown."],
  ["Horizontal carousel", "CSS scroll-snap only — no carousel library."],
  ["Stalls masonry grid", "Fixed columns-2 layout, not a component."],
  ["Schedule timeline", "Hand-computed absolute-position hour grid with lane packing."],
  ["Auth / 404 pages", "Full-bleed, page-level gradient 'threshold' screens."],
  ["Top app bar / .glass", "Sticky blurred header — there's no shadcn 'AppBar'."],
  ["Menu lists", "Stacked icon + label + chevron rows on the profile page."],
];

function Sidebar() {
  return (
    <aside className="sticky top-0 z-40 flex flex-col border-b border-border bg-background/80 backdrop-blur-md md:h-screen md:w-64 md:shrink-0 md:border-b-0 md:border-r md:bg-background md:p-6 md:backdrop-blur-none">
      <div className="flex items-center px-6 py-4 md:p-0 md:mb-8">
        <a href="#top" className="flex items-center gap-2 font-display text-base font-semibold">
          <iconify-icon icon="solar:widget-5-bold" className="text-primary" />
          Junction
        </a>
      </div>
      <nav className="hidden md:flex flex-1 flex-col gap-3 overflow-y-auto text-sm text-muted-foreground">
        {NAV.map((id) => (
          <a key={id} href={`#${id}`} className="capitalize transition-colors hover:text-foreground">
            {id}
          </a>
        ))}
      </nav>
      <a
        href="https://base-ui.com"
        target="_blank"
        rel="noreferrer"
        className="hidden md:block mt-6 shrink-0 text-xs text-muted-foreground hover:text-foreground"
      >
        Built on Base UI ↗
      </a>
    </aside>
  );
}

function Hero() {
  return (
    <div id="top" className="mx-auto max-w-5xl px-6 pt-16 pb-8">
      <p className="mb-3 text-sm font-medium text-primary">LifeatJNTUH</p>
      <h1 className="max-w-2xl text-4xl font-bold sm:text-5xl">Junction Design System</h1>
      <p className="mt-4 max-w-xl text-muted-foreground">
        The shared design system powering the digital products and experiences built by
        LifeatJNTUH — shadcn/ui components running on the Base UI runtime, themed with a single
        set of design tokens.
      </p>
    </div>
  );
}

function CustomPatternsNote() {
  return (
    <section className="border-t border-border py-12">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl font-semibold">Intentionally custom</h2>
        <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
          These patterns have no shadcn / Base UI equivalent and are kept as plain Tailwind
          against the same design tokens rather than forced into a component. See
          COMPONENT-MANIFEST.md for the full mapping.
        </p>
        <dl className="mt-6 grid gap-4 sm:grid-cols-2">
          {CUSTOM_PATTERNS.map(([name, note]) => (
            <div key={name} className="rounded-lg border border-border bg-card p-4">
              <dt className="text-sm font-semibold">{name}</dt>
              <dd className="mt-1 text-sm text-muted-foreground">{note}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
      Junction — LifeatJNTUH · tokens live in src/styles/junction-theme.css
    </footer>
  );
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <Sidebar />
      <div className="flex-1 min-w-0">
        <main>
          <Hero />
          <Showcase />
          <CustomPatternsNote />
        </main>
        <Footer />
      </div>
    </div>
  );
}
