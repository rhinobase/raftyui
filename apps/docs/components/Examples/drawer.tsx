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

function Example() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
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
    </>
  );
}

function Size() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Drawer</Button>
      <Drawer size="sm" open={isOpen} onOpenChange={setOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerTitle>Drawer Header</DrawerTitle>
          <DrawerDescription>
            This is sample drawer description.
          </DrawerDescription>
          <DrawerClose />
        </DrawerContent>
      </Drawer>
    </>
  );
}
function Side() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Drawer</Button>
      <Drawer side="left" open={isOpen} onOpenChange={setOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerTitle>Drawer Header</DrawerTitle>
          <DrawerDescription>
            This is sample drawer description.
          </DrawerDescription>
          <DrawerClose />
        </DrawerContent>
      </Drawer>
    </>
  );
}
export const drawer_examples = {
  "drawer:usage": <Example />,
  "drawer:size": <Size />,
  "drawer:side": <Side />,
};
