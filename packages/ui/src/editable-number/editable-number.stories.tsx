import type { Meta, StoryObj } from "@storybook/react";
import { EditableNumber } from "./EditableNumber";

const meta: Meta<typeof EditableNumber> = {
  title: "Components / EditableNumber",
  args: {
    size: "md",
    defaultValue: 5,
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
  },
};

export default meta;
type Story = StoryObj<typeof EditableNumber>;

export const Default: Story = {
  render: (props) => <EditableNumber {...props} />,
};
