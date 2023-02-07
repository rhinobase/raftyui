import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { ComponentProps, forwardRef } from "react";
import { HiChevronRight, HiOutlineCheck } from "react-icons/hi2";
import { VscCircleFilled } from "react-icons/vsc";
import { classNames } from "@rhinobase/lib";

//MenuBar Component
type MenuBarProps = ComponentProps<typeof MenubarPrimitive["Root"]>;
export const MenuBar = forwardRef<HTMLDivElement, MenuBarProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <MenubarPrimitive.Root className={classNames("flex w-full", className)} {...props} ref={forwardedRef}>
        {children}
      </MenubarPrimitive.Root>
    );
  }
);

//MenuBar Menu Component
type MenuBarMenuProps = ComponentProps<typeof MenubarPrimitive["Menu"]>;
export const MenuBarMenu = forwardRef<HTMLDivElement, MenuBarMenuProps>(({ children, ...props }) => {
  return <MenubarPrimitive.Menu {...props}>{children}</MenubarPrimitive.Menu>;
});

//MenuBar Button Component
type MenuBarButtonProps = ComponentProps<typeof MenubarPrimitive["MenubarTrigger"]>;
export const MenuBarButton = forwardRef<HTMLButtonElement, MenuBarButtonProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <MenubarPrimitive.Trigger
        className={classNames(
          "py-base px-lg hover:bg-secondary-200 data-[highlighted]:bg-secondary-200 data-[state=open]:bg-secondary-200 dark:text-secondary-100 dark:hover:bg-secondary-800 dark:data-[highlighted]:bg-secondary-800 dark:data-[state=open]:bg-secondary-800 flex select-none items-center justify-between gap-2 rounded-md text-sm font-medium outline-none",
          className
        )}
        {...props}
        ref={forwardedRef}>
        {children}
      </MenubarPrimitive.Trigger>
    );
  }
);

//MenuBarContent Component

type MenuBarContentProps = ComponentProps<typeof MenubarPrimitive["Content"]>;
export const MenuBarContent = forwardRef<HTMLDivElement, MenuBarContentProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <MenubarPrimitive.Portal>
        <MenubarPrimitive.Content
          className={classNames(
            "p-base dark:bg-secondary-800 min-w-[220px] rounded-md bg-white shadow-[0px_10px_38px_0px_rgba(22,23,24,0.05),0px_-5px_38px_0px_rgba(22,23,24,0.05)]",
            className
          )}
          {...props}
          sideOffset={5}
          ref={forwardedRef}>
          {children}
        </MenubarPrimitive.Content>
      </MenubarPrimitive.Portal>
    );
  }
);

// MenuGroup Component
type MenuBarGroupProps = { children?: React.ReactNode; title: string };
export const MenuBarGroup = ({ children, title }: MenuBarGroupProps) => {
  return (
    <>
      <MenuBarLabel>{title}</MenuBarLabel>
      {children}
    </>
  );
};

//MenuBar Label Component
type MenuBarLabelProps = ComponentProps<typeof MenubarPrimitive["Label"]>;
export const MenuBarLabel = forwardRef<HTMLDivElement, MenuBarLabelProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <MenubarPrimitive.Label
        className={classNames(
          "px-lg py-base text-secondary-400 dark:text-secondary-400 select-none text-[11px] font-semibold uppercase tracking-wider",
          className
        )}
        {...props}
        ref={forwardedRef}>
        {children}
      </MenubarPrimitive.Label>
    );
  }
);

//MenuBar Item Component
type MenuBarItemProps = ComponentProps<typeof MenubarPrimitive["Item"]>;
export const MenuBarItem = forwardRef<HTMLDivElement, MenuBarItemProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <MenubarPrimitive.Item
        className={classNames(
          "rounded-base py-base px-2xl text-secondary-600 focus:bg-secondary-200/70 data-[disabled]:text-secondary-300 dark:text-secondary-200 dark:focus:bg-secondary-700/60 data-[disabled]:dark:text-secondary-500 flex w-full cursor-pointer items-center gap-2 text-[13px] font-medium focus:outline-none data-[disabled]:cursor-not-allowed data-[disabled]:hover:bg-transparent data-[disabled]:dark:hover:bg-transparent",
          className
        )}
        {...props}
        ref={forwardedRef}>
        {children}
      </MenubarPrimitive.Item>
    );
  }
);

//MenuBar ChechboxGroup Component
export const MenuBarCheckboxGroup = MenubarPrimitive.Group;

type MenuBarCheckboxItemProps = ComponentProps<typeof MenubarPrimitive["CheckboxItem"]>;
export const MenuBarCheckboxItem = forwardRef<HTMLDivElement, MenuBarCheckboxItemProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <MenubarPrimitive.CheckboxItem
        {...props}
        ref={forwardedRef}
        className="rounded-base py-base px-2xl text-secondary-600 focus:bg-secondary-200/70 data-[disabled]:text-secondary-300 dark:text-secondary-200 dark:focus:bg-secondary-700/60 data-[disabled]:dark:text-secondary-500 relative flex w-full cursor-pointer items-center gap-2 text-[13px] font-medium focus:outline-none data-[disabled]:cursor-not-allowed data-[disabled]:hover:bg-transparent data-[disabled]:dark:hover:bg-transparent">
        {children}
        <MenubarPrimitive.ItemIndicator className="absolute left-1">
          <HiOutlineCheck className="h-3 w-3 stroke-2" />
        </MenubarPrimitive.ItemIndicator>
      </MenubarPrimitive.CheckboxItem>
    );
  }
);

//MenuBar RadioGroup Component
export const MenuBarRadioGroup = MenubarPrimitive.RadioGroup;

type MenuBarRadioItemProps = ComponentProps<typeof MenubarPrimitive["RadioItem"]>;
export const MenuBarRadioItem = forwardRef<HTMLDivElement, MenuBarRadioItemProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <MenubarPrimitive.RadioItem
        {...props}
        ref={forwardedRef}
        className="rounded-base py-base px-2xl text-secondary-600 focus:bg-secondary-200/70 data-[disabled]:text-secondary-300 dark:text-secondary-200 dark:focus:bg-secondary-700/60 data-[disabled]:dark:text-secondary-500 relative flex w-full cursor-pointer items-center gap-2 text-[13px] font-medium focus:outline-none data-[disabled]:cursor-not-allowed data-[disabled]:hover:bg-transparent data-[disabled]:dark:hover:bg-transparent">
        {children}
        <MenubarPrimitive.ItemIndicator className="absolute left-1">
          <VscCircleFilled className="h-3 w-3" />
        </MenubarPrimitive.ItemIndicator>
      </MenubarPrimitive.RadioItem>
    );
  }
);

//MenuBar SubMenu Component
type MenuBarSubMenuProps = ComponentProps<typeof MenubarPrimitive["Sub"]>;
export const MenuBarSubMenu = forwardRef<HTMLDivElement, MenuBarSubMenuProps>(({ children, ...props }) => {
  return <MenubarPrimitive.Sub {...props}>{children}</MenubarPrimitive.Sub>;
});

//MenuBar SubMenuButton Component
type MenuBarSubMenuButtonProps = ComponentProps<typeof MenubarPrimitive["SubTrigger"]>;
export const MenuBarSubMenuButton = forwardRef<HTMLDivElement, MenuBarSubMenuButtonProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <MenubarPrimitive.SubTrigger
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
      </MenubarPrimitive.SubTrigger>
    );
  }
);

//MenuBar SubContent Component

type MenuBarSubContentProps = ComponentProps<typeof MenubarPrimitive["SubContent"]>;
export const MenuBarSubMenuContent = forwardRef<HTMLDivElement, MenuBarSubContentProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <MenubarPrimitive.Portal>
        <MenubarPrimitive.SubContent
          className={classNames(
            "data-[side=right]:animate-scale-in origin-top-left",
            "p-base dark:bg-secondary-800 min-w-[220px] rounded-md bg-white shadow-[0px_10px_38px_0px_rgba(22,23,24,0.05),0px_-5px_38px_0px_rgba(22,23,24,0.05)]",
            className
          )}
          {...props}
          ref={forwardedRef}
          sideOffset={10}>
          {children}
        </MenubarPrimitive.SubContent>
      </MenubarPrimitive.Portal>
    );
  }
);

// MenuBarDivider Component
type MenubarDividerProps = ComponentProps<typeof MenubarPrimitive["Separator"]>;
export const MenuBarDivider = forwardRef<HTMLDivElement, MenubarDividerProps>(
  ({ className, ...props }, forwardedRef) => {
    return (
      <MenubarPrimitive.Separator
        {...props}
        ref={forwardedRef}
        className={classNames("bg-secondary-200 dark:bg-secondary-700 my-1 h-[1px]", className)}
      />
    );
  }
);
