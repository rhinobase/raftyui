import type { Meta, StoryObj } from "@storybook/react";
import { ColorPicker } from "./ColorPicker";

const meta: Meta<typeof ColorPicker> = {
  title: "Form / ColorPicker",
  args: {
    size: "md",
    format: "rgba",
    isDisabled: false,
    isInvalid: false,
    isLoading: false,
    isReadOnly: false,
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    format: {
      control: "select",
      options: ["hsba", "rgba", "hsla"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ColorPicker>;

export const Default: Story = {
  render: (props) => <ColorPicker {...props} onValueChange={console.log} />,
};
