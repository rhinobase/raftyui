import { Meta, StoryObj } from "@storybook/react";
import { TagField } from "@rhino/tag-field";
import { FieldControl } from "@rhino/field";

const meta: Meta<typeof TagField> = {
  title: "Components / TagField",
};

export default meta;
type Story = StoryObj<typeof TagField>;

export const Variants: Story = {
  render: () => (
    <>
      <FieldControl name="tag">
        <TagField />
      </FieldControl>
    </>
  ),
};
