import { Meta, StoryObj } from "@storybook/react";
import { Toast } from "@rafty/ui";

const meta: Meta<typeof Toast> = {
  title: "Components / Toast",
  args: {
    severity: "warning",
  },
  argTypes: {
    severity: {
      control: "select",
      options: ["info", "error", "success", "warning"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  render: ({ severity }) => (
    <Toast
      title="Toast Title"
      message="Sample toast message!"
      severity={severity}
    />
  ),
};
