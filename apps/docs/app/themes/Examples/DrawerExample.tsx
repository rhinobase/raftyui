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
    <div className="flex justify-center">
      <Button onClick={() => setOpen(true)}>Open Drawer</Button>
      <Drawer open={isOpen} onOpenChange={setOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerTitle>Drawer Header</DrawerTitle>
          <DrawerDescription>
            This is sample drawer description. :
          </DrawerDescription>
          <DrawerClose />
        </DrawerContent>
      </Drawer>
    </div>
  );
}
