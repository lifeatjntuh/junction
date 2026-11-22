import React from "react";
import { AppShell, AppTopBar, AppBottomNav, AppMenuRow, AppIconButton, Text } from "@lifeatjntuh/junction";
import { HomeIcon } from "@solar-icons/react/linear/home";
import { CalendarIcon } from "@solar-icons/react/linear/calendar";
import { BellIcon } from "@solar-icons/react/linear/bell";
import { SettingsMinimalisticIcon } from "@solar-icons/react/linear/settings-minimalistic";
import { AltArrowRightIcon } from "@solar-icons/react/linear/alt-arrow-right";
import { Demo } from "./Demo";

export function AppShellDemo() {
  return (
    <Demo label="A phone-width app screen — sticky top bar, content, bottom tab bar (rendered in place here, not fixed)">
      <AppShell
        topBar={<AppTopBar title="Events" trailing={<AppIconButton icon={BellIcon} label="Notifications" />} />}
        bottomNav={
          <AppBottomNav
            fixed={false}
            active="/events"
            items={[
              { label: "Home", href: "/", icon: HomeIcon },
              { label: "Events", href: "/events", icon: CalendarIcon },
            ]}
          />
        }
      >
        <Text size="sm">Screen content goes here, capped at phone width even on desktop.</Text>
      </AppShell>
    </Demo>
  );
}

export function AppMenuRowDemo() {
  return (
    <Demo label="Settings rows — icon in a pastel circle, label, hint, chevron">
      <div style={{ background: "#fff", borderRadius: 16, overflow: "hidden" }}>
        <AppMenuRow icon={BellIcon} label="Notifications" hint="On" />
        <AppMenuRow icon={SettingsMinimalisticIcon} label="Settings" />
        <AppMenuRow icon={AltArrowRightIcon} label="About LifeatJNTUH" hint="v0.1.0" href="#" />
      </div>
    </Demo>
  );
}
