import { Meta, StoryObj } from "@storybook/react";
import { RangePickers } from "../src";

const meta: Meta<typeof RangePickers> = {
  title: "Form / RangePickers",
  args: {
    size: "md",
    variant: "outline",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    variant: {
      control: "select",
      options: ["solid", "outline", "ghost"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof RangePickers>;

export const Variants: Story = {
  render: ({ size, variant }) => (
    <div className="max-w-sm w-full">
      <RangePickers size={size} variant={variant} />
    </div>
  ),
};
