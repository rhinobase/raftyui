import { Meta, StoryObj } from "@storybook/react";
import { Kbd } from "../src/kbd";

const meta: Meta<typeof Kbd> = {
  title: "Components / Kbd",
};

export default meta;
type Story = StoryObj<typeof Kbd>;

export const Variants: Story = {
  render: () => (
    <>
      <Kbd>shift + K</Kbd>
    </>
  ),
};
