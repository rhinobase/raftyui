import { Meta, StoryObj } from "@storybook/react";
import { PopoverTrigger, Popover, Dialog, DialogBody } from "../src";

const meta: Meta<typeof Popover> = {
  title: "Components / Popover",
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Variants: Story = {
  render: () => (
    <PopoverTrigger label="Open Popover">
      <Dialog>
        <DialogBody> This is the content of the popover.</DialogBody>
      </Dialog>
    </PopoverTrigger>
  ),
};
