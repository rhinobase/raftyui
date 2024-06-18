import type { Meta, StoryObj } from "@storybook/react";
import { FieldControl } from "../field-control";
import { InputField } from "./InputField";

const meta: Meta<typeof InputField> = {
  title: "Form / InputField",
  args: {
    size: "md",
    variant: "outline",
    isDisabled: false,
    isRequired: false,
    isReadOnly: false,
    isLoading: false,
    isInvalid: false,
    placeholder: "Enter text",
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
type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  render: (props) => <InputField {...props} />,
};

export const WithFieldControl: Story = {
  render: ({
    isDisabled,
    isInvalid,
    isLoading,
    isReadOnly,
    isRequired,
    ...props
  }) => (
    <FieldControl
      name="InputField"
      isDisabled={isDisabled}
      isInvalid={isInvalid}
      isLoading={isLoading}
      isReadOnly={isReadOnly}
      isRequired={isRequired}
    >
      <InputField {...props} />
    </FieldControl>
  ),
};
