import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Panel } from "@/components/ui/panel";
import { Tag } from "@/components/ui/tag";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Field, Input, Textarea } from "@/components/ui/field";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChipGroup } from "@/components/ui/chip-group";
import { useToast } from "@/components/ui/toast";
import { EventCard } from "@/components/app/event-card";
import { AppState } from "@/components/app/app-states";
import { colors, pastels, tokens } from "@/tokens";

const CORE = [
  { name: "Plum", hex: colors.plum, use: "Text, dark panels" },
  { name: "Cream", hex: colors.cream, use: "Page background" },
  { name: "Hot pink", hex: colors.hotPink, use: "Main buttons, highlights" },
  { name: "Orange", hex: colors.orange, use: "Ticker, second accent" },
  { name: "Violet", hex: colors.violet, use: "Small accents only" },
];

const PASTEL_LIST = [
  { name: "Pink", hex: pastels.pink },
  { name: "Lime", hex: pastels.lime },
  { name: "Blue", hex: pastels.blue },
  { name: "Yellow", hex: pastels.yellow },
  { name: "Lavender", hex: pastels.lavender },
  { name: "Peach", hex: pastels.peach },
];

function Section({ id, title, intro, children }: { id: string; title: string; intro?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-8 border-t border-ploy-border-primary py-12">
      <Heading size="md">{title}</Heading>
      {intro ? (
        <Text tone="muted" className="mt-3 max-w-2xl">
          {intro}
        </Text>
      ) : null}
      <div className="mt-8">{children}</div>
    </section>
  );
}

function ToastDemo() {
  const toast = useToast();
  return (
    <div className="flex flex-wrap gap-2">
      <Button kit="app" size="sm" variant="secondary" onClick={() => toast({ title: "Saved to your schedule", tone: "success" })}>
        Success toast
      </Button>
      <Button kit="app" size="sm" variant="secondary" onClick={() => toast({ title: "Couldn't save", description: "Check your connection and try again.", tone: "error" })}>
        Error toast
      </Button>
    </div>
  );
}

/** Demo page for the package. Not shipped in the npm package. */
export function Showcase() {
  const [chip, setChip] = useState<string | null>(null);
  const [name, setName] = useState("");
  return (
    <div>
      <Section id="colors" title="Colors" intro="Plum and cream do most of the work. Hot pink is the one loud color; pastels fill panels and backgrounds.">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {CORE.map((c) => (
            <div
              key={c.name}
              className="flex aspect-[4/3] flex-col justify-end rounded-card p-5"
              style={{ background: c.hex, color: c.name === "Cream" ? colors.plum : "#fff" }}
            >
              <p className="font-heading text-xl font-semibold">{c.name}</p>
              <p className="font-body text-sm opacity-80">{c.hex}</p>
              <p className="font-body text-xs opacity-70">{c.use}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 grid grid-cols-3 gap-3 lg:grid-cols-6">
          {PASTEL_LIST.map((p) => (
            <div key={p.name} className="flex aspect-square flex-col justify-end rounded-card p-5" style={{ background: p.hex }}>
              <p className="font-heading text-lg font-semibold">{p.name}</p>
              <p className="font-body text-xs text-ploy-text-secondary">{p.hex}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="type" title="Type" intro="Two headline fonts with clear jobs, and one body font for everything else.">
        <div className="grid gap-4 lg:grid-cols-3">
          <Panel color="white" className="flex flex-col">
            <Tag tone="dark" size="sm" className="self-start">Website headlines</Tag>
            <p className="mt-6 font-heading text-6xl font-bold leading-[0.95]">Find your people</p>
            <Text size="sm" tone="muted" className="mt-auto pt-8">
              Fredoka, 600 to 700. Sentence case. Friendly and soft.
            </Text>
          </Panel>
          <Panel color="dark" className="flex flex-col">
            <Tag tone="pink" size="sm" className="self-start">Social headlines</Tag>
            <Heading as="p" font="grotesk" size="xl" className="mt-6 text-white">
              Open mic night
            </Heading>
            <Text size="sm" tone="inverse-muted" className="mt-auto pt-8">
              Bricolage Grotesque, extra bold, condensed, all caps. Keep it under six words.
            </Text>
          </Panel>
          <Panel color="white" className="flex flex-col">
            <Tag tone="dark" size="sm" className="self-start">Body and buttons</Tag>
            <p className="mt-6 font-body text-2xl font-medium leading-snug">
              Club events, campus photos, creator shoutouts and buddy apps. All in one place.
            </p>
            <Text size="sm" tone="muted" className="mt-auto pt-8">
              Plus Jakarta Sans, 400 for text, 600 to 700 for buttons, chips and labels.
            </Text>
          </Panel>
        </div>
      </Section>

      <Section id="components" title="Website parts" intro="The same Button, Panel, Tag, Field and Tabs the website uses.">
        <div className="flex flex-wrap gap-2">
          <Button>Join LifeOps</Button>
          <Button variant="secondary">Browse events</Button>
          <Button variant="dark">Open map</Button>
          <Button variant="soft">Share</Button>
          <Button variant="ghost">Skip</Button>
          <Button variant="danger" size="sm">Cancel</Button>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <Tag tone="pink">Music</Tag>
          <Tag tone="blue">Workshops</Tag>
          <Tag tone="lime">Sports</Tag>
          <Tag tone="peach">Food</Tag>
          <Tag tone="muted">Draft</Tag>
          <Tag tone="role">Organizer</Tag>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Panel color="pink">
            <Field label="Event name" htmlFor="demo-name" description="Shown on the schedule and in search.">
              <Input placeholder="Founders' Night" value={name} onChange={(e) => setName(e.target.value)} />
            </Field>
          </Panel>
          <Panel color="lime">
            <Field label="About" htmlFor="demo-about">
              <Textarea placeholder="What's happening, who it's for." />
            </Field>
          </Panel>
        </div>
        <div className="mt-8">
          <Tabs defaultValue="d1">
            <TabsList>
              <TabsTrigger value="d1">Day 1</TabsTrigger>
              <TabsTrigger value="d2">Day 2</TabsTrigger>
              <TabsTrigger value="d3">Day 3</TabsTrigger>
            </TabsList>
            <TabsContent value="d1">
              <Text size="sm">Pill tabs, for day switchers in Event Tracker.</Text>
            </TabsContent>
            <TabsContent value="d2">
              <Text size="sm">Day 2 content goes here.</Text>
            </TabsContent>
            <TabsContent value="d3">
              <Text size="sm">Day 3 content goes here.</Text>
            </TabsContent>
          </Tabs>
        </div>
      </Section>

      <Section id="app" title="App kit" intro="Lexend, app shadows, and the parts for Event Tracker and Buddy apps.">
        <ChipGroup
          label="Filter by category"
          allLabel="All events"
          options={["Music", "Workshops", "Sports", "Food"]}
          value={chip}
          onChange={setChip}
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <EventCard
            title="Founders' Night"
            place="Main stage"
            time="Today, 7:00 PM"
            description="An evening with the people who started it all — stories, music and food under the big tree."
            category={{ label: "Music", tone: "pinkSoft" }}
          />
          <Panel color="cream" className="space-y-6">
            <div>
              <p className="font-app text-base font-semibold">Toasts</p>
              <Text size="sm" tone="muted" className="mt-1">Plum pill-cards that slide up and hide after 3.5s.</Text>
              <div className="mt-4">
                <ToastDemo />
              </div>
            </div>
            <AppState title="Nothing here" body="No events in this category today." />
          </Panel>
        </div>
        <Panel color="white" className="mt-4">
          <Text size="sm" tone="muted">
            Tokens in code: <code className="font-mono text-sm text-ploy-text-primary">tokens.colors.hotPink</code> is{" "}
            <code className="font-mono text-sm text-ploy-text-primary">{tokens.colors.hotPink}</code>, and{" "}
            <code className="font-mono text-sm text-ploy-text-primary">tokens.fonts.app</code> is{" "}
            <code className="font-mono text-sm text-ploy-text-primary">{tokens.fonts.app}</code>.
          </Text>
        </Panel>
      </Section>
    </div>
  );
}
