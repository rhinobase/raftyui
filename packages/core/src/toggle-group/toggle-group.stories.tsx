import { Grid } from "@rhinobase/docs/components/Grid";
import React from "react";
import * as ToggleGroup from "./ToggleGroup";

const config = {
  title: "New/Toggle Group",
  components: ToggleGroup,
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
};
export default config;

export function Default() {
  return (
    <Grid>
      <div className="flex w-80 flex-col gap-6">
        <ToggleGroup.Root type="single" defaultValue="1">
          <ToggleGroup.Item value="1">1</ToggleGroup.Item>
          <ToggleGroup.Item value="2">2</ToggleGroup.Item>
          <ToggleGroup.Item value="3">3</ToggleGroup.Item>
        </ToggleGroup.Root>
        <div className="text-center font-medium">size: sm, md, lg</div>
        <ToggleGroup.Root type="single" defaultValue="1" size="sm">
          <ToggleGroup.Item value="1">1</ToggleGroup.Item>
          <ToggleGroup.Item value="2">2</ToggleGroup.Item>
          <ToggleGroup.Item value="3">3</ToggleGroup.Item>
        </ToggleGroup.Root>
        <ToggleGroup.Root type="single" defaultValue="1">
          <ToggleGroup.Item value="1">1</ToggleGroup.Item>
          <ToggleGroup.Item value="2">2</ToggleGroup.Item>
          <ToggleGroup.Item value="3">3</ToggleGroup.Item>
        </ToggleGroup.Root>
        <ToggleGroup.Root type="single" defaultValue="1" size="lg">
          <ToggleGroup.Item value="1">1</ToggleGroup.Item>
          <ToggleGroup.Item value="2">2</ToggleGroup.Item>
          <ToggleGroup.Item value="3">3</ToggleGroup.Item>
        </ToggleGroup.Root>
      </div>
    </Grid>
  );
}
