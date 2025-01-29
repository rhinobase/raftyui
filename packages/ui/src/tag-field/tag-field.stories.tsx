import type { Meta, StoryObj } from "@storybook/react";
import { TagField } from "./TagField.js";

const meta: Meta<TagField> = {
  title: "Components / TagField",
  args: {
    size: "md",
    placeholder: "Add Framework",
    isDisabled: false,
    isInvalid: false,
    isLoading: false,
    isReadOnly: false,
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
  render: (props) => <TagField defaultValue={["hello", "hmmmm"]} {...props} />,
};
