import { Meta, StoryObj } from "@storybook/react";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  DrawerTitle,
} from "../src";
import { Button } from "../src";
import { useState } from "react";
import {
  userEvent,
  within,
  screen,
  fireEvent,
} from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta: Meta<typeof Drawer> = {
  title: "Components / Drawer",
  args: {
    size: "md",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg", "full"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Variants: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Test for open Drawer
    const button = await canvas.getByRole("button");
    await userEvent.click(button);
    await expect(screen.getByRole("dialog")).toBeVisible();
    await expect(screen.getByRole("dialog")).toBeInTheDocument();

    // Test for close Drawer
    const close_button = await screen.getByRole("button");
    await fireEvent.click(close_button);
  },
  render: function Render({ size }) {
    const [isOpen, setOpen] = useState(false);
    return (
      <div className="flex flex-col gap-4">
        <Button onClick={() => setOpen(true)}>Open</Button>
        <Drawer size={size} side="left" open={isOpen} onOpenChange={setOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerTitle>Drawer Header</DrawerTitle>
            <DrawerBody>
              <p>
                Make changes to your profile here. Click save when you&apos;re
                done.
              </p>
            </DrawerBody>
            <DrawerCloseButton />
          </DrawerContent>
        </Drawer>
      </div>
    );
  },
};
