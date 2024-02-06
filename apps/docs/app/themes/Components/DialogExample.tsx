import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTrigger,
} from "@rafty/ui";

export function DialogExample() {
  return (
    <Dialog>
      <DialogTrigger>Dialog</DialogTrigger>
      <DialogOverlay className="z-[70]" />
      <DialogContent className="z-[70]">
        <DialogHeader>Dialog Header</DialogHeader>
        <DialogDescription>
          Make changes to your profile here. Click save when you&apos;re done.
        </DialogDescription>
        <div className="flex items-center justify-end pt-5">
          <Button>Save Change</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
