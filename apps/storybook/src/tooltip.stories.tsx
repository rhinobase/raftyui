import { Meta, StoryObj } from "@storybook/react";
import { Tooltip, TooltipTrigger, Button, TooltipContent } from "@rafty/ui";
import { PlusIcon } from "@heroicons/react/24/outline";

const meta: Meta<typeof Tooltip> = {
  title: "Components / Tooltip",
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger>
        <Button size="fab">
          <PlusIcon className="h-6 w-6" />
        </Button>
      </TooltipTrigger>
      <TooltipContent side="top">Tooltip Content</TooltipContent>
    </Tooltip>
  ),
};
