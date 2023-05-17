import { Button } from "@rhino/button";
import { Logo, Logomark } from "./Logo";
import { MobileNavigation } from "./MobileNavigation";
import { Navigation } from "./Navigation";
import { Search } from "./Search";
import clsx from "clsx";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import Link from "next/link";

enum ColorMode {
  DARK = "dark",
  LIGHT = "light",
}

export function Header({ navigation }: { navigation: Navigation }) {
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

  function toggle() {
    const dark = document.documentElement.classList.contains(ColorMode.DARK);
    if (dark) {
      localStorage.setItem("theme", ColorMode.LIGHT);
      document.documentElement.classList.remove(ColorMode.DARK);
    } else {
      localStorage.setItem("theme", ColorMode.DARK);
      document.documentElement.classList.add(ColorMode.DARK);
    }
  }

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 flex flex-wrap items-center justify-between bg-white px-4 py-5 shadow-md shadow-slate-900/5 transition duration-500 dark:shadow-none sm:px-6 lg:px-8",
        isScrolled
          ? "dark:bg-slate-900/95 dark:backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-slate-900/75"
          : "dark:bg-transparent"
      )}
    >
      <div className="mr-6 flex lg:hidden">
        <MobileNavigation navigation={navigation} />
      </div>
      <div className="relative flex flex-grow basis-0 items-center">
        <Link href="/" aria-label="Home page">
          <Logomark className="h-9 w-9 lg:hidden" />
          <Logo className="hidden h-9 w-auto fill-slate-700 dark:fill-sky-100 lg:block" />
        </Link>
      </div>
      <div className="-my-5 mr-6 sm:mr-8 md:mr-0">
        <Search />
      </div>
      <div className="relative flex basis-0 justify-end gap-4 sm:gap-8 md:flex-grow items-center">
        <Button
          variant="ghost"
          size="icon"
          colorScheme="primary"
          onClick={toggle}
        >
          <SunIcon className="h-5 w-5 dark:hidden" />
          <MoonIcon className="h-5 w-5 hidden dark:block" />
        </Button>
        <Link href="https://github.com" className="group" aria-label="GitHub">
          <Button variant="ghost" size="icon">
            <GitHubIcon className="h-5 w-5 fill-slate-400 group-hover:fill-slate-500 dark:group-hover:fill-slate-300" />
          </Button>
        </Link>
      </div>
    </header>
  );
}

function GitHubIcon(props: { className: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" {...props}>
      <path d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" />
    </svg>
  );
}
