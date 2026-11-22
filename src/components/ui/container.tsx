import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Centered page-width wrapper (max 1320px) with responsive side padding.
 */
export function Container({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8", className)} {...props} />;
}
