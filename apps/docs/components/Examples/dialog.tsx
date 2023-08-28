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
  "dialog:barebone": (
    <Dialog isBarebone>
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
};
