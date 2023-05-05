import { Meta, StoryObj } from "@storybook/react";
import { Switch } from "../src/switch";
import { expect } from "@storybook/jest";
import { userEvent, within } from "@storybook/testing-library";

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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const switches = await canvas.getAllByRole("switch");

    // Test for Switch
    await userEvent.click(switches[0]);
    await expect(switches[0]).toBeChecked();
    await userEvent.click(switches[0]);
    await expect(switches[0]).not.toBeChecked();

    // Test for Switch with defaultSelected
    await expect(switches[1]).toBeChecked();

    // Test for disabled switch
    await expect(switches[2]).toBeDisabled();

    console.log(switches);
  },

  render: ({ size, isDisabled }) => (
    <>
      <div className="max-w-2xl w-full flex flex-col gap-4">
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
