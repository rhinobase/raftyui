import type { Meta, StoryObj } from "@storybook/react";
import { InputField } from "./InputField";

const meta: Meta<typeof InputField> = {
  title: "Form / InputField",
  args: {
    size: "md",
    variant: "outline",
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
type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  render: ({ size, variant, isReadOnly, isDisabled, isRequired }) => (
    <div className="flex w-[640px] flex-col gap-6 dark:text-white">
      <h4 className="font-bold">Input Field</h4>
      <InputField
        variant={variant}
        isReadOnly={isReadOnly}
        isDisabled={isDisabled}
        isRequired={isRequired}
        size={size}
        placeholder="Enter Text"
      />
    </div>
  ),
};
