import { Meta, StoryObj } from "@storybook/react";
import { InputField, FieldControl, FieldLabel } from "../src";

const meta: Meta<typeof InputField> = {
  title: "Components / InputField",
  args: {
    size: "md",
    variant: "outline",
    disabled: false,
    required: false,
    readOnly: false,
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

export const Variants: Story = {
  render: ({ size, variant, readOnly, disabled, required }) => (
    <>
      <div className="flex w-[640px] flex-col gap-6 dark:text-white">
        <h4 className="font-bold">Input Field</h4>
        <FieldControl
          name="ss"
          readOnly={readOnly}
          disabled={disabled}
          required={required}
        >
          <FieldLabel>Enter Name</FieldLabel>
          <InputField variant={variant} size={size} placeholder="Enter Text" />
        </FieldControl>
      </div>
    </>
  ),
};
