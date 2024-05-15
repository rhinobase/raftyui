import type { Meta, StoryObj } from "@storybook/react";
import { FileUpload } from "./FileUpload";

const meta: Meta<typeof FileUpload> = {
  title: "Form / FileUpload",
};

export default meta;
type Story = StoryObj<typeof FileUpload>;

export const Default: Story = {
  render: (props) => <FileUpload maxFiles={10} />,
};