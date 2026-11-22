import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'react-router';
import { RootProvider } from 'fumadocs-ui/provider/react-router';
import type { Route } from './+types/root';
// The Junction theme FIRST, then the app CSS. Both are Tailwind v4 and
// both emit display utilities into `@layer utilities`, where source
// order decides ties — and the theme's plain `.flex` was landing after
// this file's responsive `hidden` variants, so at the same specificity
// it beat `md:hidden` / `max-lg:hidden` / `max-xl:hidden`: the home
// navbar showed both rows on mobile, the docs TOC leaked on mobile,
// and the docs subnav rendered 0px-tall on desktop. Library first,
// app last, so the app's own utilities (and Tailwind's variant order
// inside them) win.
import '@lifeatjntuh/junction/theme';
import './app.css';
import NotFound from './routes/not-found';
import { isMarkdownPreferred } from 'fumadocs-core/negotiation';
import { docsLlms } from '@/lib/source';
import { basePath } from '@/lib/shared';

export const links: Route.LinksFunction = () => [
  { rel: 'icon', type: 'image/svg+xml', href: `${basePath}favicon.svg` },
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Bricolage+Grotesque:opsz,wght@12..96,800&family=Plus+Jakarta+Sans:wght@400;600;700&family=Lexend:wght@400;500;600&display=swap',
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = 'Oops!';
  let details = 'An unexpected error occurred.';
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) return <NotFound />;
    message = 'Error';
    details = error.statusText;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 w-full max-w-[1400px] mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}

/** serve the files of `docsLlms` at their paths, and docs pages as Markdown to clients that prefer it */
const llmsMiddleware: Route.MiddlewareFunction = async ({ request }) => {
  // Requests arrive with the /junction base path; docsLlms serves by the
  // path without it. (Middleware does not run on a static host — this only
  // matters for the local `pnpm run start` preview server.)
  let { pathname } = new URL(request.url);
  if (pathname.startsWith(basePath)) pathname = `/${pathname.slice(basePath.length)}`;
  const file = await docsLlms.serve(pathname);
  if (file) return file;

  const markdown = isMarkdownPreferred(request) && (await docsLlms.serve(`${pathname}.md`));
  if (markdown) {
    // this URL has two representations, selected by `Accept`
    markdown.headers.set('Vary', 'Accept');
    return markdown;
  }
};

export const middleware = [llmsMiddleware];
