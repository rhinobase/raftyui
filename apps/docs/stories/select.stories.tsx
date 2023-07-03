import { Meta, StoryObj } from "@storybook/react";
import { Select, Option, Label } from "@rafty/ui";

const meta: Meta<typeof Select> = {
  title: "Form / Select",
  args: {
    variant: "outline",
    size: "md",
    isDisabled: false,
    isInvalid: false,
    isRequired: false,
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
  render: ({ variant, size, isDisabled, isInvalid, isRequired }) => (
    <div className="w-[500px]">
      <Label isRequired={isRequired}>select</Label>
      <Select
        variant={variant}
        size={size}
        disabled={isDisabled}
        isInvalid={isInvalid}
      >
        <Option value="apple">Apple</Option>
        <Option value="banana">Banana</Option>
        <Option value="blueberry">Blueberry</Option>
        <Option value="grapes">Grapes</Option>
        <Option value="pineapple">Pineapple</Option>
      </Select>
    </div>
  ),
};
