import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup, RadioGroupItem } from "./Radio";

const meta: Meta<typeof RadioGroup> = {
  title: "Form / Radio",
  args: {
    size: "md",
    orientation: "vertical",
    isDisabled: false,
    isRequired: false,
    isReadOnly: false,
  },
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: ({ size, orientation, isDisabled, isRequired, isReadOnly }) => (
    <RadioGroup
      size={size}
      orientation={orientation}
      isDisabled={isDisabled}
      isRequired={isRequired}
      isReadOnly={isReadOnly}
    >
      <RadioGroupItem value="default" id="radio.default">
        Default
      </RadioGroupItem>
      <RadioGroupItem value="comfortable" id="radio.comfortable">
        Comfortable
      </RadioGroupItem>
      <RadioGroupItem value="compact" id="radio.compact">
        Compact
      </RadioGroupItem>
    </RadioGroup>
  ),
};
