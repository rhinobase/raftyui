import { Meta, StoryObj } from "@storybook/react";
import { RaftyIcon, RaftyIconProps } from "./RaftyIcon";

const meta: Meta<RaftyIconProps> = {
  title: "Icons",
  args: {
    type: "check-circle",
  },
};

export default meta;

type Story = StoryObj<RaftyIconProps>;

export const Default: Story = {
  render: ({ type }) => <RaftyIcon type={type} size={32} />,
};
