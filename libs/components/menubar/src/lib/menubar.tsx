import React, { ComponentProps, forwardRef } from "react";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { MenuBarProvider, MenuBarContext, useMenuBarContext } from "./context";
import { classNames } from "@rafty/utils";
import { CheckIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

//MenuBar Component
export type Menubar = React.ComponentPropsWithoutRef<
  typeof MenubarPrimitive.Root
> &
  Partial<MenuBarContext> & { isUnstyled?: boolean };
export const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  Menubar
>(
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
      <MenuBarProvider value={{ size, isBarebone }}>
        <MenubarPrimitive.Root
          {...props}
          className={
            unstyle
              ? className
              : classNames(
                  "flex items-center rounded-md bg-transparent w-max p-0.5",
                  className
                )
          }
          ref={forwardedRef}
        >
          {children}
        </MenubarPrimitive.Root>
      </MenuBarProvider>
    );
  }
);
Menubar.displayName = "Menubar";

//MenuBar Menu Component

export const MenubarMenu = MenubarPrimitive.Menu;
MenubarMenu.displayName = "MenubarMenu";

//MenuBar Button Component
const triggerClasses = {
  size: {
    sm: "py-2 px-2 text-xs",
    md: "py-2 px-3 text-sm",
    lg: "py-3 px-4 text-base",
  },
};

export type MenubarTrigger = React.ComponentPropsWithoutRef<
  typeof MenubarPrimitive.Trigger
> & { isUnstyled?: boolean };
export const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  MenubarTrigger
>(({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
  const { size, isBarebone } = useMenuBarContext();
  const unstyle = isBarebone || isUnstyled;

  return (
    <MenubarPrimitive.Trigger
      {...props}
      className={
        unstyle
          ? className
          : classNames(
              "data-[highlighted]:bg-secondary-200 data-[state=open]:bg-secondary-200 dark:text-secondary-100 dark:data-[highlighted]:bg-secondary-800 dark:data-[state=open]:bg-secondary-800 flex select-none items-center rounded-md text-sm font-medium outline-none",
              triggerClasses.size[size],
              className
            )
      }
      ref={forwardedRef}
    >
      {children}
    </MenubarPrimitive.Trigger>
  );
});
MenubarTrigger.displayName = "MenubarTrigger";

//MenuBarContent Component

export type MenubarContent = React.ComponentPropsWithoutRef<
  typeof MenubarPrimitive.Content
> & {
  isUnstyled?: boolean;
};

export const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  MenubarContent
>(
  (
    { children, className, sideOffset = 5, isUnstyled = false, ...props },
    forwardedRef
  ) => {
    const { isBarebone } = useMenuBarContext();
    const unstyle = isBarebone || isUnstyled;

    return (
      <MenubarPrimitive.Portal>
        <MenubarPrimitive.Content
          {...props}
          sideOffset={sideOffset}
          className={
            unstyle
              ? className
              : classNames(
                  "dark:bg-secondary-800 min-w-[12rem] rounded-md bg-white p-1 shadow-[0px_10px_38px_0px_rgba(22,23,24,0.05),0px_-5px_38px_0px_rgba(22,23,24,0.05)]",
                  className
                )
          }
          ref={forwardedRef}
        >
          {children}
        </MenubarPrimitive.Content>
      </MenubarPrimitive.Portal>
    );
  }
);
MenubarContent.displayName = "MenubarContent";

//MenuBar Label Component
const labelClasses = {
  size: {
    sm: "py-1 text-[10px]",
    md: "py-1 text-[11px]",
    lg: "py-1.5 text-xs",
  },
};

export type MenubarLabel = React.ComponentPropsWithoutRef<
  typeof MenubarPrimitive.Label
> & {
  inset?: boolean;
  isUnstyled?: boolean;
};

export const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  MenubarLabel
>(
  (
    { children, className, inset = true, isUnstyled = false, ...props },
    forwardedRef
  ) => {
    const { size, isBarebone } = useMenuBarContext();
    const unstyle = isBarebone || isUnstyled;

    return (
      <MenubarPrimitive.Label
        {...props}
        className={
          unstyle
            ? className
            : classNames(
                "text-secondary-400 dark:text-secondary-400 select-none font-semibold uppercase tracking-wide pr-2",
                inset && "pl-8",
                labelClasses.size[size],
                className
              )
        }
        ref={forwardedRef}
      >
        {children}
      </MenubarPrimitive.Label>
    );
  }
);
MenubarLabel.displayName = "MenubarLabel";

//MenuBar Item Component
const itemClasses = {
  size: {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  },
};

export type MenubarItem = React.ComponentPropsWithoutRef<
  typeof MenubarPrimitive.Item
> & {
  inset?: boolean;
  isUnstyled?: boolean;
};

export const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  MenubarItem
>(
  (
    { children, className, inset = true, isUnstyled = false, ...props },
    forwardedRef
  ) => {
    const { size, isBarebone } = useMenuBarContext();
    const unstyle = isBarebone || isUnstyled;

    return (
      <MenubarPrimitive.Item
        {...props}
        className={
          unstyle
            ? className
            : classNames(
                "rounded-base text-secondary-600 focus:bg-secondary-200/70 data-[disabled]:text-secondary-300 dark:text-secondary-200 dark:focus:bg-secondary-700/60 data-[disabled]:dark:text-secondary-500 flex w-full cursor-pointer items-center gap-2 py-1.5 pr-2 font-medium outline-none data-[disabled]:cursor-not-allowed data-[disabled]:hover:bg-transparent data-[disabled]:dark:hover:bg-transparent",
                itemClasses.size[size],
                inset && "pl-8",
                className
              )
        }
        ref={forwardedRef}
      >
        {children}
      </MenubarPrimitive.Item>
    );
  }
);
MenubarItem.displayName = "MenubarItem";

//MenuBar ChechboxGroup Component
export const MenubarCheckboxGroup = MenubarPrimitive.Group;

//Menubar CheckboxItem Component
const checkboxItemClasses = {
  size: {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  },
};

export type MenubarCheckboxItem = React.ComponentPropsWithoutRef<
  typeof MenubarPrimitive.CheckboxItem
> & {
  isUnstyled?: boolean;
};

export const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  MenubarCheckboxItem
>(({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
  const { size, isBarebone } = useMenuBarContext();
  const unstyle = isBarebone || isUnstyled;

  return (
    <MenubarPrimitive.CheckboxItem
      {...props}
      ref={forwardedRef}
      className={
        unstyle
          ? className
          : classNames(
              "rounded-base text-secondary-600 hover:bg-secondary-200/50 focus:bg-secondary-200 dark:text-secondary-200 dark:hover:bg-secondary-700 dark:focus:bg-secondary-700/50 relative flex w-full cursor-pointer items-center gap-1 pl-8 pr-2 py-1.5 font-medium outline-none",
              checkboxItemClasses.size[size],
              className
            )
      }
    >
      {children}
      <MenubarPrimitive.ItemIndicator className="absolute left-2">
        <CheckIcon className="h-3.5 w-3.5 stroke-[3]" />
      </MenubarPrimitive.ItemIndicator>
    </MenubarPrimitive.CheckboxItem>
  );
});
MenubarCheckboxItem.displayName = "MenubarCheckboxItem";

//MenuBar RadioGroup Component
export const MenubarRadioGroup = MenubarPrimitive.RadioGroup;

//Menubar RadioItem component
const radioItemClasses = {
  size: {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  },
};

export type MenubarRadioItem = React.ComponentPropsWithoutRef<
  typeof MenubarPrimitive.RadioItem
> & {
  isUnstyled?: boolean;
};

export const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  MenubarRadioItem
>(({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
  const { size, isBarebone } = useMenuBarContext();
  const unstyle = isBarebone || isUnstyled;

  return (
    <MenubarPrimitive.RadioItem
      {...props}
      ref={forwardedRef}
      className={
        unstyle
          ? className
          : classNames(
              "rounded-base text-secondary-600 hover:bg-secondary-200/50 focus:bg-secondary-200 dark:text-secondary-200 dark:hover:bg-secondary-700 dark:focus:bg-secondary-700/50 relative flex w-full cursor-pointer items-center gap-1 pl-8 pr-2 py-1.5 font-medium outline-none",
              radioItemClasses.size[size],
              className
            )
      }
    >
      {children}
      <MenubarPrimitive.ItemIndicator className="absolute left-2">
        <div className="h-2 w-2 bg-secondary-600 dark:bg-secondary-200 rounded-full" />
      </MenubarPrimitive.ItemIndicator>
    </MenubarPrimitive.RadioItem>
  );
});
MenubarRadioItem.displayName = "MenuBar.RadioItem";

//MenuBar SubMenu Component

export const MenubarSub = MenubarPrimitive.Sub;
MenubarSub.displayName = "MenubarSub";

//MenuBar SubMenuButton Component
const subTriggerClasses = {
  size: {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  },
};

export type MenubarSubTrigger = React.ComponentPropsWithoutRef<
  typeof MenubarPrimitive.SubTrigger
> & {
  inset?: boolean;
  isUnstyled?: boolean;
};

export const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  MenubarSubTrigger
>(
  (
    { children, className, inset = true, isUnstyled = false, ...props },
    forwardedRef
  ) => {
    const { size, isBarebone } = useMenuBarContext();
    const unstyle = isBarebone || isUnstyled;

    return (
      <MenubarPrimitive.SubTrigger
        {...props}
        ref={forwardedRef}
        className={
          unstyle
            ? className
            : classNames(
                "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none text-secondary-600 focus:bg-secondary-200/70 data-[state=open]:bg-secondary-200/70 dark:text-secondary-200 dark:focus:bg-secondary-700/60 dark:data-[state=open]:bg-secondary-700/60 w-full justify-between gap-2 font-medium data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                subTriggerClasses.size[size],
                inset && "pl-8",
                className
              )
        }
      >
        {children}
        <ChevronRightIcon className="h-3 w-3 stroke-[3]" />
      </MenubarPrimitive.SubTrigger>
    );
  }
);
MenubarSubTrigger.displayName = "MenubarSubTrigger";

//MenuBar SubContent Component

export type MenubarSubContent = React.ComponentPropsWithoutRef<
  typeof MenubarPrimitive.SubContent
> & {
  isUnstyled?: boolean;
};

export const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  MenubarSubContent
>(
  (
    { children, className, isUnstyled = false, sideOffset = 10, ...props },
    forwardedRef
  ) => {
    const { isBarebone } = useMenuBarContext();
    const unstyle = isBarebone || isUnstyled;

    return (
      <MenubarPrimitive.Portal>
        <MenubarPrimitive.SubContent
          {...props}
          sideOffset={sideOffset}
          className={
            unstyle
              ? className
              : classNames(
                  "data-[side=right]:animate-scale-in origin-top-left",
                  "p-base dark:bg-secondary-800 min-w-[12rem] rounded-md bg-white shadow-[0px_10px_38px_0px_rgba(22,23,24,0.05),0px_-5px_38px_0px_rgba(22,23,24,0.05)]",
                  className
                )
          }
          ref={forwardedRef}
        >
          {children}
        </MenubarPrimitive.SubContent>
      </MenubarPrimitive.Portal>
    );
  }
);
MenubarSubContent.displayName = "MenubarSubContent";

// MenuBarDivider Component
const seperatorClasses = {
  size: {
    sm: "my-1",
    md: "my-[5px]",
    lg: "my-1.5",
  },
};

export type MenubarSeparator = React.ComponentPropsWithoutRef<
  typeof MenubarPrimitive.Separator
> & {
  isUnstyled?: boolean;
};

export const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  MenubarSeparator
>(({ className, isUnstyled = true, ...props }, forwardedRef) => {
  const { size, isBarebone } = useMenuBarContext();
  const unstyle = isBarebone || isUnstyled;

  return (
    <MenubarPrimitive.Separator
      {...props}
      ref={forwardedRef}
      className={
        unstyle
          ? className
          : classNames(
              "bg-secondary-200 dark:bg-secondary-700 h-[1px]",
              seperatorClasses.size[size],
              className
            )
      }
    />
  );
});
MenubarSeparator.displayName = "MenubarSeparator";
