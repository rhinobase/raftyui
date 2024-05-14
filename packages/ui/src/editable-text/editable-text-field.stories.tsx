import type { Meta, StoryObj } from "@storybook/react";
import { EditableText } from "./EditableText";

const meta: Meta<typeof EditableText> = {
  title: "Components / EditableText",
  args: {
    isDisabled: false,
    isReadOnly: false,
    defaultValue: "hello",
    size: "md",
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
