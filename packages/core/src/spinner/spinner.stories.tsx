import { Grid } from "@rhinobase/docs/components";
import React from "react";
import { Spinner } from "./Spinner";

export default {
  title: "New/Spinner",
  component: Spinner,
  argTypes: {
    size: { control: "select" },
  },
};

export function Default(args: Spinner) {
  return (
    <Grid>
      <Spinner {...args} />
    </Grid>
  );
}

Default.args = {
  size: "",
  inheritParent: true,
};
