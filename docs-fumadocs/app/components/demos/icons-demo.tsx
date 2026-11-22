import React from "react";
import { SunIcon } from "@solar-icons/react/linear/sun";
import { MoonIcon } from "@solar-icons/react/linear/moon";
import { MonitorIcon } from "@solar-icons/react/linear/monitor";
import { CheckCircleIcon } from "@solar-icons/react/linear/check-circle";
import { DangerTriangleIcon } from "@solar-icons/react/linear/danger-triangle";
import { InfoCircleIcon } from "@solar-icons/react/linear/info-circle";
import { ClockCircleIcon } from "@solar-icons/react/linear/clock-circle";
import { MapPointIcon } from "@solar-icons/react/linear/map-point";
import { BookmarkIcon } from "@solar-icons/react/linear/bookmark";
import { BookmarkIcon as BookmarkFilledIcon } from "@solar-icons/react/bold/bookmark";
import { CalendarIcon } from "@solar-icons/react/bold-duotone/calendar";
import { Demo, Row } from "./Demo";

// A live icon grid — these are the real Solar icons, linear unless noted.
const ICONS = [
  { name: "sun (linear)", Icon: SunIcon },
  { name: "moon (linear)", Icon: MoonIcon },
  { name: "monitor (linear)", Icon: MonitorIcon },
  { name: "check-circle (linear)", Icon: CheckCircleIcon },
  { name: "danger-triangle (linear)", Icon: DangerTriangleIcon },
  { name: "info-circle (linear)", Icon: InfoCircleIcon },
  { name: "clock-circle (linear)", Icon: ClockCircleIcon },
  { name: "map-point (linear)", Icon: MapPointIcon },
  { name: "bookmark (linear)", Icon: BookmarkIcon },
  { name: "bookmark (bold)", Icon: BookmarkFilledIcon },
  { name: "calendar (bold-duotone)", Icon: CalendarIcon },
];

export function IconsDemo() {
  return (
    <Demo label="Solar icons, linear — the only icon set in Junction">
      <Row>
        {ICONS.map(({ name, Icon }) => (
          <span
            key={name}
            title={name}
            style={{
              display: "inline-flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
              padding: 12,
              background: "#fff",
              borderRadius: 16,
              fontSize: 11,
              color: "#5a4b70",
            }}
          >
            <Icon style={{ width: 24, height: 24 }} />
            {name}
          </span>
        ))}
      </Row>
    </Demo>
  );
}
