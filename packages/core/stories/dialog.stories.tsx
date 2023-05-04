import { Button } from "../src/button";
import * as Dialog from "../src/dialog/Dialog";

const config = {
  title: "Components / Dialog",
  component: Dialog,
};
export default config;

export function Default() {
  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger>open</Dialog.Trigger>
        <Dialog.Overlay />
        <Dialog.Content>
          <Dialog.Title>Dialog Header</Dialog.Title>
          <Dialog.Body>
            <p>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </p>
            <div className="flex items-center justify-end pt-5">
              <Button>Save Change</Button>
            </div>
          </Dialog.Body>
        </Dialog.Content>
      </Dialog.Root>
    </>
  );
}
