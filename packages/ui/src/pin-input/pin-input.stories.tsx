import type { Meta, StoryObj } from "@storybook/react";
import { PinInput } from "./PinInput";

const meta: Meta<typeof PinInput> = {
  title: "Components / PinInput",
};

export default meta;
type Story = StoryObj<typeof PinInput>;

export const Default: Story = {
  args: {
    size: "md",
    length: 4,
    autoFocus: true,
    isDisabled: false,
    isInvalid: false,
    isLoading: false,
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
  render: (props) => <PinInput {...props} />,
};
