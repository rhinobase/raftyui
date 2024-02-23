import { Meta, StoryObj } from "@storybook/react";
import { RaftyIcon } from "./RaftyIcon";

const meta: Meta<typeof RaftyIcon> = {
  title: "Icons",
  args: {
    type: "check-circle",
  },
};

export default meta;

type Story = StoryObj<typeof RaftyIcon>;

export const Default: Story = {
  render: ({ type }) => <RaftyIcon type={type} size={32} />,
};
