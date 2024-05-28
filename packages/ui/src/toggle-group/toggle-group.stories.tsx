import type { Meta, StoryObj } from "@storybook/react";
import { ToggleGroup, ToggleGroupItem } from "./ToggleGroup";

const meta: Meta<typeof ToggleGroup> = {
  title: "Components / ToggleGroup",
  args: {
    size: "md",
    orientation: "horizontal",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ToggleGroup>;

export const SingleType: Story = {
  render: ({ size, orientation }) => (
    <ToggleGroup
      type="single"
      defaultValue="1"
      size={size}
      orientation={orientation}
    >
      <ToggleGroupItem value="1">1</ToggleGroupItem>
      <ToggleGroupItem value="2">2</ToggleGroupItem>
      <ToggleGroupItem value="3">3</ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const MultipleType: Story = {
  render: ({ size, orientation }) => (
    <ToggleGroup
      type="multiple"
      defaultValue={["1", "2"]}
      size={size}
      orientation={orientation}
    >
      <ToggleGroupItem value="1">1</ToggleGroupItem>
      <ToggleGroupItem value="2">2</ToggleGroupItem>
      <ToggleGroupItem value="3">3</ToggleGroupItem>
    </ToggleGroup>
  ),
};
