import type { Meta, StoryObj } from "@storybook/react";
import { TagField } from "./TagField";

const meta: Meta<typeof TagField> = {
  title: "Components / TagField",
};

export default meta;
type Story = StoryObj<typeof TagField>;

export const Default: Story = {
  args: {
    defaultValue: ["hello", "hmmmm"],
    disabled: false,
    placeholder: "Add Framwork",
    readOnly: false,
  },
  render: (props) => <TagField {...props} />,
};

export const InitalData: Story = {
  render: () => <></>,
};
