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

const DATA = {
  "1": {
    "1.1": {
      "1.1.1": "1.1.1",
      "1.1.2": {
        "1.1.2.1": "1.1.2.1",
        "1.1.2.2": "1.1.2.2",
      },
    },
    "1.2": "1.2",
  },
  "2": {
    "2.1": {
      "2.1.1": "2.1.1",
      "2.1.2": "2.1.2",
    },
    "2.2": "2.2",
  },
};

export default meta;
type Story = StoryObj<typeof TreeView>;

// @ts-ignore
type CreateTreeType = Record<string, string | CreateTreeType>;
function CreateTree({ tree }: { tree: CreateTreeType }) {
  return Object.entries(tree).map(([key, value]) => {
    const isNested = typeof value !== "string";

    return (
      <TreeViewItem key={key} value={isNested ? key : value}>
        <TreeViewLabel>Item {key}</TreeViewLabel>
        {isNested && (
          <TreeViewContent>
            <CreateTree tree={value} />
          </TreeViewContent>
        )}
      </TreeViewItem>
    );
  });
}

export const Default: Story = {
  render: (props) => (
    <TreeView {...props}>
      <CreateTree tree={DATA} />
      {/* <TreeViewItem value="1">
        <TreeViewLabel>Item 1</TreeViewLabel>
        <TreeViewContent>
          <TreeViewItem value="1.1">
            <TreeViewLabel>Item 1.1</TreeViewLabel>
            <TreeViewContent>
              <TreeViewItem value="1.1.2">
                <TreeViewLabel>Item 1.1.2</TreeViewLabel>
              </TreeViewItem>
            </TreeViewContent>
          </TreeViewItem>
          <TreeViewItem value="1.2">
            <TreeViewLabel>Item 1.2</TreeViewLabel>
            <TreeViewContent>
              <TreeViewItem value="1.2.1">
                <TreeViewLabel>Item 1.2.1</TreeViewLabel>
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
      </TreeViewItem> */}
    </TreeView>
  ),
};
