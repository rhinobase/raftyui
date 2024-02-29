import { Meta, StoryObj } from "@storybook/react";
import { FieldControl } from "../field-control";
import { Label } from "../label";
import { RadioGroup, RadioGroupItem } from "./Radio";

const meta: Meta<typeof RadioGroup> = {
  title: "Form / RadioGroup",
  args: {
    size: "md",
    isDisabled: false,
    required: false,
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: ({ size, isDisabled, required }) => (
    <FieldControl name="radio" isRequired>
      <Label>Radio Group</Label>
      <RadioGroup
        defaultValue="comfortable"
        size={size}
        isDisabled={isDisabled}
        required={required}
      >
        <RadioGroupItem value="default" id="default">
          Default
        </RadioGroupItem>
        <RadioGroupItem value="comfortable" id="comfortable">
          Comfortable
        </RadioGroupItem>
        <RadioGroupItem value="compact" id="compact">
          Compact
        </RadioGroupItem>
      </RadioGroup>
    </FieldControl>
  ),
};
