import type { Meta, StoryObj } from "@storybook/react";
import { FieldControl } from "../field-control/index.js";
import { Label } from "../label/index.js";
import { PasswordField } from "./PasswordField.js";

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
      options: ["solid", "outline", "ghost"],
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
  render: ({ disabled, readOnly, required, ...props }) => (
    <FieldControl
      name="password"
      isReadOnly={readOnly}
      isDisabled={disabled}
      isRequired={required}
    >
      <Label>Enter Password</Label>
      <PasswordField {...props} aria-label="password" name="password" />
    </FieldControl>
  ),
};
