import { InputField, Switch } from "@rafty/ui";
import { Meta, StoryObj } from "@storybook/react";
import { FieldWrapper } from "./FieldWrapper";

const meta: Meta<FieldWrapper> = {
  title: "Corp / FieldWrapper",
};

export default meta;
type Story = StoryObj<FieldWrapper>;

export const FlexColumn: Story = {
  render: () => (
    <FieldWrapper
      name="name"
      label="Label"
      description="this is a sample description"
    >
      <InputField id="name" />
    </FieldWrapper>
  ),
};

export const FlexRow: Story = {
  render: () => (
    <FieldWrapper
      name="name"
      label="Label"
      description="this is a sample description"
      orientation="row"
      className="justify-between"
    >
      <InputField id="name" className="max-w-md" />
    </FieldWrapper>
  ),
};

export const FlexRowReverse: Story = {
  render: () => (
    <FieldWrapper
      name="name"
      label="Label"
      description="this is a sample description"
      orientation="row-reverse"
    >
      <Switch id="name" size="sm" />
    </FieldWrapper>
  ),
};
