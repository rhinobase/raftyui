import type { Meta, StoryObj } from "@storybook/react";
import { EditableTextarea } from "./EditableTextarea";

const meta: Meta<typeof EditableTextarea> = {
  title: "Components / EditableTextarea",
};

export default meta;
type Story = StoryObj<typeof EditableTextarea>;

export const Default: Story = {
  args: {
    size: "md",
    defaultValue: "Sample Text",
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
  render: (props) => <EditableTextarea {...props} />,
};
