import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import { fumadocsMdx } from 'fumadocs-mdx/vite';
import path from 'node:path';
import { basePath } from './app/lib/shared';

export default defineConfig({
  // Deployed to GitHub Pages at https://lifeatjntuh.github.io/junction/
  // — the same trailing-slash base path is the router basename
  // (react-router.config.ts). Both must match: React Router refuses to
  // start its preview server unless the basename begins with the base.
  base: basePath,
  plugins: [fumadocsMdx(), tailwindcss(), reactRouter()],
  resolve: {
    tsconfigPaths: true,
    alias: {
      // blobmates/react is an optional peer of the library, not installed.
      // Point it at an empty module so the dynamic import in ProfileCard
      // resolves and the pastel placeholder renders (see app/lib/blobmates-stub.ts).
      'blobmates/react': path.resolve(import.meta.dirname, './app/lib/blobmates-stub.ts'),
    },
  },
});
