import { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Components / Avatar",
  args: {
    size: "md",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;

type Story1 = StoryObj<typeof Avatar>;

export const Default: Story1 = {
  render: ({ size }) => (
    <Avatar
      size={size}
      name="Deepanshu"
      src="https://api.dicebear.com/6.x/adventurer-neutral/svg?seed=Jack"
    />
  ),
};
