import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { ComponentProps, forwardRef } from "react";
import { classNames } from "@rhinobase/utils";
import React from "react";
import {
  ContextMenuProvider,
  ContextMenuContext,
  useContextMenuContext,
} from "./context";

type Root = ComponentProps<(typeof ContextMenuPrimitive)["Root"]> &
  ContextMenuContext;
export const Root = forwardRef<HTMLDivElement, Root>(
  ({ children, size = "base" }) => (
    <ContextMenuProvider value={{ size }}>
      <ContextMenuPrimitive.Root>{children}</ContextMenuPrimitive.Root>
    </ContextMenuProvider>
  ),
);
Root.displayName = "ContextMenu.Root";

type Trigger = ComponentProps<(typeof ContextMenuPrimitive)["Trigger"]>;

export const Trigger = forwardRef<HTMLDivElement, Trigger>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <ContextMenuPrimitive.Trigger
        {...props}
        ref={forwardedRef}
        className="cursor-default"
      >
        {children}
      </ContextMenuPrimitive.Trigger>
    );
  },
);
Trigger.displayName = "ContextMenu.Trigger";

type Content = ComponentProps<(typeof ContextMenuPrimitive)["Content"]>;
export const Content = forwardRef<HTMLDivElement, Content>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <ContextMenuPrimitive.Portal>
        <ContextMenuPrimitive.Content
          className={classNames(
            "dark:bg-secondary-800 min-w-[220px] rounded-md bg-white p-1 shadow-[0px_10px_38px_0px_rgba(22,23,24,0.05),0px_-5px_38px_0px_rgba(22,23,24,0.05)]",
            className,
          )}
          {...props}
          ref={forwardedRef}
        >
          {children}
        </ContextMenuPrimitive.Content>
      </ContextMenuPrimitive.Portal>
    );
  },
);
Content.displayName = "ContextMenu.Content";

//ContextMenu Label Component
type Label = ComponentProps<(typeof ContextMenuPrimitive)["Label"]>;
export const Label = forwardRef<HTMLDivElement, Label>(
  ({ children, className, ...props }, forwardedRef) => {
    const { size } = useContextMenuContext();
    return (
      <ContextMenuPrimitive.Label
        className={classNames(
          size == "sm" && "py-1 text-[10px]",
          size == "base" && "py-1 text-[11px]",
          size == "lg" && "py-1.5 text-xs",
          "text-secondary-400 dark:text-secondary-400 select-none px-3 font-semibold uppercase tracking-wide",
          className,
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}
      </ContextMenuPrimitive.Label>
    );
  },
);
Label.displayName = "ContextMenu.Label";

//ContextMenu Item Component
type Item = ComponentProps<(typeof ContextMenuPrimitive)["Item"]>;
export const Item = forwardRef<HTMLDivElement, Item>(
  ({ children, className, ...props }, forwardedRef) => {
    const { size } = useContextMenuContext();
    return (
      <ContextMenuPrimitive.Item
        className={classNames(
          size == "sm" && "text-xs",
          size == "base" && "text-sm",
          size == "lg" && "text-base",
          "rounded-base text-secondary-600 focus:bg-secondary-200/70 data-[disabled]:text-secondary-300 dark:text-secondary-200 dark:focus:bg-secondary-700/60 data-[disabled]:dark:text-secondary-500 flex w-full cursor-pointer items-center gap-2 py-1.5 pl-5 pr-2 font-semibold focus:outline-none data-[disabled]:cursor-not-allowed data-[disabled]:hover:bg-transparent data-[disabled]:dark:hover:bg-transparent",
          className,
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}
      </ContextMenuPrimitive.Item>
    );
  },
);
Item.displayName = "ContextMenu.Item";

//ContextMenu ChechboxGroup Component
export const Group = ContextMenuPrimitive.Group;

type CheckboxItem = ComponentProps<
  (typeof ContextMenuPrimitive)["CheckboxItem"]
>;
export const CheckboxItem = forwardRef<HTMLDivElement, CheckboxItem>(
  ({ children, className, ...props }, forwardedRef) => {
    const { size } = useContextMenuContext();
    return (
      <ContextMenuPrimitive.CheckboxItem
        {...props}
        ref={forwardedRef}
        className={classNames(
          size == "sm" && "text-xs",
          size == "base" && "text-sm",
          size == "lg" && "text-base",
          "rounded-base text-secondary-600 hover:bg-secondary-200/50 focus:bg-secondary-200 dark:text-secondary-200 dark:hover:bg-secondary-700 dark:focus:bg-secondary-700/50 relative flex w-full cursor-pointer items-center gap-1 px-5 py-1.5 font-semibold focus:outline-none",
          className,
        )}
      >
        {children}
        <ContextMenuPrimitive.ItemIndicator
          className={classNames(
            size == "sm" && "top-2",
            size == "base" && "top-2.5",
            size == "lg" && "top-3",
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
        </ContextMenuPrimitive.ItemIndicator>
      </ContextMenuPrimitive.CheckboxItem>
    );
  },
);
CheckboxItem.displayName = "ContextMenu.CheckboxItem";

//ContextMenu RadioGroup Component
export const RadioGroup = ContextMenuPrimitive.RadioGroup;

type RadioItem = ComponentProps<(typeof ContextMenuPrimitive)["RadioItem"]>;
export const RadioItem = forwardRef<HTMLDivElement, RadioItem>(
  ({ children, className, ...props }, forwardedRef) => {
    const { size } = useContextMenuContext();
    return (
      <ContextMenuPrimitive.RadioItem
        {...props}
        ref={forwardedRef}
        className={classNames(
          size == "sm" && "text-xs",
          size == "base" && "text-sm",
          size == "lg" && "text-base",
          "rounded-base text-secondary-600 hover:bg-secondary-200/50 focus:bg-secondary-200 dark:text-secondary-200 dark:hover:bg-secondary-700 dark:focus:bg-secondary-700/50 relative flex w-full cursor-pointer items-center gap-1 px-5 py-1.5 font-semibold focus:outline-none",
          className,
        )}
      >
        {children}
        <ContextMenuPrimitive.ItemIndicator
          className={classNames(
            size == "sm" && "top-2",
            size == "base" && "top-2.5",
            size == "lg" && "top-3",
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
        </ContextMenuPrimitive.ItemIndicator>
      </ContextMenuPrimitive.RadioItem>
    );
  },
);
RadioItem.displayName = "ContextMenu.RadioItem";

//ContextMenu SubMenu Component
type Sub = ComponentProps<(typeof ContextMenuPrimitive)["Sub"]>;
export const Sub = forwardRef<HTMLDivElement, Sub>(({ children, ...props }) => {
  return (
    <ContextMenuPrimitive.Sub {...props}>{children}</ContextMenuPrimitive.Sub>
  );
});
Sub.displayName = "ContextMenu.Sub";

//ContextMenu SubMenuButton Component
type SubTrigger = ComponentProps<(typeof ContextMenuPrimitive)["SubTrigger"]>;
export const SubTrigger = forwardRef<HTMLDivElement, SubTrigger>(
  ({ children, className, ...props }, forwardedRef) => {
    const { size } = useContextMenuContext();
    return (
      <ContextMenuPrimitive.SubTrigger
        {...props}
        ref={forwardedRef}
        className={classNames(
          size == "sm" && "text-xs",
          size == "base" && "text-sm",
          size == "lg" && "text-base",
          "rounded-base pr-md text-secondary-600 focus:bg-secondary-200/70 data-[state=open]:bg-secondary-200/70 dark:text-secondary-200 dark:focus:bg-secondary-700/60 dark:data-[state=open]:bg-secondary-700/60 flex w-full cursor-pointer items-center justify-between gap-2 py-1.5 pl-5 font-semibold focus:outline-none",
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
      </ContextMenuPrimitive.SubTrigger>
    );
  },
);
SubTrigger.displayName = "ContextMenu.SubTrigger";

//ContextMenu SubContent Component

type SubContent = ComponentProps<(typeof ContextMenuPrimitive)["SubContent"]>;
export const SubContent = forwardRef<HTMLDivElement, SubContent>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <ContextMenuPrimitive.Portal>
        <ContextMenuPrimitive.SubContent
          className={classNames(
            "data-[side=right]:animate-scale-in origin-top-left",
            "dark:bg-secondary-800 min-w-[220px] rounded-md bg-white p-1 shadow-[0px_10px_38px_0px_rgba(22,23,24,0.05),0px_-5px_38px_0px_rgba(22,23,24,0.05)]",
            className,
          )}
          {...props}
          ref={forwardedRef}
          sideOffset={10}
        >
          {children}
        </ContextMenuPrimitive.SubContent>
      </ContextMenuPrimitive.Portal>
    );
  },
);
SubContent.displayName = "ContextMenu.SubContent";

// ContextMenuDivider Component
type Separator = ComponentProps<(typeof ContextMenuPrimitive)["Separator"]>;
export const Separator = forwardRef<HTMLDivElement, Separator>(
  ({ className, ...props }, forwardedRef) => {
    const { size } = useContextMenuContext();
    return (
      <ContextMenuPrimitive.Separator
        {...props}
        ref={forwardedRef}
        className={classNames(
          size == "sm" && "my-1",
          size == "base" && "my-[5px]",
          size == "lg" && "my-1.5",
          "bg-secondary-200 dark:bg-secondary-700 h-[1px] ",
          className,
        )}
      />
    );
  },
);
Separator.displayName = "ContextMenu.Separator";
