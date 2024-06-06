"use client";
import { CheckIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
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
  contextMenuSubTriggerIconClasses,
} from "../context-menu";
import type { ValueOrFunction } from "../types";
import { classNames, getValue } from "../utils";
import { type MenuContext, MenuProvider, useMenuContext } from "./context";

export type Menu = ComponentPropsWithoutRef<typeof DropdownMenu.Root> &
  Partial<MenuContext>;

export function Menu({
  children,
  size = "md",
  isUnstyled = false,
  isDisabled = false,
  ...props
}: Menu) {
  return (
    <MenuProvider value={{ size, isUnstyled, isDisabled }}>
      <DropdownMenu.Root {...props}>{children}</DropdownMenu.Root>
    </MenuProvider>
  );
}

export const menuTriggerClasses = cva("", {
  variants: {
    colorScheme: {
      primary: "",
      secondary: "",
      error: "",
      success: "",
    },
    variant: {
      solid: "",
      outline: "",
      ghost: "",
    },
    disabled: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    {
      colorScheme: "primary",
      variant: "solid",
      disabled: false,
      className:
        "data-[state=open]:bg-primary-600 dark:data-[state=open]:bg-primary-400/80",
    },
    {
      colorScheme: "secondary",
      variant: "solid",
      disabled: false,
      className:
        "data-[state=open]:bg-secondary-300 dark:data-[state=open]:bg-secondary-400/80",
    },
    {
      colorScheme: "error",
      variant: "solid",
      disabled: false,
      className:
        "data-[state=open]:bg-error-600/90 dark:data-[state=open]:bg-error-400/80",
    },
    {
      colorScheme: "success",
      variant: "solid",
      disabled: false,
      className:
        "data-[state=open]:bg-success-600/90 dark:data-[state=open]:bg-success-400/80",
    },
    {
      colorScheme: "primary",
      variant: ["outline", "ghost"],
      disabled: false,
      className:
        "data-[state=open]:bg-primary-200/70 dark:data-[state=open]:bg-primary-400/20",
    },
    {
      colorScheme: "secondary",
      variant: ["outline", "ghost"],
      disabled: false,
      className:
        "data-[state=open]:bg-secondary-200/80 dark:data-[state=open]:bg-secondary-700/80",
    },
    {
      colorScheme: "error",
      variant: ["outline", "ghost"],
      disabled: false,
      className:
        "data-[state=open]:bg-error-200/60 dark:data-[state=open]:bg-error-300/30",
    },
    {
      colorScheme: "success",
      variant: ["outline", "ghost"],
      disabled: false,
      className:
        "data-[state=open]:bg-success-200/60 dark:data-[state=open]:bg-success-300/30",
    },
  ],
});

export type MenuTrigger = ComponentPropsWithoutRef<
  typeof DropdownMenu.Trigger
> &
  Button;

export const MenuTrigger = forwardRef<
  ElementRef<typeof DropdownMenu.Trigger>,
  MenuTrigger
>(function MenuTrigger(
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
  } = useMenuContext();
  const unstyle = isParentUnstyled || isUnstyled;
  const triggerSize = size || parentSize;
  const disabled = isParentDisabled || isDisabled;

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
    <DropdownMenu.Trigger
      {...props}
      className={asChild ? className : undefined}
      ref={forwardedRef}
      asChild
    >
      {asChild ? (
        children
      ) : (
        <Button
          className={
            unstyle
              ? className
              : classNames(
                  menuTriggerClasses({
                    colorScheme,
                    variant,
                    disabled: getValue(disabled),
                  }),
                  className,
                )
          }
          {...buttonProps}
        >
          {children}
        </Button>
      )}
    </DropdownMenu.Trigger>
  );
});

export type MenuContent = ComponentPropsWithoutRef<
  typeof DropdownMenu.Content
> & {
  isUnstyled?: boolean;
  isArrow?: ValueOrFunction;
  arrowClassNames?: string;
};

export const MenuContent = forwardRef<
  ElementRef<typeof DropdownMenu.Content>,
  MenuContent
>(function MenuContent(
  {
    children,
    className,
    isArrow,
    isUnstyled = false,
    arrowClassNames,
    ...props
  },
  forwardedRef,
) {
  const { isUnstyled: isParentUnstyled, isDisabled, size } = useMenuContext();
  const unstyle = isParentUnstyled || isUnstyled;
  const arrow = getValue(isArrow) ?? true;

  if (isDisabled) return undefined;

  return (
    <DropdownMenu.Portal>
      <DropdownMenu.Content
        {...props}
        className={
          unstyle
            ? className
            : classNames(contextMenuContentClasses({ size }), className)
        }
        ref={forwardedRef}
      >
        {children}
        {arrow && <MenuArrow className={arrowClassNames} />}
      </DropdownMenu.Content>
    </DropdownMenu.Portal>
  );
});

export type MenuLabel = ComponentPropsWithoutRef<typeof DropdownMenu.Label> & {
  isUnstyled?: boolean;
};

export const MenuLabel = forwardRef<
  ElementRef<typeof DropdownMenu.Label>,
  MenuLabel
>(function MenuLabel(
  { children, className, isUnstyled = false, ...props },
  forwardedRef,
) {
  const { size, isUnstyled: isParentUnstyled } = useMenuContext();
  const unstyle = isParentUnstyled || isUnstyled;

  return (
    <DropdownMenu.Label
      {...props}
      className={
        unstyle
          ? className
          : classNames(contextMenuLabelClasses({ size }), className)
      }
      ref={forwardedRef}
    >
      {children}
    </DropdownMenu.Label>
  );
});

export type MenuItem = ComponentPropsWithoutRef<typeof DropdownMenu.Item> & {
  isUnstyled?: boolean;
};

export const MenuItem = forwardRef<
  ElementRef<typeof DropdownMenu.Item>,
  MenuItem
>(function MenuItem(
  { className, children, isUnstyled = false, ...props },
  forwardedRef,
) {
  const { size, isUnstyled: isParentUnstyled } = useMenuContext();
  const unstyle = isParentUnstyled || isUnstyled;

  return (
    <DropdownMenu.Item
      {...props}
      className={
        unstyle
          ? className
          : classNames(contextMenuItemClasses({ size }), className)
      }
      ref={forwardedRef}
    >
      {children}
    </DropdownMenu.Item>
  );
});

export const MenuGroup = DropdownMenu.Group;
MenuGroup.displayName = "MenuGroup";

export type MenuCheckboxItem = ComponentPropsWithoutRef<
  typeof DropdownMenu.CheckboxItem
> & { isUnstyled?: boolean };

export const MenuCheckboxItem = forwardRef<
  ElementRef<typeof DropdownMenu.CheckboxItem>,
  MenuCheckboxItem
>(function MenuCheckboxItem(
  { children, className, isUnstyled = false, ...props },
  forwardedRef,
) {
  const { size, isUnstyled: isParentUnstyled } = useMenuContext();
  const unstyle = isParentUnstyled || isUnstyled;

  return (
    <DropdownMenu.CheckboxItem
      {...props}
      className={
        unstyle
          ? className
          : classNames(
              contextMenuItemClasses({ size }),
              contextMenuRadioAndCheckboxItemClasses({ size }),
              className,
            )
      }
      ref={forwardedRef}
    >
      {children}
      <DropdownMenu.ItemIndicator
        className={contextMenuCheckboxItemIndicatorClasses({ size })}
      >
        <CheckIcon className="size-full stroke-[3]" />
      </DropdownMenu.ItemIndicator>
    </DropdownMenu.CheckboxItem>
  );
});

export const MenuRadioGroup = DropdownMenu.RadioGroup;
MenuRadioGroup.displayName = "MenuRadioGroup";

export type MenuRadioItem = ComponentPropsWithoutRef<
  typeof DropdownMenu.RadioItem
> & {
  isUnstyled?: boolean;
};

export const MenuRadioItem = forwardRef<
  ElementRef<typeof DropdownMenu.RadioItem>,
  MenuRadioItem
>(function MenuRadioItem(
  { children, className, isUnstyled = false, ...props },
  forwardedRef,
) {
  const { size, isUnstyled: isParentUnstyled } = useMenuContext();
  const unstyle = isParentUnstyled || isUnstyled;

  return (
    <DropdownMenu.RadioItem
      {...props}
      className={
        unstyle
          ? className
          : classNames(
              contextMenuItemClasses({ size }),
              contextMenuRadioAndCheckboxItemClasses({ size }),
              className,
            )
      }
      ref={forwardedRef}
    >
      {children}
      <DropdownMenu.ItemIndicator
        className={contextMenuRadioItemIndicatorClasses({ size })}
      >
        <div className="bg-secondary-600 dark:bg-secondary-200 size-full rounded-full" />
      </DropdownMenu.ItemIndicator>
    </DropdownMenu.RadioItem>
  );
});

export type MenuSub = ComponentPropsWithoutRef<typeof DropdownMenu.Sub>;

export function MenuSub({ children, ...props }: MenuSub) {
  return <DropdownMenu.Sub {...props}>{children}</DropdownMenu.Sub>;
}

export type MenuSubTrigger = ComponentPropsWithoutRef<
  typeof DropdownMenu.SubTrigger
> & {
  isUnstyled?: boolean;
};

export const MenuSubTrigger = forwardRef<
  ElementRef<typeof DropdownMenu.SubTrigger>,
  MenuSubTrigger
>(function MenuSubTrigger(
  { children, className, isUnstyled = false, ...props },
  forwardedRef,
) {
  const { size, isUnstyled: isParentUnstyled } = useMenuContext();
  const unstyle = isParentUnstyled || isUnstyled;

  return (
    <DropdownMenu.SubTrigger
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
      <ChevronRightIcon
        className={contextMenuSubTriggerIconClasses({ size })}
      />
    </DropdownMenu.SubTrigger>
  );
});

export type MenuSubContent = ComponentPropsWithoutRef<
  typeof DropdownMenu.SubContent
> & {
  isUnstyled?: boolean;
};

export const MenuSubContent = forwardRef<
  ElementRef<typeof DropdownMenu.SubContent>,
  MenuSubContent
>(function MenuSubContent(
  { children, className, isUnstyled = false, sideOffset = 10, ...props },
  forwardedRef,
) {
  const { isUnstyled: isParentUnstyled, size } = useMenuContext();
  const unstyle = isParentUnstyled || isUnstyled;

  return (
    <DropdownMenu.Portal>
      <DropdownMenu.SubContent
        {...props}
        className={
          unstyle
            ? className
            : classNames(contextMenuContentClasses({ size }), className)
        }
        sideOffset={sideOffset}
        ref={forwardedRef}
      >
        {children}
      </DropdownMenu.SubContent>
    </DropdownMenu.Portal>
  );
});

export type MenuSeparator = ComponentPropsWithoutRef<
  typeof DropdownMenu.Separator
> & {
  isUnstyled?: boolean;
};

export const MenuSeparator = forwardRef<
  ElementRef<typeof DropdownMenu.Separator>,
  MenuSeparator
>(function MenuSeparator(
  { className, isUnstyled = false, ...props },
  forwardedRef,
) {
  const { size, isUnstyled: isParentUnstyled } = useMenuContext();
  const unstyle = isParentUnstyled || isUnstyled;

  return (
    <DropdownMenu.Separator
      {...props}
      className={
        unstyle
          ? className
          : classNames(contextMenuSeperatorClasses({ size }), className)
      }
      ref={forwardedRef}
    />
  );
});

type MenuArrow = ComponentPropsWithoutRef<typeof DropdownMenu.Arrow> & {
  isUnstyled?: boolean;
};

function MenuArrow({ className, isUnstyled = false, ...props }: MenuArrow) {
  const { isUnstyled: isParentUnstyled } = useMenuContext();
  const unstyle = isParentUnstyled || isUnstyled;

  return (
    <DropdownMenu.Arrow
      {...props}
      className={
        unstyle
          ? className
          : classNames("dark:fill-secondary-800 fill-white", className)
      }
    />
  );
}
