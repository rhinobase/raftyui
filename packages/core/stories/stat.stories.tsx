import { Meta, StoryObj } from "@storybook/react";
import { Stat, StatHelpText, StatIcon, StatLabel, StatValue } from "../src";

const meta: Meta<typeof Stat> = {
  title: "Components / Stat",
  decorators: [
    (Story) => (
      <div className="w-full flex flex-col items-center justify-center gap-2 mx-auto max-w-3xl h-[calc(100vh-40px)]">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Stat>;

export const Variants: Story = {
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
