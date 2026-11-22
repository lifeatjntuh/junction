import type { Config } from '@react-router/dev/config';
import { glob } from 'node:fs/promises';
import { createGetUrl, getSlugs } from 'fumadocs-core/source';
import { basePath, getPageImageUrl } from './app/lib/shared';

const getUrl = createGetUrl('/docs');

export default {
  ssr: true,
  // Deployed to GitHub Pages at https://lifeatjntuh.github.io/junction/
  basename: basePath,
  async prerender({ getStaticPaths }) {
    const paths: string[] = [];

    // The search index is a static file: /api/search is prerendered from
    // the staticGET loader, so search runs in the browser with no server.
    for (const path of getStaticPaths()) paths.push(path);

    for await (const entry of glob('**/*.{md,mdx}', { cwd: 'content/docs' })) {
      const slugs = getSlugs(entry);

      paths.push(getUrl(slugs));
      paths.push(getPageImageUrl({ slugs }).url);
      // Per-page Markdown (the "Copy as Markdown" button fetches these).
      paths.push(`/llms.mdx${getUrl(slugs)}.md`);
    }

    return paths;
  },
} satisfies Config;
