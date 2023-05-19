import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import React, { ComponentProps, forwardRef } from "react";
import {
  NavigationMenuContext,
  NavigationMenuProvider,
  useNavigationMenuContext,
} from "./context";
import { classNames } from "@rafty/utils";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export type NavigationMenu = ComponentProps<
  (typeof NavigationMenuPrimitive)["Root"]
> &
  Partial<NavigationMenuContext> & { isUnstyled?: boolean };

export const NavigationMenu = forwardRef<HTMLDivElement, NavigationMenu>(
  (
    {
      children,
      className,
      size = "md",
      isBarebone = false,
      isUnstyled = false,
      ...props
    },
    forwardedRef
  ) => {
    const unstyle = isBarebone || isUnstyled;

    return (
      <NavigationMenuProvider value={{ size, isBarebone }}>
        <NavigationMenuPrimitive.Root
          {...props}
          className={unstyle ? className : classNames("relative", className)}
          ref={forwardedRef}
        >
          {children}
          <NavigationMenuViewport />
        </NavigationMenuPrimitive.Root>
      </NavigationMenuProvider>
    );
  }
);
NavigationMenu.displayName = "NavigationMenu";

export type NavigationMenuList = ComponentProps<
  (typeof NavigationMenuPrimitive)["List"]
> & { isUnstyled?: boolean };

export const NavigationMenuList = ({
  children,
  className,
  isUnstyled = false,
  ...props
}: NavigationMenuList) => {
  const { isBarebone } = useNavigationMenuContext();
  const unstyle = isBarebone || isUnstyled;

  return (
    <NavigationMenuPrimitive.List
      {...props}
      className={
        unstyle
          ? className
          : classNames(
              "m-0 flex items-center justify-center rounded-md p-1",
              className
            )
      }
    >
      {children}
    </NavigationMenuPrimitive.List>
  );
};
NavigationMenuList.displayName = "NavigationMenuList";

//MenuBar Button Component
export type NavigationMenuItem = ComponentProps<
  (typeof NavigationMenuPrimitive)["Item"]
>;

export const NavigationMenuItem = ({
  children,
  className,
  ...props
}: NavigationMenuItem) => (
  <NavigationMenuPrimitive.Item {...props} className={className}>
    {children}
  </NavigationMenuPrimitive.Item>
);
NavigationMenuItem.displayName = "NavigationMenuItem";

const triggerClasses = {
  size: {
    sm: "py-2 px-3 text-xs",
    md: "py-2 px-3 text-base",
    lg: "py-3 px-4 text-lg",
  },
};

export type NavigationMenuTrigger = ComponentProps<
  (typeof NavigationMenuPrimitive)["Trigger"]
> & {
  isUnstyled?: boolean;
};

export const NavigationMenuTrigger = forwardRef<
  HTMLButtonElement,
  NavigationMenuTrigger
>(({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
  const { size, isBarebone } = useNavigationMenuContext();
  const unstyle = isBarebone || isUnstyled;

  return (
    <NavigationMenuPrimitive.Trigger
      {...props}
      className={
        unstyle
          ? className
          : classNames(
              "data-[state=open]:bg-secondary-100 hover:bg-secondary-100 text-secondary-600 dark:text-secondary-300 dark:data-[state=open]:bg-secondary-700/20 dark:hover:bg-secondary-700/20 group flex select-none items-center justify-between gap-1.5 rounded-md font-semibold outline-none",
              triggerClasses.size[size],
              className
            )
      }
      ref={forwardedRef}
    >
      {children}
      <ChevronDownIcon className="h-3.5 w-3.5 stroke-[3] duration-200 group-data-[state=open]:rotate-180" />
    </NavigationMenuPrimitive.Trigger>
  );
});
NavigationMenuTrigger.displayName = "NavigationMenuTrigger";

const contentClasses = {
  size: {
    sm: "max-w-lg top-2.5 rounded-md",
    md: "max-w-2xl top-2.5 rounded-md",
    lg: "max-w-6xl top-2.5 rounded-md",
    full: "-top-1 w-screen",
  },
};

export type NavigationMenuContent = ComponentProps<
  (typeof NavigationMenuPrimitive)["Content"]
> & { size?: "sm" | "md" | "lg" | "full"; isUnstyled?: boolean };
export const NavigationMenuContent = forwardRef<
  HTMLDivElement,
  NavigationMenuContent
>(
  (
    { children, className, size = "md", isUnstyled = false, ...props },
    forwardedRef
  ) => {
    const { isBarebone } = useNavigationMenuContext();
    const unstyle = isBarebone || isUnstyled;

    return (
      <NavigationMenuPrimitive.Content
        {...props}
        className={
          unstyle
            ? className
            : classNames(
                "animate-slide-down-fade dark:bg-secondary-800 absolute min-w-[220px] origin-top bg-white p-4 text-base drop-shadow-lg duration-200",
                contentClasses.size[size],
                className
              )
        }
        ref={forwardedRef}
      >
        {children}
      </NavigationMenuPrimitive.Content>
    );
  }
);
NavigationMenuContent.displayName = "NavigationMenu.Content";

const linkClasses = {
  size: {
    sm: "py-1 px-2 text-xs",
    md: "py-2 px-3 text-base",
    lg: "py-3 px-4 text-lg",
  },
};

export type NavigationMenuLink = ComponentProps<
  (typeof NavigationMenuPrimitive)["Link"]
> & { isUnstyled?: boolean };

export const NavigationMenuLink = ({
  children,
  className,
  isUnstyled = false,
  ...props
}: NavigationMenuLink) => {
  const { size, isBarebone } = useNavigationMenuContext();
  const unstyle = isBarebone || isUnstyled;

  return (
    <NavigationMenuPrimitive.Link
      {...props}
      className={
        unstyle
          ? className
          : classNames(
              "hover:bg-secondary-100 text-secondary-600 dark:text-secondary-300 dark:hover:bg-secondary-700/20 flex select-none rounded-md font-semibold outline-none",
              linkClasses.size[size],
              className
            )
      }
    >
      {children}
    </NavigationMenuPrimitive.Link>
  );
};
NavigationMenuLink.displayName = "NavigationMenuLink";

export type NavigationMenuListItem = {
  title: string;
  href: string;
  children: React.ReactNode;
};

export const NavigationMenuListItem = ({
  title,
  href,
  children,
}: NavigationMenuListItem) => (
  <NavigationMenuLink href={href}>
    <div className="p-2">
      <h5 className="text-base font-semibold text-black dark:text-white">
        {title}
      </h5>
      <p className="text-base font-normal text-black/50 dark:text-white/50">
        {children}
      </p>
    </div>
  </NavigationMenuLink>
);

type NavigationMenuViewport = ComponentProps<
  (typeof NavigationMenuPrimitive)["Viewport"]
>;

const NavigationMenuViewport = ({ ...props }: NavigationMenuViewport) => {
  return (
    <NavigationMenuPrimitive.Viewport
      {...props}
      className={classNames(
        "absolute left-0 top-full flex w-full justify-center"
      )}
    />
  );
};
NavigationMenuViewport.displayName = "NavigationMenuViewport";

export type NavigationMenuIndicator = ComponentProps<
  (typeof NavigationMenuPrimitive)["Indicator"]
> & { isUnstyled?: boolean };

export const NavigationMenuIndicator = ({
  className,
  isUnstyled = false,
  ...props
}: NavigationMenuIndicator) => {
  const { isBarebone } = useNavigationMenuContext();
  const unstyle = isBarebone || isUnstyled;

  return (
    <NavigationMenuPrimitive.Indicator
      {...props}
      className={
        unstyle
          ? className
          : classNames(
              "z-[1] flex h-[10px] w-[10px] items-end justify-center overflow-hidden",
              className
            )
      }
    >
      <div className="dark:bg-secondary-800 relative top-[70%] h-[12px] w-[12px] rotate-45 transform bg-white shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)]" />
    </NavigationMenuPrimitive.Indicator>
  );
};
NavigationMenuIndicator.displayName = "NavigationMenuIndicator";
