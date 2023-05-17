import { Meta, StoryObj } from "@storybook/react";
import { Upload } from "@rhino/ui";

const meta: Meta<typeof Upload> = {
  title: "Form / Upload",
};

export default meta;
type Story = StoryObj<typeof Upload>;

export const Default: Story = {
  render: () => {
    return <Upload />;
  },
};
