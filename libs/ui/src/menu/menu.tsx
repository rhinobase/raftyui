"use client";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Button } from "../button";
import { MenuProvider, MenuContext, useMenuContext } from "./context";
import { classNames } from "../utils";
import { CheckIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import React from "react";
import { cva } from "class-variance-authority";

// Menu Component
export type Menu = React.ComponentPropsWithoutRef<typeof DropdownMenu.Root> &
  Partial<MenuContext>;

export const Menu = ({
  children,
  size = "md",
  isBarebone = false,
  ...props
}: Menu) => (
  <MenuProvider value={{ size, isBarebone }}>
    <DropdownMenu.Root {...props}>{children}</DropdownMenu.Root>
  </MenuProvider>
);
Menu.displayName = "Menu";

// MenuButton Component
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
  },
  compoundVariants: [
    {
      colorScheme: "primary",
      variant: "solid",
      className:
        "data-[state=open]:bg-primary-600 dark:data-[state=open]:bg-primary-400/80",
    },
    {
      colorScheme: "secondary",
      variant: "solid",
      className:
        "data-[state=open]:bg-secondary-300 dark:data-[state=open]:bg-secondary-400/80",
    },
    {
      colorScheme: "error",
      variant: "solid",
      className:
        "data-[state=open]:bg-error-600/90 dark:data-[state=open]:bg-error-400/80",
    },
    {
      colorScheme: "success",
      variant: "solid",
      className:
        "data-[state=open]:bg-success-600/90 dark:data-[state=open]:bg-success-400/80",
    },

    {
      colorScheme: "primary",
      variant: "outline",
      className:
        "data-[state=open]:bg-primary-200/70 dark:data-[state=open]:bg-primary-400/20",
    },
    {
      colorScheme: "secondary",
      variant: "outline",
      className:
        "data-[state=open]:bg-secondary-200/80 dark:data-[state=open]:bg-secondary-700/80",
    },
    {
      colorScheme: "error",
      variant: "outline",
      className:
        "data-[state=open]:bg-error-200/60 dark:data-[state=open]:bg-error-300/30",
    },
    {
      colorScheme: "success",
      variant: "outline",
      className:
        "data-[state=open]:bg-success-200/60 dark:data-[state=open]:bg-success-300/30",
    },
    {
      colorScheme: "primary",
      variant: "ghost",
      className:
        "data-[state=open]:bg-primary-200/70 dark:data-[state=open]:bg-primary-400/20",
    },
    {
      colorScheme: "secondary",
      variant: "ghost",
      className:
        "data-[state=open]:bg-secondary-200/80 dark:data-[state=open]:bg-secondary-700/80",
    },
    {
      colorScheme: "error",
      variant: "ghost",
      className:
        "data-[state=open]:bg-error-200/60 dark:data-[state=open]:bg-error-300/30",
    },
    {
      colorScheme: "success",
      variant: "ghost",
      className:
        "data-[state=open]:bg-success-200/60 dark:data-[state=open]:bg-success-300/30",
    },
  ],
});

export type MenuTrigger = React.ComponentPropsWithoutRef<
  typeof DropdownMenu.Trigger
> &
  Button;

export const MenuTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenu.Trigger>,
  MenuTrigger
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
    const { size: menuSize, isBarebone } = useMenuContext();
    const unstyle = isBarebone || isUnstyled;
    const triggerSize = size || menuSize;
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
      </DropdownMenu.Trigger>
    );
  },
);
MenuTrigger.displayName = "MenuTrigger";

//MenuContent Component
export type MenuContent = React.ComponentPropsWithoutRef<
  typeof DropdownMenu.Content
> & {
  isUnstyled?: boolean;
  isArrow?: boolean;
  arrowClassNames?: string;
};

export const MenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenu.Content>,
  MenuContent
>(
  (
    {
      children,
      className,
      isArrow = true,
      isUnstyled = false,
      arrowClassNames,
      ...props
    },
    forwardedRef,
  ) => {
    const { isBarebone } = useMenuContext();
    const unstyle = isBarebone || isUnstyled;

    return (
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          {...props}
          className={
            unstyle
              ? className
              : classNames(
                  "shadow-[0px_3px_15px_0px_rgba(22,45,60,0.11)]",
                  "data-[side=top]:animate-slide-up data-[side=bottom]:animate-slide-down",
                  "dark:bg-secondary-800 dark:text-secondary-200 text-secondary-900 flex min-w-[12rem] flex-col rounded-md bg-white p-1 text-sm focus:outline-none",
                  className,
                )
          }
          ref={forwardedRef}
        >
          {children}
          {isArrow && <MenuArrow className={arrowClassNames} />}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    );
  },
);
MenuContent.displayName = "MenuContent";

// MenuLabel Component
export const menuLabelClasses = cva(
  "text-secondary-400 dark:text-secondary-400 select-none font-semibold uppercase tracking-wide",
  {
    variants: {
      size: {
        sm: "px-1.5 text-[10px]",
        md: "px-2 text-[11px]",
        lg: "px-2.5 text-xs",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export type MenuLabel = React.ComponentPropsWithoutRef<
  typeof DropdownMenu.Label
> & {
  isUnstyled?: boolean;
};

export const MenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenu.Label>,
  MenuLabel
>(({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
  const { size, isBarebone } = useMenuContext();
  const unstyle = isBarebone || isUnstyled;

  return (
    <DropdownMenu.Label
      {...props}
      className={
        unstyle ? className : classNames(menuLabelClasses({ size }), className)
      }
      ref={forwardedRef}
    >
      {children}
    </DropdownMenu.Label>
  );
});
MenuLabel.displayName = "MenuLabel";

// MenuItem Component
export const menuItemClasses = cva(
  "rounded-base text-secondary-600 focus:bg-secondary-200/70 data-[disabled]:text-secondary-300 dark:text-secondary-200 dark:focus:bg-secondary-700/60 data-[disabled]:dark:text-secondary-500 flex w-full cursor-pointer items-center gap-2 font-medium focus:outline-none data-[disabled]:cursor-not-allowed data-[disabled]:hover:bg-transparent data-[disabled]:dark:hover:bg-transparent",
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

export type MenuItem = React.ComponentPropsWithoutRef<
  typeof DropdownMenu.Item
> & {
  isUnstyled?: boolean;
};

export const MenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenu.Item>,
  MenuItem
>(({ className, children, isUnstyled = false, ...props }, forwardedRef) => {
  const { size, isBarebone } = useMenuContext();
  const unstyle = isBarebone || isUnstyled;

  return (
    <DropdownMenu.Item
      {...props}
      className={
        unstyle ? className : classNames(menuItemClasses({ size }), className)
      }
      ref={forwardedRef}
    >
      {children}
    </DropdownMenu.Item>
  );
});
MenuItem.displayName = "MenuItem";

// MenuCheckboxGroup Component
export const MenuGroup = DropdownMenu.Group;
MenuGroup.displayName = "MenuGroup";

// MenuCheckboxItem Component
export const menuCheckboxItemClasses = cva(
  "rounded-base text-secondary-600 hover:bg-secondary-200/50 focus:bg-secondary-200 dark:text-secondary-200 dark:hover:bg-secondary-700 dark:focus:bg-secondary-700/50 relative flex w-full cursor-pointer items-center gap-1 font-medium focus:outline-none",
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

export const menuCheckboxItemIndicatorClasses = cva("absolute", {
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

export type MenuCheckboxItem = React.ComponentPropsWithoutRef<
  typeof DropdownMenu.CheckboxItem
> & { isUnstyled?: boolean };

export const MenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenu.CheckboxItem>,
  MenuCheckboxItem
>(({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
  const { size, isBarebone } = useMenuContext();
  const unstyle = isBarebone || isUnstyled;

  return (
    <DropdownMenu.CheckboxItem
      {...props}
      className={
        unstyle
          ? className
          : classNames(menuCheckboxItemClasses({ size }), className)
      }
      ref={forwardedRef}
    >
      {children}
      <DropdownMenu.ItemIndicator
        className={menuCheckboxItemIndicatorClasses({ size })}
      >
        <CheckIcon className="h-3 w-3 stroke-[3]" />
      </DropdownMenu.ItemIndicator>
    </DropdownMenu.CheckboxItem>
  );
});
MenuCheckboxItem.displayName = "MenuCheckboxItem";

// MenuRadioGroup Component
export const MenuRadioGroup = DropdownMenu.RadioGroup;
MenuRadioGroup.displayName = "MenuRadioGroup";

// MenuRadioItem Component
export const menuRadioItemClasses = cva(
  "rounded-base text-secondary-600 hover:bg-secondary-200/50 focus:bg-secondary-200 dark:text-secondary-200 dark:hover:bg-secondary-700 dark:focus:bg-secondary-700/50 relative flex w-full cursor-pointer items-center gap-1 font-medium focus:outline-none",
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

export const menuRadioItemIndicatorClasses = cva("absolute", {
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

export const menuRadioItemIndicatorChildClasses = cva(
  "bg-secondary-600 dark:bg-secondary-200 rounded-full",
  {
    variants: {
      size: {
        sm: "h-1.5 w-1.5",
        md: "h-2 w-2",
        lg: "h-2 w-2",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export type MenuRadioItem = React.ComponentPropsWithoutRef<
  typeof DropdownMenu.RadioItem
> & {
  isUnstyled?: boolean;
};

export const MenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenu.RadioItem>,
  MenuRadioItem
>(({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
  const { size, isBarebone } = useMenuContext();
  const unstyle = isBarebone || isUnstyled;

  return (
    <DropdownMenu.RadioItem
      {...props}
      className={
        unstyle
          ? className
          : classNames(menuRadioItemClasses({ size }), className)
      }
      ref={forwardedRef}
    >
      {children}
      <DropdownMenu.ItemIndicator
        className={menuRadioItemIndicatorClasses({ size })}
      >
        <div className={menuRadioItemIndicatorChildClasses({ size })} />
      </DropdownMenu.ItemIndicator>
    </DropdownMenu.RadioItem>
  );
});
MenuRadioItem.displayName = "MenuRadioItem";

// SubMenuComponent
export type MenuSub = React.ComponentPropsWithoutRef<typeof DropdownMenu.Sub>;

export const MenuSub = ({ children, ...props }: MenuSub) => (
  <DropdownMenu.Sub {...props}>{children}</DropdownMenu.Sub>
);
MenuSub.displayName = "MenuSub";

// SubMenuButton Component
export const menuSubTriggerClasses = cva(
  "rounded-base text-secondary-600 focus:bg-secondary-200/70 data-[state=open]:bg-secondary-200/70 dark:text-secondary-200 dark:focus:bg-secondary-700/60 dark:data-[state=open]:bg-secondary-700/60 flex w-full cursor-pointer items-center justify-between gap-2 font-medium focus:outline-none",
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

export type MenuSubTrigger = React.ComponentPropsWithoutRef<
  typeof DropdownMenu.SubTrigger
> & {
  isUnstyled?: boolean;
};

export const MenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenu.SubTrigger>,
  MenuSubTrigger
>(({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
  const { size, isBarebone } = useMenuContext();
  const unstyle = isBarebone || isUnstyled;

  return (
    <DropdownMenu.SubTrigger
      {...props}
      ref={forwardedRef}
      className={
        unstyle
          ? className
          : classNames(menuSubTriggerClasses({ size }), className)
      }
    >
      {children}
      <ChevronRightIcon className="h-3 w-3 stroke-[3]" />
    </DropdownMenu.SubTrigger>
  );
});
MenuSubTrigger.displayName = "MenuSubTrigger";

// SubMenuContent Component
export type MenuSubContent = React.ComponentPropsWithoutRef<
  typeof DropdownMenu.SubContent
> & {
  isUnstyled?: boolean;
};

export const MenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenu.SubContent>,
  MenuSubContent
>(
  (
    { children, className, isUnstyled = false, sideOffset = 10, ...props },
    forwardedRef,
  ) => {
    const { isBarebone } = useMenuContext();
    const unstyle = isBarebone || isUnstyled;

    return (
      <DropdownMenu.Portal>
        <DropdownMenu.SubContent
          {...props}
          className={
            unstyle
              ? className
              : classNames(
                  "shadow-[0px_3px_15px_0px_rgba(22,45,60,0.11)]",
                  "data-[side=right]:animate-scale-in origin-top-left",
                  "dark:bg-secondary-800 dark:text-secondary-200 flex min-w-[12rem] flex-col rounded-md bg-white p-1 text-[13px] text-secondary-900 focus:outline-none",
                  className,
                )
          }
          sideOffset={sideOffset}
          ref={forwardedRef}
        >
          {children}
        </DropdownMenu.SubContent>
      </DropdownMenu.Portal>
    );
  },
);
MenuSubContent.displayName = "MenuSubContent";

// MenuDivider Component
export const menuSeparatorClasses = cva(
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

export type MenuSeparator = React.ComponentPropsWithoutRef<
  typeof DropdownMenu.Separator
> & {
  isUnstyled?: boolean;
};

export const MenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenu.Separator>,
  MenuSeparator
>(({ className, isUnstyled = false, ...props }, forwardedRef) => {
  const { size, isBarebone } = useMenuContext();
  const unstyle = isBarebone || isUnstyled;

  return (
    <DropdownMenu.Separator
      {...props}
      className={
        unstyle
          ? className
          : classNames(menuSeparatorClasses({ size }), className)
      }
      ref={forwardedRef}
    />
  );
});
MenuSeparator.displayName = "MenuSeparator";

// MenuArrow Component
type MenuArrow = React.ComponentPropsWithoutRef<typeof DropdownMenu.Arrow> & {
  isUnstyled?: boolean;
};

const MenuArrow = ({ className, isUnstyled = false, ...props }: MenuArrow) => {
  const { isBarebone } = useMenuContext();
  const unstyle = isBarebone || isUnstyled;

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
};
MenuArrow.displayName = "MenuArrow";
