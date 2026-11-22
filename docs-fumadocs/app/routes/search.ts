import type { Route } from './+types/search';
import { createFromSource } from 'fumadocs-core/search/server';
import { source } from '@/lib/source';
import { basePath } from '@/lib/shared';

const server = createFromSource(source, {
  // https://docs.orama.com/docs/orama-js/supported-languages
  language: 'english',
});

export async function loader() {
  // Static search: the index is exported at build time and prerendered
  // as a file, so search runs in the browser with no server (GitHub Pages).
  return server.staticGET();
}

// The search route is prerendered (see react-router.config.ts) so the
// exported index exists as a static file at ${basePath}/api/search.
