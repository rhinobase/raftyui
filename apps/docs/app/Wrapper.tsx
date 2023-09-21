"use client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useParams, useSearchParams } from "next/navigation";
import { Hero } from "../components/Hero";
import { Logo, Logomark } from "../components/Logo";
import { MobileNavigation } from "../components/MobileNavigation";
import { SearchButton, SearchDialog } from "../components/Search";
import { ThemeSelector } from "../components/ThemeSelector";
import { BsDiscord, BsGithub, BsTwitter } from "react-icons/bs";
import { Button, classNames } from "@rafty/ui";
import { HiBars3 } from "react-icons/hi2";
import { Layout } from "../components/Layout";

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
        "shadow-secondary-900/5 sticky top-0 z-50 flex flex-none flex-wrap items-center justify-between bg-white px-4 py-5 shadow-md transition duration-500 dark:shadow-none sm:px-6 md:gap-6 lg:px-8",
        isScrolled
          ? "dark:bg-secondary-950/95 dark:[@supports(backdrop-filter:blur(0))]:bg-secondary-950/75 backdrop-blur"
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
          <Logo className="fill-secondary-700 dark:fill-primary-100 hidden h-9 w-auto lg:block" />
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

type Wrapper = { children: React.ReactNode };

export function Wrapper({ children }: Wrapper) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isHomePage = pathname === "/";
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    setDrawerOpen(false);
    setSearchOpen(false);
  }, [pathname, searchParams]);

  let component = children;

  if (isHomePage) component = <Layout>{children}</Layout>;

  return (
    <>
      <div className="flex w-full flex-col">
        <Header
          isDrawerOpen={isDrawerOpen}
          setDrawerOpen={setDrawerOpen}
          setSearchOpen={setSearchOpen}
        />
        {isHomePage && <Hero />}
        <div className="max-w-8xl relative mx-auto flex w-full flex-auto justify-center sm:px-2 lg:px-8 xl:px-12">
          {component}
        </div>
      </div>
      <MobileNavigation isOpen={isDrawerOpen} setOpen={setDrawerOpen} />
      <SearchDialog open={isSearchOpen} setOpen={setSearchOpen} />
    </>
  );
}
