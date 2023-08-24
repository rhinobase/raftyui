import { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarGroup } from "@rafty/ui";

const meta: Meta<typeof Avatar | AvatarGroup> = {
  title: "Components / Avatar",
  args: {
    size: "md",
    max: 10,
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

type Story2 = StoryObj<typeof AvatarGroup>;

export const Group: Story2 = {
  render: ({ size, max }) => (
    <AvatarGroup size={size} max={max}>
      <Avatar
        name="Annie"
        src="https://api.dicebear.com/6.x/adventurer-neutral/svg?seed=Annie"
      />
      <Avatar
        name="jack"
        src="https://api.dicebear.com/6.x/adventurer-neutral/svg?seed=Jack"
      />
      <Avatar
        name="jack"
        src="https://api.dicebear.com/6.x/adventurer-neutral/svg?seed=Kiki"
      />
      <Avatar
        name="jack"
        src="https://api.dicebear.com/6.x/adventurer-neutral/svg?seed=Bandit"
      />
    </AvatarGroup>
  ),
};
