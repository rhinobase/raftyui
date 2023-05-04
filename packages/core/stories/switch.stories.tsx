import { Meta, StoryObj } from "@storybook/react";
import { Switch } from "../src/switch";
import { option } from "yargs";
import { isDisabled } from "@testing-library/user-event/dist/utils";

const meta: Meta<typeof Switch> = {
  title: "Components / Switch",
  decorators: [
    (Story) => (
      <div className="w-full flex flex-col items-center justify-center gap-2 mx-auto max-w-3xl h-[calc(100vh-40px)]">
        <Story />
      </div>
    ),
  ],
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
