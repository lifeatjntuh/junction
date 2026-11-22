import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger, Text } from "@lifeatjntuh/junction";
import { Demo, Stack } from "./Demo";

export function TabsDemo() {
  return (
    <Stack>
      <Demo label="Pill tabs — try switching days">
        <Tabs defaultValue="d1">
          <TabsList>
            <TabsTrigger value="d1">Day 1</TabsTrigger>
            <TabsTrigger value="d2">Day 2</TabsTrigger>
            <TabsTrigger value="d3">Day 3</TabsTrigger>
          </TabsList>
          <TabsContent value="d1">
            <Text size="sm">Day 1 — pill tabs, for day switchers in Event Tracker.</Text>
          </TabsContent>
          <TabsContent value="d2">
            <Text size="sm">Day 2 content goes here.</Text>
          </TabsContent>
          <TabsContent value="d3">
            <Text size="sm">Day 3 content goes here.</Text>
          </TabsContent>
        </Tabs>
      </Demo>
      <Demo label="Underline tabs">
        <Tabs defaultValue="offers">
          <TabsList variant="underline">
            <TabsTrigger value="offers">Offers</TabsTrigger>
            <TabsTrigger value="requests">Requests</TabsTrigger>
          </TabsList>
          <TabsContent value="offers">
            <Text size="sm">Things students are selling or giving away.</Text>
          </TabsContent>
          <TabsContent value="requests">
            <Text size="sm">Things students are looking for.</Text>
          </TabsContent>
        </Tabs>
      </Demo>
    </Stack>
  );
}
