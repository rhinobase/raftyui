import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogOverlay,
  DialogTrigger,
  DialogDescription,
  DialogClose,
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
          <DialogClose asChild>
            <Button>Save Change</Button>
          </DialogClose>
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
      <DialogTrigger className=" dark:hover:bg-secondary-800 hover:bg-secondary-100 rounded-lg p-2 px-6 dark:text-white">
        open
      </DialogTrigger>
      <DialogOverlay className="fixed inset-0 z-50 h-full w-full bg-black/30 dark:bg-black/60" />
      <DialogContent
        className="dark:bg-secondary-800 dark:text-secondary-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2
                  data-[state=open]:slide-in-from-top-[48%] fixed left-[50%]
                  top-[50%] z-50 w-[389px] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-4 shadow-lg duration-200 md:w-[600px]"
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
        className=" dark:hover:bg-secondary-800 hover:bg-secondary-100 rounded-lg  p-2 px-4"
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
