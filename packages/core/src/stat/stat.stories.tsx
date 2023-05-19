import { Grid } from "@rhinobase/docs/components";
import React from "react";
import * as Stat from "./Stat";

const config = {
  title: "New/Stat",
  component: Stat,
  argTypes: {
    size: { control: "select" },
  },
};
export default config;

export function Default() {
  return (
    <Grid>
      <Stat.Root type="decrease">
        <Stat.Label>Daily Return</Stat.Label>
        <Stat.Value>17,770.90</Stat.Value>
        <Stat.HelpText>
          <Stat.Icon /> 0.47%
        </Stat.HelpText>
      </Stat.Root>
      <Stat.Root type="increase">
        <Stat.Label>Daily Return</Stat.Label>
        <Stat.Value>17,770.90</Stat.Value>
        <Stat.HelpText>
          <Stat.Icon /> 0.47%
        </Stat.HelpText>
      </Stat.Root>
    </Grid>
  );
}
