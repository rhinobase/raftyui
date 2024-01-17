import { Meta, StoryObj } from "@storybook/react";
import { Main } from "./main";

const meta: Meta = {
  title: "fibr / Main",
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => {
    return <Main />;
  },
};
