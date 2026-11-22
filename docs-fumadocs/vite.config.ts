import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import { fumadocsMdx } from 'fumadocs-mdx/vite';
import path from 'node:path';

export default defineConfig({
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
