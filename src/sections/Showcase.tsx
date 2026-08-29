import * as React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Field, FieldLabel, Input, FieldDescription } from "@/components/ui/field";
import { Tabs, TabsList, TabsTab, TabsIndicator, TabsPanel } from "@/components/ui/tabs";
import { ToggleGroup, Toggle } from "@/components/ui/toggle-group";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/menu";
import { Popover, PopoverTrigger, PopoverContent, PopoverTitle, PopoverDescription } from "@/components/ui/popover";
import { Accordion, AccordionItem, AccordionTrigger, AccordionPanel } from "@/components/ui/accordion";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetDescription, SheetClose } from "@/components/ui/sheet";
import { ToastProvider, ToastViewport, ToastList, useToastManager } from "@/components/ui/toast";
import { Skeleton } from "@/components/ui/skeleton";
import { LayoutFoundations, UtilityPatterns, NotPresentInSource, MenuList } from "@/sections/Foundations";

function Section({
  id,
  title,
  description,
  children,
}: {
  id: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-border py-12 first:border-t-0 first:pt-0">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">{title}</h2>
        {description && <p className="mt-1 max-w-2xl text-sm text-muted-foreground">{description}</p>}
      </div>
      {children}
    </section>
  );
}

function Frame({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={`rounded-xl border border-border bg-card p-6 shadow-xs ${className ?? ""}`}>{children}</div>
  );
}

const tokenSwatches = [
  { label: "Background", varName: "--background" },
  { label: "Card", varName: "--card" },
  { label: "Primary", varName: "--primary" },
  { label: "Secondary", varName: "--secondary" },
  { label: "Muted", varName: "--muted" },
  { label: "Accent", varName: "--accent" },
  { label: "Destructive", varName: "--destructive" },
  { label: "Border", varName: "--border" },
];

function ColorTokens() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {tokenSwatches.map((t) => (
        <div key={t.varName}>
          <div
            className="h-16 rounded-lg border border-border"
            style={{ background: `var(${t.varName})` }}
          />
          <p className="mt-2 text-sm font-medium">{t.label}</p>
          <p className="font-mono text-xs text-muted-foreground">{t.varName}</p>
        </div>
      ))}
    </div>
  );
}

function TypographyScale() {
  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-bold">Aa — Display / Lexend</h1>
      <h2 className="text-2xl font-semibold">Aa — Heading / Lexend</h2>
      <p className="text-base">Aa — Body / Inter. The quick brown fox jumps over the lazy dog.</p>
      <p className="font-mono text-sm text-muted-foreground">Aa — Mono / JetBrains Mono — 12:45 PM · #A1B2C3</p>
    </div>
  );
}

function ButtonsDemo() {
  return (
    <Frame className="flex flex-wrap gap-3">
      <Button variant="cta">
        <iconify-icon icon="solar:ticket-bold" /> Register
      </Button>
      <Button variant="default">Save changes</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="destructive">Delete event</Button>
      <Button variant="gradientPurple">Admin console</Button>
      <Button variant="gradientOrange">Organizer tools</Button>
      <Button variant="google">
        <iconify-icon icon="solar:global-linear" /> Continue with Google
      </Button>
      <Button variant="outline" size="icon" aria-label="More options">
        <iconify-icon icon="solar:menu-dots-bold" />
      </Button>
    </Frame>
  );
}

function BadgesDemo() {
  return (
    <Frame className="flex flex-wrap items-center gap-3">
      <Badge>Music</Badge>
      <Badge className="border-transparent bg-chart-2/15 text-chart-2">Workshops</Badge>
      <Badge className="border-transparent bg-chart-3/15 text-chart-3">Food</Badge>
      <Badge variant="outline">Draft</Badge>
      <Badge variant="destructive">Sold out</Badge>
      <Badge variant="role">Organizer</Badge>
      <Badge variant="role">Admin</Badge>
    </Frame>
  );
}

function FormsDemo() {
  return (
    <Frame className="max-w-md space-y-5">
      <Field>
        <FieldLabel>Event name</FieldLabel>
        <Input placeholder="Junction Founders' Night" />
        <FieldDescription>Shown on the public schedule and in search.</FieldDescription>
      </Field>
      <Field>
        <FieldLabel>Stall slot</FieldLabel>
        <Input placeholder="Hall B — Slot 14" />
      </Field>
    </Frame>
  );
}

function CardsDemo() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Founders' Night</CardTitle>
          <CardDescription>Main stage · 7:00 PM</CardDescription>
        </CardHeader>
        <CardContent>A closing set from the year's top three student teams, judged live.</CardContent>
        <CardFooter>
          <Button variant="cta" size="sm">
            Register
          </Button>
          <Button variant="outline" size="sm">
            Details
          </Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Robotics Showcase</CardTitle>
          <CardDescription>Hall B · All day</CardDescription>
        </CardHeader>
        <CardContent>Twelve stalls, live demos every hour on the hour.</CardContent>
        <CardFooter>
          <Button variant="outline" size="sm">
            View stalls
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

function DaySwitcher() {
  const [day, setDay] = React.useState("day1");
  return (
    <Tabs value={day} onValueChange={(v) => setDay(v as string)}>
      <TabsList variant="pill" className="w-fit">
        <TabsIndicator />
        <TabsTab value="day1">Day 1</TabsTab>
        <TabsTab value="day2">Day 2</TabsTab>
        <TabsTab value="day3">Day 3</TabsTab>
      </TabsList>
      <TabsPanel value="day1">Opening ceremony, keynote, and the first round of stalls.</TabsPanel>
      <TabsPanel value="day2">Workshops, the hackathon sprint, and evening performances.</TabsPanel>
      <TabsPanel value="day3">Finals, judging, and Founders' Night.</TabsPanel>
    </Tabs>
  );
}

function UnderlineTabs() {
  const [tab, setTab] = React.useState("overview");
  return (
    <Tabs value={tab} onValueChange={(v) => setTab(v as string)}>
      <TabsList variant="underline">
        <TabsIndicator />
        <TabsTab value="overview">Overview</TabsTab>
        <TabsTab value="registrations">Registrations</TabsTab>
        <TabsTab value="stalls">Stalls</TabsTab>
        <TabsTab value="settings">Settings</TabsTab>
      </TabsList>
      <TabsPanel value="overview">High-level event health, at a glance.</TabsPanel>
      <TabsPanel value="registrations">Attendee sign-ups by day and category.</TabsPanel>
      <TabsPanel value="stalls">Stall assignments and check-in status.</TabsPanel>
      <TabsPanel value="settings">Event visibility, dates, and organizer access.</TabsPanel>
    </Tabs>
  );
}

function ChipRow() {
  const [value, setValue] = React.useState<string[]>(["music"]);
  return (
    <ToggleGroup value={value} onValueChange={(v) => setValue(v as string[])} multiple>
      <Toggle value="music">Music</Toggle>
      <Toggle value="workshops">Workshops</Toggle>
      <Toggle value="food">Food</Toggle>
      <Toggle value="sports">Sports</Toggle>
    </ToggleGroup>
  );
}

function TabsDemoGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <Frame>
        <p className="mb-3 text-sm font-medium text-muted-foreground">Day switcher</p>
        <DaySwitcher />
      </Frame>
      <Frame>
        <p className="mb-3 text-sm font-medium text-muted-foreground">Filter chips</p>
        <ChipRow />
      </Frame>
      <Frame className="md:col-span-2">
        <p className="mb-3 text-sm font-medium text-muted-foreground">Admin tab bar</p>
        <UnderlineTabs />
      </Frame>
    </div>
  );
}

function ThemeDropdown() {
  const [theme, setTheme] = React.useState("system");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button variant="outline">
            <iconify-icon icon="solar:sun-2-linear" /> Theme
          </Button>
        }
      />
      <DropdownMenuContent>
        <DropdownMenuRadioGroup value={theme} onValueChange={(v) => setTheme(v as string)}>
          <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="system">System</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function EventPopoverDemo() {
  return (
    <Frame>
      <Popover>
        <PopoverTrigger render={<Button variant="outline">View: Robotics Keynote</Button>} />
        <PopoverContent>
          <PopoverTitle className="font-display text-base font-semibold">Robotics Keynote</PopoverTitle>
          <PopoverDescription>Hall A · 10:00–11:00 AM. Seating is first-come, first-served.</PopoverDescription>
        </PopoverContent>
      </Popover>
    </Frame>
  );
}

function FaqAccordion() {
  return (
    <Frame className="max-w-xl">
      <Accordion>
        <AccordionItem value="tickets">
          <AccordionTrigger>Do I need a ticket for every day?</AccordionTrigger>
          <AccordionPanel>No — one registration covers all three days of the event.</AccordionPanel>
        </AccordionItem>
        <AccordionItem value="stalls">
          <AccordionTrigger>How do I apply for a stall?</AccordionTrigger>
          <AccordionPanel>Organizers can open a stall application from the Organizer console.</AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Frame>
  );
}

function DialogAndSheetDemo() {
  return (
    <Frame className="flex flex-wrap gap-3">
      <Dialog>
        <DialogTrigger render={<Button variant="outline">Fest dates</Button>} />
        <DialogContent>
          <DialogTitle>Fest dates</DialogTitle>
          <DialogDescription>March 12–14 · JNTUH campus grounds.</DialogDescription>
          <div className="mt-4 flex justify-end">
            <DialogClose render={<Button variant="secondary" size="sm">Close</Button>} />
          </div>
        </DialogContent>
      </Dialog>

      <Sheet>
        <SheetTrigger render={<Button variant="cta">Register</Button>} />
        <SheetContent>
          <SheetTitle>Register for Junction Fest</SheetTitle>
          <SheetDescription>Pick a role to continue — Attendee, Organizer, or Admin.</SheetDescription>
          <div className="mt-4 flex justify-end">
            <SheetClose render={<Button variant="secondary" size="sm">Cancel</Button>} />
          </div>
        </SheetContent>
      </Sheet>
    </Frame>
  );
}

function ToastFireButton() {
  const toastManager = useToastManager();
  return (
    <Button
      variant="cta"
      onClick={() =>
        toastManager.add({
          title: "Event registered!",
          description: "You're on the list for Founders' Night.",
        })
      }
    >
      Register for event
    </Button>
  );
}

function ToastDemo() {
  return (
    <ToastProvider>
      <Frame>
        <ToastFireButton />
      </Frame>
      <ToastViewport>
        <ToastList />
      </ToastViewport>
    </ToastProvider>
  );
}

function StatesDemo() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <CardHeader>
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-3 w-1/3" />
        </CardHeader>
        <CardContent className="space-y-2">
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-5/6" />
        </CardContent>
      </Card>
      <Frame className="flex flex-col items-center justify-center gap-2 text-center">
        <iconify-icon icon="solar:calendar-search-linear" width="28" className="text-muted-foreground" />
        <p className="text-sm font-medium">No events yet</p>
        <p className="text-xs text-muted-foreground">Once an organizer publishes a schedule, it shows up here.</p>
      </Frame>
      <Frame className="flex flex-col items-center justify-center gap-2 text-center border-destructive/30">
        <iconify-icon icon="solar:danger-triangle-linear" width="28" className="text-destructive" />
        <p className="text-sm font-medium">Couldn't load stalls</p>
        <p className="text-xs text-muted-foreground">Check your connection and try again.</p>
      </Frame>
    </div>
  );
}

export function Showcase() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <Section id="tokens" title="Color tokens" description="All colors are oklch CSS variables — see src/styles/junction-theme.css.">
        <ColorTokens />
      </Section>
      <Section id="typography" title="Typography" description="Lexend for display/headings, Inter for body and UI, JetBrains Mono for data.">
        <TypographyScale />
      </Section>
      <Section id="layout" title="Layout & breakpoints" description="Mobile-first, single-column PWA — the shell caps content width rather than expanding into a desktop grid.">
        <LayoutFoundations />
      </Section>
      <Section id="buttons" title="Buttons" description="Standard shadcn variants plus Junction-only cta / gradient / google variants.">
        <ButtonsDemo />
      </Section>
      <Section id="badges" title="Badges" description={'Category tags use variant="default" with a color className override; roles use variant="role".'}>
        <BadgesDemo />
      </Section>
      <Section id="forms" title="Form fields" description="Built on Base UI's Field primitive — accessible label/control/description wiring included.">
        <FormsDemo />
      </Section>
      <Section id="cards" title="Cards" description="Standard shadcn Card shape — no primitive swap needed.">
        <CardsDemo />
      </Section>
      <Section id="tabs" title="Tabs & filter chips" description="Same Tabs primitive, two indicator styles — plus ToggleGroup for single-select filters.">
        <TabsDemoGrid />
      </Section>
      <Section id="dropdown" title="Dropdown menu" description="Theme switcher, built on Menu.Root > Trigger > Portal > Positioner > Popup > Item.">
        <Frame className="w-fit">
          <ThemeDropdown />
        </Frame>
      </Section>
      <Section id="popover" title="Popover" description="Schedule event detail card.">
        <EventPopoverDemo />
      </Section>
      <Section id="accordion" title="Accordion" description="Single-open FAQ / detail sections.">
        <FaqAccordion />
      </Section>
      <Section id="lists" title="Menu lists" description="Kept custom — a plain stacked button row, not a component.">
        <MenuList />
      </Section>
      <Section id="modals" title="Dialog & Sheet" description="Sheet is the same Dialog primitive, pinned to the bottom edge.">
        <DialogAndSheetDemo />
      </Section>
      <Section id="toasts" title="Toast" description="⚠️ Base UI's newest primitive (July 2026) — verify the API before shipping.">
        <ToastDemo />
      </Section>
      <Section id="states" title="Loading, empty & error states" description="Skeleton is a plain div; empty/error states are custom Tailwind, not components.">
        <StatesDemo />
      </Section>
      <Section id="utilities" title="Utility patterns" description="Hand-written CSS utility classes layered on top of Tailwind.">
        <UtilityPatterns />
      </Section>
      <Section id="not-present" title="Not present in source" description="Intentionally omitted, not fabricated — see COMPONENT-MANIFEST.md before adding any of these.">
        <NotPresentInSource />
      </Section>
    </div>
  );
}
