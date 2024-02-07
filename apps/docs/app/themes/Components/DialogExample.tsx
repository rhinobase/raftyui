import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTrigger,
} from "@rafty/ui";
import { useThemeEditorContext } from "../Context";

export function DialogExample() {
  const { isDisabled } = useThemeEditorContext();

  return (
    <Dialog>
      <DialogTrigger isDisabled={isDisabled} variant="solid">
        Dialog
      </DialogTrigger>
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
