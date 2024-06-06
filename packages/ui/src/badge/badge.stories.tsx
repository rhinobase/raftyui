import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Components / Badge",
  args: {
    size: "md",
    status: "secondary",
  },
  argTypes: {
    status: {
      control: "select",
      options: ["primary", "secondary", "error", "warning", "info", "success"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  render: ({ status, size }) => <Badge size={size} status={status} />,
};
