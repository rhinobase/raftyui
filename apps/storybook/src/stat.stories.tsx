import { Meta, StoryObj } from "@storybook/react";
import { Stat, StatHelpText, StatIcon, StatLabel, StatValue } from "@rafty/ui";

const meta: Meta<typeof Stat> = {
  title: "Components / Stat",
  args: {
    type: "increase",
  },
  argTypes: {
    type: {
      control: "select",
      options: ["increase", "normal", "decrease"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Stat>;

export const Default: Story = {
  render: ({ type }) => (
    <Stat type={type}>
      <StatLabel>Daily Return</StatLabel>
      <StatValue>17,770.90</StatValue>
      <StatHelpText>
        <StatIcon /> 0.47%
      </StatHelpText>
    </Stat>
  ),
};
