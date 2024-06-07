import type { Meta, StoryObj } from "@storybook/react";
import { EditableText } from "./EditableText";

const meta: Meta<typeof EditableText> = {
  title: "Components / EditableText",
  args: {
    size: "md",
    defaultValue: "hello",
    isDisabled: false,
    isReadOnly: false,
    isInvalid: false,
    isLoading: false,
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof EditableText>;

export const Default: Story = {
  render: (props) => <EditableText {...props} />,
};
