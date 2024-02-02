import { Meta, StoryObj } from "@storybook/react";
import { Progress } from "./Progress";

const meta: Meta<typeof Progress> = {
  title: "Components / Progress",
  args: {
    size: "md",
    colorScheme: "primary",
    value: 20,
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    colorScheme: {
      control: "select",
      options: ["primary", "warning", "success", "error"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  render: ({ size, colorScheme, value }) => (
    <Progress colorScheme={colorScheme} size={size} value={value} />
  ),
};
