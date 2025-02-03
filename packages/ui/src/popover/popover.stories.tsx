import { CheckIcon } from "@heroicons/react/24/outline";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../button/index.js";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "./Popover.js";

const meta: Meta<Popover & PopoverTrigger & PopoverContent> = {
  title: "Components / Popover",
  args: {
    size: "md",
    colorScheme: "secondary",
    variant: "solid",
    showArrow: true,
    sideOffset: 10,
    side: "bottom",
    isDisabled: false,
    isActive: false,
    isLoading: false,
    isUnstyled: false,
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    side: {
      control: "select",
      options: ["bottom", "left", "right", "top"],
    },
  },
};

export default meta;
type Story = StoryObj<Popover & PopoverTrigger & PopoverContent>;

export const Default: Story = {
  render: ({
    size,
    colorScheme,
    showArrow,
    sideOffset,
    variant,
    isDisabled,
    isActive,
    isLoading,
    isUnstyled,
    side,
  }) => {
    const contentProps = { showArrow, sideOffset, side };
    const triggerProps = {
      isDisabled,
      isActive,
      isLoading,
      isUnstyled,
      variant,
      colorScheme,
    };

    return (
      <Popover size={size}>
        <PopoverTrigger {...triggerProps}>Open</PopoverTrigger>
        <PopoverContent {...contentProps}>
          <div className="flex flex-col items-center gap-4">
            <div className="rounded-full bg-green-100 p-3">
              <CheckIcon className="size-6 text-green-600" aria-hidden="true" />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold">Payment successful</h3>
              <p className="text-sm font-medium opacity-60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur amet labore.
              </p>
            </div>
            <PopoverClose asChild>
              <Button colorScheme="primary" className="mt-2 w-full">
                Go back to dashboard
              </Button>
            </PopoverClose>
          </div>
        </PopoverContent>
      </Popover>
    );
  },
};
