import { Meta, StoryObj } from "@storybook/react";
import { Switch } from "@rafty/ui";

const meta: Meta<typeof Switch> = {
  title: "Form / Switch",
  args: {
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
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: ({ size }) => (
    <div className="flex flex-col gap-4 dark:text-white">
      <h4 className="font-bold">Switch</h4>
      <Switch size={size}>Switch</Switch>
      <h4 className="font-bold">Switch defaultSelected</h4>
      <Switch size={size} defaultChecked />
      <h4 className="font-bold">Switch disabled</h4>
      <Switch size={size} isDisabled />
    </div>
  ),
};
