import { Meta, StoryObj } from "@storybook/react";
import { FieldControl, FieldLabel, PasswordField } from "../src";
import { within, fireEvent, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const PasswordField = await canvas.findByLabelText("password");

    // Test for passwordfield
    await expect(PasswordField).toBeInTheDocument();
    await expect(PasswordField).toHaveAttribute("type", "password");

    // Test for Password input
    await fireEvent.change(PasswordField, { target: { value: "Password" } });
    await expect(PasswordField).toHaveValue("Password");

    // Test for Show and Hide Password
    const show_button = await canvas.getByRole("button");
    await userEvent.click(show_button);
    await expect(PasswordField).toHaveAttribute("type", "text");
    await userEvent.click(show_button);
    await expect(PasswordField).toHaveAttribute("type", "password");
  },
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
