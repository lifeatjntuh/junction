import * as React from "react";
import { CheckCircleIcon } from "@solar-icons/react/linear/check-circle";
import { DangerTriangleIcon } from "@solar-icons/react/linear/danger-triangle";
import { InfoCircleIcon } from "@solar-icons/react/linear/info-circle";
import { cn } from "@/lib/utils";

type Tone = "success" | "error" | "info";
interface ToastItem {
  id: number;
  title: string;
  description?: string;
  tone: Tone;
}

const ToastContext = React.createContext<(t: Omit<ToastItem, "id" | "tone"> & { tone?: Tone }) => void>(() => {});

const ICONS = { success: CheckCircleIcon, error: DangerTriangleIcon, info: InfoCircleIcon };
const ICON_COLOR = { success: "text-[#3aa655]", error: "text-destructive", info: "text-ploy-accent-tertiary" };

/** Call `toast({ title, description?, tone? })` from any component inside ToastProvider. */
export function useToast() {
  return React.useContext(ToastContext);
}

/**
 * Lightweight app toasts. Wrap the app in ToastProvider, then call
 * useToast()({ title, description, tone }) with tone success, error or
 * info. Deep plum pill-card that slides up above the bottom nav and hides
 * after 3.5s; announced to screen readers.
 */
export function ToastProvider({ children, offset = 96 }: { children: React.ReactNode; offset?: number }) {
  const [items, setItems] = React.useState<ToastItem[]>([]);
  const push = React.useCallback((t: Omit<ToastItem, "id" | "tone"> & { tone?: Tone }) => {
    const id = Date.now() + Math.random();
    setItems((cur) => [...cur.slice(-2), { ...t, tone: t.tone ?? "info", id }]);
    window.setTimeout(() => setItems((cur) => cur.filter((i) => i.id !== id)), 3500);
  }, []);
  return (
    <ToastContext.Provider value={push}>
      {children}
      <div
        aria-live="polite"
        className="pointer-events-none fixed inset-x-0 z-[60] mx-auto flex max-w-md flex-col gap-2 px-4"
        style={{ bottom: offset }}
      >
        {items.map((t) => {
          const Icon = ICONS[t.tone];
          return (
            <div
              key={t.id}
              className="animate-app-slide-up pointer-events-auto flex items-start gap-3 rounded-app bg-ploy-background-inverse px-4 py-3.5 text-ploy-text-inverse shadow-app-xl"
            >
              <Icon className={cn("mt-0.5 size-5 shrink-0", ICON_COLOR[t.tone])} />
              <div>
                <p className="font-app text-sm font-semibold">{t.title}</p>
                {t.description && <p className="mt-0.5 font-body text-sm text-ploy-text-inverse-secondary">{t.description}</p>}
              </div>
            </div>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
}
