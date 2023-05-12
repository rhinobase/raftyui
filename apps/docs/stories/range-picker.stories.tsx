import { Meta, StoryObj } from "@storybook/react";
import { RangePicker } from "@rhino/date-picker";

const meta: Meta<typeof RangePicker> = {
  title: "Form / RangePicker",
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
type Story = StoryObj<typeof RangePicker>;

export const Variants: Story = {
  render: ({ size, variant }) => (
    <div className="max-w-sm w-full">
      <RangePicker size={size} variant={variant} />
    </div>
  ),
};
