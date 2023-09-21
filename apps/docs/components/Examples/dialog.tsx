import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogOverlay,
  DialogTrigger,
  DialogDescription,
} from "@rafty/ui";

export const dialog_examples = {
  "dialog:usage": (
    <Dialog>
      <DialogTrigger>open</DialogTrigger>
      <DialogOverlay />
      <DialogContent>
        <DialogHeader>Dialog Header</DialogHeader>
        <DialogDescription>
          Make changes to your profile here. Click save when you&apos;re done.
        </DialogDescription>
        <div className="flex items-center justify-end pt-5">
          <Button>Save Change</Button>
        </div>
      </DialogContent>
    </Dialog>
  ),
  "dialog:size": (
    <Dialog size="sm">
      <DialogTrigger>open</DialogTrigger>
      <DialogOverlay />
      <DialogContent>
        <DialogHeader>Dialog Header</DialogHeader>
        <DialogDescription>
          Make changes to your profile here. Click save when you&apos;re done.
        </DialogDescription>
        <div className="flex items-center justify-end pt-5">
          <Button>Save Change</Button>
        </div>
      </DialogContent>
    </Dialog>
  ),
  "dialog:closebutton": (
    <Dialog>
      <DialogTrigger>open</DialogTrigger>
      <DialogOverlay />
      <DialogContent showCloseButton>
        <DialogHeader>Dialog Header</DialogHeader>
        <DialogDescription>
          Make changes to your profile here. Click save when you&apos;re done.
        </DialogDescription>
        <div className="flex items-center justify-end pt-5">
          <Button>Save Change</Button>
        </div>
      </DialogContent>
    </Dialog>
  ),
  "dialog:asChild": (
    <Dialog size="sm">
      <DialogTrigger asChild>
        <Button variant="ghost">Click Me</Button>
      </DialogTrigger>
      <DialogOverlay />
      <DialogContent>
        <DialogHeader>Dialog Header</DialogHeader>
        <DialogDescription>
          Make changes to your profile here. Click save when you&apos;re done.
        </DialogDescription>
        <div className="flex items-center justify-end pt-5">
          <Button>Save Change</Button>
        </div>
      </DialogContent>
    </Dialog>
  ),
  "dialog:barebone": (
    <Dialog isBarebone>
      <DialogTrigger className="bg-white dark:bg-secondary-800 px-6 p-2 rounded-lg shadow-md hover:bg-secondary-100">
        open
      </DialogTrigger>
      <DialogOverlay className="bg-black/30 w-full h-full fixed inset-0 z-50 dark:bg-black/60" />
      <DialogContent
        className="fixed left-[50%] top-[50%] z-50 md:w-[600px] w-[389px] -translate-x-1/2 -translate-y-1/2 shadow-lg rounded-lg p-4
                  bg-white dark:bg-secondary-800 dark:text-secondary-50
                  duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]"
      >
        <DialogHeader>Dialog Header</DialogHeader>
        <DialogDescription>
          Make changes to your profile here. Click save when you&apos;re done.
        </DialogDescription>
        <div className="flex items-center justify-end pt-5">
          <Button>Save Change</Button>
        </div>
      </DialogContent>
    </Dialog>
  ),
  "dialog:unstyled": (
    <Dialog>
      <DialogTrigger
        isUnstyled
        className=" px-4 p-2 rounded-lg  dark:hover:bg-secondary-800 hover:bg-secondary-100"
      >
        open
      </DialogTrigger>
      <DialogOverlay />
      <DialogContent>
        <DialogHeader>Dialog Header</DialogHeader>
        <DialogDescription>
          Make changes to your profile here. Click save when you&apos;re done.
        </DialogDescription>
        <div className="flex items-center justify-end pt-5">
          <Button>Save Change</Button>
        </div>
      </DialogContent>
    </Dialog>
  ),
};
