import { Meta, StoryObj } from "@storybook/react";
import { Switch } from "@rafty/ui";

const meta: Meta<typeof Switch> = {
  title: "Form / Switch",
  args: {
    size: "md",
    isReadOnly: false,
    isDisabled: false,
    isRequired: false,
    defaultChecked: false,
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: ({ size, defaultChecked, isDisabled, isReadOnly, isRequired }) => (
    <Switch
      size={size}
      isDisabled={isDisabled}
      isReadOnly={isReadOnly}
      isRequired={isRequired}
      defaultChecked={defaultChecked}
    />
  ),
};
