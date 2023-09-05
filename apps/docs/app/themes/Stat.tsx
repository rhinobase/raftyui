import { Stat, StatHelpText, StatIcon, StatLabel, StatValue } from "@rafty/ui";

export default function StatShow() {
  return (
    <Stat type="decrease">
      <StatLabel>Daily Return</StatLabel>
      <StatValue>17,770.90</StatValue>
      <StatHelpText>
        <StatIcon /> 0.47%
      </StatHelpText>
    </Stat>
  );
}
