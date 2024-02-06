"use client";
import {
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerOverlay,
  DrawerTitle,
} from "@rafty/ui";
import { useState } from "react";

export function DrawerExample() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Button variant="ghost" onClick={() => setOpen(true)}>
        Drawer
      </Button>
      <Drawer size="sm" side="left" open={isOpen} onOpenChange={setOpen}>
        <DrawerOverlay className="z-[70]" />
        <DrawerContent className="z-[70]">
          <DrawerTitle>Drawer Header</DrawerTitle>
          <DrawerDescription>
            This is sample drawer description. :
          </DrawerDescription>
          <DrawerClose />
        </DrawerContent>
      </Drawer>
    </>
  );
}
