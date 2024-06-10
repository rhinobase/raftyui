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
  render: (props) => (
    <div className="text-black dark:text-white">
      <Spinner {...props} />
    </div>
  ),
};
