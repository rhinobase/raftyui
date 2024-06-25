import type { Meta, StoryObj } from "@storybook/react";
import { Stat, StatHelpText, StatLabel, StatValue } from "./Stat";

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
  render: (props) => (
    <Stat {...props}>
      <StatLabel>Daily Return</StatLabel>
      <StatValue>17,770.90</StatValue>
      <StatHelpText>0.47%</StatHelpText>
    </Stat>
  ),
};
