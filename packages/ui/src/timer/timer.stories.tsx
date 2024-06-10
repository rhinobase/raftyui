import type { Meta, StoryObj } from "@storybook/react";
import { Timer } from "./Timer";

const meta: Meta<typeof Timer> = {
  title: "Components / Timer",
  args: {
    hidden: false,
  },
};

export default meta;
type Story = StoryObj<typeof Timer>;

export const Default: Story = {
  render: (props) => <Timer {...props} />,
};
