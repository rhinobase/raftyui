import { Meta, StoryObj } from "@storybook/react";
import { Tooltip, Button } from "@rafty/ui";
import { PlusIcon } from "@heroicons/react/24/outline";

const meta: Meta<typeof Tooltip> = {
  title: "Components / Tooltip",
  args: {
    content: "Tooltip Content",
  },
  argTypes: {
    content: {},
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: ({ content }) => (
    <Tooltip side="top" content={content}>
      <Button size="fab">
        <PlusIcon className="h-6 w-6" />
      </Button>
    </Tooltip>
  ),
};
