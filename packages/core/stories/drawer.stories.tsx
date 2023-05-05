import { useState } from "react";
import { Button } from "../src";
import * as Drawer from "../src/drawer/Drawer";

const config = {
  title: "New/Drawer",
  component: Drawer,
};
export default config;

export function Default() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex flex-col gap-4">
        <Button onClick={() => setOpen(true)}>open</Button>
        <Drawer.Root size="full" side="left" open={open} onOpenChange={setOpen}>
          <Drawer.Content>
            <Drawer.Title>Drawer Header</Drawer.Title>
            <Drawer.Body>
              <p>
                Make changes to your profile here. Click save when you&apos;re
                done.
              </p>
            </Drawer.Body>
            <Drawer.CloseButton />
          </Drawer.Content>
        </Drawer.Root>
      </div>
    </>
  );
}

export function Size() {
  const [open, setOpen] = useState<"sm" | "lg" | "md" | "full" | undefined>(
    undefined
  );
  return (
    <>
      <div className="flex flex-col gap-4">
        <Button onClick={() => setOpen("sm")}>open sm</Button>
        <Button onClick={() => setOpen("md")}>open md</Button>
        <Button onClick={() => setOpen("lg")}>open lg</Button>
        <Button onClick={() => setOpen("full")}>open full</Button>
        <Drawer.Root
          size={open}
          side="left"
          open={open == "sm" || open == "md" || open == "lg" || open == "full"}
          onOpenChange={() => setOpen(undefined)}
        >
          <Drawer.Content>
            <Drawer.Title>Drawer Header</Drawer.Title>
            <Drawer.Body>
              <p>
                Make changes to your profile here. Click save when you&apos;re
                done.
              </p>
            </Drawer.Body>
            <Drawer.CloseButton />
          </Drawer.Content>
        </Drawer.Root>
      </div>
    </>
  );
}
