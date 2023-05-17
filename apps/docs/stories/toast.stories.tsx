import { Meta, StoryObj } from "@storybook/react";
import { Toast } from "@rhino/ui";

const meta: Meta<typeof Toast> = {
  title: "Components / Toast",
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  render: () => (
    <>
      <Toast
        title="Success Banner"
        message="Data uploaded to the server. Fire on!"
        severity="error"
      />
      <Toast
        title="Success Banner"
        message="Data uploaded to the server. Fire on!"
        severity="info"
      />
      <Toast
        title="Success Banner"
        message="Data uploaded to the server. Fire on!"
        severity="success"
      />
      <Toast
        title="Success Banner"
        message="Data uploaded to the server. Fire on!"
        severity="warning"
      />
    </>
  ),
};
