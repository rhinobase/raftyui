import { Meta, StoryObj } from "@storybook/react";
import { Progress } from "../src/progress";

const meta: Meta<typeof Progress> = {
  title: "Components / Progress",
  decorators: [
    (Story) => (
      <div className="w-full flex flex-col items-center justify-center gap-2 mx-auto max-w-3xl h-[calc(100vh-40px)]">
        <Story />
      </div>
    ),
  ],
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

export const Variants: Story = {
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
