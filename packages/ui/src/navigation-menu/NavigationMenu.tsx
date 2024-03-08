"use client";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";
import {
  ComponentProps,
  ComponentPropsWithoutRef,
  PropsWithChildren,
  forwardRef,
} from "react";
import { classNames } from "../utils";
import {
  NavigationMenuContext,
  NavigationMenuProvider,
  useNavigationMenuContext,
} from "./context";

// NavigationMenu Component
export type NavigationMenu = ComponentPropsWithoutRef<
  typeof NavigationMenuPrimitive.Root
> &
  Partial<NavigationMenuContext>;
export const NavigationMenu = forwardRef<HTMLDivElement, NavigationMenu>(
  ({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
    const unstyle = isUnstyled;

    return (
      <NavigationMenuProvider value={{ isUnstyled }}>
        <NavigationMenuPrimitive.Root
          {...props}
          className={
            unstyle
              ? className
              : classNames(
                  "relative z-10 flex w-full flex-1 items-center justify-center",
                  className,
                )
          }
          ref={forwardedRef}
        >
          {children}
          <NavigationMenuViewport />
        </NavigationMenuPrimitive.Root>
      </NavigationMenuProvider>
    );
  },
);
NavigationMenu.displayName = "NavigationMenu";

// NavigationMenuList Component
export type NavigationMenuList = ComponentPropsWithoutRef<
  typeof NavigationMenuPrimitive.List
> & { isUnstyled?: boolean };

export const NavigationMenuList = ({
  children,
  className,
  isUnstyled = false,
  ...props
}: NavigationMenuList) => {
  const { isUnstyled: isParentUnstyled } = useNavigationMenuContext();
  const unstyle = isParentUnstyled || isUnstyled;

  return (
    <NavigationMenuPrimitive.List
      {...props}
      className={
        unstyle
          ? className
          : classNames(
              "flex items-center justify-center rounded-md p-1",
              className,
            )
      }
    >
      {children}
    </NavigationMenuPrimitive.List>
  );
};
NavigationMenuList.displayName = "NavigationMenuList";

// NavigationMenuItem Component
export type NavigationMenuItem = ComponentProps<
  typeof NavigationMenuPrimitive.Item
>;

export const NavigationMenuItem = NavigationMenuPrimitive.Item;
NavigationMenuItem.displayName = "NavigationMenuItem";

// NavigationMenuTrigger Component
export type NavigationMenuTrigger = ComponentPropsWithoutRef<
  typeof NavigationMenuPrimitive.Trigger
> & {
  isUnstyled?: boolean;
};

export const NavigationMenuTrigger = forwardRef<
  HTMLButtonElement,
  NavigationMenuTrigger
>(({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
  const { isUnstyled: isParentUnstyled } = useNavigationMenuContext();
  const unstyle = isParentUnstyled || isUnstyled;

  return (
    <NavigationMenuPrimitive.Trigger
      {...props}
      className={
        unstyle
          ? className
          : classNames(
              "data-[state=open]:bg-secondary-100 hover:bg-secondary-100 text-secondary-600 dark:text-secondary-300 dark:data-[state=open]:bg-secondary-700/20 dark:hover:bg-secondary-700/20 group flex select-none items-center justify-between gap-1.5 rounded-md px-3 py-2 text-base font-semibold outline-none transition-all ease-in-out",
              className,
            )
      }
      ref={forwardedRef}
    >
      {children}
      <ChevronDownIcon className="size-3 stroke-[3] duration-200 group-data-[state=open]:rotate-180" />
    </NavigationMenuPrimitive.Trigger>
  );
});
NavigationMenuTrigger.displayName = "NavigationMenuTrigger";

// NavigationMenuContent Component
export const navigationMenuContentClasses = cva(
  "animate-slide-down-fade dark:bg-secondary-800 absolute w-full origin-top bg-white p-4 text-base drop-shadow-lg duration-200",
  {
    variants: {
      size: {
        sm: "max-w-lg top-2.5",
        md: "max-w-2xl top-2.5",
        lg: "max-w-6xl top-2.5",
        full: "-top-1 w-[100dvw]",
      },
    },
    compoundVariants: [
      {
        size: ["sm", "md", "lg"],
        className: "rounded-md",
      },
    ],
    defaultVariants: {
      size: "md",
    },
  },
);

export type NavigationMenuContent = ComponentPropsWithoutRef<
  typeof NavigationMenuPrimitive.Content
> & { size?: "sm" | "md" | "lg" | "full"; isUnstyled?: boolean };

export const NavigationMenuContent = forwardRef<
  HTMLDivElement,
  NavigationMenuContent
>(
  (
    { children, className, size = "md", isUnstyled = false, ...props },
    forwardedRef,
  ) => {
    const { isUnstyled: isParentUnstyled } = useNavigationMenuContext();
    const unstyle = isParentUnstyled || isUnstyled;

    return (
      <NavigationMenuPrimitive.Content
        {...props}
        className={
          unstyle
            ? className
            : classNames(navigationMenuContentClasses({ size }), className)
        }
        ref={forwardedRef}
      >
        {children}
      </NavigationMenuPrimitive.Content>
    );
  },
);
NavigationMenuContent.displayName = "NavigationMenu.Content";

// NavigationMenuLink Component
export type NavigationMenuLink = ComponentPropsWithoutRef<
  typeof NavigationMenuPrimitive.Link
> & { isUnstyled?: boolean };

export const NavigationMenuLink = ({
  children,
  className,
  isUnstyled = false,
  ...props
}: NavigationMenuLink) => {
  const { isUnstyled: isParentUnstyled } = useNavigationMenuContext();
  const unstyle = isParentUnstyled || isUnstyled;

  return (
    <NavigationMenuPrimitive.Link
      {...props}
      className={
        unstyle
          ? className
          : classNames(
              "hover:bg-secondary-100 text-secondary-600 dark:text-secondary-300 dark:hover:bg-secondary-700/20 flex select-none rounded-md px-3 py-2 font-semibold outline-none transition-all ease-in-out",
              className,
            )
      }
    >
      {children}
    </NavigationMenuPrimitive.Link>
  );
};
NavigationMenuLink.displayName = "NavigationMenuLink";

// NavigationMenuListItem Component
export type NavigationMenuListItem = PropsWithChildren<{
  title: string;
  href: string;
}>;

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
NavigationMenuListItem.displayName = "NavigationMenuListItem";

// NavigationMenuViewport Component
type NavigationMenuViewport = ComponentPropsWithoutRef<
  typeof NavigationMenuPrimitive.Viewport
>;

const NavigationMenuViewport = ({ ...props }: NavigationMenuViewport) => {
  return (
    <NavigationMenuPrimitive.Viewport
      {...props}
      className={classNames("absolute bottom-0 flex w-full justify-center")}
    />
  );
};
NavigationMenuViewport.displayName = "NavigationMenuViewport";

// NavigationMenuIndicator Component
export type NavigationMenuIndicator = ComponentPropsWithoutRef<
  typeof NavigationMenuPrimitive.Indicator
> & { isUnstyled?: boolean };

export const NavigationMenuIndicator = ({
  className,
  isUnstyled = false,
  ...props
}: NavigationMenuIndicator) => {
  const { isUnstyled: isParentUnstyled } = useNavigationMenuContext();
  const unstyle = isParentUnstyled || isUnstyled;

  return (
    <NavigationMenuPrimitive.Indicator
      {...props}
      className={
        unstyle
          ? className
          : classNames(
              "z-[1] flex size-[10px] items-end justify-center overflow-hidden",
              className,
            )
      }
    >
      <div className="dark:bg-secondary-800 relative top-[70%] size-[12px] rotate-45 transform rounded-tl bg-white shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)]" />
    </NavigationMenuPrimitive.Indicator>
  );
};
NavigationMenuIndicator.displayName = "NavigationMenuIndicator";
