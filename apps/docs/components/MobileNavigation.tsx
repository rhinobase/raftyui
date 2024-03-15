import { Drawer, DrawerClose, DrawerContent, DrawerOverlay } from "@rafty/ui";
import Link from "next/link";
import type { Dispatch, SetStateAction } from "react";
import { Logomark } from "./Logo";
import { Navigation } from "./Navigation";

export type MobileNavigation = {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export function MobileNavigation({ isOpen, setOpen }: MobileNavigation) {
  function onLinkClick(event: React.MouseEvent<HTMLAnchorElement>) {
    const link = event.currentTarget;
    if (
      link.pathname + link.search + link.hash ===
      window.location.pathname + window.location.search + window.location.hash
    ) {
      setOpen(false);
    }
  }

  return (
    <Drawer
      open={isOpen}
      onOpenChange={setOpen}
      aria-label="Navigation"
      side="left"
    >
      <DrawerOverlay className="z-[70]" />
      <DrawerContent className="z-[70] flex h-[100dvh] w-full max-w-[70vw] flex-col overflow-hidden p-0">
        <div className="dark:bg-secondary-800 bg-white p-6">
          <Link href="/" aria-label="Home page">
            <Logomark className="size-9" />
          </Link>
          <DrawerClose />
        </div>
        <Navigation
          className="flex-1 overflow-y-auto px-6 pb-6"
          onLinkClick={onLinkClick}
        />
      </DrawerContent>
    </Drawer>
  );
}
