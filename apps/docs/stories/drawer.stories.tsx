import { Meta, StoryObj } from "@storybook/react";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  DrawerTitle,
  Button,
} from "@rafty/ui";
import { useState } from "react";

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

export const Default: Story = {
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
