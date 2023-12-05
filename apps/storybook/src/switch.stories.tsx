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
    <div className="flex flex-col gap-4 dark:text-white">
      <h4 className="font-bold">Switch</h4>
      <Switch
        size={size}
        isDisabled={isDisabled}
        isReadOnly={isReadOnly}
        isRequired={isRequired}
        defaultChecked={defaultChecked}
      >
        Switch
      </Switch>
    </div>
  ),
};
