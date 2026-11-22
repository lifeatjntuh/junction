import { createGetUrl } from 'fumadocs-core/source';

export const appName = 'Junction';

// The site is deployed to GitHub Pages under the /junction sub-path
// (https://lifeatjntuh.github.io/junction/). One constant, WITH the
// trailing slash, is the React Router `basename` AND the Vite `base`:
// React Router refuses to start its preview server (which the prerender
// fetches from) unless the basename begins with the base, and '/junction'
// does not begin with '/junction/'. Hand-built URLs join onto it without
// adding another slash (e.g. `${basePath}llms.mdx${page.url}.md`).
export const basePath = '/junction/';
export const docsRoute = '/docs';
export const docsImageRoute = '/og/docs';

export const gitConfig = {
  user: 'lifeatjntuh',
  repo: 'junction',
  branch: 'main',
};

const getImageUrl = createGetUrl(docsImageRoute);

export function getPageImageUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, 'image.webp'];

  return { segments, url: getImageUrl(segments, page.locale) };
}
