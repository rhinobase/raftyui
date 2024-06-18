import type { Meta, StoryObj } from "@storybook/react";
import { SegmentedControl, SegmentedControlItem } from "./SegmentedControl";

const meta: Meta<typeof SegmentedControl> = {
  title: "Components / SegmentedControl",
};

export default meta;
type Story = StoryObj<typeof SegmentedControl>;

export const Default: Story = {
  args: {
    orientation: "horizontal",
    disabled: false,
    readOnly: false,
    isLoading: false,
    defaultValue: "react",
    size: "md",
  },
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
  render: (props) => (
    <SegmentedControl {...props} onValueChange={console.log}>
      <SegmentedControlItem value="react">React</SegmentedControlItem>
      <SegmentedControlItem value="solid">Solid</SegmentedControlItem>
      <SegmentedControlItem value="svelte">Svelte</SegmentedControlItem>
      <SegmentedControlItem value="vue">Vue</SegmentedControlItem>
    </SegmentedControl>
  ),
};
