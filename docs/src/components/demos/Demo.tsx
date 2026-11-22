import React from "react";

// Shared frame for live demos. Demos render the real Junction components
// (styled by the theme loaded in src/theme/Root.tsx) on the cream page
// background, so they look like the real thing. Layout inside demos uses
// inline styles only — no Tailwind classes — so the demo needs nothing
// from the docs site's own CSS.
export function Demo({ label, children }: { label?: string; children: React.ReactNode }) {
  return (
    <div className="junction-demo">
      {label ? <p className="junction-demo-label">{label}</p> : null}
      <div>{children}</div>
    </div>
  );
}

export function Row({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center" }}>{children}</div>
  );
}

export function Stack({ children }: { children: React.ReactNode }) {
  return <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>{children}</div>;
}
