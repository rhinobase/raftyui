import { Meta, StoryObj } from "@storybook/react";
import { InputField, NumberField } from "@rhino/input";

const meta: Meta<typeof NumberField> = {
  title: "Form / NumberField",
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

export const Variants: Story = {
  render: ({ size, variant, isReadOnly, isDisabled, isRequired }) => (
    <>
      <div className="flex w-[640px] flex-col gap-6 dark:text-white">
        <h4 className="font-bold">Number Field</h4>
        <NumberField
          variant={variant}
          isReadOnly={isReadOnly}
          isDisabled={isDisabled}
          isRequired={isRequired}
          size={size}
        />
      </div>
    </>
  ),
};
