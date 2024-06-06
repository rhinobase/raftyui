"use client";
import { CheckIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { cva } from "class-variance-authority";
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from "react";
import { Button } from "../button";
import {
  contextMenuCheckboxItemIndicatorClasses,
  contextMenuContentClasses,
  contextMenuItemClasses,
  contextMenuLabelClasses,
  contextMenuRadioAndCheckboxItemClasses,
  contextMenuRadioItemIndicatorClasses,
  contextMenuSeperatorClasses,
} from "../context-menu";
import { menuTriggerClasses } from "../menu/Menu";
import { classNames } from "../utils";
import {
  type MenuBarContext,
  MenuBarProvider,
  useMenuBarContext,
} from "./context";

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
>(function Menubar(
  {
    children,
    className,
    size = "md",
    isUnstyled = false,
    isDisabled = false,
    ...props
  },
  forwardedRef,
) {
  return (
    <MenuBarProvider value={{ size, isUnstyled, isDisabled }}>
      <MenubarPrimitive.Root
        {...props}
        className={
          isUnstyled
            ? className
            : classNames(menubarClasses({ size }), className)
        }
        ref={forwardedRef}
      >
        {children}
      </MenubarPrimitive.Root>
    </MenuBarProvider>
  );
});

export const MenubarMenu = MenubarPrimitive.Menu;

export type MenubarTrigger = ComponentPropsWithoutRef<
  typeof MenubarPrimitive.Trigger
> &
  Button;
export const MenubarTrigger = forwardRef<
  ElementRef<typeof MenubarPrimitive.Trigger>,
  MenubarTrigger
>(function MenubarTrigger(
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
) {
  const {
    size: parentSize,
    isUnstyled: isParentUnstyled,
    isDisabled: isParentDisabled,
  } = useMenuBarContext();
  const unstyle = isParentUnstyled || isUnstyled;
  const disabled = isParentDisabled || isDisabled;
  const triggerSize = size || parentSize;

  const buttonProps = {
    variant,
    colorScheme,
    leftIcon,
    rightIcon,
    isActive,
    isLoading,
    size: triggerSize,
    isDisabled: disabled,
    isUnstyled: unstyle,
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
          {...buttonProps}
          className={
            unstyle
              ? className
              : classNames(
                  menuTriggerClasses({ colorScheme, variant }),
                  className,
                )
          }
        >
          {children}
        </Button>
      )}
    </MenubarPrimitive.Trigger>
  );
});

export type MenubarContent = ComponentPropsWithoutRef<
  typeof MenubarPrimitive.Content
> & {
  isUnstyled?: boolean;
};

export const MenubarContent = forwardRef<
  ElementRef<typeof MenubarPrimitive.Content>,
  MenubarContent
>(function MenubarContent(
  { children, className, sideOffset = 5, isUnstyled = false, ...props },
  forwardedRef,
) {
  const {
    isUnstyled: isParentUnstyled,
    isDisabled,
    size,
  } = useMenuBarContext();
  const unstyle = isParentUnstyled || isUnstyled;

  if (isDisabled) return undefined;

  return (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        {...props}
        sideOffset={sideOffset}
        className={
          unstyle
            ? className
            : classNames(contextMenuContentClasses({ size }), className)
        }
        ref={forwardedRef}
      >
        {children}
      </MenubarPrimitive.Content>
    </MenubarPrimitive.Portal>
  );
});

export type MenubarLabel = ComponentPropsWithoutRef<
  typeof MenubarPrimitive.Label
> & {
  isUnstyled?: boolean;
};

export const MenubarLabel = forwardRef<
  ElementRef<typeof MenubarPrimitive.Label>,
  MenubarLabel
>(function MenubarLabel(
  { children, className, isUnstyled = false, ...props },
  forwardedRef,
) {
  const { size, isUnstyled: isParentUnstyled } = useMenuBarContext();
  const unstyle = isParentUnstyled || isUnstyled;

  return (
    <MenubarPrimitive.Label
      {...props}
      className={
        unstyle
          ? className
          : classNames(contextMenuLabelClasses({ size }), className)
      }
      ref={forwardedRef}
    >
      {children}
    </MenubarPrimitive.Label>
  );
});

export type MenubarItem = ComponentPropsWithoutRef<
  typeof MenubarPrimitive.Item
> & {
  isUnstyled?: boolean;
};

export const MenubarItem = forwardRef<
  ElementRef<typeof MenubarPrimitive.Item>,
  MenubarItem
>(function MenubarItem(
  { children, className, isUnstyled = false, ...props },
  forwardedRef,
) {
  const { size, isUnstyled: isParentUnstyled } = useMenuBarContext();
  const unstyle = isParentUnstyled || isUnstyled;

  return (
    <MenubarPrimitive.Item
      {...props}
      className={
        unstyle
          ? className
          : classNames(contextMenuItemClasses({ size }), className)
      }
      ref={forwardedRef}
    >
      {children}
    </MenubarPrimitive.Item>
  );
});

export const MenubarGroup = MenubarPrimitive.Group;

export type MenubarCheckboxItem = ComponentPropsWithoutRef<
  typeof MenubarPrimitive.CheckboxItem
> & {
  isUnstyled?: boolean;
};

export const MenubarCheckboxItem = forwardRef<
  ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  MenubarCheckboxItem
>(function MenubarCheckboxItem(
  { children, className, isUnstyled = false, ...props },
  forwardedRef,
) {
  const { size, isUnstyled: isParentUnstyled } = useMenuBarContext();
  const unstyle = isParentUnstyled || isUnstyled;

  return (
    <MenubarPrimitive.CheckboxItem
      {...props}
      ref={forwardedRef}
      className={
        unstyle
          ? className
          : classNames(
              contextMenuItemClasses({ size }),
              contextMenuRadioAndCheckboxItemClasses({ size }),
              className,
            )
      }
    >
      {children}
      <MenubarPrimitive.ItemIndicator
        className={contextMenuCheckboxItemIndicatorClasses({ size })}
      >
        <CheckIcon className="size-full stroke-[3]" />
      </MenubarPrimitive.ItemIndicator>
    </MenubarPrimitive.CheckboxItem>
  );
});

export const MenubarRadioGroup = MenubarPrimitive.RadioGroup;

export type MenubarRadioItem = ComponentPropsWithoutRef<
  typeof MenubarPrimitive.RadioItem
> & {
  isUnstyled?: boolean;
};

export const MenubarRadioItem = forwardRef<
  ElementRef<typeof MenubarPrimitive.RadioItem>,
  MenubarRadioItem
>(function MenubarRadioItem(
  { children, className, isUnstyled = false, ...props },
  forwardedRef,
) {
  const { size, isUnstyled: isParentUnstyled } = useMenuBarContext();
  const unstyle = isParentUnstyled || isUnstyled;

  return (
    <MenubarPrimitive.RadioItem
      {...props}
      ref={forwardedRef}
      className={
        unstyle
          ? className
          : classNames(
              contextMenuItemClasses({ size }),
              contextMenuRadioAndCheckboxItemClasses({ size }),
              className,
            )
      }
    >
      {children}
      <MenubarPrimitive.ItemIndicator
        className={contextMenuRadioItemIndicatorClasses({ size })}
      >
        <div className="bg-secondary-600 dark:bg-secondary-200 size-full rounded-full" />
      </MenubarPrimitive.ItemIndicator>
    </MenubarPrimitive.RadioItem>
  );
});

export const MenubarSub = MenubarPrimitive.Sub;

export type MenubarSubTrigger = ComponentPropsWithoutRef<
  typeof MenubarPrimitive.SubTrigger
> & {
  isUnstyled?: boolean;
};

export const MenubarSubTrigger = forwardRef<
  ElementRef<typeof MenubarPrimitive.SubTrigger>,
  MenubarSubTrigger
>(function MenubarSubTrigger(
  { children, className, isUnstyled = false, ...props },
  forwardedRef,
) {
  const { size, isUnstyled: isParentUnstyled } = useMenuBarContext();
  const unstyle = isParentUnstyled || isUnstyled;

  return (
    <MenubarPrimitive.SubTrigger
      {...props}
      ref={forwardedRef}
      className={
        unstyle
          ? className
          : classNames(
              contextMenuItemClasses({ size }),
              "justify-between",
              className,
            )
      }
    >
      {children}
      <ChevronRightIcon className="size-3 stroke-[3]" />
    </MenubarPrimitive.SubTrigger>
  );
});

export type MenubarSubContent = ComponentPropsWithoutRef<
  typeof MenubarPrimitive.SubContent
> & {
  isUnstyled?: boolean;
};

export const MenubarSubContent = forwardRef<
  ElementRef<typeof MenubarPrimitive.SubContent>,
  MenubarSubContent
>(function MenubarSubContent(
  { children, className, isUnstyled = false, sideOffset = 10, ...props },
  forwardedRef,
) {
  const { isUnstyled: isParentUnstyled, size } = useMenuBarContext();
  const unstyle = isParentUnstyled || isUnstyled;

  return (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.SubContent
        {...props}
        sideOffset={sideOffset}
        className={
          unstyle
            ? className
            : classNames(contextMenuContentClasses({ size }), className)
        }
        ref={forwardedRef}
      >
        {children}
      </MenubarPrimitive.SubContent>
    </MenubarPrimitive.Portal>
  );
});

export type MenubarSeparator = ComponentPropsWithoutRef<
  typeof MenubarPrimitive.Separator
> & {
  isUnstyled?: boolean;
};

export const MenubarSeparator = forwardRef<
  ElementRef<typeof MenubarPrimitive.Separator>,
  MenubarSeparator
>(function MenubarSeparator(
  { className, isUnstyled = true, ...props },
  forwardedRef,
) {
  const { size, isUnstyled: isParentUnstyled } = useMenuBarContext();
  const unstyle = isParentUnstyled || isUnstyled;

  return (
    <MenubarPrimitive.Separator
      {...props}
      ref={forwardedRef}
      className={
        unstyle
          ? className
          : classNames(contextMenuSeperatorClasses({ size }), className)
      }
    />
  );
});
