import type { Meta, StoryObj } from "@storybook/react";
import { ReorderableList } from "./ReorderableList";

const meta: Meta<typeof ReorderableList> = {
  title: "Components / ReorderableList",
  args: {
    size: "md",
    hidden: false,
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

const data = ["The first card", "The second card", "And me!"];

export const Default: Story = {
  render: (props) => <ReorderableList {...props} data={data} />,
};
