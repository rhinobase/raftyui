import type { Meta, StoryObj } from "@storybook/react";
import {
  TreeView,
  TreeViewContent,
  TreeViewItem,
  TreeViewLabel,
} from "./TreeView";

const meta: Meta<typeof TreeView> = {
  title: "Components / TreeView",
  args: {
    size: "md",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof TreeView>;

export const Default: Story = {
  render: (props) => (
    <TreeView {...props}>
      <TreeViewItem value="1">
        <TreeViewLabel>Item 1</TreeViewLabel>
        <TreeViewContent>
          <TreeViewItem value="1.1">
            <TreeViewLabel>Item 1.1</TreeViewLabel>
            <TreeViewContent>
              <TreeViewItem value="1.2">
                <TreeViewLabel>Item 1.2</TreeViewLabel>
              </TreeViewItem>
            </TreeViewContent>
          </TreeViewItem>
        </TreeViewContent>
      </TreeViewItem>
      <TreeViewItem value="2">
        <TreeViewLabel>Item 2</TreeViewLabel>
        <TreeViewContent>
          <TreeViewItem value="2.1">
            <TreeViewLabel>Item 2.1</TreeViewLabel>
          </TreeViewItem>
        </TreeViewContent>
      </TreeViewItem>
    </TreeView>
  ),
};
