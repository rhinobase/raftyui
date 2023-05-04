import { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "../src";

const meta: Meta<typeof Skeleton> = {
  title: "Components / Skeleton",
  decorators: [
    (Story) => (
      <div className="w-full flex flex-col items-center justify-center gap-2 mx-auto max-w-3xl h-[calc(100vh-40px)]">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Variants: Story = {
  render: () => (
    <>
      <Skeleton className="h-10 w-40" />
    </>
  ),
};
