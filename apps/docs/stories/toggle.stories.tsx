import { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "@rafty/ui";

const meta: Meta<typeof Toggle> = {
  title: "Components / Toggle",
  args: {
    size: "md",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg", "full"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  render: () => (
    <>
      <div className="flex w-80 flex-col gap-6">
        <Toggle>B</Toggle>
      </div>
    </>
  ),
};
