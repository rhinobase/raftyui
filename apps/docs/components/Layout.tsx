"use client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Hero } from "../components/Hero";
import { Logo, Logomark } from "../components/Logo";
import { MobileNavigation } from "../components/MobileNavigation";
import { Navigation } from "../components/Navigation";
import { SearchButton, SearchDialog } from "../components/Search";
import { ThemeSelector } from "../components/ThemeSelector";
import { BsDiscord, BsGithub, BsTwitter } from "react-icons/bs";
import { Button, classNames } from "@rafty/ui";
import { HiBars3 } from "react-icons/hi2";

const navigation = [
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

type Header = {
  isDrawerOpen: boolean;
  setDrawerOpen: Dispatch<SetStateAction<boolean>>;
  setSearchOpen: Dispatch<SetStateAction<boolean>>;
};

function Header({ setDrawerOpen, setSearchOpen }: Header) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 0);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={classNames(
        "sticky top-0 z-50 flex flex-none flex-wrap items-center justify-between bg-white px-4 py-5 shadow-md shadow-secondary-900/5 transition duration-500 dark:shadow-none sm:px-6 md:gap-6 lg:px-8",
        isScrolled
          ? "backdrop-blur dark:bg-secondary-950/95 dark:[@supports(backdrop-filter:blur(0))]:bg-secondary-950/75"
          : "dark:bg-transparent",
      )}
    >
      <div className="mr-3 flex lg:hidden">
        <Button size="icon" variant="ghost" onClick={() => setDrawerOpen(true)}>
          <HiBars3 size={20} />
        </Button>
      </div>
      <div className="relative flex flex-grow basis-0 items-center">
        <Link href="/" aria-label="Home page">
          <Logomark className="h-9 w-9 lg:hidden" />
          <Logo className="hidden h-9 w-auto fill-secondary-700 dark:fill-primary-100 lg:block" />
        </Link>
      </div>
      <div className="relative flex basis-0 items-center justify-end gap-1 md:flex-grow md:gap-2 lg:gap-4">
        <SearchButton setOpen={setSearchOpen} />
        <ThemeSelector />
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            aria-label={item.name}
          >
            <Button variant="ghost" size="icon">
              <item.icon size={18} />
            </Button>
          </a>
        ))}
      </div>
    </header>
  );
}

type Layout = { children: React.ReactNode };

export function Layout({ children }: Layout) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isThemePage = pathname === "/themes";
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    setDrawerOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  return (
    <>
      <div className="flex w-full flex-col">
        <Header
          isDrawerOpen={isDrawerOpen}
          setDrawerOpen={setDrawerOpen}
          setSearchOpen={setSearchOpen}
        />
        {isHomePage && <Hero />}
        <div className="relative mx-auto flex w-full max-w-8xl flex-auto justify-center sm:px-2 lg:px-8 xl:px-12">
          {!isThemePage && (
            <div className="hidden lg:relative lg:block lg:flex-none">
              <div className="absolute inset-y-0 right-0 w-[50vw] bg-secondary-50 dark:hidden" />
              <div className="absolute bottom-0 right-0 top-16 hidden h-12 w-px bg-gradient-to-t from-secondary-800 dark:block" />
              <div className="absolute bottom-0 right-0 top-28 hidden w-px bg-secondary-800 dark:block" />
              <div className="sticky top-[4.75rem] -ml-0.5 h-[calc(100vh-4.75rem)] w-64 overflow-y-auto overflow-x-hidden py-16 pl-0.5 pr-8 xl:w-72 xl:pr-16">
                <Navigation />
              </div>
            </div>
          )}
          {children}
        </div>
      </div>
      <MobileNavigation isOpen={isDrawerOpen} setOpen={setDrawerOpen} />
      <SearchDialog open={isSearchOpen} setOpen={setSearchOpen} />
    </>
  );
}
