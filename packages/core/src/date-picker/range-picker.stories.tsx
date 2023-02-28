import { Grid } from "@rhinobase/docs/components";
import React from "react";
import { RangePicker } from "./RangePicker";

const config = {
  title: "New/Range Picker",
  component: RangePicker,
};
export default config;

export function Default() {
  return (
    <Grid>
      <RangePicker />
    </Grid>
  );
}
