import { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { Drawer, DrawerClose, DrawerContent, DrawerOverlay } from "@rafty/ui";
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
      <DrawerOverlay />
      <DrawerContent className="!w-full !max-w-[70vw] !p-0 !h-[100dvh] !overflow-hidden flex flex-col">
        <div className="dark:bg-secondary-800 bg-white p-6">
          <Link href="/" aria-label="Home page">
            <Logomark className="h-9 w-9" />
          </Link>
          <DrawerClose />
        </div>
        <Navigation
          className="flex-1 px-6 pb-6 overflow-y-auto"
          onLinkClick={onLinkClick}
        />
      </DrawerContent>
    </Drawer>
  );
}
