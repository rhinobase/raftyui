import { Meta, StoryObj } from "@storybook/react";
import { Checkbox, Label } from "@rafty/ui";

const meta: Meta<typeof Label> = {
  title: "Components / Label",
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  render: () => (
    <div>
      <div className="dark:text-secondary-100 flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
    </div>
  ),
};
