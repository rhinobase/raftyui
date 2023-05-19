import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { ComponentProps, forwardRef } from "react";
import {
  ContextMenuProvider,
  ContextMenuContext,
  useContextMenuContext,
} from "./context";
import { classNames } from "@rafty/utils";
import { cva } from "class-variance-authority";
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

export type ContextMenuTrigger = ComponentProps<
  (typeof ContextMenuPrimitive)["Trigger"]
> & { isUnstyled?: boolean };
export const ContextMenuTrigger = forwardRef<
  HTMLDivElement,
  ContextMenuTrigger
>(({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
  const { isBarebone } = useContextMenuContext();
  const unstyle = isBarebone || isUnstyled;

  return (
    <ContextMenuPrimitive.Trigger
      {...props}
      className={unstyle ? className : classNames("cursor-default", className)}
      ref={forwardedRef}
    >
      {children}
    </ContextMenuPrimitive.Trigger>
  );
});
ContextMenuTrigger.displayName = "ContextMenuTrigger";

export type ContextMenuContent = ComponentProps<
  (typeof ContextMenuPrimitive)["Content"]
> & { isUnstyled?: boolean };
export const ContextMenuContent = forwardRef<
  HTMLDivElement,
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
                "dark:bg-secondary-800 min-w-[220px] rounded-md bg-white p-1 shadow-[0px_3px_15px_0px_rgba(22,45,60,0.11)]",
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
const contextMenuLabelClasses = cva(
  "text-secondary-400 dark:text-secondary-400 select-none px-3 font-semibold uppercase tracking-wide",
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
export type ContextMenuLabel = ComponentProps<
  (typeof ContextMenuPrimitive)["Label"]
> & { isUnstyled?: boolean };
export const ContextMenuLabel = forwardRef<HTMLDivElement, ContextMenuLabel>(
  ({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
    const { size, isBarebone } = useContextMenuContext();
    const unstyle = isBarebone || isUnstyled;

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
  }
);
ContextMenuLabel.displayName = "ContextMenuLabel";

//ContextMenu Item Component
const contextMenuItemClasses = cva(
  "rounded text-secondary-600 focus:bg-secondary-200/70 data-[disabled]:text-secondary-300 dark:text-secondary-200 dark:focus:bg-secondary-700/60 data-[disabled]:dark:text-secondary-500 flex w-full cursor-pointer items-center gap-2 py-1.5 pl-5 pr-2 font-semibold focus:outline-none data-[disabled]:cursor-not-allowed data-[disabled]:hover:bg-transparent data-[disabled]:dark:hover:bg-transparent",
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
export type ContextMenuItem = ComponentProps<
  (typeof ContextMenuPrimitive)["Item"]
> & {
  isUnstyled?: boolean;
};

export const ContextMenuItem = forwardRef<HTMLDivElement, ContextMenuItem>(
  ({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
    const { size, isBarebone } = useContextMenuContext();
    const unstyle = isBarebone || isUnstyled;

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
  }
);
ContextMenuItem.displayName = "ContextMenuItem";

//ContextMenu ChechboxGroup Component
export const ContextMenuCheckBoxGroup = ContextMenuPrimitive.Group;

//ContextMenu CheckboxItem Component
const checkboxItemClasses = cva(
  "relative flex w-full cursor-pointer items-center gap-1 px-5 py-1.5 font-semibold outline-none rounded text-secondary-600 hover:bg-secondary-200/50 focus:bg-secondary-200 dark:text-secondary-200 dark:hover:bg-secondary-700 dark:focus:bg-secondary-700/50",
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
export type ContextMenuCheckboxItem = ComponentProps<
  (typeof ContextMenuPrimitive)["CheckboxItem"]
> & { isUnstyled?: boolean };
export const ContextMenuCheckboxItem = forwardRef<
  HTMLDivElement,
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
          : classNames(checkboxItemClasses({ size }), className)
      }
      ref={forwardedRef}
    >
      {children}
      <ContextMenuPrimitive.ItemIndicator className="absolute left-1">
        <CheckIcon className="h-3 w-3 stroke-[3]" />
      </ContextMenuPrimitive.ItemIndicator>
    </ContextMenuPrimitive.CheckboxItem>
  );
});
ContextMenuCheckboxItem.displayName = "ContextMenuCheckboxItem";

//ContextMenu RadioGroup Component
export const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;

//ContextMenu RadioItem Component
const radioItemClasses = cva(
  "relative flex w-full cursor-pointer items-center gap-1 px-5 py-1.5 font-semibold outline-none rounded text-secondary-600 hover:bg-secondary-200/50 focus:bg-secondary-200 dark:text-secondary-200 dark:hover:bg-secondary-700 dark:focus:bg-secondary-700/50",
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
export type ContextMenuRadioItem = ComponentProps<
  (typeof ContextMenuPrimitive)["RadioItem"]
> & { isUnstyled?: boolean };
export const ContextMenuRadioItem = forwardRef<
  HTMLDivElement,
  ContextMenuRadioItem
>(({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
  const { size, isBarebone } = useContextMenuContext();
  const unstyle = isBarebone || isUnstyled;
  return (
    <ContextMenuPrimitive.RadioItem
      {...props}
      className={
        unstyle ? className : classNames(radioItemClasses({ size }), className)
      }
      ref={forwardedRef}
    >
      {children}
      <ContextMenuPrimitive.ItemIndicator className="absolute left-1">
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
      </ContextMenuPrimitive.ItemIndicator>
    </ContextMenuPrimitive.RadioItem>
  );
});
ContextMenuRadioItem.displayName = "ContextMenuRadioItem";

//ContextMenu SubMenu Component
export type ContextMenuSub = ComponentProps<
  (typeof ContextMenuPrimitive)["Sub"]
>;

export const ContextMenuSub = ({ children, ...props }: ContextMenuSub) => (
  <ContextMenuPrimitive.Sub {...props}>{children}</ContextMenuPrimitive.Sub>
);
ContextMenuSub.displayName = "ContextMenuSub";

//ContextMenu SubMenuButton Component
const subTriggerClasses = cva(
  "flex w-full cursor-pointer items-center justify-between gap-2 py-1.5 pl-5 font-semibold outline-none rounded pr-md text-secondary-600 focus:bg-secondary-200/70 data-[state=open]:bg-secondary-200/70 dark:text-secondary-200 dark:focus:bg-secondary-700/60 dark:data-[state=open]:bg-secondary-700/60",
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

export type ContextMenuSubTrigger = ComponentProps<
  (typeof ContextMenuPrimitive)["SubTrigger"]
> & { isUnstyled?: boolean };
export const ContextMenuSubTrigger = forwardRef<
  HTMLDivElement,
  ContextMenuSubTrigger
>(({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
  const { size, isBarebone } = useContextMenuContext();
  const unstyle = isBarebone || isUnstyled;
  return (
    <ContextMenuPrimitive.SubTrigger
      {...props}
      className={
        unstyle ? className : classNames(subTriggerClasses({ size }), className)
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
export type ContextMenuSubContent = ComponentProps<
  (typeof ContextMenuPrimitive)["SubContent"]
> & { isUnstyled?: boolean };

export const ContextMenuSubContent = forwardRef<
  HTMLDivElement,
  ContextMenuSubContent
>(
  (
    { children, className, isUnstyled = false, sideOffset, ...props },
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
                  "dark:bg-secondary-800 min-w-[220px] rounded-md bg-white p-1 shadow-[0px_10px_38px_0px_rgba(22,23,24,0.05),0px_-5px_38px_0px_rgba(22,23,24,0.05)]",
                  className
                )
          }
          ref={forwardedRef}
          sideOffset={sideOffset ?? 10}
        >
          {children}
        </ContextMenuPrimitive.SubContent>
      </ContextMenuPrimitive.Portal>
    );
  }
);
ContextMenuSubContent.displayName = "ContextMenuSubContent";

// ContextMenuDivider Component
const seperatorClasses = cva("bg-secondary-200 dark:bg-secondary-700 h-[1px]", {
  variants: {
    size: {
      sm: "my-1",
      md: "my-[5px]",
      lg: "my-1.5",
    },
  },
});

export type ContextMenuSeparator = ComponentProps<
  (typeof ContextMenuPrimitive)["Separator"]
> & { isUnstyled?: boolean };
export const ContextMenuSeparator = forwardRef<
  HTMLDivElement,
  ContextMenuSeparator
>(({ className, isUnstyled = false, ...props }, forwardedRef) => {
  const { size, isBarebone } = useContextMenuContext();
  const unstyle = isBarebone || isUnstyled;

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
