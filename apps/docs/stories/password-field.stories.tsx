import { Meta, StoryObj } from "@storybook/react";
import { PasswordField } from "@rhino/input";
import { FieldControl, FieldLabel } from "@rhino/field";

const meta: Meta<typeof PasswordField> = {
  title: "Form / PasswordField",
  args: {
    size: "md",
    variant: "outline",
    isDisabled: false,
    isRequired: false,
    isReadOnly: false,
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["solid", "outline", "ghost", "unstyled"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof PasswordField>;

export const Variants: Story = {
  render: ({ size, variant, isDisabled, isReadOnly, isRequired }) => (
    <>
      <div className="flex w-[640px] flex-col gap-6 dark:text-white">
        <h4>Password Field</h4>
        <FieldControl
          name="password"
          isReadOnly={isReadOnly}
          isDisabled={isDisabled}
          isRequired={isRequired}
        >
          <FieldLabel>Enter Password</FieldLabel>
          <PasswordField
            aria-label="password"
            variant={variant}
            size={size}
            name="password"
          />
        </FieldControl>
      </div>
    </>
  ),
};
