import { Button } from "../src/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogBody,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../src/alertdailog/AlertDialog";

const config = {
  title: "Components / Alert Dialog",
  component: AlertDialog,
};

export default config;

export function Default() {
  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger>Open</AlertDialogTrigger>
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogBody>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
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
    </>
  );
}
