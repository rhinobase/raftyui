import { Grid } from "@rhinobase/docs/components";
import { Button } from "../button";
import * as Dialog from "./Dialog";
import React from "react";

export default {
  title: "New/Dialog",
  component: Dialog,
};

export function Default() {
  return (
    <Grid>
      <Dialog.Root>
        <Dialog.Trigger>open</Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Title>Dialog Header</Dialog.Title>
          <Dialog.Body>
            <p>
              Make changes to your profile here. Click save when you're done.
            </p>
            <div className="flex items-center justify-end pt-5">
              <Button>Save Change</Button>
            </div>
          </Dialog.Body>
        </Dialog.Content>
      </Dialog.Root>
    </Grid>
  );
}
