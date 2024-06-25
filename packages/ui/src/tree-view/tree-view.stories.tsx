import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
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
        "1.1.2.1": { "1.1.2.1.1": { "1.1.2.1.1.1": "1.1.2.1.1.1" } },
        "1.1.2.2": "1.1.2.1",
      },
    },
    "1.2": "1.2",
  },
  "2": {
    "2.1": {
      "2.1.1": {
        "2.1.1.1": "2.1.1.1",
        "2.1.1.2": "2.1.1.2",
      },
      "2.1.2": "2.1.2",
    },
    "2.2": "2.2",
  },
  "3": "3",
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
    </TreeView>
  ),
};

export const Hierarchy: Story = {
  render: (props) => (
    <TreeView {...props}>
      <TreeViewItem value="A">
        <TreeViewLabel>A</TreeViewLabel>
        <TreeViewContent>
          <TreeViewItem value="a">
            <TreeViewLabel>Aa</TreeViewLabel>
          </TreeViewItem>
        </TreeViewContent>
      </TreeViewItem>
      <TreeViewItem value="B">
        <TreeViewLabel>B</TreeViewLabel>
      </TreeViewItem>
    </TreeView>
  ),
};

export const ShowIndicator: Story = {
  render: (props) => (
    <TreeView {...props}>
      <TreeViewItem value="A">
        <TreeViewLabel showIndicator={false}>A</TreeViewLabel>
        <TreeViewContent>
          <TreeViewItem value="a">
            <TreeViewLabel>Aa</TreeViewLabel>
          </TreeViewItem>
        </TreeViewContent>
      </TreeViewItem>
      <TreeViewItem value="B">
        <TreeViewLabel>B</TreeViewLabel>
      </TreeViewItem>
    </TreeView>
  ),
};

export const CustomIndicator: Story = {
  render: (props) => (
    <TreeView {...props}>
      <TreeViewItem value="A">
        <TreeViewLabel
          openIndicator={<MinusIcon className="size-full" />}
          closeIndicator={<PlusIcon className="size-full" />}
        >
          A
        </TreeViewLabel>
        <TreeViewContent>
          <TreeViewItem value="a">
            <TreeViewLabel>Aa</TreeViewLabel>
          </TreeViewItem>
        </TreeViewContent>
      </TreeViewItem>
      <TreeViewItem value="B">
        <TreeViewLabel>B</TreeViewLabel>
      </TreeViewItem>
    </TreeView>
  ),
};
