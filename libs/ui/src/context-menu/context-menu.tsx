"use client";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { ComponentProps, forwardRef } from "react";
import {
  ContextMenuProvider,
  ContextMenuContext,
  useContextMenuContext,
} from "./context";
import { classNames } from "@rafty/utils";
import { CheckIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export type ContextMenu = ComponentProps<
  (typeof ContextMenuPrimitive)["Root"]
> &
  Partial<ContextMenuContext>;

export const ContextMenu = ({
  children,
  size = "md",
  isBarebone = false,
  ...props
}: ContextMenu) => (
  <ContextMenuProvider value={{ size, isBarebone }}>
    <ContextMenuPrimitive.Root {...props}>{children}</ContextMenuPrimitive.Root>
  </ContextMenuProvider>
);
ContextMenu.displayName = "ContextMenu";

export const ContextMenuTrigger = ContextMenuPrimitive.Trigger;
ContextMenuTrigger.displayName = "ContextMenuTrigger";

export type ContextMenuContent = React.ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.Content
> & { isUnstyled?: boolean };
export const ContextMenuContent = forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>,
  ContextMenuContent
>(({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
  const { isBarebone } = useContextMenuContext();
  const unstyle = isBarebone || isUnstyled;

  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Content
        {...props}
        className={
          unstyle
            ? className
            : classNames(
                "dark:bg-secondary-800 min-w-[12rem] rounded-md bg-white p-1 shadow-[0px_3px_15px_0px_rgba(22,45,60,0.11)]",
                className
              )
        }
        ref={forwardedRef}
      >
        {children}
      </ContextMenuPrimitive.Content>
    </ContextMenuPrimitive.Portal>
  );
});
ContextMenuContent.displayName = "ContextMenuContent";

//ContextMenu Label Component
const contextMenuLabelClasses = {
  size: {
    sm: "py-1 text-[10px]",
    md: "py-1 text-[11px]",
    lg: "py-1.5 text-xs",
  },
};

export type ContextMenuLabel = React.ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.Label
> & { isUnstyled?: boolean };
export const ContextMenuLabel = forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Label>,
  ContextMenuLabel
>(({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
  const { size, isBarebone } = useContextMenuContext();
  const unstyle = isBarebone || isUnstyled;

  return (
    <ContextMenuPrimitive.Label
      {...props}
      className={
        unstyle
          ? className
          : classNames(
              contextMenuLabelClasses.size[size],
              "text-secondary-400 dark:text-secondary-400 select-none pl-8 pr-2 font-semibold uppercase tracking-wide",
              className
            )
      }
      ref={forwardedRef}
    >
      {children}
    </ContextMenuPrimitive.Label>
  );
});
ContextMenuLabel.displayName = "ContextMenuLabel";

//ContextMenu Item Component
const contextMenuItemClasses = {
  size: {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  },
};

export type ContextMenuItem = React.ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.Item
> & {
  isUnstyled?: boolean;
};

export const ContextMenuItem = forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  ContextMenuItem
>(({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
  const { size, isBarebone } = useContextMenuContext();
  const unstyle = isBarebone || isUnstyled;

  return (
    <ContextMenuPrimitive.Item
      {...props}
      className={
        unstyle
          ? className
          : classNames(
              contextMenuItemClasses.size[size],
              "text-secondary-600 focus:bg-secondary-200/70 data-[disabled]:text-secondary-300 dark:text-secondary-200 dark:focus:bg-secondary-700/60 data-[disabled]:dark:text-secondary-500 flex w-full cursor-pointer items-center gap-2 rounded py-1.5 pl-8 pr-2 font-medium focus:outline-none data-[disabled]:cursor-not-allowed data-[disabled]:hover:bg-transparent data-[disabled]:dark:hover:bg-transparent",
              className
            )
      }
      ref={forwardedRef}
    >
      {children}
    </ContextMenuPrimitive.Item>
  );
});
ContextMenuItem.displayName = "ContextMenuItem";

//ContextMenu ChechboxGroup Component
export const ContextMenuCheckBoxGroup = ContextMenuPrimitive.Group;

//ContextMenu CheckboxItem Component
const checkboxItemClasses = {
  size: {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  },
};

export type ContextMenuCheckboxItem = React.ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.CheckboxItem
> & { isUnstyled?: boolean };
export const ContextMenuCheckboxItem = forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
  ContextMenuCheckboxItem
>(({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
  const { size, isBarebone } = useContextMenuContext();
  const unstyle = isBarebone || isUnstyled;

  return (
    <ContextMenuPrimitive.CheckboxItem
      {...props}
      className={
        unstyle
          ? className
          : classNames(
              checkboxItemClasses.size[size],
              "text-secondary-600 hover:bg-secondary-200/50 focus:bg-secondary-200 dark:text-secondary-200 dark:hover:bg-secondary-700 dark:focus:bg-secondary-700/50 relative flex w-full cursor-pointer items-center gap-1 rounded pl-8 pr-2 py-1.5 font-medium outline-none",
              className
            )
      }
      ref={forwardedRef}
    >
      {children}
      <ContextMenuPrimitive.ItemIndicator className="absolute left-2">
        <CheckIcon className="h-3.5 w-3.5 stroke-[3]" />
      </ContextMenuPrimitive.ItemIndicator>
    </ContextMenuPrimitive.CheckboxItem>
  );
});
ContextMenuCheckboxItem.displayName = "ContextMenuCheckboxItem";

//ContextMenu RadioGroup Component
export const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;

//ContextMenu RadioItem Component
const radioItemClasses = {
  size: {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  },
};

export type ContextMenuRadioItem = React.ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.RadioItem
> & { isUnstyled?: boolean };

export const ContextMenuRadioItem = forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
  ContextMenuRadioItem
>(({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
  const { size, isBarebone } = useContextMenuContext();
  const unstyle = isBarebone || isUnstyled;
  return (
    <ContextMenuPrimitive.RadioItem
      {...props}
      className={
        unstyle
          ? className
          : classNames(
              radioItemClasses.size[size],
              "text-secondary-600 hover:bg-secondary-200/50 focus:bg-secondary-200 dark:text-secondary-200 dark:hover:bg-secondary-700 dark:focus:bg-secondary-700/50 relative flex w-full cursor-pointer items-center gap-1 rounded pl-8 pr-2 py-1.5 font-medium outline-none",
              className
            )
      }
      ref={forwardedRef}
    >
      {children}
      <ContextMenuPrimitive.ItemIndicator className="absolute left-2">
        <div className="h-2 w-2 bg-secondary-600 dark:bg-secondary-200 rounded-full" />
      </ContextMenuPrimitive.ItemIndicator>
    </ContextMenuPrimitive.RadioItem>
  );
});
ContextMenuRadioItem.displayName = "ContextMenuRadioItem";

//ContextMenu SubMenu Component
export const ContextMenuSub = ContextMenuPrimitive.Sub;
ContextMenuSub.displayName = "ContextMenuSub";

//ContextMenu SubMenuButton Component
const subTriggerClasses = {
  size: {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  },
};

export type ContextMenuSubTrigger = React.ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.SubTrigger
> & { isUnstyled?: boolean };

export const ContextMenuSubTrigger = forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  ContextMenuSubTrigger
>(({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
  const { size, isBarebone } = useContextMenuContext();
  const unstyle = isBarebone || isUnstyled;
  return (
    <ContextMenuPrimitive.SubTrigger
      {...props}
      className={
        unstyle
          ? className
          : classNames(
              subTriggerClasses.size[size],
              "text-secondary-600 focus:bg-secondary-200/70 data-[state=open]:bg-secondary-200/70 dark:text-secondary-200 dark:focus:bg-secondary-700/60 dark:data-[state=open]:bg-secondary-700/60 flex w-full cursor-pointer items-center justify-between gap-2 rounded py-1.5 pl-8 pr-2 font-medium outline-none",
              className
            )
      }
      ref={forwardedRef}
    >
      {children}
      <ChevronRightIcon className="h-3 w-3 stroke-[3]" />
    </ContextMenuPrimitive.SubTrigger>
  );
});
ContextMenuSubTrigger.displayName = "ContextMenuSubTrigger";

//ContextMenu SubContent Component
export type ContextMenuSubContent = React.ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.SubContent
> & { isUnstyled?: boolean };

export const ContextMenuSubContent = forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
  ContextMenuSubContent
>(
  (
    { children, className, isUnstyled = false, sideOffset = 10, ...props },
    forwardedRef
  ) => {
    const { isBarebone } = useContextMenuContext();
    const unstyle = isBarebone || isUnstyled;

    return (
      <ContextMenuPrimitive.Portal>
        <ContextMenuPrimitive.SubContent
          {...props}
          className={
            unstyle
              ? className
              : classNames(
                  "data-[side=right]:animate-scale-in origin-top-left",
                  "dark:bg-secondary-800 min-w-[12rem] rounded-md bg-white p-1 shadow-[0px_10px_38px_0px_rgba(22,23,24,0.05),0px_-5px_38px_0px_rgba(22,23,24,0.05)]",
                  className
                )
          }
          ref={forwardedRef}
          sideOffset={sideOffset}
        >
          {children}
        </ContextMenuPrimitive.SubContent>
      </ContextMenuPrimitive.Portal>
    );
  }
);
ContextMenuSubContent.displayName = "ContextMenuSubContent";

// ContextMenuDivider Component
const seperatorClasses = {
  size: {
    sm: "my-1",
    md: "my-[5px]",
    lg: "my-1.5",
  },
};

export type ContextMenuSeparator = React.ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.Separator
> & { isUnstyled?: boolean };
export const ContextMenuSeparator = forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,
  ContextMenuSeparator
>(({ className, isUnstyled = false, ...props }, forwardedRef) => {
  const { size, isBarebone } = useContextMenuContext();
  const unstyle = isBarebone || isUnstyled;

  return (
    <ContextMenuPrimitive.Separator
      {...props}
      ref={forwardedRef}
      className={
        unstyle
          ? className
          : classNames(
              seperatorClasses.size[size],
              "bg-secondary-200 dark:bg-secondary-700 h-[1px]",
              className
            )
      }
    />
  );
});
ContextMenuSeparator.displayName = "ContextMenuSeparator";
