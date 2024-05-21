import type { Meta, StoryObj } from "@storybook/react";
import { QRCode } from "./QRCode";

const meta: Meta<typeof QRCode> = {
  title: "Components / QRCode",
  args: {
    value: "hello",
  },
};

export default meta;
type Story = StoryObj<typeof QRCode>;

export const Default: Story = {
  render: (props) => <QRCode {...props} />,
};
