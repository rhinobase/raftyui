import type { Meta, StoryObj } from "@storybook/react";
import { Pin } from "./Pin";

const meta: Meta<typeof Pin> = {
  title: "Components / Pin",
};

export default meta;
type Story = StoryObj<typeof Pin>;

export const Default: Story = {
  args: {
    disabled: false,
    length: 4,
    size: "md",
    autoFocus: true,
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
  render: (props) => <Pin {...props} />,
};
