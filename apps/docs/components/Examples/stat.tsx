import { Stat, StatLabel, StatValue, StatHelpText, StatIcon } from "@rafty/ui";

export const stat_examples = {
  "stat:usage": (
    <Stat type="decrease">
      <StatLabel>Daily Return</StatLabel>
      <StatValue>17,770.90</StatValue>
      <StatHelpText>
        <StatIcon /> 0.47%
      </StatHelpText>
    </Stat>
  ),
  "stat:type": (
    <Stat type="increase">
      <StatLabel>Daily Return</StatLabel>
      <StatValue>17,770.90</StatValue>
      <StatHelpText>
        <StatIcon /> 0.47%
      </StatHelpText>
    </Stat>
  ),
};
