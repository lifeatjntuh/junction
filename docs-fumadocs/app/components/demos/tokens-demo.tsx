import React from "react";
import { colors, pastels, tokens } from "@lifeatjntuh/junction/tokens";
import { Demo, Stack } from "./Demo";

function Swatch({ name, hex, use }: { name: string; hex: string; use?: string }) {
  const dark = hex === "#fff7ee";
  return (
    <div
      style={{
        background: hex,
        color: dark ? "#1f1235" : "#fff",
        borderRadius: 32,
        padding: 20,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        aspectRatio: "4 / 3",
        // Cream is near-white on the cream page: give it a real border,
        // otherwise only a 6%-opacity hairline shows and the swatch
        // disappears into the background.
        boxShadow: dark
          ? "inset 0 0 0 2px rgb(31 18 53 / 0.22)"
          : "inset 0 0 0 1px rgb(31 18 53 / 0.06)",
      }}
    >
      <p style={{ fontFamily: "Fredoka, sans-serif", fontSize: 20, fontWeight: 600, margin: 0 }}>{name}</p>
      <p style={{ fontSize: 14, opacity: 0.8, margin: 0 }}>{hex}</p>
      {use ? (
        <p style={{ fontSize: 12, opacity: 0.7, margin: 0 }}>{use}</p>
      ) : null}
    </div>
  );
}

const CORE = [
  { name: "Plum", hex: colors.plum, use: "Text, dark panels" },
  { name: "Cream", hex: colors.cream, use: "Page background" },
  { name: "Hot pink", hex: colors.hotPink, use: "Main buttons, highlights" },
  { name: "Orange", hex: colors.orange, use: "Ticker, second accent" },
  { name: "Violet", hex: colors.violet, use: "Small accents only" },
];

export function TokensDemo() {
  return (
    <Stack>
      <Demo label={`Core colours — tokens.colors, e.g. tokens.colors.hotPink is ${tokens.colors.hotPink}`}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: 12 }}>
          {CORE.map((c) => (
            <Swatch key={c.name} {...c} />
          ))}
        </div>
      </Demo>
      <Demo label="Pastels — one pastel per panel or post, never two fighting on one surface">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: 12 }}>
          {(Object.entries(pastels) as [string, string][]).map(([name, hex]) => (
            <Swatch key={name} name={name[0].toUpperCase() + name.slice(1)} hex={hex} />
          ))}
        </div>
      </Demo>
    </Stack>
  );
}
