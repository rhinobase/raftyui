import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../checkbox";
import { Label } from "./Label";

const meta: Meta<typeof Label> = {
  title: "Components / Label",
  args: {
    isRequired: false,
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  render: (props) => (
    <div>
      <div className="dark:text-secondary-100 flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label {...props} htmlFor="terms">
          Accept terms and conditions
        </Label>
      </div>
    </div>
  ),
};
