import { cn } from "@/lib/utils";

export interface ChipGroupProps {
  options: string[];
  value: string | null;
  onChange: (value: string | null) => void;
  /** Adds a first "All" chip that clears the filter. */
  allLabel?: string;
  label: string;
  className?: string;
}

/**
 * Single-select filter chips in a sideways-scrolling row. Unselected chips
 * are white with a soft shadow; the selected chip is deep plum. Optional
 * allLabel adds a clear-filter chip. Controlled via value/onChange; label
 * names the group for screen readers.
 */
export function ChipGroup({ options, value, onChange, allLabel, label, className }: ChipGroupProps) {
  const items: { key: string | null; text: string }[] = [
    ...(allLabel ? [{ key: null, text: allLabel }] : []),
    ...options.map((o) => ({ key: o, text: o })),
  ];
  return (
    <div role="group" aria-label={label} className={cn("no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 py-1", className)}>
      {items.map((it) => {
        const active = value === it.key;
        return (
          <button
            key={it.text}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(active && it.key !== null ? null : it.key)}
            className={cn(
              "press-effect shrink-0 rounded-full px-4 py-2 font-app text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ploy-accent-primary",
              active
                ? "bg-ploy-background-inverse text-ploy-text-inverse"
                : "bg-ploy-background-secondary text-ploy-text-primary shadow-app-xs hover:bg-ploy-neutral-primary-50",
            )}
          >
            {it.text}
          </button>
        );
      })}
    </div>
  );
}
