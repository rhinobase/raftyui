import { Meta, StoryObj } from "@storybook/react";
import { FieldControl } from "../src/field";
import { PasswordField } from "../src/password-field";
import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta: Meta<typeof PasswordField> = {
  title: "Components / PasswordField",
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

export const Variants: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const PasswordField = await canvas.findByLabelText("password");

    // Test for passwordfield
    await expect(PasswordField).toBeInTheDocument();
  },
  render: ({ size, variant, disabled, readOnly, required }) => (
    <>
      <div className="flex w-[640px] flex-col gap-6 dark:text-white">
        <h4>Password Field</h4>
        <FieldControl
          name="password"
          readOnly={readOnly}
          disabled={disabled}
          required={required}
        >
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
