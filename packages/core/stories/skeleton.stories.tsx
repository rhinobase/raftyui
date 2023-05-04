import { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "../src";

const meta: Meta<typeof Skeleton> = {
  title: "Components / Skeleton",
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
