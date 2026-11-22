import { Link } from 'react-router';

/**
 * Site footer — the bird-eye view of the docs. The sidebar is hidden
 * on mobile, so the footer lists EVERY docs article, grouped by
 * section in sidebar order, on every page. Same list as
 * content/docs/all-docs.mdx and the old Docusaurus footer.
 * Internal links are /docs-prefixed (the site lives at /docs).
 */
const groups: { title: string; items: { label: string; to: string; external?: boolean }[] }[] = [
  {
    title: 'Brand',
    items: [
      { label: 'All docs', to: '/docs/all-docs' },
      { label: 'Junction', to: '/docs' },
      { label: 'Brand', to: '/docs/brand' },
      { label: 'Colours', to: '/docs/brand/colours' },
      { label: 'Typography', to: '/docs/brand/typography' },
      { label: 'Logo', to: '/docs/brand/logo' },
      { label: 'Shapes', to: '/docs/brand/shapes' },
      { label: 'Photography', to: '/docs/brand/photography' },
      { label: 'Rules', to: '/docs/brand/rules' },
    ],
  },
  {
    title: 'Design System',
    items: [
      { label: 'Design System', to: '/docs/design-system' },
      { label: 'Installation', to: '/docs/installation' },
      { label: 'Tokens', to: '/docs/tokens' },
      { label: 'Icons', to: '/docs/icons' },
    ],
  },
  {
    title: 'Components A–M',
    items: [
      { label: 'Components', to: '/docs/components' },
      { label: 'Button', to: '/docs/components/button' },
      { label: 'ChipGroup', to: '/docs/components/chip-group' },
      { label: 'Container', to: '/docs/components/container' },
      { label: 'Field', to: '/docs/components/field' },
      { label: 'Heading', to: '/docs/components/heading' },
      { label: 'Input and Textarea', to: '/docs/components/input' },
      { label: 'Logo', to: '/docs/components/logo' },
    ],
  },
  {
    title: 'Components N–Z',
    items: [
      { label: 'Panel', to: '/docs/components/panel' },
      { label: 'Reveal', to: '/docs/components/reveal' },
      { label: 'Sheet', to: '/docs/components/sheet' },
      { label: 'Tabs', to: '/docs/components/tabs' },
      { label: 'Tag', to: '/docs/components/tag' },
      { label: 'Text', to: '/docs/components/text' },
      { label: 'ThemeToggle', to: '/docs/components/theme-toggle' },
      { label: 'Toast', to: '/docs/components/toast' },
    ],
  },
  {
    title: 'Primitives',
    items: [
      { label: 'cn', to: '/docs/components/primitives/cn' },
      { label: 'layoutScheduleEvents', to: '/docs/components/primitives/layout-schedule-events' },
    ],
  },
  {
    title: 'Social Media Kit',
    items: [
      { label: 'Social Media Kit', to: '/docs/social-media-kit' },
      { label: 'Posts', to: '/docs/social-media-kit/posts' },
      { label: 'Carousel', to: '/docs/social-media-kit/carousel' },
      { label: 'Stories', to: '/docs/social-media-kit/stories' },
    ],
  },
  {
    title: 'App Design Kit',
    items: [
      { label: 'App Design Kit', to: '/docs/app-design-kit' },
      { label: 'AppShell', to: '/docs/app-design-kit/app-shell' },
      { label: 'AppState and Skeleton', to: '/docs/app-design-kit/app-state' },
      { label: 'EventCard', to: '/docs/app-design-kit/event-card' },
      { label: 'ProfileCard', to: '/docs/app-design-kit/profile-card' },
      { label: 'BlobmateAvatar', to: '/docs/app-design-kit/blobmate-avatar' },
      { label: 'ScheduleGrid', to: '/docs/app-design-kit/schedule-grid' },
      { label: 'EventQuickCard and ScheduleEventBlock', to: '/docs/app-design-kit/schedule-primitives' },
    ],
  },
  {
    title: 'API reference',
    items: [{ label: 'API reference', to: '/docs/api' }],
  },
  {
    title: 'LifeatJNTUH',
    items: [
      { label: 'Website', to: 'https://lifeatjntuh.web.app', external: true },
      { label: 'Design system', to: 'https://lifeatjntuh.web.app/design-system', external: true },
      { label: 'GitHub', to: 'https://github.com/lifeatjntuh/junction', external: true },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer
      className="w-full px-6 py-10 md:px-10"
      style={{ backgroundColor: '#1f1235', color: '#fff7ee' }}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
        {groups.map((g) => (
          <div key={g.title}>
            <p className="mb-3 text-sm font-bold uppercase tracking-wide" style={{ color: '#ff6a1f' }}>
              {g.title}
            </p>
            <ul className="flex flex-col gap-2 text-sm">
              {g.items.map((item) =>
                item.external ? (
                  <li key={item.label}>
                    <a
                      href={item.to}
                      target="_blank"
                      rel="noreferrer"
                      className="opacity-80 hover:opacity-100 hover:underline"
                    >
                      {item.label}
                    </a>
                  </li>
                ) : (
                  <li key={item.label}>
                    <Link to={item.to} className="opacity-80 hover:opacity-100 hover:underline">
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>
        ))}
      </div>
      <p className="mx-auto mt-10 max-w-6xl border-t pt-6 text-center text-sm opacity-70" style={{ borderColor: 'rgb(255 247 238 / 0.15)' }}>
        Junction — the brand design guidelines for LifeatJNTUH. Built with
        Fumadocs.
      </p>
    </footer>
  );
}
