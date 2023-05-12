import { Meta, StoryObj } from "@storybook/react";
import { Select } from "@rhino/select";
import { Item } from "react-stately";

const meta: Meta<typeof Select> = {
  title: "Form / Select",
  args: {
    size: "md",
    variant: "outline",
    unstyled: false,
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    variant: {
      control: "select",
      options: ["outline", "ghost", "solid"],
    },
    unstyled: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Variants: Story = {
  render: ({ size, variant, unstyled }) => (
    <div className="max-w-2xl w-full flex flex-col gap-4">
      <h4 className="font-bold">Style</h4>
      <Select variant={variant} size={size} unstyled={unstyled}>
        <Item key="option1">Option 1</Item>
        <Item key="option2">Option 2</Item>
        <Item key="option3">Option 3</Item>
      </Select>
    </div>
  ),
};
