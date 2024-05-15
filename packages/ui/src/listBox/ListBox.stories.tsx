import type { Meta, StoryObj } from "@storybook/react";
import { ListBox } from "./ListBox";

const meta: Meta<typeof ListBox> = {
  title: "Components / ListBox",
};

export default meta;
type Story = StoryObj<typeof ListBox>;

export const Default: Story = {
  args: {
    // disabled: false,
    // items: ["React", "Solid", "Vue", "js"],
  },
  render: () => (
    <ListBox
      items={[
        { label: "hello", value: "Hello" },
        { label: "react", value: "React" },
        { label: "next", value: "Next" },
        { label: "php", value: "PHP" },
        { label: "dotnet", value: "DotNet" },
      ]}
      defaultValue="react"
    />
  ),
};
