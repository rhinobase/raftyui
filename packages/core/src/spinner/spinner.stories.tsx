import { Grid } from "@rhinobase/docs/components";
import React from "react";
import { Spinner } from "./Spinner";

const config = {
  title: "New/Spinner",
  component: Spinner,
  argTypes: {
    size: { control: "select" },
  },
};
export default config;

export function Default(args: Spinner) {
  return (
    <Grid>
      <Spinner size="sm" {...args} />
      <Spinner size="md" {...args} />
      <Spinner size="lg" {...args} />
    </Grid>
  );
}

Default.args = {
  inheritParent: true,
};
