import { Meta, StoryObj } from "@storybook/react";
import { DatePickers, FieldControl } from "../src";

const meta: Meta<typeof DatePickers> = {
  title: "Form / DatePickers",
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
type Story = StoryObj<typeof DatePickers>;

export const Variants: Story = {
  render: ({ size, variant }) => (
    <>
      <div className="w-[500px]">
        <FieldControl name="date">
          <DatePickers size={size} variant={variant} />
        </FieldControl>
      </div>
    </>
  ),
};
