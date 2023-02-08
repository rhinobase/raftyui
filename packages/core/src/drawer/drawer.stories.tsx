import { Grid } from "@rhinobase/docs/components";
import { useState } from "react";
import { Button } from "../button";
import * as Drawer from "./Drawer";
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
      <Drawer.Root size="lg" side="left" open={open} onOpenChange={setOpen}>
        <Drawer.Content>
          <Drawer.Title>Drawer Header</Drawer.Title>
          <Drawer.Body>
            <p>
              Make changes to your profile here. Click save when you're done.
            </p>
          </Drawer.Body>
          <Drawer.CloseButton />
        </Drawer.Content>
      </Drawer.Root>
    </Grid>
  );
}
