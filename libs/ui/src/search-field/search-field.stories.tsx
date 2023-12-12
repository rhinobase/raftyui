import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { FieldControl } from "../field-control";
import { Label } from "../label";
import { SearchField } from "./SearchField";

const meta: Meta<typeof SearchField> = {
  title: "Form / SearchField",
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
type Story = StoryObj<typeof SearchField>;

export const Default: Story = {
  render: ({ size, variant, disabled, readOnly, required }) => (
    <FieldControl
      name="search..."
      isReadOnly={readOnly}
      isDisabled={disabled}
      isRequired={required}
    >
      <Label>Enter Search Value</Label>
      <SearchField
        aria-label="search"
        variant={variant}
        size={size}
        name="search..."
      />
    </FieldControl>
  ),
};
