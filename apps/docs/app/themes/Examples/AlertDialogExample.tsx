import {
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogOverlay,
  AlertDialogTitle,
  AlertDialog,
  AlertDialogTrigger,
  Button,
} from "@rafty/ui";

export function AlertDialogExample() {
  return (
    <div className="flex justify-center">
      <AlertDialog>
        <AlertDialogTrigger colorScheme="error" variant="solid">
          Delete Account
        </AlertDialogTrigger>
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
          <div className="flex justify-between">
            <AlertDialogCancel asChild>
              <Button>Cancel</Button>
            </AlertDialogCancel>
            <AlertDialogCancel asChild>
              <Button colorScheme="error">Delete</Button>
            </AlertDialogCancel>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
