import * as TabsPrimitive from "@radix-ui/react-tabs";
import { Grid } from "@rhinobase/docs/components";
import * as Tab from "./Tab";
import { TabContext } from "./context";
import React from "react";

export default {
  title: "New/Tabs",
  component: Tab,
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    orientation: { control: "select" },
  },
};

export function Default({
  size = "sm",
  orientation = "horizontal",
}: TabContext & TabsPrimitive.TabsProps) {
  return (
    <Grid>
      <div className="w-[640px] rounded-md border p-4 dark:border-zinc-700">
        <Tab.Root defaultValue="tab1" size={size} orientation={orientation}>
          <Tab.List>
            <Tab.Trigger value="tab1">Tab1</Tab.Trigger>
            <Tab.Trigger value="tab2" disabled>
              Tab2
            </Tab.Trigger>
            <Tab.Trigger value="tab3">Tab2</Tab.Trigger>
          </Tab.List>
          <Tab.Content value="tab1" className="p-4">
            1 large-scale networks, high-radix switches reduce hop and switch
            count, which decreases latency and power
          </Tab.Content>
          <Tab.Content value="tab3" className="p-4">
            2 large-scale networks, high-radix switches reduce hop and switch
            count, which decreases latency and power
          </Tab.Content>
        </Tab.Root>
      </div>
      <div className="font-medium">variant="enclosed"</div>
      <div className="w-[640px] rounded-md border p-4 dark:border-zinc-700">
        <Tab.Root
          defaultValue="tab1"
          size={size}
          orientation={orientation}
          variant="enclosed"
        >
          <Tab.List>
            <Tab.Trigger value="tab1">Tab1</Tab.Trigger>
            <Tab.Trigger value="tab2">Tab2</Tab.Trigger>
          </Tab.List>
          <Tab.Content value="tab1" className="p-4">
            1 large-scale networks, high-radix switches reduce hop and switch
            count, which decreases latency and power
          </Tab.Content>
          <Tab.Content value="tab2" className="p-4">
            2 large-scale networks, high-radix switches reduce hop and switch
            count, which decreases latency and power
          </Tab.Content>
        </Tab.Root>
      </div>
    </Grid>
  );
}

export function VerticalTabs() {
  return (
    <Grid>
      <div className="w-[640px] rounded-md border dark:border-zinc-800">
        <Tab.Root defaultValue="tab1" orientation="vertical">
          <Tab.List>
            <Tab.Trigger value="tab1">Tab1</Tab.Trigger>
            <Tab.Trigger value="tab2">Tab2</Tab.Trigger>
          </Tab.List>
          <Tab.Content value="tab1" className="w-[320px]">
            1 large-scale networks, high-radix switches reduce hop and switch
            count, which decreases latency and power
          </Tab.Content>
          <Tab.Content value="tab2">
            2 large-scale networks, high-radix switches reduce hop and switch
            count, which decreases latency and power
          </Tab.Content>
        </Tab.Root>
      </div>
    </Grid>
  );
}
