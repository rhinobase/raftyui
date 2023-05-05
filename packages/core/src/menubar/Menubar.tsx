import React from "react";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { ComponentProps, forwardRef } from "react";
import { MenuBarProvider, MenuBarContext, useMenuBarContext } from "./context";
import { classNames } from "../utils";
import { cva } from "class-variance-authority";

//MenuBar Component
export type Menubar = ComponentProps<(typeof MenubarPrimitive)["Root"]> &
  Partial<MenuBarContext> & { unstyled?: boolean };
export const Menubar = forwardRef<HTMLDivElement, Menubar>(
  (
    {
      children,
      className,
      size = "md",
      barebone = false,
      unstyled = false,
      ...props
    },
    forwardedRef
  ) => {
    const unstyle = barebone || unstyled;

    return (
      <MenuBarProvider value={{ size, barebone }}>
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
export const MenubarMenu = ({ children, ...props }: MenubarMenu) => {
  return <MenubarPrimitive.Menu {...props}>{children}</MenubarPrimitive.Menu>;
};
MenubarMenu.displayName = "MenubarMenu";

//MenuBar Button Component
const triggerClasses = cva(
  "data-[highlighted]:bg-secondary-200 data-[state=open]:bg-secondary-200 dark:text-secondary-100 dark:hover:bg-secondary-800 dark:data-[highlighted]:bg-secondary-800 dark:data-[state=open]:bg-secondary-800 flex select-none items-center justify-between gap-2 rounded-md text-sm font-semibold outline-none",
  {
    variants: {
      size: {
        sm: "py-2 px-2 text-xs",
        md: "py-2 px-3 text-sm",
        lg: "py-3 px-4 text-base",
      },
    },
  }
);
export type MenubarTrigger = ComponentProps<
  (typeof MenubarPrimitive)["MenubarTrigger"]
> & { unstyled?: boolean };
export const MenubarTrigger = forwardRef<HTMLButtonElement, MenubarTrigger>(
  ({ children, className, unstyled = false, ...props }, forwardedRef) => {
    const { size, barebone } = useMenuBarContext();
    const unstyle = barebone || unstyled;

    return (
      <MenubarPrimitive.Trigger
        className={
          unstyle ? className : classNames(triggerClasses({ size }), className)
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
  unstyled?: boolean;
};
export const MenubarContent = forwardRef<HTMLDivElement, MenubarContent>(
  (
    { children, className, sideOffset, unstyled = false, ...props },
    forwardedRef
  ) => {
    const { barebone } = useMenuBarContext();
    const unstyle = barebone || unstyled;

    return (
      <MenubarPrimitive.Portal>
        <MenubarPrimitive.Content
          className={
            unstyle
              ? className
              : classNames(
                  "dark:bg-secondary-800 min-w-[220px] rounded-md bg-white p-1 shadow-[0px_10px_38px_0px_rgba(22,23,24,0.05),0px_-5px_38px_0px_rgba(22,23,24,0.05)]",
                  className
                )
          }
          {...props}
          sideOffset={sideOffset ?? 5}
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
const labelClasses = cva(
  "text-secondary-400 dark:text-secondary-400 select-none px-3 font-semibold uppercase tracking-wide",
  {
    variants: {
      size: {
        sm: "py-1 text-[10px]",
        md: "py-1 text-[11px]",
        lg: "py-1.5 text-xs",
      },
    },
  }
);
export type MenubarLabel = ComponentProps<
  (typeof MenubarPrimitive)["Label"]
> & {
  unstyled?: boolean;
};
export const MenubarLabel = forwardRef<HTMLDivElement, MenubarLabel>(
  ({ children, className, unstyled = false, ...props }, forwardedRef) => {
    const { size, barebone } = useMenuBarContext();
    const unstyle = barebone || unstyled;

    return (
      <MenubarPrimitive.Label
        className={
          unstyle ? className : classNames(labelClasses({ size }), className)
        }
        {...props}
        ref={forwardedRef}
      >
        {children}
      </MenubarPrimitive.Label>
    );
  }
);
MenubarLabel.displayName = "MenubarLabel";

//MenuBar Item Component
const itemClasses = cva(
  "rounded-base text-secondary-600 focus:bg-secondary-200/70 data-[disabled]:text-secondary-300 dark:text-secondary-200 dark:focus:bg-secondary-700/60 data-[disabled]:dark:text-secondary-500 flex w-full cursor-pointer items-center gap-2 py-1.5 pl-5 pr-2  font-semibold focus:outline-none data-[disabled]:cursor-not-allowed data-[disabled]:hover:bg-transparent data-[disabled]:dark:hover:bg-transparent",
  {
    variants: {
      size: {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base",
      },
    },
  }
);
export type MenubarItem = ComponentProps<(typeof MenubarPrimitive)["Item"]> & {
  unstyled?: boolean;
};
export const MenubarItem = forwardRef<HTMLDivElement, MenubarItem>(
  ({ children, className, unstyled = false, ...props }, forwardedRef) => {
    const { size, barebone } = useMenuBarContext();
    const unstyle = barebone || unstyled;

    return (
      <MenubarPrimitive.Item
        className={
          unstyle ? className : classNames(itemClasses({ size }), className)
        }
        {...props}
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
const checkboxItemClasses = cva(
  "rounded-base text-secondary-600 hover:bg-secondary-200/50 focus:bg-secondary-200 dark:text-secondary-200 dark:hover:bg-secondary-700 dark:focus:bg-secondary-700/50 relative flex w-full cursor-pointer items-center gap-1 px-5 py-1.5 font-semibold focus:outline-none",
  {
    variants: {
      size: {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base",
      },
    },
  }
);
export type MenubarCheckboxItem = ComponentProps<
  (typeof MenubarPrimitive)["CheckboxItem"]
> & {
  unstyled?: boolean;
};
export const MenubarCheckboxItem = forwardRef<
  HTMLDivElement,
  MenubarCheckboxItem
>(({ children, className, unstyled = false, ...props }, forwardedRef) => {
  const { size, barebone } = useMenuBarContext();
  const unstyle = barebone || unstyled;

  return (
    <MenubarPrimitive.CheckboxItem
      {...props}
      ref={forwardedRef}
      className={
        unstyle
          ? className
          : classNames(checkboxItemClasses({ size }), className)
      }
    >
      {children}
      <MenubarPrimitive.ItemIndicator
        className={classNames(
          size == "sm" && "top-2",
          size == "md" && "top-2.5",
          size == "lg" && "top-3",
          "absolute left-1"
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-3 w-3 stroke-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>
      </MenubarPrimitive.ItemIndicator>
    </MenubarPrimitive.CheckboxItem>
  );
});
MenubarCheckboxItem.displayName = "MenubarCheckboxItem";

//MenuBar RadioGroup Component
export const MenubarRadioGroup = MenubarPrimitive.RadioGroup;

//Menubar RadioItem component
const radioItemClasses = cva(
  "rounded-base text-secondary-600 hover:bg-secondary-200/50 focus:bg-secondary-200 dark:text-secondary-200 dark:hover:bg-secondary-700 dark:focus:bg-secondary-700/50 relative flex w-full cursor-pointer items-center gap-1 px-5 py-1.5 font-semibold focus:outline-none",
  {
    variants: {
      size: {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base",
      },
    },
  }
);
export type MenubarRadioItem = ComponentProps<
  (typeof MenubarPrimitive)["RadioItem"]
> & {
  unstyled?: boolean;
};
export const MenubarRadioItem = forwardRef<HTMLDivElement, MenubarRadioItem>(
  ({ children, className, unstyled = false, ...props }, forwardedRef) => {
    const { size, barebone } = useMenuBarContext();
    const unstyle = barebone || unstyled;

    return (
      <MenubarPrimitive.RadioItem
        {...props}
        ref={forwardedRef}
        className={
          unstyle
            ? className
            : classNames(radioItemClasses({ size }), className)
        }
      >
        {children}
        <MenubarPrimitive.ItemIndicator
          className={classNames(
            size == "sm" && "top-2",
            size == "md" && "top-2.5",
            size == "lg" && "top-3",
            "absolute left-1"
          )}
        >
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
const subTriggerClasses = cva(
  "rounded-base text-secondary-600 focus:bg-secondary-200/70 data-[state=open]:bg-secondary-200/70 dark:text-secondary-200 dark:focus:bg-secondary-700/60 dark:data-[state=open]:bg-secondary-700/60 flex w-full cursor-pointer items-center justify-between gap-2 py-1.5 pr-2 pl-5 font-semibold focus:outline-none",
  {
    variants: {
      size: {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base",
      },
    },
  }
);
export type MenubarSubTrigger = ComponentProps<
  (typeof MenubarPrimitive)["SubTrigger"]
> & {
  unstyled?: boolean;
};
export const MenubarSubTrigger = forwardRef<HTMLDivElement, MenubarSubTrigger>(
  ({ children, className, unstyled = false, ...props }, forwardedRef) => {
    const { size, barebone } = useMenuBarContext();
    const unstyle = barebone || unstyled;

    return (
      <MenubarPrimitive.SubTrigger
        {...props}
        ref={forwardedRef}
        className={
          unstyle
            ? className
            : classNames(subTriggerClasses({ size }), className)
        }
      >
        {children}
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="Stroke-2 h-3 w-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
      </MenubarPrimitive.SubTrigger>
    );
  }
);
MenubarSubTrigger.displayName = "MenubarSubTrigger";

//MenuBar SubContent Component

export type MenubarSubContent = ComponentProps<
  (typeof MenubarPrimitive)["SubContent"]
> & {
  unstyled?: boolean;
};
export const MenubarSubContent = forwardRef<HTMLDivElement, MenubarSubContent>(
  ({ children, className, unstyled = false, ...props }, forwardedRef) => {
    const { barebone } = useMenuBarContext();
    const unstyle = barebone || unstyled;

    return (
      <MenubarPrimitive.Portal>
        <MenubarPrimitive.SubContent
          className={
            unstyle
              ? className
              : classNames(
                  "data-[side=right]:animate-scale-in origin-top-left",
                  "p-base dark:bg-secondary-800 min-w-[220px] rounded-md bg-white shadow-[0px_10px_38px_0px_rgba(22,23,24,0.05),0px_-5px_38px_0px_rgba(22,23,24,0.05)]",
                  className
                )
          }
          {...props}
          ref={forwardedRef}
          sideOffset={10}
        >
          {children}
        </MenubarPrimitive.SubContent>
      </MenubarPrimitive.Portal>
    );
  }
);
MenubarSubContent.displayName = "MenubarSubContent";

// MenuBarDivider Component
const seperatorClasses = cva("bg-secondary-200 dark:bg-secondary-700 h-[1px]", {
  variants: {
    size: {
      sm: "my-1",
      md: "my-[5px]",
      lg: "my-1.5",
    },
  },
});
export type MenubarSeparator = ComponentProps<
  (typeof MenubarPrimitive)["Separator"]
> & {
  unstyled?: boolean;
};
export const MenubarSeparator = forwardRef<HTMLDivElement, MenubarSeparator>(
  ({ className, unstyled = true, ...props }, forwardedRef) => {
    const { size, barebone } = useMenuBarContext();
    const unstyle = barebone || unstyled;

    return (
      <MenubarPrimitive.Separator
        {...props}
        ref={forwardedRef}
        className={
          unstyle
            ? className
            : classNames(seperatorClasses({ size }), className)
        }
      />
    );
  }
);
MenubarSeparator.displayName = "MenubarSeparator";
