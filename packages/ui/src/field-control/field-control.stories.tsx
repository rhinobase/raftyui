import { Meta, StoryObj } from "@storybook/react";
import { ErrorMessage } from "../error-message";
import { InputField } from "../input-field";
import { Label } from "../label";
import { FieldControl } from "./FieldControl";

const meta: Meta<typeof FieldControl> = {
  title: "Form / FieldControl",
  args: {
    orientation: "col",
    isRequired: false,
    isDisabled: false,
    isLoading: false,
  },
  argTypes: {
    orientation: {
      control: "select",
      options: ["col", "row", "row-reverse"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof FieldControl>;

export const Default: Story = {
  render: ({ orientation, isRequired, isDisabled, isLoading }) => (
    <FieldControl
      name="field-control"
      orientation={orientation}
      isRequired={isRequired}
      isDisabled={isDisabled}
      isLoading={isLoading}
    >
      <Label>String Field</Label>
      <InputField />
      <ErrorMessage>This is where error message will appear</ErrorMessage>
    </FieldControl>
  ),
};
