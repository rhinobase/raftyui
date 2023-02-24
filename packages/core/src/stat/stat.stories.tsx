import { Grid } from "@rhinobase/docs/components";
import React from "react";
import { Stat, StatHelpText, StatIcon, StatLabel, StatValue } from "./Stat";

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
      <Stat>
        <StatLabel>Daily Return</StatLabel>
        <StatValue>17,770.90</StatValue>
        <StatHelpText>
          <StatIcon type="decrease" /> 0.47%
        </StatHelpText>
      </Stat>
      <Stat>
        <StatLabel>Daily Return</StatLabel>
        <StatValue>17,770.90</StatValue>
        <StatHelpText>
          <StatIcon type="increase" /> 0.47%
        </StatHelpText>
      </Stat>
    </Grid>
  );
}
