import type { Meta, StoryObj } from "@storybook/react";
import { TagField } from "./TagField";

const meta: Meta<typeof TagField> = {
  title: "Components / TagField",
};

export default meta;
type Story = StoryObj<typeof TagField>;

export const Default: Story = {
  render: () => <TagField />,
};

export const InitalData: Story = {
  render: () => <TagField initialData={["rhinobase", "rafty", "ui"]} />,
};
