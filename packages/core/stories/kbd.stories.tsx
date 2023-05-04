import { Meta, StoryObj } from "@storybook/react";
import { Kbd } from "../src/kbd";

const meta: Meta<typeof Kbd> = {
  title: "Components / Kbd",
  decorators: [
    (Story) => (
      <div className="w-full flex flex-col items-center justify-center gap-2 mx-auto max-w-3xl h-[calc(100vh-40px)]">
        <Story />
      </div>
    ),
  ],
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
