import type { Meta, StoryObj } from "@storybook/react";
import { Select, SelectItem, SelectItemGroup } from "./Select.js";

const meta: Meta<typeof Select> = {
  title: "Form / Select",
  args: {
    variant: "outline",
    size: "md",
    isDisabled: false,
    isRequired: false,
    isReadOnly: false,
    isInvalid: false,
    isLoading: false,
    isUnstyled: false,
    placeholder: "Select fruit",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    variant: {
      control: "select",
      options: ["solid", "outline", "ghost"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: (props) => (
    <Select {...props} onChange={(e) => console.log(e.target.value)}>
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
      <SelectItem value="blueberry">Blueberry</SelectItem>
      <SelectItem value="grapes">Grapes</SelectItem>
      <SelectItem value="pineapple">Pineapple</SelectItem>
    </Select>
  ),
};

export const SelectWithSelectItemGroup: Story = {
  render: (props) => (
    <Select {...props} onChange={(e) => console.log(e.target.value)}>
      <SelectItemGroup label="Fruits">
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
        <SelectItem value="grapes">Grapes</SelectItem>
        <SelectItem value="pineapple">Pineapple</SelectItem>
      </SelectItemGroup>
    </Select>
  ),
};
