import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Junction — the LifeatJNTUH design system. Colours, type and components for campus apps."
    >
      <header className="junction-hero">
        <Heading as="h1">Junction</Heading>
        <p>
          The shared design system for LifeatJNTUH — Plum, Cream and Hot
          pink, Fredoka headlines, and the components behind the website,
          Event Tracker and Buddy apps.
        </p>
        <div className="buttons">
          <Link className="button button--primary button--lg" to="/installation">
            Install Junction
          </Link>
          <Link className="button button--secondary button--lg" to="/tokens">
            See the tokens
          </Link>
        </div>
      </header>
      <main className="container margin-vert--lg">
        <div className="row">
          <div className="col col--4">
            <Heading as="h2">Install in one line</Heading>
            <p>
              <code>npm install @lifeatjntuh/junction</code> — then import
              the theme and the components you need. Tree-shakeable ESM and
              CJS with TypeScript types.
            </p>
            <Link to="/installation">Installation →</Link>
          </div>
          <div className="col col--4">
            <Heading as="h2">14 UI parts + app kit</Heading>
            <p>
              Buttons, panels, tags, fields, tabs, sheets, toasts and more —
              plus AppShell, EventCard, ProfileCard and ScheduleGrid for app
              screens.
            </p>
            <Link to="/components/button">Browse components →</Link>
          </div>
          <div className="col col--4">
            <Heading as="h2">LLM-friendly docs</Heading>
            <p>
              Every page has a <strong>Copy as Markdown</strong> button, and
              the whole docs set is available as{" "}
              <code>llms.txt</code> and <code>llms-full.txt</code> — paste
              them straight into an AI chat.
            </p>
            <a href="https://lifeatjntuh.github.io/junction/llms.txt">
              Read llms.txt →
            </a>
          </div>
        </div>
      </main>
    </Layout>
  );
}
