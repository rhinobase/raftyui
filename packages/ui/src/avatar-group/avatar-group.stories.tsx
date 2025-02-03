import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "../avatar/index.js";
import { AvatarGroup } from "./AvatarGroup.js";

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

type Story = StoryObj<typeof AvatarGroup>;

const DATA = ["Annie", "Jack", "Kiki", "Bandit"];

export const Group: Story = {
  render: (props) => (
    <AvatarGroup {...props}>
      {DATA.map((name, index) => (
        <Avatar
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          key={index}
          name={name}
          src={`https://api.dicebear.com/6.x/adventurer-neutral/svg?seed=${name}`}
        />
      ))}
    </AvatarGroup>
  ),
};
