import { Grid } from "@rhinobase/docs/components";
import { DatePicker } from "./DatePicker";
import React from "react";

export default {
  title: "New/Date Picker",
  component: DatePicker,
};

export function Default() {
  return (
    <Grid>
      <DatePicker />
    </Grid>
  );
}
