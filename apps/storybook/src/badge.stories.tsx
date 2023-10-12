import { Badge } from "@rafty/ui";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Badge> = {
  title: "Components / Badge",
  args: {
    size: "md",
    status: "secondary",
  },
  argTypes: {
    status: {
      control: "select",
      options: ["secondary", "error", "warning", "info", "success"],
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
  render: ({ status, size }) => (
    <div className="flex items-center gap-1.5">
      <Badge size={size} status={status} />
      <p className="font-medium leading-snug dark:text-white">Badge</p>
    </div>
  ),
};
