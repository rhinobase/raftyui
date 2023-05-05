import { Meta, StoryObj } from "@storybook/react";
import { FieldControl } from "../src/field";
import { PasswordField } from "../src/password-field";

const meta: Meta<typeof PasswordField> = {
  title: "Components / PasswordField",
  args: {
    sizes: "md",
    variant: "outline",
    disabled: false,
    required: false,
    readOnly: false,
  },
  argTypes: {
    sizes: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    variant: {
      control: "select",
      options: ["solid", "outline", "ghost", "unstyled"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof PasswordField>;

export const Variants: Story = {
  render: ({ sizes, variant, disabled, readOnly, required }) => (
    <>
      <div className="flex w-[640px] flex-col gap-6 dark:text-white">
        <h4>Password Field</h4>
        <FieldControl
          name="password"
          readOnly={readOnly}
          disabled={disabled}
          required={required}
        >
          <PasswordField variant={variant} sizes={sizes} name="password" />
        </FieldControl>
      </div>
    </>
  ),
};
