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
        <div className="flex items-center justify-between">
          <AlertDialogCancel asChild>
            <Button variant="outline">Cancel</Button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button colorScheme="error">Yes, delete account</Button>
          </AlertDialogAction>
        </div>
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
        <AlertDialogCancel asChild>
          <Button className="w-max" size="sm">
            Close
          </Button>
        </AlertDialogCancel>
      </AlertDialogContent>
    </AlertDialog>
  ),
  "alert-dialog:unstyled": (
    <AlertDialog isUnstyled>
      <AlertDialogTrigger className="hover:bg-secondary-200 dark:hover:bg-secondary-800 rounded-lg p-2 px-4 dark:text-white">
        Open
      </AlertDialogTrigger>
      <AlertDialogOverlay
        className="data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 fixed inset-0
              z-50 bg-white/70
              backdrop-blur-sm dark:bg-black/60"
      />
      <AlertDialogContent
        className="dark:bg-secondary-800 dark:text-secondary-50 dark:border-secondary-700 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed left-[50%]
                top-[50%] z-50 grid w-full
                max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white p-4 shadow-lg duration-200 sm:rounded-lg md:w-full"
      >
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

  "alert-dialog:unstyledsub": (
    <AlertDialog>
      <AlertDialogTrigger
        isUnstyled
        className="dark:text-secondary-100 hover:bg-secondary-200 dark:hover:bg-secondary-800 dark:bg-secondary-900 rounded-md p-2 px-6"
      >
        Open
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
