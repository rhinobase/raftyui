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
  a: {
    b: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    c: {
      d: false,
      hm: {
        h: {
          a: {
            b: [2, 2, 3, { c: "c" }],
          },
          b: "b",
        },
      },
    },
    e: false,
  },
};

export default meta;
type Story = StoryObj<typeof JSONExplorer>;

export const Default: Story = {
  render: (props) => <JSONExplorer {...props} data={DATA} />,
};
