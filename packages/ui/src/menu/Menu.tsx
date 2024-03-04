"use client";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import RaftyIcon from "@rafty/icons";
import { BooleanOrFunction, getValue } from "@rafty/shared";
import { cva } from "class-variance-authority";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { Button } from "../button";
import { classNames } from "../utils";
import { MenuContext, MenuProvider, useMenuContext } from "./context";

// Menu Component
export type Menu = ComponentPropsWithoutRef<typeof DropdownMenu.Root> &
  Partial<MenuContext>;

export const Menu = ({
  children,
  size = "md",
  isUnstyled = false,
  ...props
}: Menu) => (
  <MenuProvider value={{ size, isUnstyled }}>
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

export type MenuTrigger = ComponentPropsWithoutRef<
  typeof DropdownMenu.Trigger
> &
  Button;

export const MenuTrigger = forwardRef<
  ElementRef<typeof DropdownMenu.Trigger>,
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
    const { size: parentSize, isUnstyled: isParentUnstyled } = useMenuContext();
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
export type MenuContent = ComponentPropsWithoutRef<
  typeof DropdownMenu.Content
> & {
  isUnstyled?: boolean;
  isArrow?: BooleanOrFunction;
  arrowClassNames?: string;
};

export const MenuContent = forwardRef<
  ElementRef<typeof DropdownMenu.Content>,
  MenuContent
>(
  (
    {
      children,
      className,
      isArrow,
      isUnstyled = false,
      arrowClassNames,
      ...props
    },
    forwardedRef,
  ) => {
    const { isUnstyled: isParentUnstyled } = useMenuContext();
    const unstyle = isParentUnstyled || isUnstyled;
    const arrow = getValue(isArrow) ?? true;

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
          {arrow && <MenuArrow className={arrowClassNames} />}
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

export type MenuLabel = ComponentPropsWithoutRef<typeof DropdownMenu.Label> & {
  isUnstyled?: boolean;
};

export const MenuLabel = forwardRef<
  ElementRef<typeof DropdownMenu.Label>,
  MenuLabel
>(({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
  const { size, isUnstyled: isParentUnstyled } = useMenuContext();
  const unstyle = isParentUnstyled || isUnstyled;

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

export type MenuItem = ComponentPropsWithoutRef<typeof DropdownMenu.Item> & {
  isUnstyled?: boolean;
};

export const MenuItem = forwardRef<
  ElementRef<typeof DropdownMenu.Item>,
  MenuItem
>(({ className, children, isUnstyled = false, ...props }, forwardedRef) => {
  const { size, isUnstyled: isParentUnstyled } = useMenuContext();
  const unstyle = isParentUnstyled || isUnstyled;

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

export type MenuCheckboxItem = ComponentPropsWithoutRef<
  typeof DropdownMenu.CheckboxItem
> & { isUnstyled?: boolean };

export const MenuCheckboxItem = forwardRef<
  ElementRef<typeof DropdownMenu.CheckboxItem>,
  MenuCheckboxItem
>(({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
  const { size, isUnstyled: isParentUnstyled } = useMenuContext();
  const unstyle = isParentUnstyled || isUnstyled;

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
        <RaftyIcon type="check" className="size-3 stroke-[3]" />
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

export type MenuRadioItem = ComponentPropsWithoutRef<
  typeof DropdownMenu.RadioItem
> & {
  isUnstyled?: boolean;
};

export const MenuRadioItem = forwardRef<
  ElementRef<typeof DropdownMenu.RadioItem>,
  MenuRadioItem
>(({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
  const { size, isUnstyled: isParentUnstyled } = useMenuContext();
  const unstyle = isParentUnstyled || isUnstyled;

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
export type MenuSub = ComponentPropsWithoutRef<typeof DropdownMenu.Sub>;

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

export type MenuSubTrigger = ComponentPropsWithoutRef<
  typeof DropdownMenu.SubTrigger
> & {
  isUnstyled?: boolean;
};

export const MenuSubTrigger = forwardRef<
  ElementRef<typeof DropdownMenu.SubTrigger>,
  MenuSubTrigger
>(({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
  const { size, isUnstyled: isParentUnstyled } = useMenuContext();
  const unstyle = isParentUnstyled || isUnstyled;

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
      <RaftyIcon type="chevron-right" className="size-3 stroke-[3]" />
    </DropdownMenu.SubTrigger>
  );
});
MenuSubTrigger.displayName = "MenuSubTrigger";

// SubMenuContent Component
export type MenuSubContent = ComponentPropsWithoutRef<
  typeof DropdownMenu.SubContent
> & {
  isUnstyled?: boolean;
};

export const MenuSubContent = forwardRef<
  ElementRef<typeof DropdownMenu.SubContent>,
  MenuSubContent
>(
  (
    { children, className, isUnstyled = false, sideOffset = 10, ...props },
    forwardedRef,
  ) => {
    const { isUnstyled: isParentUnstyled } = useMenuContext();
    const unstyle = isParentUnstyled || isUnstyled;

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
                  "dark:bg-secondary-800 dark:text-secondary-200 text-secondary-900 flex min-w-[12rem] flex-col rounded-md bg-white p-1 text-[13px] focus:outline-none",
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

export type MenuSeparator = ComponentPropsWithoutRef<
  typeof DropdownMenu.Separator
> & {
  isUnstyled?: boolean;
};

export const MenuSeparator = forwardRef<
  ElementRef<typeof DropdownMenu.Separator>,
  MenuSeparator
>(({ className, isUnstyled = false, ...props }, forwardedRef) => {
  const { size, isUnstyled: isParentUnstyled } = useMenuContext();
  const unstyle = isParentUnstyled || isUnstyled;

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
type MenuArrow = ComponentPropsWithoutRef<typeof DropdownMenu.Arrow> & {
  isUnstyled?: boolean;
};

const MenuArrow = ({ className, isUnstyled = false, ...props }: MenuArrow) => {
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
};
MenuArrow.displayName = "MenuArrow";
