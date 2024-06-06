import type { Meta, StoryObj } from "@storybook/react";
import { Filter } from "./Filter";

const meta: Meta<typeof Filter> = {
  title: "Components / Filter ",
};

export default meta;
type Story = StoryObj<typeof Filter>;

export const Default: Story = {
  render: () => <Filter />,
};
