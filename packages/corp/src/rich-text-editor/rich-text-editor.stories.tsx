import type { Meta, StoryObj } from "@storybook/react";
import { RichTextEditor } from "./RichTextEditor";

const meta: Meta<typeof RichTextEditor> = {
  title: "Corp / RichTextEditor",
  args: {
    isReadOnly: false,
    isHidden: false,
    isInvalid: false,
  },
};

export default meta;
type Story = StoryObj<typeof RichTextEditor>;

export const Default: Story = {
  render: (props) => <RichTextEditor {...props} />,
};
