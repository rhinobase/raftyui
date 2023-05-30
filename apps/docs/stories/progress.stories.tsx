import { Meta, StoryObj } from "@storybook/react";
import { Progress } from "@rafty/ui";

const meta: Meta<typeof Progress> = {
  title: "Components / Progress",
  args: {
    size: "md",
    colorScheme: "primary",
    isIndeterminate: false,
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
    isIndeterminate: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  render: ({ size, colorScheme, isIndeterminate }) => (
    <div className="flex w-full max-w-4xl flex-col gap-4 dark:text-white">
      <Progress
        size={size}
        value={80}
        colorScheme={colorScheme}
        isIndeterminate={isIndeterminate}
      />
    </div>
  ),
};
