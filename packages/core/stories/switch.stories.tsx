import { Meta, StoryObj } from "@storybook/react";
import { Switch } from "../src/switch";

const meta: Meta<typeof Switch> = {
  title: "Components / Switch",
  args: {
    size: "md",
    isDisabled: false,
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    isDisabled: {
      control: "boolean",
      options: [true, false],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Variants: Story = {
  render: ({ size, isDisabled }) => (
    <>
      <div className="max-w-2xl w-full flex flex-col gap-4">
        <h4 className="font-bold">Switch</h4>
        <Switch size={size} isDisabled={isDisabled} />
        <h4 className="font-bold">Switch defaultSelected</h4>
        <Switch size={size} defaultSelected isDisabled={isDisabled} />
      </div>
    </>
  ),
};
