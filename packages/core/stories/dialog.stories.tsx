import { Meta, StoryObj } from "@storybook/react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogContent,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "../src";
import {
  within,
  userEvent,
  screen,
  fireEvent,
} from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta: Meta<typeof Dialog> = {
  title: "Components / Dialog",
  args: {
    size: "md",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Dialog>;

export const Variants: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.getByRole("button");

    // Test open Dialog
    await userEvent.click(button);
    const dialog = await screen.getByRole("dialog");
    await expect(dialog).toBeInTheDocument();

    // TODO Dialog close
  },

  render: ({ size }) => (
    <>
      <Dialog size={size}>
        <DialogTrigger>open</DialogTrigger>
        <DialogOverlay />
        <DialogContent>
          <DialogTitle>Dialog Header</DialogTitle>
          <DialogBody>
            <p>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </p>
            <div className="flex items-center justify-end pt-5">
              <Button>Save Change</Button>
            </div>
          </DialogBody>
        </DialogContent>
      </Dialog>
    </>
  ),
};
