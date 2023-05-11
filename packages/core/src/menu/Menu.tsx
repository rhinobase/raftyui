import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ComponentProps, forwardRef } from "react";
import { Button } from "../button";
import { MenuProvider, MenuContext, useMenuContext } from "./context";
import { classNames } from "../utils";
import { cva } from "class-variance-authority";

// Menu Component
export type Menu = ComponentProps<(typeof DropdownMenu)["Root"]> &
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
export type MenuTrigger = ComponentProps<(typeof DropdownMenu)["Trigger"]> &
  Button;
export const MenuTrigger = forwardRef<HTMLButtonElement, MenuTrigger>(
  (
    {
      className,
      children,
      variant,
      size,
      leftIcon = undefined,
      rightIcon = undefined,
      isDisabled = false,
      isActive = false,
      isLoading = false,
      isUnstyled = false,
      ...props
    },
    forwardedRef
  ) => {
    const { size: menuSize, isBarebone } = useMenuContext();
    const unstyle = isBarebone || isUnstyled;

    return (
      <DropdownMenu.Trigger {...props} ref={forwardedRef} asChild>
        <Button
          variant={variant}
          size={menuSize || size}
          className={
            unstyle
              ? className
              : classNames(
                  "data-[state=open]:bg-secondary-200/80 dark:data-[state=open]:bg-secondary-500/60",
                  className
                )
          }
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          isDisabled={isDisabled}
          isActive={isActive}
          isLoading={isLoading}
          isUnstyled={unstyle}
        >
          {children}
        </Button>
      </DropdownMenu.Trigger>
    );
  }
);
MenuTrigger.displayName = "MenuTrigger";

//MenuContent Component
export type MenuContent = ComponentProps<(typeof DropdownMenu)["Content"]> & {
  isUnstyled?: boolean;
};
export const MenuContent = forwardRef<HTMLDivElement, MenuContent>(
  ({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
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
                  "dark:bg-secondary-800 dark:text-secondary-200 flex min-w-[220px] flex-col rounded-md bg-white p-1 text-sm text-gray-900 focus:outline-none",
                  className
                )
          }
          ref={forwardedRef}
        >
          {children}
          <MenuArrow />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    );
  }
);
MenuContent.displayName = "MenuContent";

// MenuLabel Component
const menuLabelClasses = cva(
  "px-lg text-secondary-400 dark:text-secondary-400 select-none font-semibold uppercase tracking-wide",
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
export type MenuLabel = ComponentProps<(typeof DropdownMenu)["Label"]> & {
  isUnstyled?: boolean;
};
export const MenuLabel = forwardRef<HTMLDivElement, MenuLabel>(
  ({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
    const { size, isBarebone } = useMenuContext();
    const unstyle = isBarebone || isUnstyled;

    return (
      <DropdownMenu.Label
        {...props}
        className={
          unstyle
            ? className
            : classNames(menuLabelClasses({ size }), className)
        }
        ref={forwardedRef}
      >
        {children}
      </DropdownMenu.Label>
    );
  }
);
MenuLabel.displayName = "MenuLabel";

// MenuItem Component
const menuItemClasses = cva(
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
export type MenuItem = ComponentProps<(typeof DropdownMenu)["Item"]> & {
  isUnstyled?: boolean;
};
export const MenuItem = forwardRef<HTMLDivElement, MenuItem>(
  ({ className, children, isUnstyled = false, ...props }, forwardedRef) => {
    const { size, isBarebone } = useMenuContext();
    const unstyle = isBarebone || isUnstyled;

    return (
      <DropdownMenu.Item
        className={
          unstyle ? className : classNames(menuItemClasses({ size }), className)
        }
        {...props}
        ref={forwardedRef}
      >
        {children}
      </DropdownMenu.Item>
    );
  }
);
MenuItem.displayName = "MenuItem";

// MenuCheckboxGroup Component
export const MenuGroup = DropdownMenu.Group;

// MenuCheckboxItem Component
const menuCheckboxItemClasses = cva(
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
export type MenuCheckboxItem = ComponentProps<
  (typeof DropdownMenu)["CheckboxItem"]
> & { isUnstyled?: boolean };
export const MenuCheckboxItem = forwardRef<HTMLDivElement, MenuCheckboxItem>(
  ({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
    const { size, isBarebone } = useMenuContext();
    const unstyle = isBarebone || isUnstyled;

    return (
      <DropdownMenu.CheckboxItem
        {...props}
        ref={forwardedRef}
        className={
          unstyle
            ? className
            : classNames(menuCheckboxItemClasses({ size }), className)
        }
      >
        {children}
        <DropdownMenu.ItemIndicator
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
        </DropdownMenu.ItemIndicator>
      </DropdownMenu.CheckboxItem>
    );
  }
);
MenuCheckboxItem.displayName = "MenuCheckboxItem";

// MenuRadioGroup Component
export const MenuRadioGroup = DropdownMenu.RadioGroup;

// MenuRadioItem Component
const menuRadioItemClasses = cva(
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
export type MenuRadioItem = ComponentProps<
  (typeof DropdownMenu)["RadioItem"]
> & {
  isUnstyled?: boolean;
};
export const MenuRadioItem = forwardRef<HTMLDivElement, MenuRadioItem>(
  ({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
    const { size, isBarebone } = useMenuContext();
    const unstyle = isBarebone || isUnstyled;

    return (
      <DropdownMenu.RadioItem
        {...props}
        ref={forwardedRef}
        className={
          unstyle
            ? className
            : classNames(menuRadioItemClasses({ size }), className)
        }
      >
        {children}
        <DropdownMenu.ItemIndicator
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
        </DropdownMenu.ItemIndicator>
      </DropdownMenu.RadioItem>
    );
  }
);
MenuRadioItem.displayName = "MenuRadioItem";

// SubMenuComponent
export type MenuSub = ComponentProps<(typeof DropdownMenu)["Sub"]>;
export const MenuSub = ({ children, ...props }: MenuSub) => {
  return <DropdownMenu.Sub {...props}>{children}</DropdownMenu.Sub>;
};
MenuSub.displayName = "MenuSub";

// SubMenuButton Component
const menuSubTriggerClasses = cva(
  "rounded-base text-secondary-600 focus:bg-secondary-200/70 data-[state=open]:bg-secondary-200/70 dark:text-secondary-200 dark:focus:bg-secondary-700/60 dark:data-[state=open]:bg-secondary-700/60 flex w-full cursor-pointer items-center justify-between gap-2 py-1.5 pl-5 pr-2 font-semibold focus:outline-none",
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
export type MenuSubTrigger = ComponentProps<
  (typeof DropdownMenu)["SubTrigger"]
> & {
  isUnstyled?: boolean;
};
export const MenuSubTrigger = forwardRef<HTMLDivElement, MenuSubTrigger>(
  ({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
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
        <span>
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
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
      </DropdownMenu.SubTrigger>
    );
  }
);
MenuSubTrigger.displayName = "MenuSubTrigger";

// SubMenuContent Component
export type MenuSubContent = ComponentProps<
  (typeof DropdownMenu)["SubContent"]
> & {
  isUnstyled?: boolean;
};
export const MenuSubContent = forwardRef<HTMLDivElement, MenuSubContent>(
  ({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
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
                  "dark:bg-secondary-800 dark:text-secondary-200 flex min-w-[220px] flex-col rounded-md bg-white p-1 text-[13px] text-gray-900 focus:outline-none",
                  className
                )
          }
          ref={forwardedRef}
          sideOffset={10}
        >
          {children}
        </DropdownMenu.SubContent>
      </DropdownMenu.Portal>
    );
  }
);
MenuSubContent.displayName = "MenuSubContent";

// MenuDivider Component
const menuSeparatorClasses = cva(
  "bg-secondary-200 dark:bg-secondary-700 h-[1px]",
  {
    variants: {
      size: {
        sm: "my-1",
        md: "my-[5px]",
        lg: "my-1.5",
      },
    },
  }
);
export type MenuSeparator = ComponentProps<
  (typeof DropdownMenu)["Separator"]
> & {
  isUnstyled?: boolean;
};
export const MenuSeparator = forwardRef<HTMLDivElement, MenuSeparator>(
  ({ className, isUnstyled = false, ...props }, forwardedRef) => {
    const { size, isBarebone } = useMenuContext();
    const unstyle = isBarebone || isUnstyled;

    return (
      <DropdownMenu.Separator
        {...props}
        ref={forwardedRef}
        className={
          unstyle
            ? className
            : classNames(menuSeparatorClasses({ size }), className)
        }
      />
    );
  }
);
MenuSeparator.displayName = "MenuSeparator";

// MenuArrow Component
type MenuArrow = ComponentProps<(typeof DropdownMenu)["Arrow"]> & {
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
