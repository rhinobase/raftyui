import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import React, { ComponentProps, forwardRef } from "react";
import { HiChevronRight, HiOutlineCheck } from "react-icons/hi2";
import { VscCircleFilled } from "react-icons/vsc";
import { classNames } from "@rhinobase/lib";
import { Button, ButtonProps } from "@rhinobase/ui";

// Menu Component
export const Menu = DropdownMenu.Root;

// MenuButton Component
type MenuButtonProps = ComponentProps<typeof DropdownMenu["Trigger"]> & ButtonProps;
export const MenuButton = forwardRef<HTMLButtonElement, MenuButtonProps>(
  (
    {
      className,
      children,
      variant,
      size,
      leftIcon = undefined,
      rightIcon = undefined,
      disabled = undefined,
      active = undefined,
      loading = undefined,
      ...props
    },
    forwardedRef
  ) => (
    <DropdownMenu.Trigger {...props} ref={forwardedRef} asChild>
      <Button
        variant={variant}
        size={size}
        className={className}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        disabled={disabled}
        active={active}
        loading={loading}>
        {children}
      </Button>
    </DropdownMenu.Trigger>
  )
);

//MenuContent Component
type MenuContentProps = ComponentProps<typeof DropdownMenu["Content"]>;
export const MenuContent = forwardRef<HTMLDivElement, MenuContentProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          {...props}
          className={classNames(
            "shadow-[0px_3px_15px_0px_rgba(22,45,60,0.11)]",
            "data-[side=top]:animate-slide-up data-[side=bottom]:animate-slide-down",
            "p-base dark:bg-secondary-800 dark:text-secondary-200 flex flex-col gap-1 rounded-md bg-white text-sm text-gray-900 focus:outline-none",
            props.className
          )}
          ref={forwardedRef}>
          {children}
          <MenuArrow />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    );
  }
);

// MenuGroup Component
type MenuGroupProps = { children?: React.ReactNode; title: string };
export const MenuGroup = ({ children, title }: MenuGroupProps) => {
  return (
    <>
      <MenuLabel>{title}</MenuLabel>
      {children}
    </>
  );
};

// MenuLabel Component
type MenuLabelProps = ComponentProps<typeof DropdownMenu["Label"]>;
export const MenuLabel = forwardRef<HTMLDivElement, MenuLabelProps>(
  ({ children, ...props }, forwardedRef) => (
    <DropdownMenu.Label
      {...props}
      className="px-lg pt-base text-secondary-400 dark:text-secondary-400 select-none text-[11px] font-semibold uppercase tracking-wider"
      ref={forwardedRef}>
      {children}
    </DropdownMenu.Label>
  )
);

// MenuItem Component
type MenuItemProps = ComponentProps<typeof DropdownMenu["Item"]>;
export const MenuItem = forwardRef<HTMLDivElement, MenuItemProps>(
  ({ className, children, ...props }, forwardedRef) => (
    <DropdownMenu.Item
      className={classNames(
        "rounded-base text-secondary-600 focus:bg-secondary-200/70 data-[disabled]:text-secondary-300 dark:text-secondary-200 dark:focus:bg-secondary-700/60 data-[disabled]:dark:text-secondary-500 py-base px-2xl flex w-full cursor-pointer items-center gap-2 text-[13px] font-medium focus:outline-none data-[disabled]:cursor-not-allowed data-[disabled]:hover:bg-transparent data-[disabled]:dark:hover:bg-transparent",
        className
      )}
      {...props}
      ref={forwardedRef}>
      {children}
    </DropdownMenu.Item>
  )
);

// MenuCheckboxGroup Component
export const MenuCheckboxGroup = DropdownMenu.Group;

// MenuCheckboxItem Component
type CheckboxItemProps = ComponentProps<typeof DropdownMenu["CheckboxItem"]>;
export const MenuCheckboxItem = forwardRef<HTMLDivElement, CheckboxItemProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <DropdownMenu.CheckboxItem
        {...props}
        ref={forwardedRef}
        className="rounded-base px-2xl py-base text-secondary-600 hover:bg-secondary-200/50 focus:bg-secondary-200 dark:text-secondary-200 dark:hover:bg-secondary-700 dark:focus:bg-secondary-700/50 relative flex w-full cursor-pointer items-center gap-1 text-[13px] font-medium focus:outline-none">
        {children}
        <DropdownMenu.ItemIndicator className="absolute left-1">
          <HiOutlineCheck className="h-3 w-3 stroke-2" />
        </DropdownMenu.ItemIndicator>
      </DropdownMenu.CheckboxItem>
    );
  }
);

// MenuRadioGroup Component
export const MenuRadioGroup = DropdownMenu.RadioGroup;

// MenuRadioItem Component
type MenuRadioItemProps = ComponentProps<typeof DropdownMenu["RadioItem"]>;
export const MenuRadioItem = forwardRef<HTMLDivElement, MenuRadioItemProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <DropdownMenu.RadioItem
        {...props}
        ref={forwardedRef}
        className="rounded-base py-base px-2xl text-secondary-600 hover:bg-secondary-200/50 focus:bg-secondary-200 dark:text-secondary-200 dark:hover:bg-secondary-700 dark:focus:bg-secondary-700/50 relative flex w-full cursor-pointer items-center gap-1 text-[13px] font-medium focus:outline-none">
        {children}
        <DropdownMenu.ItemIndicator className="absolute left-1">
          <VscCircleFilled className="h-3 w-3" />
        </DropdownMenu.ItemIndicator>
      </DropdownMenu.RadioItem>
    );
  }
);

// SubMenuComponent
type SubMenuProps = ComponentProps<typeof DropdownMenu["Sub"]>;
export const SubMenu = forwardRef<HTMLDivElement, SubMenuProps>(({ children, ...props }, forwardedRef) => {
  return <DropdownMenu.Sub {...props}>{children}</DropdownMenu.Sub>;
});

// SubMenuButton Component
type SubMenuButtonProps = ComponentProps<typeof DropdownMenu["SubTrigger"]>;
export const SubMenuButton = forwardRef<HTMLDivElement, SubMenuButtonProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <DropdownMenu.SubTrigger
        {...props}
        ref={forwardedRef}
        className={classNames(
          "rounded-base py-base px-2xl text-secondary-600 focus:bg-secondary-200/70 data-[state=open]:bg-secondary-200/70 dark:text-secondary-200 dark:focus:bg-secondary-700/60 dark:data-[state=open]:bg-secondary-700/60 flex w-full cursor-pointer items-center justify-between gap-2 text-[13px] font-medium focus:outline-none",
          className
        )}>
        {children}
        <span>
          <HiChevronRight className="stroke-1" />
        </span>
      </DropdownMenu.SubTrigger>
    );
  }
);

// SubMenuContent Component
type SubMenuContentProps = ComponentProps<typeof DropdownMenu["SubContent"]>;
export const SubMenuContent = forwardRef<HTMLDivElement, SubMenuContentProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <DropdownMenu.Portal>
        <DropdownMenu.SubContent
          {...props}
          className={classNames(
            "shadow-[0px_3px_15px_0px_rgba(22,45,60,0.11)]",
            "data-[side=right]:animate-scale-in origin-top-left",
            "p-base dark:bg-secondary-800 dark:text-secondary-200 flex flex-col gap-1 rounded-md bg-white text-[13px] text-gray-900 focus:outline-none",
            props.className
          )}
          ref={forwardedRef}
          sideOffset={10}>
          {children}
        </DropdownMenu.SubContent>
      </DropdownMenu.Portal>
    );
  }
);

// MenuDivider Component
type MenuDividerProps = ComponentProps<typeof DropdownMenu["Separator"]>;
export const MenuDivider = forwardRef<HTMLDivElement, MenuDividerProps>(
  ({ className, ...props }, forwardedRef) => {
    return (
      <DropdownMenu.Separator
        {...props}
        ref={forwardedRef}
        className={classNames("bg-secondary-200 dark:bg-secondary-700 h-[1px]", className)}
      />
    );
  }
);

// MenuArrow Component
const MenuArrow = forwardRef<HTMLDivElement, DropdownMenu.DropdownMenuArrowProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <DropdownMenu.Arrow {...props} className="dark:fill-secondary-800 fill-white"></DropdownMenu.Arrow>
    );
  }
);

export default Menu;
