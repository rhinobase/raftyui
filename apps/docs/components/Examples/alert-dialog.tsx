import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogOverlay,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
} from "@rafty/ui";

export const alert_dialog_examples = {
  "alert-dialog:usage": (
    <AlertDialog>
      <AlertDialogTrigger>Open</AlertDialogTrigger>
      <AlertDialogOverlay />
      <AlertDialogContent>
        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </AlertDialogDescription>
        <AlertDialogCancel asChild>
          <Button variant="outline">Cancel</Button>
        </AlertDialogCancel>
        <AlertDialogAction asChild>
          <Button colorScheme="error">Yes, delete account</Button>
        </AlertDialogAction>
      </AlertDialogContent>
    </AlertDialog>
  ),
  "alert-dialog:size": (
    <AlertDialog size="sm">
      <AlertDialogTrigger>Open</AlertDialogTrigger>
      <AlertDialogOverlay />
      <AlertDialogContent>
        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </AlertDialogDescription>
      </AlertDialogContent>
    </AlertDialog>
  ),
  "alert-dialog:barebone": (
    <AlertDialog isBarebone>
      <AlertDialogTrigger>Open</AlertDialogTrigger>
      <AlertDialogOverlay />
      <AlertDialogContent>
        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </AlertDialogDescription>
      </AlertDialogContent>
    </AlertDialog>
  ),

  "alert-dialog:unstyled": (
    <AlertDialog>
      <AlertDialogTrigger isUnstyled>Open</AlertDialogTrigger>
      <AlertDialogOverlay />
      <AlertDialogContent>
        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </AlertDialogDescription>
        <AlertDialogCancel asChild>
          <Button className="w-max" size="sm">
            Close
          </Button>
        </AlertDialogCancel>
      </AlertDialogContent>
    </AlertDialog>
  ),
  "alert-dialog:aschild": (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>Open</Button>
      </AlertDialogTrigger>
      <AlertDialogOverlay />
      <AlertDialogContent>
        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </AlertDialogDescription>
        <AlertDialogCancel asChild>
          <Button className="w-max" size="sm">
            Close
          </Button>
        </AlertDialogCancel>
      </AlertDialogContent>
    </AlertDialog>
  ),
};
