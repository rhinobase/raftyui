import { Meta, StoryObj } from "@storybook/react";
import { Upload } from "@rhino/upload";

const meta: Meta<typeof Upload> = {
  title: "Form / Upload",
};

export default meta;
type Story = StoryObj<typeof Upload>;

export const Variants: Story = {
  render: () => {
    return <Upload />;
  },
};
