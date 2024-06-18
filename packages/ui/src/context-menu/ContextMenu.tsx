"use client";
import { CheckIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { cva } from "class-variance-authority";
import {
  type ComponentProps,
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from "react";
import { classNames } from "../utils";
import {
  type ContextMenuContext,
  ContextMenuProvider,
  useContextMenuContext,
} from "./context";

export type ContextMenu = ComponentProps<typeof ContextMenuPrimitive.Root> &
  Partial<ContextMenuContext>;

export function ContextMenu({
  children,
  size = "md",
  isUnstyled = false,
  ...props
}: ContextMenu) {
  return (
    <ContextMenuProvider value={{ size, isUnstyled }}>
      <ContextMenuPrimitive.Root {...props}>
        {children}
      </ContextMenuPrimitive.Root>
    </ContextMenuProvider>
  );
}

export const ContextMenuTrigger = ContextMenuPrimitive.Trigger;

export const contextMenuContentClasses = cva(
  "dark:bg-secondary-800 dark:text-secondary-200 text-secondary-900 flex flex-col bg-white text-sm outline-none shadow-[0px_3px_15px_0px_rgba(22,45,60,0.11)]",
  {
    variants: {
      size: {
        sm: "rounded-base p-0.5 min-w-[11rem]",
        md: "rounded-md p-1 min-w-[12rem]",
        lg: "rounded-lg p-1.5 min-w-[13rem]",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export type ContextMenuContent = ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.Content
> & { isUnstyled?: boolean };

export const ContextMenuContent = forwardRef<
  ElementRef<typeof ContextMenuPrimitive.Content>,
  ContextMenuContent
>(function ContextMenuContent(
  { children, className, isUnstyled = false, ...props },
  forwardedRef,
) {
  const { isUnstyled: isParentUnstyled, size } = useContextMenuContext();
  const unstyle = isParentUnstyled || isUnstyled;

  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Content
        {...props}
        className={
          unstyle
            ? className
            : classNames(contextMenuContentClasses({ size }), className)
        }
        ref={forwardedRef}
      >
        {children}
      </ContextMenuPrimitive.Content>
    </ContextMenuPrimitive.Portal>
  );
});

export const contextMenuLabelClasses = cva(
  "text-secondary-400 dark:text-secondary-500 select-none font-semibold uppercase tracking-wide",
  {
    variants: {
      size: {
        sm: "px-1.5 text-[10px] mb-[1px]",
        md: "px-2 text-[11px] mb-[2px]",
        lg: "px-2.5 text-[12px] mb-[3px]",
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
>(function ContextMenuLabel(
  { children, className, isUnstyled = false, ...props },
  forwardedRef,
) {
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

export const contextMenuItemClasses = cva(
  "select-none text-secondary-600 focus:bg-secondary-200/70 data-[disabled]:text-secondary-300 dark:text-secondary-200 dark:focus:bg-secondary-700/60 data-[disabled]:dark:text-secondary-500 flex w-full cursor-pointer items-center gap-2 font-medium outline-none data-[disabled]:cursor-not-allowed data-[disabled]:hover:bg-transparent data-[disabled]:dark:hover:bg-transparent data-[disabled]:pointer-events-none",
  {
    variants: {
      size: {
        sm: "px-2.5 py-1.5 text-xs rounded-sm",
        md: "px-3.5 py-1.5 text-sm rounded-base",
        lg: "px-4 py-2 text-base rounded-md",
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
>(function ContextMenuItem(
  { children, className, isUnstyled = false, ...props },
  forwardedRef,
) {
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

export const ContextMenuCheckBoxGroup = ContextMenuPrimitive.Group;

export const contextMenuCheckboxItemIndicatorClasses = cva("absolute", {
  variants: {
    size: {
      sm: "left-[5px] size-2.5",
      md: "left-[7px] size-3",
      lg: "left-[9px] size-3.5",
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
>(function ContextMenuCheckboxItem(
  { children, className, isUnstyled = false, ...props },
  forwardedRef,
) {
  const { size, isUnstyled: isParentUnstyled } = useContextMenuContext();
  const unstyle = isParentUnstyled || isUnstyled;

  return (
    <ContextMenuPrimitive.CheckboxItem
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
      <ContextMenuPrimitive.ItemIndicator
        className={contextMenuCheckboxItemIndicatorClasses({ size })}
      >
        <CheckIcon className="size-full stroke-[3]" />
      </ContextMenuPrimitive.ItemIndicator>
    </ContextMenuPrimitive.CheckboxItem>
  );
});

export const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;

export const contextMenuRadioAndCheckboxItemClasses = cva("relative", {
  variants: {
    size: {
      sm: "pl-5",
      md: "pl-6",
      lg: "pl-7",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const contextMenuRadioItemIndicatorClasses = cva("absolute", {
  variants: {
    size: {
      sm: "left-[7px] size-[5px]",
      md: "left-[9px] size-[7px]",
      lg: "left-[11px] size-[9px]",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type ContextMenuRadioItem = ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.RadioItem
> & { isUnstyled?: boolean };

export const ContextMenuRadioItem = forwardRef<
  ElementRef<typeof ContextMenuPrimitive.RadioItem>,
  ContextMenuRadioItem
>(function ContextMenuRadioItem(
  { children, className, isUnstyled = false, ...props },
  forwardedRef,
) {
  const { size, isUnstyled: isParentUnstyled } = useContextMenuContext();
  const unstyle = isParentUnstyled || isUnstyled;

  return (
    <ContextMenuPrimitive.RadioItem
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
      <ContextMenuPrimitive.ItemIndicator
        className={contextMenuRadioItemIndicatorClasses({ size })}
      >
        <div className="bg-secondary-600 dark:bg-secondary-200 size-full rounded-full" />
      </ContextMenuPrimitive.ItemIndicator>
    </ContextMenuPrimitive.RadioItem>
  );
});

export const ContextMenuSub = ContextMenuPrimitive.Sub;

export const contextMenuSubTriggerIconClasses = cva("stroke-[3]", {
  variants: {
    size: {
      sm: "size-2.5",
      md: "size-3",
      lg: "size-3.5",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type ContextMenuSubTrigger = ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.SubTrigger
> & { isUnstyled?: boolean };

export const ContextMenuSubTrigger = forwardRef<
  ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  ContextMenuSubTrigger
>(function ContextMenuSubTrigger(
  { children, className, isUnstyled = false, ...props },
  forwardedRef,
) {
  const { size, isUnstyled: isParentUnstyled } = useContextMenuContext();
  const unstyle = isParentUnstyled || isUnstyled;

  return (
    <ContextMenuPrimitive.SubTrigger
      {...props}
      className={
        unstyle
          ? className
          : classNames(
              contextMenuItemClasses({ size }),
              "justify-between",
              className,
            )
      }
      ref={forwardedRef}
    >
      {children}
      <ChevronRightIcon
        className={contextMenuSubTriggerIconClasses({ size })}
      />
    </ContextMenuPrimitive.SubTrigger>
  );
});

export type ContextMenuSubContent = ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.SubContent
> & { isUnstyled?: boolean };

export const ContextMenuSubContent = forwardRef<
  ElementRef<typeof ContextMenuPrimitive.SubContent>,
  ContextMenuSubContent
>(function ContextMenuSubContent(
  { children, className, isUnstyled = false, sideOffset = 10, ...props },
  forwardedRef,
) {
  const { isUnstyled: isParentUnstyled, size } = useContextMenuContext();
  const unstyle = isParentUnstyled || isUnstyled;

  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.SubContent
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
      </ContextMenuPrimitive.SubContent>
    </ContextMenuPrimitive.Portal>
  );
});

export const contextMenuSeperatorClasses = cva(
  "bg-secondary-200 dark:bg-secondary-700 h-[1px]",
  {
    variants: {
      size: {
        sm: "my-0.5",
        md: "my-1",
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
>(function ContextMenuSeparator(
  { className, isUnstyled = false, ...props },
  forwardedRef,
) {
  const { size, isUnstyled: isParentUnstyled } = useContextMenuContext();
  const unstyle = isParentUnstyled || isUnstyled;

  return (
    <ContextMenuPrimitive.Separator
      {...props}
      ref={forwardedRef}
      className={
        unstyle
          ? className
          : classNames(contextMenuSeperatorClasses({ size }), className)
      }
    />
  );
});
