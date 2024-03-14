import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "./Spinner";

const meta: Meta<typeof Spinner> = {
  title: "Components / Spinner",
  args: {
    size: "md",
    inheritParent: false,
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  render: ({ size, inheritParent }) => (
    <div className="text-secondary-400 dark:text-secondary-600">
      <Spinner size={size} inheritParent={inheritParent} />
    </div>
  ),
};
