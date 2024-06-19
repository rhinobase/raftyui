import type { Meta, StoryObj } from "@storybook/react";
import { ChatBox } from "./ChatBox";

const meta: Meta<typeof ChatBox> = {
  title: "Corp / ChatBox",
};

export default meta;
type Story = StoryObj<typeof ChatBox>;

export const Default: Story = {
  render: () => <ChatBox />,
};
