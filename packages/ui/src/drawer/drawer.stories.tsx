import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "../button/index.js";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerOverlay,
  DrawerTitle,
} from "./Drawer.js";

const meta: Meta<typeof Drawer> = {
  title: "Components / Drawer",
  args: {
    size: "md",
    side: "right",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg", "full"],
    },
    side: {
      control: "select",
      options: ["right", "left"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  render: (props) => {
    const [isOpen, setOpen] = useState(false);
    return (
      <div className="flex flex-col gap-4">
        <Button onClick={() => setOpen(true)}>Open</Button>
        <Drawer {...props} open={isOpen} onOpenChange={setOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerTitle>Drawer Header</DrawerTitle>
            <DrawerDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DrawerDescription>
            <DrawerClose />
          </DrawerContent>
        </Drawer>
      </div>
    );
  },
};
