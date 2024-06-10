import type { Meta, StoryObj } from "@storybook/react";
import { FileUpload } from "./FileUpload";

const meta: Meta<typeof FileUpload> = {
  title: "Form / FileUpload",
  args: {
    isDisabled: false,
    isLoading: false,
  },
};

export default meta;
type Story = StoryObj<typeof FileUpload>;

export const Default: Story = {
  render: (props) => <FileUpload {...props} />,
};

export const MultipleFiles: Story = {
  render: (props) => <FileUpload {...props} maxFiles={10} />,
};
