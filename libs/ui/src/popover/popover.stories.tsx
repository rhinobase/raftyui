import { CheckIcon } from "@heroicons/react/24/outline";
import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../button";
import { Popover, PopoverContent, PopoverTrigger } from "./Popover";

const meta: Meta<typeof Popover> = {
  title: "Components / Popover",
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
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: ({ size }) => (
    <Popover size={size}>
      <PopoverTrigger>Open</PopoverTrigger>
      <PopoverContent>
        <div className="flex flex-col items-center gap-4">
          <div className="rounded-full bg-green-100 p-3">
            <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold">Payment successful</h3>
            <p className="text-sm font-medium opacity-60">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur amet labore.
            </p>
          </div>
          <Button colorScheme="primary" className="mt-2 w-full">
            Go back to dashboard
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  ),
};
