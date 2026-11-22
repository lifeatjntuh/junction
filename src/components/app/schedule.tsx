import * as React from "react";
import * as Popover from "@radix-ui/react-popover";
import { BookmarkIcon } from "@solar-icons/react/linear/bookmark";
import { BookmarkIcon as BookmarkFilledIcon } from "@solar-icons/react/bold/bookmark";
import { UsersGroupRoundedIcon } from "@solar-icons/react/linear/users-group-rounded";
import { CheckCircleIcon } from "@solar-icons/react/bold/check-circle";
import { CloseCircleIcon } from "@solar-icons/react/bold/close-circle";
import { ArrowRightIcon } from "@solar-icons/react/linear/arrow-right";
import { MapPointIcon } from "@solar-icons/react/linear/map-point";
import { ClockCircleIcon } from "@solar-icons/react/linear/clock-circle";
import { CalendarIcon } from "@solar-icons/react/bold-duotone/calendar";
import { layoutScheduleEvents, type ScheduleEvent } from "@/lib/schedule-layout";
import { cn } from "@/lib/utils";

export type { ScheduleEvent } from "@/lib/schedule-layout";

/** Look of one category: label plus block classes (background, text). */
export interface ScheduleCategory {
  label: string;
  className: string;
}

export const DEFAULT_CATEGORIES: Record<string, ScheduleCategory> = {
  cultural: { label: "Cultural", className: "bg-[var(--panel-lavender)] text-ploy-text-primary" },
  music: { label: "Music", className: "bg-[var(--panel-pink)] text-ploy-text-primary" },
  technical: { label: "Technical", className: "bg-[var(--panel-blue)] text-ploy-text-primary" },
  workshops: { label: "Workshops", className: "bg-[var(--panel-yellow)] text-ploy-text-primary" },
  sports: { label: "Sports", className: "bg-[var(--panel-lime)] text-ploy-text-primary" },
  food: { label: "Food", className: "bg-[var(--panel-peach)] text-ploy-text-primary" },
  default: { label: "Event", className: "bg-ploy-background-secondary text-ploy-text-primary" },
};

const toDate = (d: Date | string) => (typeof d === "string" ? new Date(d) : d);
const fmt = (d: Date | string, o: Intl.DateTimeFormatOptions) => new Intl.DateTimeFormat("en-IN", o).format(toDate(d));
const shortTime = (d: Date | string) => fmt(d, { hour: "numeric", minute: "2-digit", hour12: true }).replace(/\s?[ap]m$/i, "");
const fullTime = (d: Date | string) => fmt(d, { hour: "numeric", minute: "2-digit", hour12: true }).toUpperCase();

/** Shared action props for anything that shows an event's save / going / details actions. */
export interface ScheduleEventActions {
  saved?: boolean;
  going?: boolean;
  onToggleSave?: (id: string) => void;
  onToggleGoing?: (id: string) => void;
  /** Link for the Details button; omit to hide it. */
  detailsHref?: string;
}

/**
 * Event preview card used in the schedule hover popup (and anywhere a
 * compact event preview fits): photo header with dark fade, category pill
 * and title over the image (calendar placeholder when no image), time and
 * place row, optional description, then Save (with count), Going (with
 * count) and Details actions. Fully controlled: saved/going flags and
 * onToggleSave/onToggleGoing callbacks; no data logic inside. Optional
 * onClose shows a close button.
 */
export function EventQuickCard({
  event,
  category,
  saved,
  going,
  onToggleSave,
  onToggleGoing,
  detailsHref,
  onClose,
  showDescription = true,
  className,
}: {
  event: ScheduleEvent;
  category?: ScheduleCategory;
  onClose?: () => void;
  showDescription?: boolean;
  className?: string;
} & ScheduleEventActions) {
  const SaveIcon = saved ? BookmarkFilledIcon : BookmarkIcon;
  const GoingIcon = going ? CheckCircleIcon : UsersGroupRoundedIcon;
  return (
    <div className={cn("w-72 max-w-[calc(100vw-24px)] overflow-hidden rounded-app bg-ploy-background-secondary text-ploy-text-primary shadow-app-xl", className)}>
      <div className="relative h-40 bg-[var(--panel-lavender)]">
        {event.imageUrl ? (
          <img src={event.imageUrl} alt="" className="size-full object-cover" />
        ) : (
          <div className="flex size-full items-center justify-center">
            <CalendarIcon className="size-12 text-ploy-accent-tertiary/50" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/25 to-black/75" />
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-2 top-2 rounded-full bg-black/35 p-1 text-white backdrop-blur-sm transition-colors hover:bg-black/55"
          >
            <CloseCircleIcon className="size-5" />
          </button>
        )}
        <div className="absolute inset-x-0 bottom-0 p-3">
          {category && (
            <span className="mb-1.5 inline-block rounded-full bg-ploy-accent-primary px-2 py-0.5 font-app text-[10px] font-medium text-white">
              {category.label}
            </span>
          )}
          <p className="line-clamp-2 font-app text-base font-semibold leading-tight text-white">{event.title}</p>
        </div>
      </div>
      <div className="space-y-2 px-3 py-2.5">
        <div className="flex items-center gap-3 font-body text-xs text-ploy-text-secondary">
          <span className="inline-flex shrink-0 items-center gap-1">
            <ClockCircleIcon className="size-3.5 text-ploy-accent-primary" />
            {fullTime(event.start)} to {fullTime(event.end)}
          </span>
          <span className="inline-flex min-w-0 items-center gap-1">
            <MapPointIcon className="size-3.5 shrink-0 text-ploy-accent-primary" />
            <span className="truncate">{event.location}</span>
          </span>
        </div>
        {event.venueDetail && <p className="font-body text-xs text-ploy-text-secondary">{event.venueDetail}</p>}
        {showDescription && event.description && (
          <p className="line-clamp-3 font-body text-xs leading-relaxed text-ploy-text-secondary">{event.description}</p>
        )}
      </div>
      <div className="flex items-center gap-1.5  px-3 py-2.5">
        <button
          type="button"
          onClick={() => onToggleSave?.(event.id)}
          aria-pressed={saved}
          aria-label={saved ? "Remove from saved" : "Save"}
          className={cn(
            "press-effect inline-flex h-8 items-center gap-1 rounded-full px-2.5 font-app text-xs font-medium transition-colors",
            saved ? "bg-ploy-accent-primary-50 text-ploy-accent-primary-600" : "bg-ploy-neutral-primary-s2 text-ploy-text-primary hover:bg-ploy-neutral-primary-s3",
          )}
        >
          <SaveIcon className="size-4" />
          {event.savedCount ?? 0}
        </button>
        <button
          type="button"
          onClick={() => onToggleGoing?.(event.id)}
          aria-pressed={going}
          aria-label={going ? "Not going" : "I'm going"}
          className={cn(
            "press-effect inline-flex h-8 items-center gap-1 rounded-full px-2.5 font-app text-xs font-medium transition-colors",
            going ? "bg-[var(--panel-lime)] text-ploy-text-primary" : "bg-ploy-neutral-primary-s2 text-ploy-text-primary hover:bg-ploy-neutral-primary-s3",
          )}
        >
          <GoingIcon className="size-4" />
          {event.goingCount ?? 0}
        </button>
        {detailsHref && (
          <a
            href={detailsHref}
            className="press-effect ml-auto inline-flex h-8 flex-1 items-center justify-center gap-1 rounded-full bg-ploy-accent-primary px-3 font-app text-xs font-semibold text-white shadow-glow hover:bg-ploy-accent-primary-600"
          >
            Details
            <ArrowRightIcon className="size-3.5" />
          </a>
        )}
      </div>
    </div>
  );
}

/**
 * One event block on the ScheduleGrid, absolutely positioned by the grid.
 * Adapts to its width: full (title, place, time, counts), narrow (title
 * only, counts), very narrow (title turned sideways). Hovering with a mouse
 * opens EventQuickCard in a popover after a short delay; tap or click
 * toggles it on touch. Controlled through the same action props as
 * EventQuickCard.
 */
export function ScheduleEventBlock({
  event,
  category,
  style,
  height,
  hoverDelay = 180,
  ...actions
}: {
  event: ScheduleEvent;
  category: ScheduleCategory;
  style: React.CSSProperties;
  height: number;
  hoverDelay?: number;
} & ScheduleEventActions) {
  const [open, setOpen] = React.useState(false);
  const [w, setW] = React.useState(200);
  const ref = React.useRef<HTMLButtonElement>(null);
  const timer = React.useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  React.useEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([e]) => {
      if (e) setW(e.contentRect.width);
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);
  React.useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const hover = (next: boolean) => (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setOpen(next), next ? hoverDelay : 120);
  };

  const narrow = w < 95;
  const tiny = w < 45;

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <button
          ref={ref}
          type="button"
          style={style}
          onPointerEnter={hover(true)}
          onPointerLeave={hover(false)}
          className={cn(
            "absolute flex flex-col overflow-hidden rounded-xl p-1.5 text-left shadow-app-xs outline-none ring-2 ring-ploy-background-primary transition-[transform,box-shadow] duration-200 hover:z-30 hover:scale-[1.02] hover:shadow-app-md focus-visible:ring-ploy-accent-primary md:p-2",
            open && "z-30 ring-ploy-accent-primary",
            category.className,
          )}
        >
          {tiny ? (
            <span className="m-auto whitespace-nowrap font-app text-xs font-semibold [writing-mode:vertical-rl] rotate-180">{event.title}</span>
          ) : (
            <>
              <span className={cn("font-app text-xs font-semibold leading-tight", narrow ? "line-clamp-3" : "line-clamp-2")}>{event.title}</span>
              {!narrow && (
                <span className="mt-1 flex items-center gap-1 font-body text-[10px] opacity-80">
                  <MapPointIcon className="size-2.5 shrink-0" />
                  <span className="truncate">{event.location}</span>
                </span>
              )}
              {height > 40 && (
                <span className="mt-auto flex items-end justify-between gap-1 pt-1">
                  {height > 60 && !narrow && (
                    <span className="font-body text-[10px] tabular-nums opacity-75">
                      {shortTime(event.start)} to {shortTime(event.end)}
                    </span>
                  )}
                  <span className="ml-auto flex gap-1 font-app text-[9px] font-medium">
                    <span className="inline-flex items-center gap-0.5 rounded-md bg-ploy-background-secondary/60 px-1">
                      <UsersGroupRoundedIcon className="size-2.5" />
                      {event.goingCount ?? 0}
                    </span>
                    <span className="inline-flex items-center gap-0.5 rounded-md bg-ploy-background-secondary/60 px-1">
                      <BookmarkIcon className="size-2.5" />
                      {event.savedCount ?? 0}
                    </span>
                  </span>
                </span>
              )}
            </>
          )}
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          side={typeof window !== "undefined" && window.innerWidth < 640 ? "bottom" : "right"}
          align="start"
          sideOffset={8}
          collisionPadding={12}
          onPointerEnter={hover(true)}
          onPointerLeave={hover(false)}
          onOpenAutoFocus={(e) => e.preventDefault()}
          className="animate-app-slide-up z-50 outline-none"
        >
          <EventQuickCard event={event} category={category} onClose={() => setOpen(false)} {...actions} />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

export interface ScheduleGridProps extends Omit<ScheduleEventActions, "saved" | "going" | "detailsHref"> {
  events: ScheduleEvent[];
  /** Category key → label and colors. Unknown keys use `default`. */
  categories?: Record<string, ScheduleCategory>;
  savedIds?: string[];
  goingIds?: string[];
  /** Build the Details link for an event; omit to hide Details. */
  getDetailsHref?: (event: ScheduleEvent) => string | undefined;
  startHour?: number;
  endHour?: number;
  hourHeight?: number;
  /** Hour to scroll to on mount and whenever events change. */
  scrollToHour?: number;
  /** Shows a pink "now" line when the time falls inside the grid. */
  now?: Date;
  /** Shown instead of the grid when there are no events. */
  empty?: React.ReactNode;
  /** Classes for the scroll area; set its height here. */
  className?: string;
}

/**
 * Day schedule for Event Tracker style apps: scrollable hour rail with
 * faint hour lines, events placed by start/end time, overlapping events
 * side by side (layoutScheduleEvents), pastel colors per category,
 * hover/tap quick-view popups, optional now line and empty state. Pure UI:
 * pass events, categories, savedIds/goingIds and callbacks; filtering, days
 * and data live in the app. Height comes from className (default h-[70vh]).
 */
export function ScheduleGrid({
  events,
  categories = DEFAULT_CATEGORIES,
  savedIds = [],
  goingIds = [],
  getDetailsHref,
  onToggleSave,
  onToggleGoing,
  startHour = 0,
  endHour = 24,
  hourHeight = 80,
  scrollToHour = 8,
  now,
  empty,
  className,
}: ScheduleGridProps) {
  const scroller = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (scroller.current) scroller.current.scrollTop = Math.max(0, (scrollToHour - startHour) * hourHeight - 8);
  }, [events, scrollToHour, startHour, hourHeight]);

  const placed = React.useMemo(() => layoutScheduleEvents(events, { startHour, hourHeight }), [events, startHour, hourHeight]);
  const hours = Array.from({ length: endHour - startHour + 1 }, (_, i) => startHour + i);
  const label = (h: number) => (h % 12 === 0 ? 12 : h % 12) + (h % 24 < 12 ? " AM" : " PM");
  const nowHour = now ? now.getHours() + now.getMinutes() / 60 : null;

  if (!events.length && empty) return <div className={className}>{empty}</div>;

  return (
    <div ref={scroller} className={cn("no-scrollbar relative h-[70vh] overflow-y-auto", className)}>
      <div className="relative" style={{ height: (endHour - startHour) * hourHeight + 24 }}>
        {hours.map((h, i) => (
          <div key={h} className="pointer-events-none absolute inset-x-0 flex border-t border-ploy-border-primary" style={{ top: i * hourHeight + 8 }}>
            <span className="-mt-2.5 w-14 bg-ploy-background-primary pr-2 text-right font-app text-[11px] text-ploy-text-secondary/70">{label(h)}</span>
          </div>
        ))}
        {nowHour !== null && nowHour >= startHour && nowHour <= endHour && (
          <div className="pointer-events-none absolute inset-x-0 z-20 flex items-center pl-14" style={{ top: (nowHour - startHour) * hourHeight + 8 }}>
            <span className="-ml-1 size-2 rounded-full bg-ploy-accent-primary" />
            <span className="h-0.5 flex-1 bg-ploy-accent-primary" />
          </div>
        )}
        <div className="absolute inset-y-0 left-16 right-2 top-2 z-10">
          {placed.map(({ event, top, height, left, width }) => (
            <ScheduleEventBlock
              key={event.id}
              event={event}
              category={categories[event.category ?? "default"] ?? categories.default ?? DEFAULT_CATEGORIES.default}
              height={height}
              style={{ top, height, left: `${left}%`, width: `${width}%` }}
              saved={savedIds.includes(event.id)}
              going={goingIds.includes(event.id)}
              onToggleSave={onToggleSave}
              onToggleGoing={onToggleGoing}
              detailsHref={getDetailsHref?.(event)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
