import { Grid } from "@rhinobase/docs/components";
import { useState } from "react";
import { Button } from "../button";
import * as Drawer from "./Drawer";
import React from "react";

const config = {
  title: "New/Drawer",
  component: Drawer,
};
export default config;

export function Default() {
  const [open, setOpen] = useState(false);
  return (
    <Grid>
      <Button onClick={() => setOpen(true)}>open</Button>
      <Drawer.Root size="full" side="left" open={open} onOpenChange={setOpen}>
        <Drawer.Content>
          <Drawer.Title>Drawer Header</Drawer.Title>
          <Drawer.Body>
            <p>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </p>
          </Drawer.Body>
          <Drawer.CloseButton />
        </Drawer.Content>
      </Drawer.Root>
    </Grid>
  );
}
