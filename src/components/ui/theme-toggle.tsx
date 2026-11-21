import * as React from "react";
import { SunIcon } from "@solar-icons/react/linear/sun";
import { MoonIcon } from "@solar-icons/react/linear/moon";
import { MonitorIcon } from "@solar-icons/react/linear/monitor";
import { cn } from "@/lib/utils";

export type ThemeChoice = "light" | "dark" | "system";

const query = () => window.matchMedia("(prefers-color-scheme: dark)");

function apply(choice: ThemeChoice) {
  const dark = choice === "dark" || (choice === "system" && query().matches);
  document.documentElement.classList.toggle("dark", dark);
}

/** Reads/writes the site theme ("theme" in localStorage; missing = system). The app's inline script applies it before paint. */
export function useTheme() {
  const [choice, setChoice] = React.useState<ThemeChoice>("system");
  React.useEffect(() => {
    let saved: ThemeChoice = "system";
    try {
      const t = localStorage.getItem("theme");
      if (t === "light" || t === "dark") saved = t;
    } catch {}
    setChoice(saved);
  }, []);
  React.useEffect(() => {
    if (choice !== "system") return;
    const mq = query();
    const on = () => apply("system");
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, [choice]);
  const set = React.useCallback((next: ThemeChoice) => {
    try {
      if (next === "system") localStorage.removeItem("theme");
      else localStorage.setItem("theme", next);
    } catch {}
    apply(next);
    setChoice(next);
  }, []);
  return { choice, setTheme: set };
}

const OPTIONS: { value: ThemeChoice; label: string; Icon: typeof SunIcon }[] = [
  { value: "light", label: "Light", Icon: SunIcon },
  { value: "dark", label: "Dark", Icon: MoonIcon },
  { value: "system", label: "System", Icon: MonitorIcon },
];

export interface ThemeToggleProps {
  className?: string;
}

/**
 * Three-way pill switch for Light, Dark and System (follows the device).
 * Adds/removes `dark` on <html>, saves the choice to localStorage "theme"
 * (System clears it) and tracks device changes live. Used in the site nav
 * and the design-system page.
 */
export function ThemeToggle({ className }: ThemeToggleProps) {
  const { choice, setTheme } = useTheme();
  return (
    <div role="radiogroup" aria-label="Theme" className={cn("inline-flex rounded-full bg-ploy-background-secondary p-1", className)}>
      {OPTIONS.map(({ value, label, Icon }) => {
        const active = choice === value;
        return (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={label}
            title={label}
            onClick={() => setTheme(value)}
            className={cn(
              "inline-flex size-8 items-center justify-center rounded-full transition-colors",
              active
                ? "bg-ploy-background-inverse text-ploy-text-inverse"
                : "text-ploy-text-secondary hover:text-ploy-text-primary",
            )}
          >
            <Icon className="size-[18px]" />
          </button>
        );
      })}
    </div>
  );
}
