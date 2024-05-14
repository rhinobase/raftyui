import type { Meta, StoryObj } from "@storybook/react";
import { EditableTextarea } from "./EditableTextarea";

const meta: Meta<typeof EditableTextarea> = {
  title: "Components / EditableTextarea",
};

export default meta;
type Story = StoryObj<typeof EditableTextarea>;

export const Default: Story = {
  args: {
    isDisabled: false,
    defaultValue: "Sample Text",
    isReadOnly: false,
    size: "md",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
  render: (props) => <EditableTextarea {...props} />,
};
