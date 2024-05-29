import type { Meta, StoryObj } from "@storybook/react";
import { TagField } from "./TagField";

const meta: Meta<TagField> = {
  title: "Components / TagField",
  args: {
    size: "md",
    placeholder: "Add Framework",
    disabled: false,
    readOnly: false,
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<TagField>;

export const Default: Story = {
  render: (props) => <TagField {...props} />,
};

export const DefaultValue: Story = {
  render: (props) => <TagField {...props} defaultValue={["hello", "hmmmm"]} />,
};
