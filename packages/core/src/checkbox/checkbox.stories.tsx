import { Grid } from "@rhinobase/docs/components";
import { Checkbox } from "./Checkbox";
import React from "react";

const config = {
  title: "New/Checkbox",
  component: Checkbox,
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
};
export default config;

export function Default() {
  return (
    <Grid>
      <div className="w-40">
        <Checkbox name="red">Red</Checkbox>
        <Checkbox name="green">Green</Checkbox>
        <Checkbox name="blue" data-state="indeterminate">
          Blue
        </Checkbox>
        <br />
        <Checkbox name="red1" size="sm">
          Red
        </Checkbox>
        <Checkbox name="green1" size="md">
          Green
        </Checkbox>
        <Checkbox name="blue1" size="lg">
          Blue
        </Checkbox>
      </div>
    </Grid>
  );
}
