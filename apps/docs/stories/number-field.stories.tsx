import { Meta, StoryObj } from "@storybook/react";
import { InputField, NumberField } from "@rafty/input";

const meta: Meta<typeof InputField> = {
  title: "Form / NumberField",
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
        <h4 className="font-bold">Number Field</h4>
        <NumberField
          variant={variant}
          isReadOnly={readOnly}
          isDisabled={disabled}
          isRequired={required}
          size={size}
        />
      </div>
    </>
  ),
};
