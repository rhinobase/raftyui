import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import React, { ComponentProps, forwardRef } from "react";
import {
  NavigationMenuContext,
  NavigationMenuProvider,
  useNavigationMenuContext,
} from "./context";
import { classNames } from "../utils";

type Root = ComponentProps<(typeof NavigationMenuPrimitive)["Root"]> &
  NavigationMenuContext;
export const Root = forwardRef<HTMLDivElement, Root>(
  ({ children, className, size = "base", ...props }, forwardedRef) => {
    return (
      <NavigationMenuProvider value={{ size }}>
        <NavigationMenuPrimitive.Root
          className={classNames("relative", className)}
          {...props}
          ref={forwardedRef}
        >
          {children}
          <Viewport />
        </NavigationMenuPrimitive.Root>
      </NavigationMenuProvider>
    );
  },
);
Root.displayName = "NavigationMenu.Root";

type List = ComponentProps<(typeof NavigationMenuPrimitive)["List"]>;
export const List = ({ children, className, ...props }: List) => {
  return (
    <NavigationMenuPrimitive.List
      {...props}
      className={classNames(
        "m-0 flex items-center justify-center rounded-md p-1",
        className,
      )}
    >
      {children}
    </NavigationMenuPrimitive.List>
  );
};
List.displayName = "NavigationMenu.List";

//MenuBar Button Component
type Item = ComponentProps<(typeof NavigationMenuPrimitive)["Item"]>;
export const Item = ({ children, className, ...props }: Item) => {
  const { size } = useNavigationMenuContext();
  return (
    <NavigationMenuPrimitive.Item className={classNames(className)} {...props}>
      {children}
    </NavigationMenuPrimitive.Item>
  );
};
Item.displayName = "NavigationMenu.Item";

type Trigger = ComponentProps<(typeof NavigationMenuPrimitive)["Trigger"]>;
export const Trigger = forwardRef<HTMLButtonElement, Trigger>(
  ({ children, className, ...props }, forwardedRef) => {
    const { size } = useNavigationMenuContext();
    return (
      <NavigationMenuPrimitive.Trigger
        className={classNames(
          size == "sm" && "py-2 px-3 text-xs",
          size == "base" && "py-2 px-3 text-base",
          size == "lg" && "py-3 px-4 text-lg",
          "data-[state=open]:bg-secondary-100 hover:bg-secondary-100 text-secondary-600 dark:text-secondary-300 dark:data-[state=open]:bg-secondary-700/20 dark:hover:bg-secondary-700/20 group flex select-none items-center justify-between gap-1.5 rounded-md font-semibold outline-none ",
          className,
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-3.5 w-3.5 stroke-[3] duration-200 group-data-[state=open]:rotate-180"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </NavigationMenuPrimitive.Trigger>
    );
  },
);
Trigger.displayName = "NavigationMenu.Trigger";

type Content = ComponentProps<(typeof NavigationMenuPrimitive)["Content"]>;
export const Content = forwardRef<
  HTMLDivElement,
  Content & { size?: "sm" | "md" | "lg" | "full" }
>(({ children, className, size = "md", ...props }, forwardedRef) => {
  return (
    <NavigationMenuPrimitive.Content
      className={classNames(
        size == "sm" && "max-w-lg",
        size == "md" && "max-w-2xl",
        size == "lg" && "max-w-6xl",
        size == "full" ? "-top-1 w-screen" : "top-2.5 rounded-md",
        "animate-slide-down-fade dark:bg-secondary-800 absolute min-w-[220px] origin-top bg-white p-4 text-base drop-shadow-lg duration-200",
        className,
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </NavigationMenuPrimitive.Content>
  );
});
Content.displayName = "NavigationMenu.Content";

type Link = ComponentProps<(typeof NavigationMenuPrimitive)["Link"]>;
export const Link = ({ children, className, ...props }: Link) => {
  const { size } = useNavigationMenuContext();
  return (
    <NavigationMenuPrimitive.Link
      className={classNames(
        size == "sm" && "py-1 px-2 text-xs",
        size == "base" && "py-2 px-3 text-base",
        size == "lg" && "py-3 px-4 text-lg",
        "hover:bg-secondary-100 text-secondary-600 dark:text-secondary-300 dark:hover:bg-secondary-700/20 flex select-none rounded-md font-semibold outline-none",
        className,
      )}
      {...props}
    >
      {children}
    </NavigationMenuPrimitive.Link>
  );
};
Link.displayName = "NavigationMenu.Link";

type ListItem = { title: string; href: string; children: React.ReactNode };
export const ListItem = ({ title, href, children }: ListItem) => {
  return (
    <Link href={href}>
      <div className="p-2">
        <h5 className="text-base font-semibold text-black dark:text-white">
          {title}
        </h5>
        <p className="text-base font-normal text-black/50 dark:text-white/50">
          {children}
        </p>
      </div>
    </Link>
  );
};

type Viewport = ComponentProps<(typeof NavigationMenuPrimitive)["Viewport"]>;
const Viewport = ({ ...props }: Viewport) => {
  return (
    <NavigationMenuPrimitive.Viewport
      className={classNames(
        "absolute top-full left-0 flex w-full justify-center",
      )}
      {...props}
    />
  );
};

Viewport.displayName = "NavigationMenu.Viewport";

type Indicator = ComponentProps<(typeof NavigationMenuPrimitive)["Indicator"]>;
export const Indicator = ({ className, ...props }: Indicator) => {
  return (
    <NavigationMenuPrimitive.Indicator
      className={classNames(
        "z-[1] flex h-[10px] w-[10px] items-end justify-center overflow-hidden",
        className,
      )}
      {...props}
    >
      <div className="dark:bg-secondary-800 relative top-[70%] h-[12px] w-[12px] rotate-45 transform bg-white shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)]" />
    </NavigationMenuPrimitive.Indicator>
  );
};
Indicator.displayName = "NavigationMenu.Indicator";
