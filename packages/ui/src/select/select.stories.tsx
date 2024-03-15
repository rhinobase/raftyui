import type { Meta, StoryObj } from "@storybook/react";
import { Select, SelectItem, SelectItemGroup } from "./Select";

const meta: Meta<typeof Select> = {
  title: "Form / Select",
  args: {
    variant: "outline",
    size: "md",
    isDisabled: false,
    isRequired: false,
    isReadOnly: false,
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
  render: ({ variant, size, isDisabled, isRequired, isReadOnly }) => (
    <Select
      variant={variant}
      size={size}
      isDisabled={isDisabled}
      isRequired={isRequired}
      isReadOnly={isReadOnly}
      placeholder="Select fruit"
      onChange={(e) => console.log(e.target.value)}
    >
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
