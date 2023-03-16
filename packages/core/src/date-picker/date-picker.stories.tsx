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
      <div className="w-[300px]">
        <DatePicker onSelect={(value) => console.log(value)} />
        <DatePicker picker="month" onSelect={(value) => console.log(value)} />
        <DatePicker picker="year" onSelect={(value) => console.log(value)} />
      </div>
    </Grid>
  );
}
