import React from "react";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { ComponentProps, forwardRef } from "react";
import { MenuBarProvider, MenuBarContext, useMenuBarContext } from "./context";
import { classNames } from "@rhino/utils";
import { CheckIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

//MenuBar Component
export type Menubar = ComponentProps<(typeof MenubarPrimitive)["Root"]> &
  Partial<MenuBarContext> & { isUnstyled?: boolean };

export const Menubar = forwardRef<HTMLDivElement, Menubar>(
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
          className={unstyle ? className : classNames("flex w-full", className)}
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
export type MenubarMenu = ComponentProps<(typeof MenubarPrimitive)["Menu"]>;

export const MenubarMenu = ({ children, ...props }: MenubarMenu) => (
  <MenubarPrimitive.Menu {...props}>{children}</MenubarPrimitive.Menu>
);
MenubarMenu.displayName = "MenubarMenu";

//MenuBar Button Component
const triggerClasses = {
  size: {
    sm: "py-2 px-2 text-xs",
    md: "py-2 px-3 text-sm",
    lg: "py-3 px-4 text-base",
  },
};

export type MenubarTrigger = ComponentProps<
  (typeof MenubarPrimitive)["MenubarTrigger"]
> & { isUnstyled?: boolean };

export const MenubarTrigger = forwardRef<HTMLButtonElement, MenubarTrigger>(
  ({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
    const { size, isBarebone } = useMenuBarContext();
    const unstyle = isBarebone || isUnstyled;

    return (
      <MenubarPrimitive.Trigger
        className={
          unstyle
            ? className
            : classNames(
                "flex select-none items-center justify-between gap-2 rounded-md text-sm font-semibold outline-none data-[highlighted]:bg-secondary-200 data-[state=open]:bg-secondary-200 dark:text-secondary-100 dark:hover:bg-secondary-800 dark:data-[highlighted]:bg-secondary-800 dark:data-[state=open]:bg-secondary-800",
                triggerClasses.size[size],
                className
              )
        }
        {...props}
        ref={forwardedRef}
      >
        {children}
      </MenubarPrimitive.Trigger>
    );
  }
);
MenubarTrigger.displayName = "MenubarTrigger";

//MenuBarContent Component

export type MenubarContent = ComponentProps<
  (typeof MenubarPrimitive)["Content"]
> & {
  isUnstyled?: boolean;
};

export const MenubarContent = forwardRef<HTMLDivElement, MenubarContent>(
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
                  "min-w-[220px] rounded-md bg-white dark:bg-secondary-800 p-1 shadow-[0px_10px_38px_0px_rgba(22,23,24,0.05),0px_-5px_38px_0px_rgba(22,23,24,0.05)]",
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

// MenuGroup Component
export type MenubarGroup = { children?: React.ReactNode; title: string };
export const MenubarGroup = ({ children, title }: MenubarGroup) => {
  return (
    <>
      <MenubarLabel>{title}</MenubarLabel>
      {children}
    </>
  );
};
MenubarGroup.displayName = "MenubarGroup";

//MenuBar Label Component
const labelClasses = {
  size: {
    sm: "py-1 text-[10px]",
    md: "py-1 text-[11px]",
    lg: "py-1.5 text-xs",
  },
};

export type MenubarLabel = ComponentProps<
  (typeof MenubarPrimitive)["Label"]
> & {
  isUnstyled?: boolean;
};

export const MenubarLabel = forwardRef<HTMLDivElement, MenubarLabel>(
  ({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
    const { size, isBarebone } = useMenuBarContext();
    const unstyle = isBarebone || isUnstyled;

    return (
      <MenubarPrimitive.Label
        {...props}
        className={
          unstyle
            ? className
            : classNames(
                "select-none px-3 font-semibold uppercase tracking-wide text-secondary-400 dark:text-secondary-400",
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

export type MenubarItem = ComponentProps<(typeof MenubarPrimitive)["Item"]> & {
  isUnstyled?: boolean;
};

export const MenubarItem = forwardRef<HTMLDivElement, MenubarItem>(
  ({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
    const { size, isBarebone } = useMenuBarContext();
    const unstyle = isBarebone || isUnstyled;

    return (
      <MenubarPrimitive.Item
        {...props}
        className={
          unstyle
            ? className
            : classNames(
                "flex w-full cursor-pointer items-center gap-2 py-1.5 pl-5 pr-2 font-semibold outline-none data-[disabled]:cursor-not-allowed data-[disabled]:hover:bg-transparent data-[disabled]:dark:hover:bg-transparent rounded-base text-secondary-600 focus:bg-secondary-200/70 data-[disabled]:text-secondary-300 dark:text-secondary-200 dark:focus:bg-secondary-700/60 data-[disabled]:dark:text-secondary-500",
                itemClasses.size[size],
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

export type MenubarCheckboxItem = ComponentProps<
  (typeof MenubarPrimitive)["CheckboxItem"]
> & {
  isUnstyled?: boolean;
};

export const MenubarCheckboxItem = forwardRef<
  HTMLDivElement,
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
              "relative flex w-full cursor-pointer items-center gap-1 px-5 py-1.5 font-semibold outline-none rounded-base text-secondary-600 hover:bg-secondary-200/50 focus:bg-secondary-200 dark:text-secondary-200 dark:hover:bg-secondary-700 dark:focus:bg-secondary-700/50",
              checkboxItemClasses.size[size],
              className
            )
      }
    >
      {children}
      <MenubarPrimitive.ItemIndicator className="absolute left-1">
        <CheckIcon className="h-3 w-3 stroke-[3]" />
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

export type MenubarRadioItem = ComponentProps<
  (typeof MenubarPrimitive)["RadioItem"]
> & {
  isUnstyled?: boolean;
};

export const MenubarRadioItem = forwardRef<HTMLDivElement, MenubarRadioItem>(
  ({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
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
                "relative flex w-full cursor-pointer items-center gap-1 px-5 py-1.5 font-semibold outline-none rounded-base text-secondary-600 hover:bg-secondary-200/50 focus:bg-secondary-200 dark:text-secondary-200 dark:hover:bg-secondary-700 dark:focus:bg-secondary-700/50",
                radioItemClasses.size[size],
                className
              )
        }
      >
        {children}
        <MenubarPrimitive.ItemIndicator className="absolute left-1">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="h-3 w-3"
          >
            <path d="M8 4c.367 0 .721.048 1.063.145a3.943 3.943 0 0 1 1.762 1.031 3.944 3.944 0 0 1 1.03 1.762c.097.34.145.695.145 1.062 0 .367-.048.721-.145 1.063a3.94 3.94 0 0 1-1.03 1.765 4.017 4.017 0 0 1-1.762 1.031C8.72 11.953 8.367 12 8 12s-.721-.047-1.063-.14a4.056 4.056 0 0 1-1.765-1.032A4.055 4.055 0 0 1 4.14 9.062 3.992 3.992 0 0 1 4 8c0-.367.047-.721.14-1.063a4.02 4.02 0 0 1 .407-.953A4.089 4.089 0 0 1 5.98 4.546a3.94 3.94 0 0 1 .957-.401A3.89 3.89 0 0 1 8 4z" />
          </svg>
        </MenubarPrimitive.ItemIndicator>
      </MenubarPrimitive.RadioItem>
    );
  }
);
MenubarRadioItem.displayName = "MenuBar.RadioItem";

//MenuBar SubMenu Component
export type MenubarSub = ComponentProps<(typeof MenubarPrimitive)["Sub"]>;
export const MenubarSub = ({ children, ...props }: MenubarSub) => {
  return <MenubarPrimitive.Sub {...props}>{children}</MenubarPrimitive.Sub>;
};
MenubarSub.displayName = "MenubarSub";

//MenuBar SubMenuButton Component
const subTriggerClasses = {
  size: {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  },
};

export type MenubarSubTrigger = ComponentProps<
  (typeof MenubarPrimitive)["SubTrigger"]
> & {
  isUnstyled?: boolean;
};

export const MenubarSubTrigger = forwardRef<HTMLDivElement, MenubarSubTrigger>(
  ({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
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
                "flex w-full cursor-pointer items-center justify-between gap-2 py-1.5 pr-2 pl-5 font-semibold outline-none rounded-base text-secondary-600 focus:bg-secondary-200/70 data-[state=open]:bg-secondary-200/70 dark:text-secondary-200 dark:focus:bg-secondary-700/60 dark:data-[state=open]:bg-secondary-700/60",
                subTriggerClasses.size[size],
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

export type MenubarSubContent = ComponentProps<
  (typeof MenubarPrimitive)["SubContent"]
> & {
  isUnstyled?: boolean;
};

export const MenubarSubContent = forwardRef<HTMLDivElement, MenubarSubContent>(
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
                  "p-base dark:bg-secondary-800 min-w-[220px] rounded-md bg-white shadow-[0px_10px_38px_0px_rgba(22,23,24,0.05),0px_-5px_38px_0px_rgba(22,23,24,0.05)]",
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

export type MenubarSeparator = ComponentProps<
  (typeof MenubarPrimitive)["Separator"]
> & {
  isUnstyled?: boolean;
};

export const MenubarSeparator = forwardRef<HTMLDivElement, MenubarSeparator>(
  ({ className, isUnstyled = true, ...props }, forwardedRef) => {
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
  }
);
MenubarSeparator.displayName = "MenubarSeparator";
