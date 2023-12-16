"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { PropsWithChildren, useEffect, useState } from "react";
import { Hero } from "../components/Hero";
import { Layout } from "../components/Layout";
import { MobileNavigation } from "../components/MobileNavigation";
import { SearchDialog } from "../components/Search";
import { Header } from "./Header";

export function Wrapper({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isHomePage = pathname === "/";
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);

  // biome-ignore lint/correctness/useExhaustiveDependencies: closing them on page change
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
        <main className="relative flex w-full flex-auto justify-center sm:px-2 lg:px-8">
          {component}
        </main>
      </div>
      <MobileNavigation isOpen={isDrawerOpen} setOpen={setDrawerOpen} />
      <SearchDialog open={isSearchOpen} setOpen={setSearchOpen} />
    </>
  );
}
