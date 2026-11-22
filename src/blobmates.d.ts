/**
 * Ambient types for the optional `blobmates` peer dependency.
 *
 * ProfileCard's BlobmateAvatar loads `blobmates/react` with a dynamic
 * import, so the package works without `blobmates` installed (the avatar
 * falls back to a pastel placeholder). This declaration keeps TypeScript
 * happy in that case; when `blobmates` is installed, its own types take
 * precedence for the real module.
 */
declare module "blobmates/react" {
  import type * as React from "react";

  export interface LiveBlobmateProps {
    seed: string;
    size?: number;
    pins?: Record<string, unknown>;
    motion?: "none" | "follow" | "idle";
    mood?: string;
    roam?: boolean;
    react?: boolean;
  }

  export const LiveBlobmate: React.ComponentType<LiveBlobmateProps>;
}
