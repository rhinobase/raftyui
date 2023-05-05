import { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "../src/tooltip";
import { Button } from "../src";
import { expect } from "@storybook/jest";
import { within, userEvent, screen } from "@storybook/testing-library";
import { PlusIcon } from "@heroicons/react/24/outline";

const meta: Meta<typeof Tooltip> = {
  title: "Components / Tooltip",
  args: {
    content: "Tooltip Content",
  },
  argTypes: {
    content: {},
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Variants: Story = {
  play: async ({ canvasElement, args: { content } }) => {
    const canvas = within(canvasElement);
    const button = await canvas.getByRole("button");

    // Test for Tooltip hover
    await userEvent.hover(button);
    await expect(
      (
        await screen.findAllByText(String(content))
      )[0]
    ).toBeInTheDocument();
  },

  render: ({ content }) => (
    <Tooltip side="top" content={content}>
      <Button size="fab">
        <PlusIcon className="h-6 w-6" />
      </Button>
    </Tooltip>
  ),
};
