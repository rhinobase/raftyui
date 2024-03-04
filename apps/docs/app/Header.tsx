import RaftyIcon from "@rafty/icons";
import { Button, classNames } from "@rafty/ui";
import { useWindowScroll } from "@uidotdev/usehooks";
import Link from "next/link";
import type { Dispatch, SetStateAction } from "react";
import { BsDiscord, BsGithub, BsTwitter } from "react-icons/bs";
import { Logo, Logomark } from "../components/Logo";
import { SearchButton } from "../components/Search";
import { ThemeSelector } from "../components/ThemeSelector";

const NAVIGATION = [
  {
    name: "GitHub",
    href: "https://github.com/rhinobase/raftyui",
    icon: BsGithub,
  },
  {
    name: "Discord",
    href: "https://discord.gg/HJfYwrBMKb",
    icon: BsDiscord,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/rhinobaseio",
    icon: BsTwitter,
  },
];

export type Header = {
  isDrawerOpen: boolean;
  setDrawerOpen: Dispatch<SetStateAction<boolean>>;
  setSearchOpen: Dispatch<SetStateAction<boolean>>;
};

export function Header({ setDrawerOpen, setSearchOpen }: Header) {
  const [{ y }] = useWindowScroll();
  const isScrolled = y && y > 0;

  return (
    <header
      className={classNames(
        "shadow-secondary-900/5 sticky top-0 z-[60] flex flex-none flex-wrap items-center justify-between bg-white px-4 py-5 shadow-md transition duration-500 sm:px-6 md:gap-6 lg:px-8 dark:shadow-none",
        isScrolled
          ? "dark:bg-secondary-950/95 dark:[@supports(backdrop-filter:blur(0))]:bg-secondary-950/75 backdrop-blur"
          : "dark:bg-transparent",
      )}
    >
      <div className="mr-3 flex md:mr-0 lg:hidden">
        <Button
          size="icon"
          variant="ghost"
          onClick={() => setDrawerOpen(true)}
          aria-label="Drawer Menu"
        >
          <RaftyIcon type="bars3" height={20} width={20} className="stroke-2" />
        </Button>
      </div>
      <div className="relative flex flex-grow basis-0 items-center">
        <Link href="/" aria-label="Rafty Logo">
          <Logomark className="size-9 lg:hidden" />
          <Logo
            className="hidden lg:flex"
            svgClassName="fill-secondary-700 dark:fill-primary-100 h-9 w-auto"
          />
        </Link>
      </div>
      <div className="relative flex basis-0 items-center justify-end gap-1 md:flex-grow md:gap-2 lg:gap-4">
        <SearchButton setOpen={setSearchOpen} />
        <ThemeSelector />
        {NAVIGATION.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            target="_blank"
            aria-label={item.name}
          >
            <Button variant="ghost" size="icon" aria-label={item.name}>
              <item.icon size={18} />
            </Button>
          </Link>
        ))}
      </div>
    </header>
  );
}
