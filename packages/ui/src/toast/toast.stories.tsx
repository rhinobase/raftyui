import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from "./Toast.js";

const meta: Meta<typeof Toast> = {
  title: "Components / Toast",
  args: {
    severity: "warning",
    size: "md",
    visible: false,
    title: "Toast Title",
    message: "Sample toast message!",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    severity: {
      control: "select",
      options: ["info", "error", "success", "warning"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  render: (props) => <Toast {...props} />,
};
