import type { Meta, StoryObj } from "@storybook/react";
import { FieldControl } from "../field-control";
import { Label } from "../label";
import { Textarea } from "./Textarea";

const meta: Meta<typeof Textarea> = {
  title: "Form / Textarea",
  args: {
    size: "md",
    variant: "outline",
    disabled: false,
    required: false,
    readOnly: false,
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
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  render: (props) => <Textarea {...props} placeholder="Placeholder" />,
};

export const WithFieldControl: Story = {
  render: ({ disabled, readOnly, required, ...props }) => (
    <FieldControl
      name="textarea"
      isDisabled={disabled}
      isReadOnly={readOnly}
      isRequired={required}
    >
      <Label>Label</Label>
      <Textarea {...props} placeholder="Placeholder" />
    </FieldControl>
  ),
};
