import * as React from "react";
import { UsersGroupRoundedIcon } from "@solar-icons/react/linear/users-group-rounded";
import { CheckCircleIcon } from "@solar-icons/react/bold/check-circle";
import { MapPointIcon } from "@solar-icons/react/linear/map-point";
import { Tag, type TagProps } from "@/components/ui/tag";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";
import type { LiveBlobmateProps } from "blobmates/react";

export interface BlobmateAvatarProps {
  seed: string;
  size?: number;
  pins?: Record<string, unknown>;
  motion?: "none" | "follow" | "idle";
  mood?: string;
  roam?: boolean;
  react?: boolean;
  className?: string;
  height?: number | string;
}

/**
 * Client-safe interactive Blobmate wrapper with roam, pointer-follow, and
 * tap reactions. Renders a graceful pastel placeholder during SSR and
 * hydration to prevent window errors during static generation.
 *
 * `blobmates` is an optional peer dependency: it is only loaded (via a
 * dynamic import) when this avatar renders. Without it installed, the
 * placeholder shows instead of the animated avatar.
 */
export function BlobmateAvatar({
  seed,
  size,
  pins = { body: "circle" },
  motion = "follow",
  mood,
  roam = true,
  react = true,
  className,
  height = 220,
}: BlobmateAvatarProps) {
  const [MountedBlobmate, setMountedBlobmate] = React.useState<React.ComponentType<LiveBlobmateProps> | null>(null);

  React.useEffect(() => {
    let active = true;
    import("blobmates/react")
      .then((mod) => {
        if (active && mod.LiveBlobmate) {
          setMountedBlobmate(() => mod.LiveBlobmate);
        }
      })
      .catch((err) => {
        console.warn("Could not load blobmates/react:", err);
      });
    return () => {
      active = false;
    };
  }, []);

  const effectiveSize = size ?? (typeof height === "number" ? Math.min(height * 0.72, 130) : 115);

  return (
    <div
      style={{ height }}
      className={cn(
        "relative w-full flex items-center justify-center overflow-hidden select-none transition-all duration-300",
        className,
      )}
    >
      {MountedBlobmate ? (
        <MountedBlobmate
          seed={seed}
          size={effectiveSize}
          pins={pins}
          motion={motion}
          mood={mood}
          roam={roam}
          react={react}
        />
      ) : (
        <div className="flex size-full items-center justify-center rounded-2xl bg-ploy-accent-primary/10 transition-colors">
          <div className="flex size-14 items-center justify-center rounded-full bg-ploy-accent-primary/20 font-heading text-lg font-bold text-ploy-accent-primary animate-pulse">
            {seed.slice(0, 2).toUpperCase()}
          </div>
        </div>
      )}
    </div>
  );
}

export interface ProfileCardProps {
  name: string;
  handle: string;
  seed?: string;
  pins?: Record<string, unknown>;
  motion?: "none" | "follow" | "idle";
  mood?: string;
  roam?: boolean;
  react?: boolean;
  /** Campus vibe status badge (e.g. { icon: "solar:cup-hot-bold", text: "Canteen run" }) */
  vibeStatus?: { icon?: string; text: string };
  /** Role badge (e.g. LifeOps Curate, Class Rep) */
  badge?: { label: string; tone?: NonNullable<TagProps["tone"]> };
  campus?: string;
  branch?: string;
  bio?: string;
  tags?: string[];
  stats?: {
    events?: number;
    mates?: number;
    karma?: string | number;
  };
  isMate?: boolean;
  onToggleMate?: () => void;
  onPing?: () => void;
  /**
   * card: Standard mobile profile card with blobmate stage on top (default).
   * compact: Streamlined horizontal row for friend lists & directories.
   * hero: Expanded showcase card with full-bleed blobmate canvas and high-contrast badges.
   */
  variant?: "card" | "compact" | "hero";
  className?: string;
}

/**
 * Informal college community profile card for student buddies. Uses
 * interactive LiveBlobmate for animated avatars that roam, blink, follow
 * cursor, and react to taps. Features college vibe badges, branch/year
 * chips, campus bio, karma/mates stats, and an interactive Add Mate toggle.
 */
export function ProfileCard({
  name,
  handle,
  seed,
  pins = { body: "circle" },
  motion = "follow",
  mood,
  roam = true,
  react = true,
  vibeStatus,
  badge,
  campus = "JNTUH CEH",
  branch = "CSE '26",
  bio,
  tags = [],
  stats,
  isMate: controlledIsMate,
  onToggleMate,
  onPing,
  variant = "card",
  className,
}: ProfileCardProps) {
  const avatarSeed = seed || handle || name;
  const [internalIsMate, setInternalIsMate] = React.useState(false);
  const [pinged, setPinged] = React.useState(false);

  const isMate = controlledIsMate !== undefined ? controlledIsMate : internalIsMate;

  const handleToggle = () => {
    if (onToggleMate) {
      onToggleMate();
    } else {
      setInternalIsMate(!internalIsMate);
    }
  };

  const handlePing = () => {
    setPinged(true);
    if (onPing) onPing();
    window.setTimeout(() => setPinged(false), 2000);
  };

  // --- Compact Variant (List Row) ---
  if (variant === "compact") {
    return (
      <div
        className={cn(
          "flex items-center gap-4 rounded-[1.5rem] bg-ploy-background-secondary p-4 sm:p-5 shadow-app-xs border border-ploy-border-primary/40 transition-all duration-200 hover:shadow-app-md",
          className,
        )}
      >
        {/* Contained Avatar Thumbnail */}
        <div className="relative size-16 shrink-0 overflow-hidden rounded-2xl bg-ploy-background-primary/80 ring-1 ring-ploy-border-primary/50 flex items-center justify-center p-1">
          <BlobmateAvatar
            seed={avatarSeed}
            size={48}
            pins={pins}
            motion={motion}
            mood={mood}
            roam={false}
            react={react}
            height={50}
          />
        </div>

        {/* Info */}
        <div className="min-w-0 flex-1 flex flex-col justify-center gap-1.5 pr-2">
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
            <span className="font-app text-sm font-bold tracking-tight text-ploy-text-primary leading-snug sm:text-base">
              {name}
            </span>
            {badge && (
              <Tag kit="app" size="sm" tone={badge.tone ?? "lime"} className="shrink-0 leading-none">
                {badge.label}
              </Tag>
            )}
          </div>
          <p className="truncate font-body text-xs text-ploy-text-secondary leading-relaxed">
            {handle} • {branch}
          </p>
          {vibeStatus && (
            <p className="flex items-center gap-1.5 truncate font-body text-xs text-ploy-accent-primary font-medium leading-relaxed">
              {vibeStatus.icon && <Icon icon={vibeStatus.icon} className="size-3.5 shrink-0" />}
              <span className="truncate">{vibeStatus.text}</span>
            </p>
          )}
        </div>

        {/* Add Mate Button */}
        <button
          type="button"
          onClick={handleToggle}
          className={cn(
            "press-effect shrink-0 inline-flex items-center gap-1.5 rounded-full px-4 py-2 font-app text-xs font-semibold transition-all duration-200",
            isMate
              ? "bg-ploy-background-primary text-ploy-text-secondary ring-1 ring-ploy-border-primary"
              : "bg-ploy-accent-primary text-white shadow-app-xs hover:bg-ploy-accent-primary-600",
          )}
        >
          {isMate ? (
            <>
              <CheckCircleIcon className="size-3.5 text-emerald-500 shrink-0" />
              <span>Mates</span>
            </>
          ) : (
            <>
              <UsersGroupRoundedIcon className="size-3.5 shrink-0" />
              <span>Add</span>
            </>
          )}
        </button>
      </div>
    );
  }

  // --- Standard & Hero Variants ---
  const isHero = variant === "hero";

  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-[1.75rem] bg-ploy-background-secondary border border-ploy-border-primary/40 shadow-app-md transition-all duration-300 hover:shadow-app-lg",
        isHero ? "p-5 sm:p-6" : "p-4 sm:p-5",
        className,
      )}
    >
      {/* Top Blobmate Stage */}
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl bg-ploy-background-primary/80 ring-1 ring-ploy-border-primary/50",
          isHero ? "h-64 sm:h-72" : "h-52 sm:h-56",
        )}
      >
        {/* Playful Vibe Badge */}
        {vibeStatus && (
          <div className="absolute left-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-ploy-background-secondary/90 backdrop-blur-md px-3 py-1 font-app text-[11px] font-semibold text-ploy-text-primary shadow-app-xs ring-1 ring-ploy-border-primary/40">
            {vibeStatus.icon && <Icon icon={vibeStatus.icon} className="size-3.5 text-ploy-accent-primary shrink-0" />}
            <span>{vibeStatus.text}</span>
          </div>
        )}

        {/* Poke Hint */}
        <div className="pointer-events-none absolute right-3 top-3 z-10 inline-flex items-center gap-1 rounded-full bg-black/40 backdrop-blur-sm px-2.5 py-0.5 font-app text-[9px] font-medium text-white/90 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <Icon icon="solar:eye-linear" className="size-3" />
          <span>tap to poke</span>
        </div>

        {/* Live Blobmate Avatar */}
        <BlobmateAvatar
          seed={avatarSeed}
          size={isHero ? 135 : 110}
          pins={pins}
          motion={motion}
          mood={mood}
          roam={roam}
          react={react}
          height="100%"
        />
      </div>

      {/* Profile Details */}
      <div className="mt-4 flex flex-col flex-1">
        {/* Name, Handle & Role */}
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <h3 className="truncate font-app text-lg font-bold tracking-tight text-ploy-text-primary sm:text-xl">
                {name}
              </h3>
              {badge && (
                <Tag kit="app" size="sm" tone={badge.tone ?? "pinkSoft"} className="shrink-0">
                  {badge.label}
                </Tag>
              )}
            </div>
            <p className="font-body text-xs font-medium text-ploy-text-secondary sm:text-sm">
              {handle}
            </p>
          </div>
        </div>

        {/* College & Branch Meta */}
        <div className="mt-2 flex items-center gap-2 font-body text-xs text-ploy-text-secondary">
          <span className="inline-flex items-center gap-1">
            <MapPointIcon className="size-3.5 text-ploy-accent-primary" />
            <span className="font-medium text-ploy-text-primary">{campus}</span>
          </span>
          <span>•</span>
          <span className="rounded-md bg-ploy-background-primary/80 px-1.5 py-0.5 font-app text-[11px] font-semibold text-ploy-text-secondary">
            {branch}
          </span>
        </div>

        {/* Informal Bio */}
        {bio && (
          <p className="mt-2.5 font-body text-xs leading-relaxed text-ploy-text-secondary/90 sm:text-sm line-clamp-2">
            {bio}
          </p>
        )}

        {/* Interest / Vibe Tags (Consistent Height Slot) */}
        {tags.length > 0 && (
          <div className="mt-3.5 min-h-[64px] flex flex-wrap content-start gap-1.5">
            {tags.map((tag, idx) => {
              const tones: NonNullable<TagProps["tone"]>[] = ["lime", "blue", "yellow", "pinkSoft", "lavender", "peach"];
              const tone = tones[idx % tones.length];
              return (
                <Tag key={tag} kit="app" size="sm" tone={tone}>
                  #{tag}
                </Tag>
              );
            })}
          </div>
        )}

        {/* Pinned Bottom Group: Stats & Actions */}
        <div className="mt-auto pt-3">
          {/* Stats Row */}
          {stats && (
            <div className="grid grid-cols-3 divide-x divide-ploy-border-primary/60 rounded-xl bg-ploy-background-primary/60 p-2 text-center">
              {stats.mates !== undefined && (
                <div className="px-1">
                  <p className="font-app text-xs font-bold text-ploy-text-primary">{stats.mates}</p>
                  <p className="font-body text-[10px] text-ploy-text-secondary">Mates</p>
                </div>
              )}
              {stats.events !== undefined && (
                <div className="px-1">
                  <p className="font-app text-xs font-bold text-ploy-text-primary">{stats.events}</p>
                  <p className="font-body text-[10px] text-ploy-text-secondary">Events</p>
                </div>
              )}
              {stats.karma !== undefined && (
                <div className="px-1">
                  <p className="flex items-center justify-center gap-1 font-app text-xs font-bold text-ploy-accent-primary">
                    <Icon icon="solar:star-fall-bold" className="size-3 text-amber-500" />
                    <span>{stats.karma}</span>
                  </p>
                  <p className="font-body text-[10px] text-ploy-text-secondary">Sparks</p>
                </div>
              )}
            </div>
          )}

          {/* Action Buttons */}
          <div className="mt-4 flex items-center gap-2 pt-2 border-t border-ploy-border-primary/40">
            <Button
              kit="app"
              size="sm"
              onClick={handleToggle}
              variant={isMate ? "secondary" : "primary"}
              className={cn("flex-1 min-w-0 transition-all duration-200", isMate && "bg-ploy-background-primary")}
            >
              {isMate ? (
                <>
                  <CheckCircleIcon className="size-4 text-emerald-500 shrink-0" />
                  <span className="truncate">Mates</span>
                </>
              ) : (
                <>
                  <UsersGroupRoundedIcon className="size-4 shrink-0" />
                  <span className="truncate">+ Add Mate</span>
                </>
              )}
            </Button>

            {/* Compact Icon Wave Button - Never Overflows Card */}
            <Button
              kit="app"
              size="sm"
              variant="soft"
              onClick={handlePing}
              className="size-9 shrink-0 p-0 inline-flex items-center justify-center rounded-xl"
              title="Send wave"
              aria-label="Send wave"
            >
              <Icon
                icon={pinged ? "solar:hand-shake-bold" : "solar:hand-shake-linear"}
                className={cn(
                  "size-4 text-ploy-accent-primary transition-transform duration-300",
                  pinged && "scale-125 rotate-12",
                )}
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
