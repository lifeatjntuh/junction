import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { AppMenuRowDemo, AppShellDemo } from './demos/app-shell-demo';
import { AppStateDemo, SkeletonDemo } from './demos/app-state-demo';
import { BlobmateAvatarDemo, ProfileCardDemo } from './demos/profile-card-demo';
import { ButtonDemo } from './demos/button-demo';
import { ChipGroupDemo } from './demos/chip-group-demo';
import { CnDemo } from './demos/cn-demo';
import { ContainerDemo } from './demos/container-demo';
import { EventCardDemo } from './demos/event-card-demo';
import { EventQuickCardDemo } from './demos/schedule-primitives-demo';
import { FieldDemo, InputDemo } from './demos/field-demo';
import { HeadingDemo, TextDemo } from './demos/heading-text-demo';
import { IconsDemo } from './demos/icons-demo';
import { LayoutDemo } from './demos/layout-demo';
import { LogoDemo } from './demos/logo-demo';
import { PanelDemo } from './demos/panel-demo';
import { RevealDemo } from './demos/reveal-demo';
import { ScheduleDemo } from './demos/schedule-demo';
import { SheetDemo } from './demos/sheet-demo';
import { SocialCarouselDemo } from './demos/social-carousel-demo';
import { SocialPostDemo } from './demos/social-post-demo';
import { SocialStoryDemo } from './demos/social-story-demo';
import { TabsDemo } from './demos/tabs-demo';
import { TagDemo } from './demos/tag-demo';
import { ThemeToggleDemo } from './demos/theme-toggle-demo';
import { ToastDemo } from './demos/toast-demo';
import { TokensDemo } from './demos/tokens-demo';

/**
 * Live demos are registered globally here, so MDX pages use them by
 * name (`<ButtonDemo />`) with no per-page import — the same names the
 * Docusaurus pages used, minus the `@site/src/components/demos/*`
 * import line the port script stripped. Every demo renders the real
 * component from @lifeatjntuh/junction.
 */
export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    AppMenuRowDemo,
    AppShellDemo,
    AppStateDemo,
    BlobmateAvatarDemo,
    ButtonDemo,
    ChipGroupDemo,
    CnDemo,
    ContainerDemo,
    EventCardDemo,
    EventQuickCardDemo,
    FieldDemo,
    HeadingDemo,
    IconsDemo,
    InputDemo,
    LayoutDemo,
    LogoDemo,
    PanelDemo,
    ProfileCardDemo,
    RevealDemo,
    ScheduleDemo,
    SheetDemo,
    SkeletonDemo,
    SocialCarouselDemo,
    SocialPostDemo,
    SocialStoryDemo,
    TabsDemo,
    TagDemo,
    TextDemo,
    ThemeToggleDemo,
    ToastDemo,
    TokensDemo,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
