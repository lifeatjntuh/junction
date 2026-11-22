import React from "react";
import { Panel, Heading, Text, Tag } from "@lifeatjntuh/junction";
import { Demo } from "./Demo";

// Small-scale previews of the carousel slides (1080×1350 portrait).
// Cover, as many content slides as you need, then the end slide.

function Slide({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ width: 240, flexShrink: 0 }}>
      <div
        style={{
          aspectRatio: "1080 / 1350",
          borderRadius: 24,
          overflow: "hidden",
          boxShadow: "0 24px 50px -28px rgb(31 18 53 / 0.45)",
        }}
      >
        {children}
      </div>
      <p style={{ fontSize: 13, margin: "8px 0 0", color: "#5a4b70" }}>{label}</p>
    </div>
  );
}

export function SocialCarouselDemo() {
  return (
    <Demo label="A four-slide carousel — cover, feature, steps, end">
      <div style={{ display: "flex", gap: 16, overflowX: "auto", paddingBottom: 8 }}>
        <Slide label="1 · Cover">
          <Panel color="dark" padding="lg" style={{ height: "100%" }}>
            <Tag tone="pink" size="sm">
              1 / 4
            </Tag>
            <Heading font="grotesk" size="sm" className="mt-4 text-white">
              Clubs to know this sem
            </Heading>
          </Panel>
        </Slide>
        <Slide label="2 · Feature">
          <Panel color="white" padding="lg" style={{ height: "100%" }}>
            <Tag tone="pinkSoft" size="sm">
              2 / 4
            </Tag>
            <Heading size="sm" className="mt-4">
              Club name
            </Heading>
            <Text size="sm" tone="muted" className="mt-2">
              One or two lines on what they do and when they meet.
            </Text>
            <div style={{ display: "flex", gap: 6, marginTop: 12, flexWrap: "wrap" }}>
              <Tag size="sm">Weekly meets</Tag>
              <Tag size="sm">Open to all</Tag>
            </div>
          </Panel>
        </Slide>
        <Slide label="3 · Steps">
          <Panel color="lime" padding="lg" style={{ height: "100%" }}>
            <Tag tone="dark" size="sm">
              3 / 4
            </Tag>
            <Heading size="sm" className="mt-4">
              How to get featured
            </Heading>
            <Text size="sm" className="mt-3">
              1 · Send your photos through our form
            </Text>
            <Text size="sm" className="mt-2">
              2 · DM us your club’s event
            </Text>
            <Text size="sm" className="mt-2">
              3 · Tag @lifeatjntuh in your post
            </Text>
          </Panel>
        </Slide>
        <Slide label="4 · End">
          <Panel color="pink" padding="lg" style={{ height: "100%" }}>
            <Tag tone="dark" size="sm">
              4 / 4
            </Tag>
            <Heading size="sm" className="mt-4">
              Don’t miss the next one
            </Heading>
            <Text size="sm" className="mt-2">
              Follow @lifeatjntuh for the next drop.
            </Text>
          </Panel>
        </Slide>
      </div>
    </Demo>
  );
}
