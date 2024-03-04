"use client";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import RaftyIcon from "@rafty/icons";
import { cva } from "class-variance-authority";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { Button } from "../button";
import { menuTriggerClasses } from "../menu/Menu";
import { classNames } from "../utils";
import { MenuBarContext, MenuBarProvider, useMenuBarContext } from "./context";

//MenuBar Component
export const menubarClasses = cva("flex w-max items-center", {
  variants: { size: { sm: "gap-1", md: "gap-2", lg: "gap-3" } },
  defaultVariants: {
    size: "md",
  },
});

export type Menubar = ComponentPropsWithoutRef<typeof MenubarPrimitive.Root> &
  Partial<MenuBarContext>;
export const Menubar = forwardRef<
  ElementRef<typeof MenubarPrimitive.Root>,
  Menubar
>(
  (
    { children, className, size = "md", isUnstyled = false, ...props },
    forwardedRef,
  ) => {
    const unstyle = isUnstyled;

    return (
      <MenuBarProvider value={{ size, isUnstyled }}>
        <MenubarPrimitive.Root
          {...props}
          className={
            unstyle
              ? className
              : classNames(menubarClasses({ size }), className)
          }
          ref={forwardedRef}
        >
          {children}
        </MenubarPrimitive.Root>
      </MenuBarProvider>
    );
  },
);
Menubar.displayName = "Menubar";

//MenuBar Menu Component

export const MenubarMenu = MenubarPrimitive.Menu;
MenubarMenu.displayName = "MenubarMenu";

//MenuBar Button Component

export type MenubarTrigger = ComponentPropsWithoutRef<
  typeof MenubarPrimitive.Trigger
> &
  Button;
export const MenubarTrigger = forwardRef<
  ElementRef<typeof MenubarPrimitive.Trigger>,
  MenubarTrigger
>(
  (
    {
      className,
      children,
      size = "md",
      variant = "solid",
      colorScheme = "secondary",
      leftIcon = undefined,
      rightIcon = undefined,
      isDisabled = false,
      isActive = false,
      isLoading = false,
      isUnstyled = false,
      asChild = false,
      ...props
    },
    forwardedRef,
  ) => {
    const { size: parentSize, isUnstyled: isParentUnstyled } =
      useMenuBarContext();
    const unstyle = isParentUnstyled || isUnstyled;
    const triggerSize = size || parentSize;
    const buttonProps = {
      variant,
      colorScheme,
      leftIcon,
      rightIcon,
      isActive,
      isDisabled,
      isLoading,
    };

    return (
      <MenubarPrimitive.Trigger
        {...props}
        className={asChild ? className : undefined}
        ref={forwardedRef}
        asChild
      >
        {asChild ? (
          children
        ) : (
          <Button
            size={triggerSize}
            isUnstyled={unstyle}
            className={
              unstyle
                ? className
                : classNames(
                    menuTriggerClasses({ colorScheme, variant }),
                    className,
                  )
            }
            {...buttonProps}
          >
            {children}
          </Button>
        )}
      </MenubarPrimitive.Trigger>
    );
  },
);
MenubarTrigger.displayName = "MenubarTrigger";

//MenuBarContent Component

export type MenubarContent = ComponentPropsWithoutRef<
  typeof MenubarPrimitive.Content
> & {
  isUnstyled?: boolean;
};

export const MenubarContent = forwardRef<
  ElementRef<typeof MenubarPrimitive.Content>,
  MenubarContent
>(
  (
    { children, className, sideOffset = 5, isUnstyled = false, ...props },
    forwardedRef,
  ) => {
    const { isUnstyled: isParentUnstyled } = useMenuBarContext();
    const unstyle = isParentUnstyled || isUnstyled;

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
                  className,
                )
          }
          ref={forwardedRef}
        >
          {children}
        </MenubarPrimitive.Content>
      </MenubarPrimitive.Portal>
    );
  },
);
MenubarContent.displayName = "MenubarContent";

//MenuBar Label Component
export const menubarLabelClasses = cva(
  "text-secondary-400 dark:text-secondary-400 select-none font-semibold uppercase tracking-wide",
  {
    variants: {
      size: {
        sm: "px-1.5 py-1 text-[10px]",
        md: "px-2 py-1 text-[11px]",
        lg: "px-2.5 py-1.5 text-xs",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export type MenubarLabel = ComponentPropsWithoutRef<
  typeof MenubarPrimitive.Label
> & {
  isUnstyled?: boolean;
};

export const MenubarLabel = forwardRef<
  ElementRef<typeof MenubarPrimitive.Label>,
  MenubarLabel
>(({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
  const { size, isUnstyled: isParentUnstyled } = useMenuBarContext();
  const unstyle = isParentUnstyled || isUnstyled;

  return (
    <MenubarPrimitive.Label
      {...props}
      className={
        unstyle
          ? className
          : classNames(menubarLabelClasses({ size }), className)
      }
      ref={forwardedRef}
    >
      {children}
    </MenubarPrimitive.Label>
  );
});
MenubarLabel.displayName = "MenubarLabel";

//MenuBar Item Component
export const menubarItemClasses = cva(
  "rounded-base text-secondary-600 focus:bg-secondary-200/70 data-[disabled]:text-secondary-300 dark:text-secondary-200 dark:focus:bg-secondary-700/60 data-[disabled]:dark:text-secondary-500 flex w-full cursor-pointer items-center gap-2 font-medium outline-none data-[disabled]:cursor-not-allowed data-[disabled]:hover:bg-transparent data-[disabled]:dark:hover:bg-transparent",
  {
    variants: {
      size: {
        sm: "px-2.5 py-1.5 text-xs",
        md: "px-3.5 py-1.5 text-sm",
        lg: "px-4 py-2 text-base",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export type MenubarItem = ComponentPropsWithoutRef<
  typeof MenubarPrimitive.Item
> & {
  isUnstyled?: boolean;
};

export const MenubarItem = forwardRef<
  ElementRef<typeof MenubarPrimitive.Item>,
  MenubarItem
>(({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
  const { size, isUnstyled: isParentUnstyled } = useMenuBarContext();
  const unstyle = isParentUnstyled || isUnstyled;

  return (
    <MenubarPrimitive.Item
      {...props}
      className={
        unstyle
          ? className
          : classNames(menubarItemClasses({ size }), className)
      }
      ref={forwardedRef}
    >
      {children}
    </MenubarPrimitive.Item>
  );
});
MenubarItem.displayName = "MenubarItem";

//MenuBar ChechboxGroup Component
export const MenubarGroup = MenubarPrimitive.Group;
MenubarGroup.displayName = "MenubarGroup";

//Menubar CheckboxItem Component
export const menubarCheckboxItemClasses = cva(
  "rounded-base text-secondary-600 hover:bg-secondary-200/50 focus:bg-secondary-200 dark:text-secondary-200 dark:hover:bg-secondary-700 dark:focus:bg-secondary-700/50 relative flex w-full cursor-pointer items-center gap-1 font-medium outline-none",
  {
    variants: {
      size: {
        sm: "pl-6 pr-2.5 py-1.5 text-xs",
        md: "pl-7 pr-3.5 py-1.5 text-sm",
        lg: "pl-8 pr-4 py-2 text-base",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export const menubarCheckboxItemIndicatorClasses = cva("absolute", {
  variants: {
    size: {
      sm: "left-1",
      md: "left-2",
      lg: "left-2.5",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type MenubarCheckboxItem = ComponentPropsWithoutRef<
  typeof MenubarPrimitive.CheckboxItem
> & {
  isUnstyled?: boolean;
};

export const MenubarCheckboxItem = forwardRef<
  ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  MenubarCheckboxItem
>(({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
  const { size, isUnstyled: isParentUnstyled } = useMenuBarContext();
  const unstyle = isParentUnstyled || isUnstyled;

  return (
    <MenubarPrimitive.CheckboxItem
      {...props}
      ref={forwardedRef}
      className={
        unstyle
          ? className
          : classNames(menubarCheckboxItemClasses({ size }), className)
      }
    >
      {children}
      <MenubarPrimitive.ItemIndicator
        className={menubarCheckboxItemIndicatorClasses({ size })}
      >
        <RaftyIcon type="check" className="size-3 stroke-[3]" />
      </MenubarPrimitive.ItemIndicator>
    </MenubarPrimitive.CheckboxItem>
  );
});
MenubarCheckboxItem.displayName = "MenubarCheckboxItem";

//MenuBar RadioGroup Component
export const MenubarRadioGroup = MenubarPrimitive.RadioGroup;
MenubarRadioGroup.displayName = "MenubarRadioGroup";

//Menubar RadioItem component
export const menubarRadioItemClasses = cva(
  "rounded-base text-secondary-600 hover:bg-secondary-200/50 focus:bg-secondary-200 dark:text-secondary-200 dark:hover:bg-secondary-700 dark:focus:bg-secondary-700/50 relative flex w-full cursor-pointer items-center gap-1 font-medium outline-none",
  {
    variants: {
      size: {
        sm: "pl-6 pr-2.5 py-1.5 text-xs",
        md: "pl-7 pr-3.5 py-1.5 text-sm",
        lg: "pl-8 pr-4 py-2 text-base",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export const menubarRadioItemIndicatorClasses = cva("absolute", {
  variants: {
    size: {
      sm: "left-2",
      md: "left-2.5",
      lg: "left-2.5",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const menubarRadioItemIndicatorChildClasses = cva(
  "bg-secondary-600 dark:bg-secondary-200 rounded-full",
  {
    variants: {
      size: {
        sm: "size-1.5",
        md: "size-2",
        lg: "size-2",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export type MenubarRadioItem = ComponentPropsWithoutRef<
  typeof MenubarPrimitive.RadioItem
> & {
  isUnstyled?: boolean;
};

export const MenubarRadioItem = forwardRef<
  ElementRef<typeof MenubarPrimitive.RadioItem>,
  MenubarRadioItem
>(({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
  const { size, isUnstyled: isParentUnstyled } = useMenuBarContext();
  const unstyle = isParentUnstyled || isUnstyled;

  return (
    <MenubarPrimitive.RadioItem
      {...props}
      ref={forwardedRef}
      className={
        unstyle
          ? className
          : classNames(menubarRadioItemClasses({ size }), className)
      }
    >
      {children}
      <MenubarPrimitive.ItemIndicator
        className={menubarRadioItemIndicatorClasses({ size })}
      >
        <div className={menubarRadioItemIndicatorChildClasses({ size })} />
      </MenubarPrimitive.ItemIndicator>
    </MenubarPrimitive.RadioItem>
  );
});
MenubarRadioItem.displayName = "MenubarRadioItem";

//MenuBar SubMenu Component
export const MenubarSub = MenubarPrimitive.Sub;
MenubarSub.displayName = "MenubarSub";

//MenuBar SubMenuButton Component
export const menubarSubTriggerClasses = cva(
  "text-secondary-600 focus:bg-secondary-200/70 data-[state=open]:bg-secondary-200/70 dark:text-secondary-200 dark:focus:bg-secondary-700/60 dark:data-[state=open]:bg-secondary-700/60 relative flex w-full cursor-default select-none items-center justify-between gap-2 rounded-sm font-medium outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
  {
    variants: {
      size: {
        sm: "px-2.5 py-1.5 text-xs",
        md: "px-3.5 py-1.5 text-sm",
        lg: "px-4 py-2 text-base",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export type MenubarSubTrigger = ComponentPropsWithoutRef<
  typeof MenubarPrimitive.SubTrigger
> & {
  isUnstyled?: boolean;
};

export const MenubarSubTrigger = forwardRef<
  ElementRef<typeof MenubarPrimitive.SubTrigger>,
  MenubarSubTrigger
>(({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
  const { size, isUnstyled: isParentUnstyled } = useMenuBarContext();
  const unstyle = isParentUnstyled || isUnstyled;

  return (
    <MenubarPrimitive.SubTrigger
      {...props}
      ref={forwardedRef}
      className={
        unstyle
          ? className
          : classNames(menubarSubTriggerClasses({ size }), className)
      }
    >
      {children}
      <RaftyIcon type="chevron-right" className="size-3 stroke-[3]" />
    </MenubarPrimitive.SubTrigger>
  );
});
MenubarSubTrigger.displayName = "MenubarSubTrigger";

//MenuBar SubContent Component

export type MenubarSubContent = ComponentPropsWithoutRef<
  typeof MenubarPrimitive.SubContent
> & {
  isUnstyled?: boolean;
};

export const MenubarSubContent = forwardRef<
  ElementRef<typeof MenubarPrimitive.SubContent>,
  MenubarSubContent
>(
  (
    { children, className, isUnstyled = false, sideOffset = 10, ...props },
    forwardedRef,
  ) => {
    const { isUnstyled: isParentUnstyled } = useMenuBarContext();
    const unstyle = isParentUnstyled || isUnstyled;

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
                  className,
                )
          }
          ref={forwardedRef}
        >
          {children}
        </MenubarPrimitive.SubContent>
      </MenubarPrimitive.Portal>
    );
  },
);
MenubarSubContent.displayName = "MenubarSubContent";

// MenuBarDivider Component
export const menubarSeperatorClasses = cva(
  "bg-secondary-200 dark:bg-secondary-700 h-[1px]",
  {
    variants: {
      size: {
        sm: "my-1",
        md: "my-[5px]",
        lg: "my-1.5",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export type MenubarSeparator = ComponentPropsWithoutRef<
  typeof MenubarPrimitive.Separator
> & {
  isUnstyled?: boolean;
};

export const MenubarSeparator = forwardRef<
  ElementRef<typeof MenubarPrimitive.Separator>,
  MenubarSeparator
>(({ className, isUnstyled = true, ...props }, forwardedRef) => {
  const { size, isUnstyled: isParentUnstyled } = useMenuBarContext();
  const unstyle = isParentUnstyled || isUnstyled;

  return (
    <MenubarPrimitive.Separator
      {...props}
      ref={forwardedRef}
      className={
        unstyle
          ? className
          : classNames(menubarSeperatorClasses({ size }), className)
      }
    />
  );
});
MenubarSeparator.displayName = "MenubarSeparator";
