import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Library build for the published package. The demo site keeps using
// vite.config.ts; this config only builds dist/ for npm.
//
// Outputs:
//   dist/index.js  (ESM) and dist/index.cjs (CJS) — main entry
//   dist/tokens.js    (ESM) and dist/tokens.cjs   (CJS) — tokens-only entry
//   dist/junction.css — the compiled Junction theme (import via
//                       "@lifeatjntuh/junction/theme")
// Type declarations are emitted separately by `tsc -p tsconfig.lib.json`
// into dist/types/.
// React and React DOM stay external (peer dependencies); the other runtime
// dependencies (Radix primitives, vaul, Solar icons, motion, cva, clsx,
// tailwind-merge) are bundled so consumers get a working install with
// no extra peer setup beyond React and Tailwind v4.
//
// "blobmates/react" must also stay external: ProfileCard loads it with a
// dynamic import, and blobmates is an optional peer that is NOT installed
// (it is only listed under peerDependenciesMeta). If Rollup tries to
// resolve that import at build time the lib build fails. Kept external,
// the dynamic import is preserved in the output and BlobmateAvatar falls
// back to its pastel placeholder when blobmates is not installed.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: {
        index: path.resolve(__dirname, "src/index.ts"),
        tokens: path.resolve(__dirname, "src/tokens.ts"),
      },
      formats: ["es", "cjs"],
      fileName: (format, entryName) =>
        `${entryName}.${format === "es" ? "js" : "cjs"}`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime", "blobmates/react"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    cssCodeSplit: false,
    outDir: "dist",
    emptyOutDir: true,
  },
});
