import { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "@rafty/spinner";

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
    <>
      <div className="flex flex-col items-center justify-center gap-8 h-[calc(100vh-40px)]">
        <div className="flex items-center gap-3">
          {size}: <Spinner size={size} inheritParent={inheritParent} />
        </div>
      </div>
    </>
  ),
};
