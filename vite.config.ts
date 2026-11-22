import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      // blobmates/react is an optional peer loaded with a dynamic import
      // in ProfileCard and is NOT installed. If Rollup tries to resolve
      // it, the build fails; kept external, the import is preserved and
      // BlobmateAvatar falls back to its pastel placeholder.
      external: ["blobmates/react"],
    },
  },
  server: {
    port: 5173,
  },
});
