import { Meta, StoryObj } from "@storybook/react";
import { InputField, SearchField } from "../src";

const meta: Meta<typeof SearchField> = {
  title: "Form / SearchField",
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
        <h4 className="font-bold">Search Field</h4>
        <SearchField
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
