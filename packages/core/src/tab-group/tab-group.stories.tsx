import { Grid } from "@rhinobase/docs/components/Grid";
import * as TabGroup from "./TabGroup";
import React from "react";

const config = {
  title: "New/Tab Group",
  components: TabGroup,
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
};
export default config;

export function Default() {
  return (
    <Grid>
      <div className="w-[600px]">
        <TabGroup.Root defaultValue="1">
          <TabGroup.Trigger value="1">1</TabGroup.Trigger>
          <TabGroup.Trigger value="2">2</TabGroup.Trigger>
          <TabGroup.Trigger value="3">3</TabGroup.Trigger>
        </TabGroup.Root>
        <p className="text-lg dark:text-zinc-200">Size: sm</p>
        <TabGroup.Root defaultValue="1" size="sm">
          <TabGroup.Trigger value="1">1</TabGroup.Trigger>
          <TabGroup.Trigger value="2">2</TabGroup.Trigger>
          <TabGroup.Trigger value="3">3</TabGroup.Trigger>
        </TabGroup.Root>
        <p className="text-lg dark:text-zinc-200">Size: md</p>
        <TabGroup.Root defaultValue="1" size="md">
          <TabGroup.Trigger value="1">1</TabGroup.Trigger>
          <TabGroup.Trigger value="2">2</TabGroup.Trigger>
          <TabGroup.Trigger value="3">3</TabGroup.Trigger>
        </TabGroup.Root>
        <p className="text-lg dark:text-zinc-200">Size: lg</p>
        <TabGroup.Root defaultValue="1" size="lg">
          <TabGroup.Trigger value="1">1</TabGroup.Trigger>
          <TabGroup.Trigger value="2">2</TabGroup.Trigger>
          <TabGroup.Trigger value="3">3</TabGroup.Trigger>
        </TabGroup.Root>
      </div>
    </Grid>
  );
}
