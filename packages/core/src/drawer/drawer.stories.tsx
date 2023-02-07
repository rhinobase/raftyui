import { Grid } from "@rhinobase/docs/components";
import { useState } from "react";
import { Button } from "../button";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerTitle,
} from "./Drawer";
import React from "react";

export default {
  title: "New/Drawer",
  component: Drawer,
};

export function Default() {
  const [open, setOpen] = useState(false);
  return (
    <Grid>
      <Button onClick={() => setOpen(true)}>open</Button>
      <Drawer size="lg" side="left" open={open} onOpenChange={setOpen}>
        <DrawerContent>
          <DrawerTitle>Drawer Header</DrawerTitle>
          <DrawerBody>
            <p>
              Make changes to your profile here. Click save when you're done.
            </p>
          </DrawerBody>
          <DrawerCloseButton />
        </DrawerContent>
      </Drawer>
    </Grid>
  );
}
