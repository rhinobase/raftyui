import { Tag } from "@rafty/ui";

export const tag_examples = {
  "tag:usage": <Tag>Tag text</Tag>,
  "tag:sizes": (
    <div className="space-y-2">
      <Tag size="sm">Tag text</Tag>
      <Tag size="md">Tag text</Tag>
      <Tag size="lg">Tag text</Tag>
    </div>
  ),
  "tag:colorschema": (
    <div className="space-y-2">
      <Tag colorScheme="primary">Tag text</Tag>
      <Tag colorScheme="success">Tag text</Tag>
      <Tag colorScheme="warning">Tag text</Tag>
      <Tag colorScheme="error">Tag text</Tag>
    </div>
  ),
};
