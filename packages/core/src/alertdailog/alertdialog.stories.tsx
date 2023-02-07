import { Grid } from "@rhinobase/storybook/components";
import { Button } from "../button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogBody,
  AlertDialogButton,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTitle,
} from "./AlertDialog";

export default {
  title: "New/Alert Dialog",
  component: AlertDialog,
};

export function Default() {
  return (
    <Grid>
      <AlertDialog>
        <AlertDialogButton>Open</AlertDialogButton>
        <AlertDialogContent>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogBody>
            This action cannot be undone. This will permanently delete your account and remove your data from
            our servers.
          </AlertDialogBody>
          <div className="mt-4 flex justify-end gap-6">
            <AlertDialogCancel asChild>
              <Button variant="outline">Cancel</Button>
            </AlertDialogCancel>
            <AlertDialogAction asChild>
              <Button colorScheme="error">Yes, delete account</Button>
            </AlertDialogAction>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </Grid>
  );
}
