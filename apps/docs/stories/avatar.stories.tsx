import { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarGroup } from "@rafty/ui";

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

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  render: ({ size }) => (
    <Avatar
      size={size}
      name="Deepanshu"
      src="https://api.dicebear.com/6.x/adventurer-neutral/svg?seed=Jack"
    />
  ),
};
export const Group: Story = {
  render: ({ size }) => (
    <AvatarGroup>
      <Avatar
        size={size}
        name="Annie"
        src="https://api.dicebear.com/6.x/adventurer-neutral/svg?seed=Annie"
      />
      <Avatar
        size={size}
        name="jack"
        src="https://api.dicebear.com/6.x/adventurer-neutral/svg?seed=Jack"
      />
      <Avatar
        size={size}
        name="jack"
        src="https://api.dicebear.com/6.x/adventurer-neutral/svg?seed=Kiki"
      />
      <Avatar
        size={size}
        name="jack"
        src="https://api.dicebear.com/6.x/adventurer-neutral/svg?seed=Bandit"
      />
    </AvatarGroup>
  ),
};
