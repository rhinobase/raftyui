import { PlusIcon } from "@heroicons/react/24/outline";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./Tooltip";

const meta: Meta<typeof Tooltip> = {
  title: "Components / Tooltip",
  args: {
    size: "md",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: (props) => (
    <Tooltip {...props}>
      <TooltipTrigger asChild>
        <Button size="fab">
          <PlusIcon className="size-6" />
        </Button>
      </TooltipTrigger>
      <TooltipContent side="top">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nam at
        modi illum a quisquam odio, totam, dolorem ad dolorum, recusandae
        consectetur quo mollitia commodi dicta cum odit laudantium enim!
      </TooltipContent>
    </Tooltip>
  ),
};
