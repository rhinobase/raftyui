import type { Meta, StoryObj } from "@storybook/react";
import { RaftyIcon, type RaftyIconProps } from "./RaftyIcon";
import { ICONS } from "./icons";

const meta: Meta<RaftyIconProps> = {
  title: "Icons / Icon",
  args: {
    type: "check-circle",
  },
  argTypes: {
    type: {
      options: Object.keys(ICONS),
      control: { type: "select" },
    },
  },
};

export default meta;

type Story = StoryObj<RaftyIconProps>;

export const Default: Story = {
  render: ({ type }) => <RaftyIcon type={type} height={32} width={32} />,
};
