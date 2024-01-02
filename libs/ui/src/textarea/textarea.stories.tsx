import { Meta, StoryObj } from "@storybook/react";
import { FieldControl } from "../field-control";
import { Label } from "../label";
import { Textarea } from "./Textarea";

const meta: Meta<typeof Textarea> = {
  title: "Form / Textarea",
  args: {
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
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  render: ({ variant, disabled, required, readOnly }) => (
    <FieldControl
      name="textarea"
      isDisabled={disabled}
      isReadOnly={readOnly}
      isRequired={required}
    >
      <Label>Label</Label>
      <Textarea placeholder="Placeholder" variant={variant} />
    </FieldControl>
  ),
};
