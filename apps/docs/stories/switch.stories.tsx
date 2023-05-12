import { Meta, StoryObj } from "@storybook/react";
import { Switch } from "@rhino/switch";

const meta: Meta<typeof Switch> = {
  title: "Components / Switch",
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

export const Variants: Story = {
  render: ({ size, isDisabled }) => (
    <>
      <div className="flex flex-col gap-4">
        <h4 className="font-bold">Switch</h4>
        <Switch size={size} isDisabled={isDisabled} />
        <h4 className="font-bold">Switch defaultSelected</h4>
        <Switch size={size} defaultSelected isDisabled={isDisabled} />
        <h4 className="font-bold">Switch disabled</h4>
        <Switch size={size} isDisabled />
      </div>
    </>
  ),
};
