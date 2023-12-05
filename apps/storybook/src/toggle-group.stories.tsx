import { Meta, StoryObj } from "@storybook/react";
import { ToggleGroup, ToggleGroupItem } from "@rafty/ui";

const meta: Meta<typeof ToggleGroup> = {
  title: "Components / ToggleGroup",
  args: {
    size: "md",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg", "full"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ToggleGroup>;

export const Default: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-6">
      <ToggleGroup type="single" defaultValue="1">
        <ToggleGroupItem value="1">1</ToggleGroupItem>
        <ToggleGroupItem value="2">2</ToggleGroupItem>
        <ToggleGroupItem value="3">3</ToggleGroupItem>
      </ToggleGroup>
    </div>
  ),
};

export const Type: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-6">
      <ToggleGroup type="multiple">
        <ToggleGroupItem value="1">1</ToggleGroupItem>
        <ToggleGroupItem value="2">2</ToggleGroupItem>
        <ToggleGroupItem value="3">3</ToggleGroupItem>
      </ToggleGroup>
    </div>
  ),
};
