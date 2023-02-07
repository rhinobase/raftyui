import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { ComponentProps, forwardRef } from "react";
import { HiChevronRight, HiOutlineCheck } from "react-icons/hi2";
import { VscCircleFilled } from "react-icons/vsc";
import { classNames } from "@rhinobase/lib";

export const ContextMenu = ContextMenuPrimitive.Root;

type ContextMenuButtonProps = ComponentProps<typeof ContextMenuPrimitive["Trigger"]>;

export const ContextMenuButton = forwardRef<HTMLDivElement, ContextMenuButtonProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <ContextMenuPrimitive.Trigger {...props} ref={forwardedRef} className="cursor-default">
        {children}
      </ContextMenuPrimitive.Trigger>
    );
  }
);

type ContextMenuContentProps = ComponentProps<typeof ContextMenuPrimitive["Content"]>;
export const ContextMenuContent = forwardRef<HTMLDivElement, ContextMenuContentProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <ContextMenuPrimitive.Portal>
        <ContextMenuPrimitive.Content
          className={classNames(
            "p-base dark:bg-secondary-800 min-w-[220px] rounded-md bg-white shadow-[0px_10px_38px_0px_rgba(22,23,24,0.05),0px_-5px_38px_0px_rgba(22,23,24,0.05)]",
            className
          )}
          {...props}
          ref={forwardedRef}>
          {children}
        </ContextMenuPrimitive.Content>
      </ContextMenuPrimitive.Portal>
    );
  }
);

//ContextMenu Label Component
type ContextMenuLabelProps = ComponentProps<typeof ContextMenuPrimitive["Label"]>;
export const ContextMenuLabel = forwardRef<HTMLDivElement, ContextMenuLabelProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <ContextMenuPrimitive.Label
        className={classNames(
          "text-secondary-400 dark:text-secondary-400 py-base px-lg select-none text-[11px] font-semibold uppercase tracking-wider",
          className
        )}
        {...props}
        ref={forwardedRef}>
        {children}
      </ContextMenuPrimitive.Label>
    );
  }
);

//ContextMenu Item Component
type ContextMenuItemProps = ComponentProps<typeof ContextMenuPrimitive["Item"]>;
export const ContextMenuItem = forwardRef<HTMLDivElement, ContextMenuItemProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <ContextMenuPrimitive.Item
        className={classNames(
          "text-secondary-600 focus:bg-secondary-200/70 data-[disabled]:text-secondary-300 dark:text-secondary-200 dark:focus:bg-secondary-700/60 data-[disabled]:dark:text-secondary-500 py-base px-2xl rounded-base flex w-full cursor-pointer items-center gap-2 text-[13px] font-medium focus:outline-none data-[disabled]:cursor-not-allowed data-[disabled]:hover:bg-transparent data-[disabled]:dark:hover:bg-transparent",
          className
        )}
        {...props}
        ref={forwardedRef}>
        {children}
      </ContextMenuPrimitive.Item>
    );
  }
);

//ContextMenu ChechboxGroup Component
export const ContextMenuCheckboxGroup = ContextMenuPrimitive.Group;

type ContextMenuCheckboxItemProps = ComponentProps<typeof ContextMenuPrimitive["CheckboxItem"]>;
export const ContextMenuCheckboxItem = forwardRef<HTMLDivElement, ContextMenuCheckboxItemProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <ContextMenuPrimitive.CheckboxItem
        {...props}
        ref={forwardedRef}
        className="text-secondary-600 focus:bg-secondary-200/70 data-[disabled]:text-secondary-300 dark:text-secondary-200 dark:focus:bg-secondary-700/60 data-[disabled]:dark:text-secondary-500 py-base px-2xl rounded-base relative flex w-full cursor-pointer items-center gap-2 text-[13px] font-medium focus:outline-none data-[disabled]:cursor-not-allowed data-[disabled]:hover:bg-transparent data-[disabled]:dark:hover:bg-transparent">
        {children}
        <ContextMenuPrimitive.ItemIndicator className="absolute left-1">
          <HiOutlineCheck className="h-3 w-3 stroke-2" />
        </ContextMenuPrimitive.ItemIndicator>
      </ContextMenuPrimitive.CheckboxItem>
    );
  }
);

//ContextMenu RadioGroup Component
export const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;

type ContextMenuRadioItemProps = ComponentProps<typeof ContextMenuPrimitive["RadioItem"]>;
export const ContextMenuRadioItem = forwardRef<HTMLDivElement, ContextMenuRadioItemProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <ContextMenuPrimitive.RadioItem
        {...props}
        ref={forwardedRef}
        className="text-secondary-600 focus:bg-secondary-200/70 data-[disabled]:text-secondary-300 dark:text-secondary-200 dark:focus:bg-secondary-700/60 data-[disabled]:dark:text-secondary-500 py-base px-2xl rounded-base relative flex w-full cursor-pointer items-center gap-2 text-[13px] font-medium focus:outline-none data-[disabled]:cursor-not-allowed data-[disabled]:hover:bg-transparent data-[disabled]:dark:hover:bg-transparent">
        {children}
        <ContextMenuPrimitive.ItemIndicator className="absolute left-1">
          <VscCircleFilled className="h-3 w-3" />
        </ContextMenuPrimitive.ItemIndicator>
      </ContextMenuPrimitive.RadioItem>
    );
  }
);

//ContextMenu SubMenu Component
type ContextMenuSubMenuProps = ComponentProps<typeof ContextMenuPrimitive["Sub"]>;
export const ContextMenuSubMenu = forwardRef<HTMLDivElement, ContextMenuSubMenuProps>(
  ({ children, ...props }) => {
    return <ContextMenuPrimitive.Sub {...props}>{children}</ContextMenuPrimitive.Sub>;
  }
);

//ContextMenu SubMenuButton Component
type ContextMenuSubMenuButtonProps = ComponentProps<typeof ContextMenuPrimitive["SubTrigger"]>;
export const ContextMenuSubMenuButton = forwardRef<HTMLDivElement, ContextMenuSubMenuButtonProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <ContextMenuPrimitive.SubTrigger
        {...props}
        ref={forwardedRef}
        className={classNames(
          "text-secondary-600 focus:bg-secondary-200/70 data-[state=open]:bg-secondary-200/70 dark:text-secondary-200 dark:focus:bg-secondary-700/60 dark:data-[state=open]:bg-secondary-700/60 py-base px-2xl rounded-base flex w-full cursor-pointer items-center justify-between gap-2 text-[13px] font-medium focus:outline-none",
          className
        )}>
        {children}
        <span>
          <HiChevronRight className="stroke-1" />
        </span>
      </ContextMenuPrimitive.SubTrigger>
    );
  }
);

//ContextMenu SubContent Component

type ContextMenuSubContentProps = ComponentProps<typeof ContextMenuPrimitive["SubContent"]>;
export const ContextMenuSubContent = forwardRef<HTMLDivElement, ContextMenuSubContentProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <ContextMenuPrimitive.Portal>
        <ContextMenuPrimitive.SubContent
          className={classNames(
            "data-[side=right]:animate-scale-in origin-top-left",
            "dark:bg-secondary-800 p-base min-w-[220px] rounded-md bg-white shadow-[0px_10px_38px_0px_rgba(22,23,24,0.05),0px_-5px_38px_0px_rgba(22,23,24,0.05)]",
            className
          )}
          {...props}
          ref={forwardedRef}
          sideOffset={10}>
          {children}
        </ContextMenuPrimitive.SubContent>
      </ContextMenuPrimitive.Portal>
    );
  }
);

// ContextMenuDivider Component
type ContextMenuDividerProps = ComponentProps<typeof ContextMenuPrimitive["Separator"]>;
export const ContextMenuDivider = forwardRef<HTMLDivElement, ContextMenuDividerProps>(
  ({ className, ...props }, forwardedRef) => {
    return (
      <ContextMenuPrimitive.Separator
        {...props}
        ref={forwardedRef}
        className={classNames("bg-secondary-200 dark:bg-secondary-700 my-1 h-[1px]", className)}
      />
    );
  }
);
