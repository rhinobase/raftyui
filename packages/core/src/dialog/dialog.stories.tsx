import { Grid } from "@rhinobase/storybook/components";
import { Button } from "../button";
import { Dialog, DialogBody, DialogButton, DialogContent, DialogTitle } from "./Dialog";

export default {
  title: "New/Dialog",
  component: Dialog,
};

export function Default() {
  return (
    <Grid>
      <Dialog>
        <DialogButton>open</DialogButton>
        <DialogContent>
          <DialogTitle>Dialog Header</DialogTitle>
          <DialogBody>
            <p>Make changes to your profile here. Click save when you're done.</p>
            <div className="flex items-center justify-end pt-5">
              <Button>Save Change</Button>
            </div>
          </DialogBody>
        </DialogContent>
      </Dialog>
    </Grid>
  );
}
