import { Meta, StoryObj } from "@storybook/react";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  DrawerTitle,
} from "../src/drawer/Drawer";
import { Button } from "../src";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

const meta: Meta<typeof Drawer> = {
  title: "Components / Drawer",
  args: {
    size: "md",
    open: false,
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
  render: ({ size, open }) => {
    return (
      <div className="flex flex-col gap-4">
        <Drawer size={size} side="left" open={open}>
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
