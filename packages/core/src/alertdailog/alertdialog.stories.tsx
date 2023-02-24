import { Grid } from "@rhinobase/docs/components";
import { Button } from "../button";
import * as AlertDialog from "./AlertDialog";
import React from "react";
const config = {
  title: "New/Alert Dialog",
  component: AlertDialog,
};

export default config;

export function Default() {
  return (
    <Grid>
      <AlertDialog.Root>
        <AlertDialog.Trigger>Open</AlertDialog.Trigger>
        <AlertDialog.Content>
          <AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
          <AlertDialog.Body>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialog.Body>
          <div className="mt-4 flex justify-end gap-6">
            <AlertDialog.Cancel asChild>
              <Button variant="outline">Cancel</Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <Button colorScheme="error">Yes, delete account</Button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </Grid>
  );
}
