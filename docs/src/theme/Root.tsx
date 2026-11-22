import React from "react";
import "@lifeatjntuh/junction/theme";
import { ToastProvider } from "@lifeatjntuh/junction";

// Docusaurus custom Root: loads the compiled Junction theme stylesheet
// (dist/style.css from the built package) once for the whole docs site,
// so every live demo renders with the real Junction styling. It also
// provides ToastProvider, so toast demos work on any page.
// Requires `pnpm run build:lib` at the repo root before `pnpm --dir docs run build`.
export default function Root({ children }: { children: React.ReactNode }) {
  return <ToastProvider>{children}</ToastProvider>;
}
