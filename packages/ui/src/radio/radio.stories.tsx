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
    isInvalid: false,
    isLoading: false,
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
  render: (props) => (
    <RadioGroup {...props}>
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
