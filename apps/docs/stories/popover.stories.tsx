import { Meta, StoryObj } from "@storybook/react";
import { Popover, PopoverTrigger, PopoverContent } from "@rhino/popover";

const meta: Meta<typeof Popover> = {
  title: "Components / Popover",
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Variants: Story = {
  render: () => (
    <div className="flex w-full max-w-4xl flex-col gap-4 dark:text-white">
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>
          <div className="p-6">Popover</div>
        </PopoverContent>
      </Popover>
    </div>
  ),
};
