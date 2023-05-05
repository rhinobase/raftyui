import { Meta, StoryObj } from "@storybook/react";
import {
  Checkbox,
  FieldControl,
  FieldGroup,
  FieldLabel,
  InputField,
  Switch,
} from "../src";

const meta: Meta<typeof FieldControl> = {
  title: "Components / FieldControl",
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

export const Variants: Story = {
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
