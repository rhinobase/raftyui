import { PlusIcon } from "@heroicons/react/24/outline";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./Tooltip";

const meta: Meta<Tooltip & TooltipContent> = {
  title: "Components / Tooltip",
  args: {
    size: "md",
    isDisabled: false,
    side: "top",
    sideOffset: 4,
    align: "center",
    alignOffset: 0,
    isArrow: true,
    hasAnimation: true,
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    side: {
      control: "select",
      options: ["top", "bottom", "left", "right"],
    },
    align: {
      control: "select",
      options: ["end", "center", "start"],
    },
  },
};

export default meta;
type Story = StoryObj<Tooltip & TooltipContent>;

export const Default: Story = {
  render: ({
    side,
    align,
    alignOffset,
    sideOffset,
    isArrow,
    hasAnimation,
    ...props
  }) => {
    const contentProps = {
      side,
      align,
      alignOffset,
      sideOffset,
      isArrow,
      hasAnimation,
    };

    return (
      <Tooltip {...props}>
        <TooltipTrigger asChild>
          <Button size="fab">
            <PlusIcon className="size-6" />
          </Button>
        </TooltipTrigger>
        <TooltipContent {...contentProps}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nam at
          modi illum a quisquam odio, totam, dolorem ad dolorum, recusandae
          consectetur quo mollitia commodi dicta cum odit laudantium enim!
        </TooltipContent>
      </Tooltip>
    );
  },
};
