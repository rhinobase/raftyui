import type { Meta, StoryObj } from "@storybook/react";
import { CircularProgress } from "./CircularProgress.js";
import { Progress } from "./Progress.js";

const meta: Meta<typeof Progress> = {
  title: "Components / Progress",
  args: {
    size: "md",
    colorScheme: "primary",
    value: 50,
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    colorScheme: {
      control: "select",
      options: ["primary", "warning", "success", "error", "secondary"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  render: (props) => <Progress {...props} />,
};

export const Circular: Story = {
  render: (props) => <CircularProgress {...props} />,
};
