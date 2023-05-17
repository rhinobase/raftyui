import { Meta, StoryObj } from "@storybook/react";
import { TagField, FieldControl } from "@rhino/ui";

const meta: Meta<typeof TagField> = {
  title: "Components / TagField",
};

export default meta;
type Story = StoryObj<typeof TagField>;

export const Default: Story = {
  render: () => (
    <>
      <FieldControl name="tag">
        <TagField />
      </FieldControl>
    </>
  ),
};
