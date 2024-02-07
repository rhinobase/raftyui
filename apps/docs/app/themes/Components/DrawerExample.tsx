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
import { useThemeEditorContext } from "../Context";

export function DrawerExample() {
  const [isOpen, setOpen] = useState(false);
  const { isDisabled } = useThemeEditorContext();

  return (
    <>
      <Button isDisabled={isDisabled} onClick={() => setOpen(true)}>
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
