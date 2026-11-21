/**
 * @lifeatjntuh/junction — main entry point.
 *
 * Import the theme stylesheet once in your app (or import the
 * "@lifeatjntuh/junction/theme" subpath directly):
 *
 *   import "@lifeatjntuh/junction/theme";
 *   import { Button, Panel, Tag } from "@lifeatjntuh/junction";
 *
 * Every component is exported by name, with its props type, so bundlers can
 * tree-shake anything you do not use. Internal helpers (like `cn`) are only
 * exported where they are part of the public API; component internals are
 * not exported from here.
 *
 * The theme CSS is a side effect of this entry point. If you only need the
 * token values in code, import "@lifeatjntuh/junction/tokens" instead —
 * it has no CSS side effect.
 */
import "./styles/junction-theme.css";

export { cn } from "./lib/utils";
export * from "./tokens";
export {
  layoutScheduleEvents,
  type PositionedEvent,
  type ScheduleEvent,
  type ScheduleLayoutOptions,
} from "./lib/schedule-layout";

export { Button, buttonVariants, type ButtonProps } from "./components/ui/button";
export { Panel, type PanelProps } from "./components/ui/panel";
export { Tag, type TagProps } from "./components/ui/tag";
export { Heading, headingVariants, type HeadingProps } from "./components/ui/heading";
export { Text, type TextProps } from "./components/ui/text";
export {
  Field,
  Input,
  Textarea,
  type FieldProps,
} from "./components/ui/field";
export {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./components/ui/tabs";
export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "./components/ui/sheet";
export { ToastProvider, useToast } from "./components/ui/toast";
export {
  ThemeToggle,
  useTheme,
  type ThemeChoice,
  type ThemeToggleProps,
} from "./components/ui/theme-toggle";
export { Logo, type LogoProps } from "./components/ui/logo";
export { Container } from "./components/ui/container";
export { ChipGroup, type ChipGroupProps } from "./components/ui/chip-group";
export { Reveal } from "./components/ui/reveal";

export {
  AppBottomNav,
  AppIconButton,
  AppMenuRow,
  AppShell,
  AppTopBar,
  type AppNavItem,
} from "./components/app/app-shell";
export { AppState, Skeleton } from "./components/app/app-states";
export { EventCard, type EventCardProps } from "./components/app/event-card";
export {
  BlobmateAvatar,
  ProfileCard,
  type BlobmateAvatarProps,
  type ProfileCardProps,
} from "./components/app/profile-card";
export {
  DEFAULT_CATEGORIES,
  EventQuickCard,
  ScheduleEventBlock,
  ScheduleGrid,
  type ScheduleCategory,
  type ScheduleEventActions,
  type ScheduleGridProps,
} from "./components/app/schedule";
