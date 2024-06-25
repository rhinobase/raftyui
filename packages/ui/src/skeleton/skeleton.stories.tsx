import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "./Skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "Components / Skeleton",
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  render: () => (
    <>
      <Skeleton className="h-10 w-80 rounded-md" />
      <Skeleton className="h-10 w-80 rounded-md" />
    </>
  ),
};
