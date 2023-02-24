import { Grid } from "@rhinobase/docs/components";
import React from "react";
import { MultiSelect } from "./MultiSelect";

const config = {
  title: "New/Multi Select",
  component: MultiSelect,
  //   argTypes: {
  //     type: { control: "select" },
  //   },
};
export default config;
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
  { value: "vanill", label: "Vanill" },
  { value: "chocolate1", label: "Chocolate" },
  { value: "strawberry1", label: "Strawberry" },
  { value: "vanilla1", label: "Vanilla" },
  { value: "vanill1", label: "Vanill" },
];

export function Default() {
  return (
    <Grid>
      <div className="w-80">
        <MultiSelect options={options} />
      </div>
    </Grid>
  );
}
