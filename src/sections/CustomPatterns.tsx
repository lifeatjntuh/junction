import * as React from "react";

function Section({
  id,
  title,
  description,
  children,
}: {
  id: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-border py-12">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          {title}
          <span className="inline-flex items-center gap-1 rounded-md bg-muted text-muted-foreground px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide">
            Custom
          </span>
        </h2>
        {description && <p className="mt-1 max-w-2xl text-sm text-muted-foreground">{description}</p>}
      </div>
      {children}
    </section>
  );
}

function Frame({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={`rounded-xl border border-border bg-card p-6 shadow-xs ${className ?? ""}`}>{children}</div>
  );
}

function AppShellDemo() {
  return (
    <Frame className="max-w-md p-3">
      <div className="h-14 rounded-lg bg-background/85 backdrop-blur-md border border-border flex items-center px-4 gap-3">
        <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-display font-bold text-xs shadow-glow shrink-0">J</div>
        <span className="font-display font-bold text-sm">Junction</span>
      </div>
    </Frame>
  );
}

function BottomNavDemo() {
  const [active, setActive] = React.useState("home");
  const navItems = [
    { id: "home", label: "Home", iconLinear: "solar:home-smile-linear", iconBold: "solar:home-smile-bold" },
    { id: "schedule", label: "Schedule", iconLinear: "solar:calendar-linear", iconBold: "solar:calendar-bold" },
    { id: "stalls", label: "Stalls", iconLinear: "solar:shop-linear", iconBold: "solar:shop-bold" },
    { id: "profile", label: "Profile", iconLinear: "solar:user-circle-linear", iconBold: "solar:user-circle-bold" },
  ];

  return (
    <div className="w-full max-w-[380px] mx-auto">
      <nav className="h-16 bg-background/80 backdrop-blur-md border border-border flex justify-around items-center px-2 rounded-2xl shadow-sm">
        {navItems.map((item) => {
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`group flex w-16 flex-col items-center gap-1 p-2 transition-transform active:scale-95 ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <iconify-icon icon={isActive ? item.iconBold : item.iconLinear} width="24" />
              <span className={`text-[10px] tracking-tight ${isActive ? "font-bold" : "font-medium"}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
      <p className="mt-3 text-center text-[12px] leading-relaxed text-muted-foreground/70">
        Click a tab — icon swaps linear↔bold, label swaps medium↔bold.
      </p>
    </div>
  );
}

function HeroCountdownDemo() {
  return (
    <div className="w-full max-w-[380px] mx-auto">
      <div className="rounded-2xl bg-gradient-to-br from-primary to-primary/70 p-6 text-primary-foreground shadow-lg">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wide opacity-80">Junction 2026</p>
        <h3 className="mb-4 font-display text-xl font-bold">Starts in</h3>
        <div className="flex gap-3">
          <div className="flex-1 rounded-xl bg-white/15 px-3 py-2 text-center">
            <div className="font-display text-2xl font-bold">04</div>
            <div className="text-[10px] opacity-80">DAYS</div>
          </div>
          <div className="flex-1 rounded-xl bg-white/15 px-3 py-2 text-center">
            <div className="font-display text-2xl font-bold">12</div>
            <div className="text-[10px] opacity-80">HRS</div>
          </div>
          <div className="flex-1 rounded-xl bg-white/15 px-3 py-2 text-center">
            <div className="font-display text-2xl font-bold">45</div>
            <div className="text-[10px] opacity-80">MIN</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CarouselDemo() {
  return (
    <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div className="shrink-0 snap-center rounded-xl border border-border bg-gradient-to-br from-primary/80 to-primary p-4 text-primary-foreground flex h-36 w-64 items-end">
        <span className="text-sm font-bold">Featured Event #1</span>
      </div>
      <div className="shrink-0 snap-center rounded-xl border border-border bg-gradient-to-br from-brand-secondary-500 to-brand-secondary-700 p-4 text-white flex h-36 w-64 items-end">
        <span className="text-sm font-bold">Featured Event #2</span>
      </div>
      <div className="shrink-0 snap-center rounded-xl border border-border bg-gradient-to-br from-chart-2 to-chart-5 p-4 text-white flex h-36 w-64 items-end">
        <span className="text-sm font-bold">Featured Event #3</span>
      </div>
    </div>
  );
}

function MasonryDemo() {
  return (
    <div className="columns-2 gap-3 max-w-md [&>*]:mb-3">
      <div className="h-32 rounded-xl border border-border bg-muted"></div>
      <div className="h-20 rounded-xl border border-border bg-muted"></div>
      <div className="h-24 rounded-xl border border-border bg-muted"></div>
      <div className="h-36 rounded-xl border border-border bg-muted"></div>
    </div>
  );
}

function TimelineDemo() {
  return (
    <div className="mx-auto w-full max-w-[380px] overflow-hidden rounded-xl border border-border bg-card">
      <div className="relative h-[180px] bg-background/50">
        <div className="absolute top-0 w-full border-t border-border/60 pl-2 text-xs text-muted-foreground/60">
          <span className="absolute -mt-3 rounded bg-background/50 px-1">9 AM</span>
        </div>
        <div className="absolute top-[80px] w-full border-t border-border/60 pl-2 text-xs text-muted-foreground/60">
          <span className="absolute -mt-3 rounded bg-background/50 px-1">10 AM</span>
        </div>
        <div className="absolute left-[56px] right-[12px] top-[10px] h-[55px] rounded-lg border border-chart-2/30 bg-chart-2/10 p-2 text-chart-2">
          <h4 className="text-xs font-bold leading-tight">Opening Ceremony</h4>
        </div>
        <div className="absolute left-[56px] top-[90px] h-[60px] w-[45%] rounded-lg border border-chart-3/30 bg-chart-3/10 p-2 text-chart-3">
          <h4 className="text-xs font-bold leading-tight">Hackathon Kickoff</h4>
        </div>
      </div>
    </div>
  );
}

function FullPagesDemo() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="mx-auto w-full max-w-[380px] overflow-hidden rounded-2xl aspect-[9/14]">
        <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/70 p-6">
          <div className="relative z-10 w-full max-w-sm text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-2xl font-bold text-white font-display backdrop-blur-sm">
              J
            </div>
            <h1 className="font-display text-2xl font-bold text-white">Junction</h1>
            <div className="mt-6 rounded-2xl border border-white/10 bg-card p-5 text-left shadow-2xl">
              <h2 className="mb-1 text-center text-base font-bold text-card-foreground">Welcome back</h2>
              <p className="mb-4 text-center text-xs text-muted-foreground">Sign in to continue</p>
              <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-secondary px-4 py-2.5 text-xs font-semibold text-secondary-foreground hover:bg-secondary/80">
                Continue with Google
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto w-full max-w-[380px] overflow-hidden rounded-2xl aspect-[9/14]">
        <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-primary/70 p-6 text-center">
          <h1 className="mb-1 font-display text-5xl font-bold text-white">404</h1>
          <h2 className="mb-2 font-display text-lg font-bold text-white/90">Lost in the crowd?</h2>
          <p className="mb-5 text-xs text-white/70">This page wandered off somewhere in the festival grounds.</p>
          <div className="mx-auto flex w-full max-w-xs items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-bold text-primary shadow-lg hover:bg-white/90">
            <iconify-icon icon="solar:home-smile-bold" width="16" />
            Back to Home
          </div>
        </div>
      </div>
    </div>
  );
}

export function CustomPatterns() {
  return (
    <div className="mx-auto max-w-5xl px-6 pb-24">
      <Section
        id="app-shell"
        title="App Shell (Top Bar)"
        description="Sticky blurred header. There's no shadcn 'AppBar'; this stays hand-built Tailwind."
      >
        <AppShellDemo />
      </Section>
      <Section
        id="bottom-nav"
        title="Bottom Navigation"
        description="Fixed 4-item icon+label bar. Active state swaps the Solar icon from -linear to -bold."
      >
        <BottomNavDemo />
      </Section>
      <Section
        id="hero"
        title="Hero / Countdown"
        description="Gradient hero card with a live day/hour/min countdown."
      >
        <HeroCountdownDemo />
      </Section>
      <Section
        id="carousel"
        title="Horizontal Carousel"
        description="CSS scroll-snap only — no carousel library."
      >
        <CarouselDemo />
      </Section>
      <Section
        id="masonry"
        title="Stalls Masonry"
        description="Fixed columns-2 at every breakpoint — a real masonry grid."
      >
        <MasonryDemo />
      </Section>
      <Section
        id="timeline"
        title="Schedule Timeline"
        description="Hand-computed absolute-position hour grid with lane-packed overlaps."
      >
        <TimelineDemo />
      </Section>
      <Section
        id="full-pages"
        title="Auth / Error Pages"
        description="Full-bleed gradient 'threshold' screens for entering/lost moments."
      >
        <FullPagesDemo />
      </Section>
    </div>
  );
}
