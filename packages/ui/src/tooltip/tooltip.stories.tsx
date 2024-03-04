import RaftyIcon from "@rafty/icons";
import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./Tooltip";

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
          <RaftyIcon type="plus" className="size-6" />
        </Button>
      </TooltipTrigger>
      <TooltipContent side="top">Tooltip Content</TooltipContent>
    </Tooltip>
  ),
};
