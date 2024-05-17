import type { Meta, StoryObj } from "@storybook/react";
import { EditableNumber } from "./EditableNumber";

const meta: Meta<typeof EditableNumber> = {
  title: "Components / EditableNumber",
  args: {
    isDisabled: false,
    isReadOnly: false,
    defaultValue: 5,
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
type Story = StoryObj<typeof EditableNumber>;

export const Default: Story = {
  render: (props) => <EditableNumber {...props} />,
};
