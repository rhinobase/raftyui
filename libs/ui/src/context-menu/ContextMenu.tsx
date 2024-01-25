"use client";
import { CheckIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { cva } from "class-variance-authority";
import {
  ComponentProps,
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
} from "react";
import { classNames } from "../utils";
import {
  ContextMenuContext,
  ContextMenuProvider,
  useContextMenuContext,
} from "./context";

export type ContextMenu = ComponentProps<
  (typeof ContextMenuPrimitive)["Root"]
> &
  Partial<ContextMenuContext>;

export const ContextMenu = ({
  children,
  size = "md",
  isUnstyled = false,
  ...props
}: ContextMenu) => (
  <ContextMenuProvider value={{ size, isUnstyled }}>
    <ContextMenuPrimitive.Root {...props}>{children}</ContextMenuPrimitive.Root>
  </ContextMenuProvider>
);
ContextMenu.displayName = "ContextMenu";

export const ContextMenuTrigger = ContextMenuPrimitive.Trigger;
ContextMenuTrigger.displayName = "ContextMenuTrigger";

export type ContextMenuContent = ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.Content
> & { isUnstyled?: boolean };

export const ContextMenuContent = forwardRef<
  ElementRef<typeof ContextMenuPrimitive.Content>,
  ContextMenuContent
>(({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
  const { isUnstyled: isParentUnstyled } = useContextMenuContext();
  const unstyle = isParentUnstyled || isUnstyled;

  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Content
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
      </ContextMenuPrimitive.Content>
    </ContextMenuPrimitive.Portal>
  );
});
ContextMenuContent.displayName = "ContextMenuContent";

//ContextMenu Label Component
export const contextMenuLabelClasses = cva(
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

export type ContextMenuLabel = ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.Label
> & { isUnstyled?: boolean };

export const ContextMenuLabel = forwardRef<
  ElementRef<typeof ContextMenuPrimitive.Label>,
  ContextMenuLabel
>(({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
  const { size, isUnstyled: isParentUnstyled } = useContextMenuContext();
  const unstyle = isParentUnstyled || isUnstyled;

  return (
    <ContextMenuPrimitive.Label
      {...props}
      className={
        unstyle
          ? className
          : classNames(contextMenuLabelClasses({ size }), className)
      }
      ref={forwardedRef}
    >
      {children}
    </ContextMenuPrimitive.Label>
  );
});
ContextMenuLabel.displayName = "ContextMenuLabel";

//ContextMenu Item Component
export const contextMenuItemClasses = cva(
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

export type ContextMenuItem = ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.Item
> & {
  isUnstyled?: boolean;
};

export const ContextMenuItem = forwardRef<
  ElementRef<typeof ContextMenuPrimitive.Item>,
  ContextMenuItem
>(({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
  const { size, isUnstyled: isParentUnstyled } = useContextMenuContext();
  const unstyle = isParentUnstyled || isUnstyled;

  return (
    <ContextMenuPrimitive.Item
      {...props}
      className={
        unstyle
          ? className
          : classNames(contextMenuItemClasses({ size }), className)
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
ContextMenuCheckBoxGroup.displayName = "ContextMenuCheckBoxGroup";

//ContextMenu CheckboxItem Component
export const contextMenuCheckboxItemClasses = cva(
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

export const contextMenuCheckboxItemIndicatorClasses = cva("absolute", {
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

export type ContextMenuCheckboxItem = ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.CheckboxItem
> & { isUnstyled?: boolean };

export const ContextMenuCheckboxItem = forwardRef<
  ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
  ContextMenuCheckboxItem
>(({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
  const { size, isUnstyled: isParentUnstyled } = useContextMenuContext();
  const unstyle = isParentUnstyled || isUnstyled;

  return (
    <ContextMenuPrimitive.CheckboxItem
      {...props}
      className={
        unstyle
          ? className
          : classNames(contextMenuCheckboxItemClasses({ size }), className)
      }
      ref={forwardedRef}
    >
      {children}
      <ContextMenuPrimitive.ItemIndicator
        className={classNames(
          contextMenuCheckboxItemIndicatorClasses({ size }),
        )}
      >
        <CheckIcon className="size-3 stroke-[3]" />
      </ContextMenuPrimitive.ItemIndicator>
    </ContextMenuPrimitive.CheckboxItem>
  );
});
ContextMenuCheckboxItem.displayName = "ContextMenuCheckboxItem";

//ContextMenu RadioGroup Component
export const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;
ContextMenuRadioGroup.displayName = "ContextMenuRadioGroup";

//ContextMenu RadioItem Component
export const contextMenuRadioItemClasses = cva(
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

export const contextMenuRadioItemIndicatorClasses = cva("absolute", {
  variants: {
    size: { sm: "left-2", md: "left-2.5", lg: "left-2.5" },
  },
  defaultVariants: {
    size: "md",
  },
});

export const contextMenuRadioItemIndicatorChildClasses = cva(
  "bg-secondary-600 dark:bg-secondary-200 rounded-full",
  {
    variants: {
      size: { sm: "size-1.5", md: "size-2", lg: "size-2" },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export type ContextMenuRadioItem = ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.RadioItem
> & { isUnstyled?: boolean };

export const ContextMenuRadioItem = forwardRef<
  ElementRef<typeof ContextMenuPrimitive.RadioItem>,
  ContextMenuRadioItem
>(({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
  const { size, isUnstyled: isParentUnstyled } = useContextMenuContext();
  const unstyle = isParentUnstyled || isUnstyled;
  return (
    <ContextMenuPrimitive.RadioItem
      {...props}
      className={
        unstyle
          ? className
          : classNames(contextMenuRadioItemClasses({ size }), className)
      }
      ref={forwardedRef}
    >
      {children}
      <ContextMenuPrimitive.ItemIndicator
        className={classNames(contextMenuRadioItemIndicatorClasses({ size }))}
      >
        <div
          className={classNames(
            contextMenuRadioItemIndicatorChildClasses({ size }),
          )}
        />
      </ContextMenuPrimitive.ItemIndicator>
    </ContextMenuPrimitive.RadioItem>
  );
});
ContextMenuRadioItem.displayName = "ContextMenuRadioItem";

//ContextMenu SubMenu Component
export const ContextMenuSub = ContextMenuPrimitive.Sub;
ContextMenuSub.displayName = "ContextMenuSub";

//ContextMenu SubMenuButton Component
export const contextMenuSubTriggerClasses = cva(
  classNames(
    "rounded-base flex w-full cursor-pointer items-center justify-between gap-2 font-medium focus:outline-none",
    "text-secondary-600 dark:text-secondary-200",
    "data-[state=open]:bg-secondary-200/70 dark:data-[state=open]:bg-secondary-700/60",
    "focus:bg-secondary-200/70 dark:focus:bg-secondary-700/60",
  ),
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

export type ContextMenuSubTrigger = ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.SubTrigger
> & { isUnstyled?: boolean };

export const ContextMenuSubTrigger = forwardRef<
  ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  ContextMenuSubTrigger
>(({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
  const { size, isUnstyled: isParentUnstyled } = useContextMenuContext();
  const unstyle = isParentUnstyled || isUnstyled;

  return (
    <ContextMenuPrimitive.SubTrigger
      {...props}
      className={
        unstyle
          ? className
          : classNames(contextMenuSubTriggerClasses({ size }), className)
      }
      ref={forwardedRef}
    >
      {children}
      <ChevronRightIcon className="size-3 stroke-[3]" />
    </ContextMenuPrimitive.SubTrigger>
  );
});
ContextMenuSubTrigger.displayName = "ContextMenuSubTrigger";

//ContextMenu SubContent Component
export type ContextMenuSubContent = ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.SubContent
> & { isUnstyled?: boolean };

export const ContextMenuSubContent = forwardRef<
  ElementRef<typeof ContextMenuPrimitive.SubContent>,
  ContextMenuSubContent
>(
  (
    { children, className, isUnstyled = false, sideOffset = 10, ...props },
    forwardedRef,
  ) => {
    const { isUnstyled: isParentUnstyled } = useContextMenuContext();
    const unstyle = isParentUnstyled || isUnstyled;

    return (
      <ContextMenuPrimitive.Portal>
        <ContextMenuPrimitive.SubContent
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
        </ContextMenuPrimitive.SubContent>
      </ContextMenuPrimitive.Portal>
    );
  },
);
ContextMenuSubContent.displayName = "ContextMenuSubContent";

// ContextMenuDivider Component
export const seperatorClasses = cva(
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

export type ContextMenuSeparator = ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.Separator
> & { isUnstyled?: boolean };

export const ContextMenuSeparator = forwardRef<
  ElementRef<typeof ContextMenuPrimitive.Separator>,
  ContextMenuSeparator
>(({ className, isUnstyled = false, ...props }, forwardedRef) => {
  const { size, isUnstyled: isParentUnstyled } = useContextMenuContext();
  const unstyle = isParentUnstyled || isUnstyled;

  return (
    <ContextMenuPrimitive.Separator
      {...props}
      ref={forwardedRef}
      className={
        unstyle ? className : classNames(seperatorClasses({ size }), className)
      }
    />
  );
});
ContextMenuSeparator.displayName = "ContextMenuSeparator";
