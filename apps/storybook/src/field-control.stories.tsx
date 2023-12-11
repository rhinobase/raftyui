import { Meta, StoryObj } from "@storybook/react";
import { FieldControl, Label, InputField, ErrorMessage } from "@rafty/ui";

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

export const Deafult: Story = {
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
