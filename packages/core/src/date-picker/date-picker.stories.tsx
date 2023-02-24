import { Grid } from "@rhinobase/docs/components";
import { DatePicker } from "./DatePicker";
import React from "react";

const config = {
  title: "New/Date Picker",
  component: DatePicker,
};
export default config;

export function Default() {
  return (
    <Grid>
      <DatePicker />
      <DatePicker picker="month" />
      <DatePicker picker="year" />
    </Grid>
  );
}
