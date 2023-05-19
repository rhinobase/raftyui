import { Meta, StoryObj } from "@storybook/react";
import { FieldControl, FieldLabel } from "@rafty/field";
import { InputField } from "@rafty/input";
import { Switch } from "@rafty/switch";

const meta: Meta<typeof FieldControl> = {
  title: "Form / FieldControl",
  args: {
    name: "field-control",
    orientation: "col",
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
  render: ({ orientation }) => (
    <>
      <FieldControl name="field-control" orientation={orientation}>
        <FieldLabel>String Field</FieldLabel>
        <InputField />
      </FieldControl>
      <FieldControl name="field-control" orientation={orientation}>
        <FieldLabel>Switch field</FieldLabel>
        <Switch />
      </FieldControl>
    </>
  ),
};
