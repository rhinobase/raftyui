import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import React, { ComponentProps, forwardRef } from "react";
import { classNames } from "@rhinobase/utils";
import { Button } from "../index";
import { MenuProvider, MenuContext, useMenuContext } from "./context";
// Menu Component

type Root = ComponentProps<(typeof DropdownMenu)["Root"]> & MenuContext;
export const Root = forwardRef<HTMLDivElement, Root>(
  ({ children, menuSize = "base" }) => (
    <MenuProvider value={{ menuSize }}>
      <DropdownMenu.Root>{children}</DropdownMenu.Root>
    </MenuProvider>
  ),
);

// MenuButton Component
type Trigger = ComponentProps<(typeof DropdownMenu)["Trigger"]> & Button;
export const Trigger = forwardRef<HTMLButtonElement, Trigger>(
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
    forwardedRef,
  ) => {
    const { menuSize } = useMenuContext();
    return (
      <DropdownMenu.Trigger {...props} ref={forwardedRef} asChild>
        <Button
          variant={variant}
          size={menuSize || size}
          className={className}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          disabled={disabled}
          active={active}
          loading={loading}
        >
          {children}
        </Button>
      </DropdownMenu.Trigger>
    );
  },
);

//MenuContent Component
type Content = ComponentProps<(typeof DropdownMenu)["Content"]>;
export const Content = forwardRef<HTMLDivElement, Content>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          {...props}
          className={classNames(
            "shadow-[0px_3px_15px_0px_rgba(22,45,60,0.11)]",
            "data-[side=top]:animate-slide-up data-[side=bottom]:animate-slide-down",
            "p-1 dark:bg-secondary-800 dark:text-secondary-200 flex min-w-[220px] flex-col rounded-md bg-white text-sm text-gray-900 focus:outline-none",
            props.className,
          )}
          ref={forwardedRef}
        >
          {children}
          <Arrow />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    );
  },
);

// MenuGroup Component
type MenuGroup = {
  children?: React.ReactNode;
  title: string;
  className: string;
};
export const MenuGroup = ({ children, title, className }: MenuGroup) => {
  return (
    <>
      <Label className={className}>{title}</Label>
      {children}
    </>
  );
};

// MenuLabel Component
type Label = ComponentProps<(typeof DropdownMenu)["Label"]>;
export const Label = forwardRef<HTMLDivElement, Label>(
  ({ children, className, ...props }, forwardedRef) => {
    const { menuSize } = useMenuContext();
    return (
      <DropdownMenu.Label
        {...props}
        className={classNames(
          menuSize == "sm" && "text-[11px] py-1",
          menuSize == "base" && "text-xs py-1.5",
          menuSize == "lg" && "text-[13px] py-2",
          "px-2xl text-secondary-400 dark:text-secondary-400 select-none font-semibold uppercase tracking-wide",
          className,
        )}
        ref={forwardedRef}
      >
        {children}
      </DropdownMenu.Label>
    );
  },
);

// MenuItem Component
type Item = ComponentProps<(typeof DropdownMenu)["Item"]>;
export const Item = forwardRef<HTMLDivElement, Item>(
  ({ className, children, ...props }, forwardedRef) => {
    const { menuSize } = useMenuContext();
    return (
      <DropdownMenu.Item
        className={classNames(
          menuSize == "sm" && "text-xs",
          menuSize == "base" && "text-sm",
          menuSize == "lg" && "text-base",
          "rounded-base py-1.5 text-secondary-600 focus:bg-secondary-200/70 data-[disabled]:text-secondary-300 dark:text-secondary-200 dark:focus:bg-secondary-700/60 data-[disabled]:dark:text-secondary-500 pl-2xl pr-md flex w-full cursor-pointer items-center gap-2  font-medium focus:outline-none data-[disabled]:cursor-not-allowed data-[disabled]:hover:bg-transparent data-[disabled]:dark:hover:bg-transparent",
          className,
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}
      </DropdownMenu.Item>
    );
  },
);

// MenuCheckboxGroup Component
export const Group = DropdownMenu.Group;

// MenuCheckboxItem Component
type CheckboxItem = ComponentProps<(typeof DropdownMenu)["CheckboxItem"]>;
export const CheckboxItem = forwardRef<HTMLDivElement, CheckboxItem>(
  ({ children, ...props }, forwardedRef) => {
    const { menuSize } = useMenuContext();
    return (
      <DropdownMenu.CheckboxItem
        {...props}
        ref={forwardedRef}
        className={classNames(
          menuSize == "sm" && "text-xs",
          menuSize == "base" && "text-sm",
          menuSize == "lg" && "text-base",
          "rounded-base py-1.5 px-2xl text-secondary-600 hover:bg-secondary-200/50 focus:bg-secondary-200 dark:text-secondary-200 dark:hover:bg-secondary-700 dark:focus:bg-secondary-700/50 relative flex w-full cursor-pointer items-center gap-1 font-medium focus:outline-none",
        )}
      >
        {children}
        <DropdownMenu.ItemIndicator
          className={classNames(
            menuSize == "sm" && "top-2",
            menuSize == "base" && "top-2.5",
            menuSize == "lg" && "top-3",
            "absolute left-1",
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
  },
);

// MenuRadioGroup Component
export const RadioGroup = DropdownMenu.RadioGroup;

// MenuRadioItem Component
type RadioItem = ComponentProps<(typeof DropdownMenu)["RadioItem"]>;
export const RadioItem = forwardRef<HTMLDivElement, RadioItem>(
  ({ children, ...props }, forwardedRef) => {
    const { menuSize } = useMenuContext();
    return (
      <DropdownMenu.RadioItem
        {...props}
        ref={forwardedRef}
        className={classNames(
          menuSize == "sm" && "text-xs",
          menuSize == "base" && "text-sm",
          menuSize == "lg" && "text-base",
          "rounded-base py-1.5 px-2xl text-secondary-600 hover:bg-secondary-200/50 focus:bg-secondary-200 dark:text-secondary-200 dark:hover:bg-secondary-700 dark:focus:bg-secondary-700/50 relative flex w-full cursor-pointer items-center gap-1 font-medium focus:outline-none",
          props.className,
        )}
      >
        {children}
        <DropdownMenu.ItemIndicator
          className={classNames(
            menuSize == "sm" && "top-2",
            menuSize == "base" && "top-2.5",
            menuSize == "lg" && "top-3",
            "absolute left-1",
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
  },
);

// SubMenuComponent
type Sub = ComponentProps<(typeof DropdownMenu)["Sub"]>;
export const Sub = forwardRef<HTMLDivElement, Sub>(
  ({ children, ...props }, forwardedRef) => {
    return <DropdownMenu.Sub {...props}>{children}</DropdownMenu.Sub>;
  },
);

// SubMenuButton Component
type SubTrigger = ComponentProps<(typeof DropdownMenu)["SubTrigger"]>;
export const SubTrigger = forwardRef<HTMLDivElement, SubTrigger>(
  ({ children, className, ...props }, forwardedRef) => {
    const { menuSize } = useMenuContext();
    return (
      <DropdownMenu.SubTrigger
        {...props}
        ref={forwardedRef}
        className={classNames(
          menuSize == "sm" && "text-xs",
          menuSize == "base" && "text-sm",
          menuSize == "lg" && "text-base",
          "rounded-base py-1.5 pl-2xl pr-md text-secondary-600 focus:bg-secondary-200/70 data-[state=open]:bg-secondary-200/70 dark:text-secondary-200 dark:focus:bg-secondary-700/60 dark:data-[state=open]:bg-secondary-700/60 flex w-full cursor-pointer items-center justify-between gap-2 font-medium focus:outline-none",
          className,
        )}
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
  },
);

// SubMenuContent Component
type SubContent = ComponentProps<(typeof DropdownMenu)["SubContent"]>;
export const SubContent = forwardRef<HTMLDivElement, SubContent>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <DropdownMenu.Portal>
        <DropdownMenu.SubContent
          {...props}
          className={classNames(
            "shadow-[0px_3px_15px_0px_rgba(22,45,60,0.11)]",
            "data-[side=right]:animate-scale-in origin-top-left",
            "p-base dark:bg-secondary-800 dark:text-secondary-200 flex min-w-[220px] flex-col rounded-md bg-white text-[13px] text-gray-900 focus:outline-none",
            props.className,
          )}
          ref={forwardedRef}
          sideOffset={10}
        >
          {children}
        </DropdownMenu.SubContent>
      </DropdownMenu.Portal>
    );
  },
);

// MenuDivider Component
type Separator = ComponentProps<(typeof DropdownMenu)["Separator"]>;
export const Separator = forwardRef<HTMLDivElement, Separator>(
  ({ className, ...props }, forwardedRef) => {
    const { menuSize } = useMenuContext();
    return (
      <DropdownMenu.Separator
        {...props}
        ref={forwardedRef}
        className={classNames(
          menuSize == "sm" && "my-1",
          menuSize == "base" && "my-[5px]",
          menuSize == "lg" && "my-1.5",
          "bg-secondary-200 dark:bg-secondary-700 h-[1px] ",
          className,
        )}
      />
    );
  },
);

// MenuArrow Component
const Arrow = forwardRef<HTMLDivElement, DropdownMenu.DropdownMenuArrowProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <DropdownMenu.Arrow
        {...props}
        className="dark:fill-secondary-800 fill-white"
      ></DropdownMenu.Arrow>
    );
  },
);
