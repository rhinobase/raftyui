import { Meta, StoryObj } from "@storybook/react";
import { Select, Option } from "../src/select";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta: Meta<typeof Select> = {
  title: "Components / Select",
  args: {
    sizes: "md",
    variant: "outline",
    unstyled: false,
  },
  argTypes: {
    sizes: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    variant: {
      control: "select",
      options: ["outline", "ghost", "solid"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Variants: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const selects = await canvas.findAllByRole("combobox");

    for (let i = 0; i < selects.length; i++) {
      const select = selects[i];

      // Select a Option
      await userEvent.selectOptions(select, "Option 2");

      // Check for Select
      const options = await select.getElementsByTagName("option");
      await expect(options[0].selected).toBeFalsy();
      await expect(options[1].selected).toBeTruthy();
      await expect(options[2].selected).toBeFalsy();

      // Checking Number of Options
      await expect(options.length).toBe(3);
    }
  },

  render: ({ sizes, variant }) => (
    <div className="max-w-2xl w-full flex flex-col gap-4">
      <h4 className="font-bold">Styled</h4>
      <Select variant={variant} sizes={sizes}>
        <Option value="option1">Option 1</Option>
        <Option value="option2">Option 2</Option>
        <Option value="option3">Option 3</Option>
      </Select>
      <h4 className="font-bold">unStyled</h4>
      <Select unstyled sizes={sizes}>
        <Option value="option1">Option 1</Option>
        <Option value="option2">Option 2</Option>
        <Option value="option3">Option 3</Option>
      </Select>
    </div>
  ),
};
