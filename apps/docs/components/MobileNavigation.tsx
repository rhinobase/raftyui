import { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { Drawer, DrawerClose, DrawerContent, DrawerOverlay } from "@rafty/ui";
import { Logomark } from "../components/Logo";
import { Navigation } from "../components/Navigation";

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
      <DrawerContent className="!w-full !max-w-[70vw] !p-0">
        <div className="sticky top-0 z-[60] bg-white dark:bg-secondary-800 p-6">
          <Link href="/" aria-label="Home page">
            <Logomark className="h-9 w-9" />
          </Link>
          <DrawerClose />
        </div>
        <Navigation className="h-full px-6 pb-6" onLinkClick={onLinkClick} />
      </DrawerContent>
    </Drawer>
  );
}
