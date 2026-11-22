import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Junction — the brand design guidelines for LifeatJNTUH. Colours, type, logo, photography and rules, with the design system, the Social Media Kit and the App Design Kit as parts of it."
    >
      <header className="junction-hero">
        <Heading as="h1">Junction</Heading>
        <p>
          The brand design guidelines for LifeatJNTUH — one look for the
          site, our socials and our apps. The design system is one part of
          it, alongside the Social Media Kit and the App Design Kit.
        </p>
        <div className="buttons">
          <Link className="button button--primary button--lg" to="/brand">
            Read the brand guidelines
          </Link>
          <Link className="button button--secondary button--lg" to="/design-system">
            See the design system
          </Link>
        </div>
      </header>
      <main className="container margin-vert--lg">
        <div className="row">
          <div className="col col--4">
            <Heading as="h2">Brand</Heading>
            <p>
              Plum, cream and hot pink; Fredoka, Bricolage Grotesque, Plus
              Jakarta Sans and Lexend; the @lifeatjntuh logo and pill; real
              campus photos, always credited — and the do&apos;s and
              don&apos;ts every post follows.
            </p>
            <Link to="/brand">Brand guidelines →</Link>
          </div>
          <div className="col col--4">
            <Heading as="h2">Design System</Heading>
            <p>
              The <code>@lifeatjntuh/junction</code> package: every
              component and primitive with a live demo of the actual UI,
              plus tokens, theme and icons.
            </p>
            <Link to="/design-system">Browse components →</Link>
          </div>
          <div className="col col--4">
            <Heading as="h2">Social Media Kit</Heading>
            <p>
              The social-studio Content Creation Studio: post, carousel
              and story templates — Photo of the Day, full-bleed photos,
              LifeOps role calls.
            </p>
            <Link to="/social-media-kit">Social Media Kit →</Link>
          </div>
        </div>
        <div className="row margin-top--lg">
          <div className="col col--4">
            <Heading as="h2">App Design Kit</Heading>
            <p>
              AppShell, EventCard, ProfileCard, ScheduleGrid and the
              app-kit guidance — Lexend, softer shadows, tap feedback,
              Solar icons, phone-width layouts.
            </p>
            <Link to="/app-design-kit">App Design Kit →</Link>
          </div>
          <div className="col col--4">
            <Heading as="h2">Install in one line</Heading>
            <p>
              <code>pnpm add @lifeatjntuh/junction</code> — then import
              the theme and the components you need. Tree-shakeable ESM and
              CJS with TypeScript types.
            </p>
            <Link to="/installation">Installation →</Link>
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
