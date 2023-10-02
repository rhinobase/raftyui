import { RadioGroup, RadioGroupItem } from "@rafty/ui";
import { Meta, StoryObj } from "@storybook/react";
import { boolean } from "zod";

const meta: Meta<typeof RadioGroup> = {
  title: "Form / RadioGroup",
  args: {
    size: "md",
    isDisabled: false,
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    isDisabled: boolean,
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: ({ size, isDisabled }) => (
    <div className="flex flex-col gap-4">
      <RadioGroup
        defaultValue="comfortable"
        size={size}
        isDisabled={isDisabled}
      >
        <RadioGroupItem value="default" id="r1">
          Default
        </RadioGroupItem>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="comfortable" id="r2">
            Comfortable
          </RadioGroupItem>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="compact" id="r3">
            Compact
          </RadioGroupItem>
        </div>
      </RadioGroup>
    </div>
  ),
};
