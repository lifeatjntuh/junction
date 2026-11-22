import { Showcase } from "@/sections/Showcase";
import { Logo } from "@/components/ui/logo";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { ToastProvider } from "@/components/ui/toast";

/**
 * Demo site for the Junction package. This is NOT part of the published
 * package — the package is src/index.ts, src/tokens.ts, src/components/
 * and src/styles/. This file and src/sections/ exist only to show the
 * components working, and to verify the build with `pnpm run build:demo`.
 */
export default function App() {
  return (
    <ToastProvider>
      <div className="min-h-screen bg-ploy-background-primary text-ploy-text-primary">
        <header className="sticky top-0 z-40 border-b border-ploy-border-primary bg-ploy-background-primary/85 backdrop-blur">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
            <Logo />
            <div className="flex items-center gap-3">
              <span className="hidden font-body text-sm text-ploy-text-secondary sm:block">
                @lifeatjntuh/junction v0.1.0
              </span>
              <ThemeToggle />
            </div>
          </div>
        </header>
        <main className="mx-auto max-w-5xl px-6 pb-24 pt-12">
          <p className="font-body text-sm font-semibold uppercase tracking-[0.08em] text-ploy-accent-primary">
            LifeatJNTUH
          </p>
          <h1 className="mt-3 max-w-2xl font-heading text-5xl font-bold leading-[0.95] sm:text-6xl">
            Junction Design System
          </h1>
          <p className="mt-4 max-w-xl font-body text-lg text-ploy-text-secondary">
            One look for the site and our socials. The shared design system
            powering the digital products built by LifeatJNTUH — now as an
            npm package.
          </p>
          <Showcase />
        </main>
        <footer className="border-t border-ploy-border-primary py-8 text-center font-body text-xs text-ploy-text-secondary">
          Junction — LifeatJNTUH · tokens live in src/styles/junction-theme.css
          · source: lifeatjntuh-admin/website design system
        </footer>
      </div>
    </ToastProvider>
  );
}
