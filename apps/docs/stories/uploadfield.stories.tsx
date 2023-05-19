import { Meta, StoryObj } from "@storybook/react";
import { UploadField } from "../src";

const meta: Meta<typeof UploadField> = {
  title: "Form / UploadField",
};

export default meta;
type Story = StoryObj<typeof UploadField>;

export const Variants: Story = {
  render: () => <UploadField />,
};
