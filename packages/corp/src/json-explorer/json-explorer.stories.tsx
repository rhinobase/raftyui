import type { Meta, StoryObj } from "@storybook/react";
import { JSONExplorer, type JSONExplorerData } from "./JSONExplorer";

const meta: Meta<typeof JSONExplorer> = {
  title: "Corp / JSONExplorer",
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

const DATA: JSONExplorerData = {
  json: {
    A: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    B: {
      1: false,
      2: {
        a: {
          a1: {
            "a1.1": [2, 2, 3, { c: "c" }],
          },
          a2: "b",
        },
      },
    },
    C: false,
  },
};

export default meta;
type Story = StoryObj<typeof JSONExplorer>;

export const Default: Story = {
  render: (props) => <JSONExplorer {...props} data={DATA} />,
};
