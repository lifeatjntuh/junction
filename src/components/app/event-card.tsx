import { ClockCircleIcon } from "@solar-icons/react/linear/clock-circle";
import { MapPointIcon } from "@solar-icons/react/linear/map-point";
import { Tag, type TagProps } from "@/components/ui/tag";
import { cn } from "@/lib/utils";

export interface EventCardProps {
  title: string;
  place: string;
  time: string;
  description?: string;
  category?: { label: string; tone: NonNullable<TagProps["tone"]> };
  /** Small status chip, e.g. "Draft" or "Sold out". */
  status?: string;
  image?: string;
  /** Alt text for the photo; empty by default (decorative). */
  imageAlt?: string;
  href?: string;
  /**
   * stacked: photo on top (default). row: small photo left, best for phone lists.
   * photo: full-bleed photo with the text on a dark fade (needs image).
   */
  variant?: "stacked" | "row" | "photo";
  className?: string;
}

function Meta({ place, time, onPhoto }: { place: string; time: string; onPhoto?: boolean }) {
  return (
    <div
      className={cn(
        "mt-1.5 flex flex-wrap gap-x-4 gap-y-1 font-body text-[13px] sm:text-sm",
        onPhoto ? "text-white/85" : "text-ploy-text-secondary",
      )}
    >
      <span className="inline-flex min-w-0 items-center gap-1.5">
        <MapPointIcon className="size-4 shrink-0" />
        <span className="truncate">{place}</span>
      </span>
      <span className="inline-flex items-center gap-1.5">
        <ClockCircleIcon className="size-4 shrink-0" />
        {time}
      </span>
    </div>
  );
}

/**
 * Responsive app card for events, stalls and listings. variant "stacked"
 * (default): optional photo on top, tags, Lexend title, place/time, 2-line
 * description. "row": square thumbnail on the left for compact phone
 * lists. "photo": full-bleed picture (4:5 on phones, 4:3 from sm) with
 * category, title and place/time on a dark fade. Pastel category tag and
 * status chip, rounded-app, soft shadow, tap-shrink; works in light and
 * dark mode. Renders a link when href is set.
 */
export function EventCard({
  title,
  place,
  time,
  description,
  category,
  status,
  image,
  imageAlt = "",
  href,
  variant = "stacked",
  className,
}: EventCardProps) {
  const Comp = href ? "a" : "div";
  const tags = (category || status) && (
    <div className="flex flex-wrap gap-1.5">
      {category && (
        <Tag kit="app" size="sm" tone={category.tone}>
          {category.label}
        </Tag>
      )}
      {status && (
        <Tag kit="app" size="sm" tone={variant === "photo" ? "glass" : "muted"}>
          {status}
        </Tag>
      )}
    </div>
  );
  const shell = "press-effect block w-full min-w-0 overflow-hidden rounded-app shadow-app-md";

  if (variant === "photo") {
    return (
      <Comp {...(href ? { href } : {})} className={cn(shell, "relative aspect-[4/5] bg-ploy-neutral-inverse sm:aspect-[4/3]", className)}>
        {image && <img src={image} alt={imageAlt} loading="lazy" className="absolute inset-0 size-full object-cover" />}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
          {tags && <div className="mb-2">{tags}</div>}
          <p className="font-app text-lg font-semibold leading-snug text-white sm:text-xl">{title}</p>
          <Meta place={place} time={time} onPhoto />
          {description && <p className="mt-2 line-clamp-2 font-body text-sm text-white/80">{description}</p>}
        </div>
      </Comp>
    );
  }

  const row = variant === "row";
  return (
    <Comp
      {...(href ? { href } : {})}
      className={cn(shell, "bg-ploy-background-secondary", row && "flex items-stretch gap-3 p-2.5", className)}
    >
      {image && (
        <img
          src={image}
          alt={imageAlt}
          loading="lazy"
          className={row ? "size-20 shrink-0 rounded-xl object-cover sm:size-24" : "aspect-[16/9] w-full object-cover"}
        />
      )}
      <div className={cn("min-w-0", row ? "flex-1 py-0.5 pr-1" : "p-3.5 sm:p-4")}>
        {tags && <div className={row ? "mb-1.5" : "mb-3"}>{tags}</div>}
        <p
          className={cn(
            "font-app font-semibold leading-snug text-ploy-text-primary",
            row ? "truncate text-base" : "text-base sm:text-lg",
          )}
        >
          {title}
        </p>
        <Meta place={place} time={time} />
        {description && !row && <p className="mt-3 line-clamp-2 font-body text-sm text-ploy-text-secondary">{description}</p>}
      </div>
    </Comp>
  );
}
