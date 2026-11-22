import { Button, colors, pastels } from '@lifeatjntuh/junction';
import { ArrowRightIcon } from '@solar-icons/react/linear/arrow-right';

/**
 * Live Button demo — the real Button from @lifeatjntuh/junction,
 * rendered in the docs page. Same showcase as the Docusaurus docs.
 */
export function ButtonDemo() {
  return (
    <div className="flex flex-col gap-6 not-prose my-6">
      <div>
        <p className="text-sm font-semibold mb-2">Variants</p>
        <div className="flex flex-wrap gap-2">
          <Button>Join LifeOps</Button>
          <Button variant="secondary">Learn more</Button>
          <Button variant="dark">View events</Button>
          <Button variant="soft">Share</Button>
          <Button variant="ghost">Skip</Button>
          <Button variant="link">Text link</Button>
          <Button variant="danger">Delete</Button>
          <Button variant="google">Sign in with Google</Button>
        </div>
      </div>
      <div>
        <p className="text-sm font-semibold mb-2">Sizes</p>
        <div className="flex flex-wrap items-center gap-2">
          <Button size="xs">Extra small</Button>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </div>
      <div>
        <p className="text-sm font-semibold mb-2">
          With an icon, disabled, and app kit
        </p>
        <div className="flex flex-wrap gap-2">
          <Button>
            See all events <ArrowRightIcon />
          </Button>
          <Button disabled>Disabled</Button>
          <Button kit="app">App primary</Button>
          <Button kit="app" variant="secondary">
            App secondary
          </Button>
        </div>
      </div>
    </div>
  );
}

/** Live colour swatches, straight from the typed tokens. */
export function ColourSwatches() {
  const core = Object.entries(colors) as [string, string][];
  const pastel = Object.entries(pastels) as [string, string][];
  return (
    <div className="flex flex-col gap-6 not-prose my-6">
      <div>
        <p className="text-sm font-semibold mb-2">Core colours</p>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {core.map(([name, hex]) => (
            <div key={name}>
              <div
                className="h-16 rounded-2xl border border-fd-border"
                style={{ backgroundColor: hex }}
              />
              <p className="text-sm font-semibold capitalize mt-2">{name}</p>
              <p className="text-xs text-fd-muted-foreground">
                <code>{hex}</code>
              </p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="text-sm font-semibold mb-2">Pastels</p>
        <div className="grid grid-cols-2 sm:grid-cols-6 gap-3">
          {pastel.map(([name, hex]) => (
            <div key={name}>
              <div
                className="h-16 rounded-2xl border border-fd-border"
                style={{ backgroundColor: hex }}
              />
              <p className="text-sm font-semibold capitalize mt-2">{name}</p>
              <p className="text-xs text-fd-muted-foreground">
                <code>{hex}</code>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
