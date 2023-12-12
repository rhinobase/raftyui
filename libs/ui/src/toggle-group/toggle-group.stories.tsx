import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ToggleGroup, ToggleGroupItem } from "./ToggleGroup";

const meta: Meta<typeof ToggleGroup> = {
  title: "Components / ToggleGroup",
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
type Story = StoryObj<typeof ToggleGroup>;

export const SingleType: Story = {
  render: ({ size }) => (
    <div className="flex w-80 flex-col gap-6">
      <ToggleGroup type="single" defaultValue="1" size={size}>
        <ToggleGroupItem value="1">1</ToggleGroupItem>
        <ToggleGroupItem value="2">2</ToggleGroupItem>
        <ToggleGroupItem value="3">3</ToggleGroupItem>
      </ToggleGroup>
    </div>
  ),
};

export const MultipleType: Story = {
  render: ({ size }) => (
    <div className="flex w-80 flex-col gap-6">
      <ToggleGroup type="multiple" defaultValue={["1", "2"]} size={size}>
        <ToggleGroupItem value="1">1</ToggleGroupItem>
        <ToggleGroupItem value="2">2</ToggleGroupItem>
        <ToggleGroupItem value="3">3</ToggleGroupItem>
      </ToggleGroup>
    </div>
  ),
};
