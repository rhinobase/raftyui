import { Meta, StoryObj } from "@storybook/react";
import { Markdown } from "./Markdown";

const meta: Meta<typeof Markdown> = {
  title: "Corp / Markdown",
  args: {
    content: "# Sample",
  },
};

export default meta;
type Story = StoryObj<typeof Markdown>;

export const Default: Story = {
  render: ({ content }) => <Markdown content={content} />,
};
