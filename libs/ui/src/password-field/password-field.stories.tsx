import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { PasswordField } from "./PasswordField";
import { FieldControl } from "../field-control";
import { Label } from "../label";

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
  render: ({ size, variant, disabled, readOnly, required }) => (
    <FieldControl
      name="password"
      isReadOnly={readOnly}
      isDisabled={disabled}
      isRequired={required}
    >
      <Label>Enter Password</Label>
      <PasswordField
        aria-label="password"
        variant={variant}
        size={size}
        name="password"
      />
    </FieldControl>
  ),
};
