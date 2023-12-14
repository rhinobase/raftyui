import { PropsWithChildren } from "react";
import { Navigation } from "./Navigation";

export function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <div className="hidden lg:relative lg:block lg:flex-none">
        <div className="bg-secondary-50 absolute inset-y-0 right-0 w-[50vw] dark:hidden" />
        <div className="from-secondary-800 absolute bottom-0 right-0 top-16 hidden h-12 w-px bg-gradient-to-t dark:block" />
        <div className="bg-secondary-800 absolute bottom-0 right-0 top-28 hidden w-px dark:block" />
        <div className="sticky top-[4.75rem] -ml-0.5 h-[calc(100vh-4.75rem)] w-64 overflow-y-auto overflow-x-hidden py-16 pl-0.5 pr-8 xl:w-72 xl:pr-16">
          <Navigation />
        </div>
      </div>
      {children}
    </>
  );
}
