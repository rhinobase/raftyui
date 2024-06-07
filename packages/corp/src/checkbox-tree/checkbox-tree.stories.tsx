import type { Meta, StoryObj } from "@storybook/react";
import { CheckboxTree, type CheckboxTreeData } from "./CheckboxTree";

const meta: Meta<typeof CheckboxTree> = {
  title: "Corp / CheckboxTree",
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

const DATA: CheckboxTreeData[] = [
  {
    label: "Shoes",
    value: "shoes",
    children: [
      {
        label: "Athletic",
        value: "athletic",
        children: [
          {
            label: "Tennis Shoes",
            value: "tennis",
          },
          {
            label: "Running",
            value: "running",
          },
        ],
      },
      {
        label: "Dress Shoes",
        value: "dress",
      },
      {
        label: "Sandals",
        value: "sandals",
        children: [
          {
            label: "Flip-Flop",
            value: "flipflop",
          },
          {
            label: "Fisherman",
            value: "fisherman",
          },
        ],
      },
    ],
  },
  {
    label: "Jewelry",
    value: "jewelry",
    children: [
      {
        label: "Necklace",
        value: "necklace",
      },
      {
        label: "Bracelet",
        value: "bracelet",
      },
      {
        label: "Ring",
        value: "ring",
      },
    ],
  },
  {
    label: "Misc",
    value: "misc",
  },
];

export default meta;
type Story = StoryObj<typeof CheckboxTree>;

export const Default: Story = {
  render: (props) => <CheckboxTree {...props} data={DATA} />,
};
