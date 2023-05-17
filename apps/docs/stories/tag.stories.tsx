import { Meta, StoryObj } from "@storybook/react";
import { Tag } from "@rhino/ui";

const meta: Meta<typeof Tag> = {
  title: "Components / Tag",
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Variants: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-10 max-w-3xl w-full">
      <div className="space-y-2">
        <Tag colorScheme="primary">Tag text</Tag>
        <Tag colorScheme="secondary">Tag text</Tag>
        <Tag colorScheme="error">Tag text</Tag>
        <Tag colorScheme="success">Tag text</Tag>
        <Tag colorScheme="warning">Tag Text</Tag>
      </div>
      <div className="space-y-2">
        <Tag size="sm">Tag text</Tag>
        <Tag>Tag text</Tag>
        <Tag size="lg">Tag text</Tag>
      </div>
    </div>
  ),
};
