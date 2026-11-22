import type { Route } from './+types/home';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { Link } from 'react-router';
import { baseOptions } from '@/lib/layout.shared';
import { Button, Heading, Panel } from '@lifeatjntuh/junction';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Junction — the brand design guidelines for LifeatJNTUH' },
    {
      name: 'description',
      content:
        'Junction is the brand design guidelines for LifeatJNTUH — colours, type, logo, voice and photography first, with the design system, Social Media Kit and App Design Kit inside it.',
    },
  ];
}

const sections = [
  {
    title: 'Brand',
    to: '/docs/brand/colours',
    body: 'Colours, typography, logo, shapes, photography and the rules — what LifeatJNTUH looks and sounds like.',
    bg: '#ffc9e6',
  },
  {
    title: 'Design System',
    to: '/docs/components/button',
    body: 'The components and primitives as an npm package — every one with a live demo, props and usage.',
    bg: '#dcf58a',
  },
  {
    title: 'API reference',
    to: '/docs/api',
    body: 'Every entry point of @lifeatjntuh/junction — the package surface, tokens and theme.',
    bg: '#c9e0ff',
  },
];

export default function Home() {
  return (
    <HomeLayout {...baseOptions()}>
      <div
        className="flex flex-col items-center text-center px-6 py-20"
        style={{ backgroundColor: '#1f1235', color: '#fff7ee' }}
      >
        <p
          className="text-sm font-bold tracking-wide uppercase mb-4"
          style={{ color: '#ff6a1f' }}
        >
          LifeatJNTUH
        </p>
        <h1
          className="font-bold leading-none mb-4"
          style={{ fontFamily: 'Fredoka, sans-serif', fontSize: '3.5rem' }}
        >
          Junction
        </h1>
        <p className="max-w-[680px] text-lg mb-8" style={{ color: '#fff7ee' }}>
          The brand design guidelines for LifeatJNTUH. Colours, type, logo,
          voice and photography first — the design system is a part of it,
          not the whole of it.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link to="/docs">
            <Button>Read the guidelines</Button>
          </Link>
          <Link to="/docs/components/button">
            <Button variant="secondary">See a component</Button>
          </Link>
        </div>
      </div>

      <div className="w-full max-w-5xl mx-auto px-6 py-12 grid gap-6 md:grid-cols-3">
        {sections.map((s) => (
          <Link key={s.to} to={s.to}>
            <Panel
              className="h-full p-6 text-left"
              style={{ backgroundColor: s.bg }}
            >
              <Heading as="h3" size="sm" className="mb-2">
                {s.title}
              </Heading>
              <p className="text-sm">{s.body}</p>
            </Panel>
          </Link>
        ))}
      </div>

      <p className="text-center text-sm text-fd-muted-foreground pb-12 px-6">
        Prototype — four pages only (home, Brand colours, Button, API). The
        live docs site is still Docusaurus while this is evaluated.
      </p>
    </HomeLayout>
  );
}
