import { cn } from "@/lib/utils";

export interface LogoProps {
  /** light: for cream/pastel backgrounds. dark: for photos and the plum footer. */
  tone?: "light" | "dark";
  /**
   * URL of the logo mark image. The website keeps its mark as a local media
   * asset, so the package does not bundle one — pass your own mark URL
   * (for example the @lifeatjntuh mark). When omitted, only the wordmark
   * renders, so the logo never shows a broken image.
   */
  markSrc?: string;
  className?: string;
}

/**
 * @lifeatjntuh logo: the pink @ ring mark plus the "lifeatjntuh" wordmark in
 * Fredoka with a pink @. tone="light" uses plum text, tone="dark" uses
 * white text.
 */
export function Logo({ tone = "light", markSrc, className }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      {markSrc ? (
        <img src={markSrc} alt="" width={36} height={36} className="size-9 rounded-full bg-white p-0.5" />
      ) : null}
      <span
        className={cn(
          "font-heading text-xl font-semibold tracking-tight md:text-2xl",
          tone === "dark" ? "text-white" : "text-ploy-text-primary",
        )}
      >
        <span className="text-ploy-accent-primary">@</span>lifeatjntuh
      </span>
    </span>
  );
}
