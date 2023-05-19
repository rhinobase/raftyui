import { Meta, StoryObj } from "@storybook/react";
import { InputField } from "@rafty/input";

const meta: Meta<typeof InputField> = {
  title: "Form / InputField",
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

export const Default: Story = {
  render: ({ size, variant, readOnly, disabled, required }) => (
    <>
      <div className="flex w-[640px] flex-col gap-6 dark:text-white">
        <h4 className="font-bold">Input Field</h4>
        <InputField
          variant={variant}
          readOnly={readOnly}
          disabled={disabled}
          required={required}
          size={size}
          placeholder="Enter Text"
        />
      </div>
    </>
  ),
};
