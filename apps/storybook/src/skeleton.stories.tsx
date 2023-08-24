import { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "@rafty/ui";

const meta: Meta<typeof Skeleton> = {
  title: "Components / Skeleton",
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  render: () => (
    <>
      <Skeleton className="h-20 w-80" />
      <Skeleton className="h-20 w-80 rounded-md" />
    </>
  ),
};
