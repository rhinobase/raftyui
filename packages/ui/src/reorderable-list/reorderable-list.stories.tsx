import type { Meta, StoryObj } from "@storybook/react";
import { ReorderableList } from "./ReorderableList";

const meta: Meta<typeof ReorderableList> = {
  title: "Components / ReorderableList",
  args: {
    size: "md",
    isHidden: false,
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ReorderableList>;

const DATA = ["First item", "Second item", "Third item"];

export const Default: Story = {
  render: (props) => (
    <ReorderableList {...props} data={DATA} onOrderChange={console.log} />
  ),
};
