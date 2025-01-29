import type { Meta, StoryObj } from "@storybook/react";
import { Rating } from "./Rating.js";

const meta: Meta<typeof Rating> = {
  title: "Components / Rating",
  args: {
    size: "md",
    count: 5,
    defaultValue: 3,
    allowHalf: true,
    isDisabled: false,
    isLoading: false,
    isReadOnly: false,
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Rating>;

export const Default: Story = {
  render: (props) => <Rating {...props} />,
};
