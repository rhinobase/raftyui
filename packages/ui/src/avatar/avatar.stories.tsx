import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Components / Avatar",
  args: {
    size: "md",
    name: "Jack",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Single: Story = {
  render: (props) => (
    <Avatar
      {...props}
      src={`https://api.dicebear.com/6.x/adventurer-neutral/svg?seed=${props.name}`}
    />
  ),
};
