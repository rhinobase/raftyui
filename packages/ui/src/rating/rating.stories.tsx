import type { Meta, StoryObj } from "@storybook/react";
import { Rating } from "./Rating";

const meta: Meta<typeof Rating> = {
  title: "Components / Rating",
};

export default meta;
type Story = StoryObj<typeof Rating>;

export const Default: Story = {
  args: {
    disabled: false,
    size: "md",
    count: 5,
    defaultValue: 3,
    allowHalf: true,
    readOnly: false,
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
  render: (props) => <Rating {...props} />,
};
