import { Meta, StoryObj } from "@storybook/react";
import { FieldControl, FieldLabel } from "@rafty/field";
import { PasswordField } from "@rafty/input";

const meta: Meta<typeof PasswordField> = {
  title: "Form / PasswordField",
  args: {
    size: "md",
    variant: "outline",
    disabled: false,
    required: false,
    readOnly: false,
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

export const Default: Story = {
  render: ({ size, variant, disabled, readOnly, required }) => (
    <>
      <div className="flex w-[640px] flex-col gap-6 dark:text-white">
        <h4>Password Field</h4>
        <FieldControl
          name="password"
          isReadOnly={readOnly}
          isDisabled={disabled}
          isRequired={required}
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
