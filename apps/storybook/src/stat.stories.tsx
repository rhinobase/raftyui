import { Meta, StoryObj } from "@storybook/react";
import { Stat, StatHelpText, StatIcon, StatLabel, StatValue } from "@rafty/ui";

const meta: Meta<typeof Stat> = {
  title: "Components / Stat",
};

export default meta;
type Story = StoryObj<typeof Stat>;

export const Default: Story = {
  render: () => (
    <Stat type="normal">
      <StatLabel>Daily Return</StatLabel>
      <StatValue>17,770.90</StatValue>
      <StatHelpText>
        <StatIcon /> 0.47%
      </StatHelpText>
    </Stat>
  ),
};

export const Type: Story = {
  render: () => (
    <>
      <Stat type="decrease">
        <StatLabel>Daily Return</StatLabel>
        <StatValue>17,770.90</StatValue>
        <StatHelpText>
          <StatIcon /> 0.47%
        </StatHelpText>
      </Stat>
      <Stat type="increase">
        <StatLabel>Daily Return</StatLabel>
        <StatValue>17,770.90</StatValue>
        <StatHelpText>
          <StatIcon /> 0.47%
        </StatHelpText>
      </Stat>
    </>
  ),
};
