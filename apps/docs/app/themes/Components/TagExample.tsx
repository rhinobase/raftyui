import { Tag } from "@rafty/ui";

export function TagExample() {
  return (
    <div className="flex flex-wrap gap-6">
      <Tag colorScheme="primary">Tag text</Tag>
      <Tag colorScheme="secondary">Tag text</Tag>
      <Tag colorScheme="success">Tag text</Tag>
      <Tag colorScheme="warning">Tag text</Tag>
      <Tag colorScheme="error">Tag text</Tag>
    </div>
  );
}
