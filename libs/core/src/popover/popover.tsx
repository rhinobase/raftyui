import { RefObject, forwardRef, useRef } from "react";
import {
  PopoverContentProvider,
  PopoverProvider,
  usePopover,
  usePopoverContent,
} from "./context";
import { OverlayTriggerProps, OverlayTriggerState } from "react-stately";
import {
  useOverlayTrigger,
  usePopover as useAriaPopover,
  AriaPopoverProps,
  DismissButton,
  useButton,
  DismissButtonProps,
} from "react-aria";
import { classNames } from "@rafty/utils";
import { Button } from "../button";

export type Popover = OverlayTriggerProps & {
  children: React.ReactNode;
  isBarebone?: boolean;
};

export const Popover = forwardRef<HTMLDivElement, Popover>(
  ({ isBarebone = false, children, ...props }, forwardedRef) => {
    return (
      <PopoverProvider isBarebone={isBarebone} triggerProps={props}>
        <div ref={forwardedRef}>{children}</div>
      </PopoverProvider>
    );
  }
);

export type PopoverTrigger = {
  children?: React.ReactNode;
  className?: string;
  isUnstyled?: boolean;
};

export function PopoverTrigger({
  children,
  className,
  isUnstyled = false,
}: PopoverTrigger) {
  const { triggerRef, state, isBarebone } = usePopover();
  const unstyle = isBarebone || isUnstyled;

  if (!state) throw new Error("Popover Context is not Defined");

  const { triggerProps } = useOverlayTrigger(
    { type: "dialog" },
    state,
    triggerRef
  );

  const { buttonProps } = useButton(triggerProps, triggerRef);

  return (
    <Button
      {...buttonProps}
      ref={triggerRef as RefObject<HTMLButtonElement>}
      className={
        unstyle ? className : classNames("rounded border px-3 py-1", className)
      }
    >
      {children}
    </Button>
  );
}

export type PopoverContent = Omit<
  AriaPopoverProps,
  "popoverRef" | "triggerRef"
> & {
  children: React.ReactNode;
  triggerState?: OverlayTriggerState;
  className?: string;
  isUnstyled?: boolean;
  popoverRef?: React.RefObject<Element>;
  triggerRef?: React.RefObject<Element>;
};

export function PopoverContent({
  children,
  triggerState,
  className,
  isNonModal,
  offset = 8,
  isUnstyled = false,
  ...props
}: PopoverContent) {
  const { state, isBarebone, triggerRef } = usePopover();
  const popoverRef = useRef(null);
  const values = useAriaPopover(
    {
      ...props,
      offset,
      popoverRef: props.popoverRef ?? popoverRef,
      triggerRef: props.triggerRef ?? triggerRef,
    },
    triggerState ?? state
  );
  const unstyle = isBarebone || isUnstyled;

  // eslint-disable-next-line react/jsx-no-useless-fragment
  if (!triggerState?.isOpen && !state.isOpen) return <></>;

  const { popoverProps, underlayProps } = values;

  return (
    <PopoverContentProvider value={values}>
      {!isNonModal && <div {...underlayProps} className="fixed left-0 top-0" />}
      <div
        {...popoverProps}
        className={
          unstyle
            ? className
            : classNames(
                "text-secondary-900 dark:bg-secondary-800 dark:text-secondary-200 z-10 overflow-y-auto rounded-md bg-white p-1 text-sm shadow-[0px_3px_15px_0px_rgba(22,45,60,0.11)]",
                className
              )
        }
        ref={popoverRef}
      >
        {children}
      </div>
    </PopoverContentProvider>
  );
}

export type PopoverArrow = {
  className?: string;
  isUnstyled?: boolean;
};

export function PopoverArrow({ className, isUnstyled = false }: PopoverArrow) {
  const { isBarebone } = usePopover();
  const { arrowProps, placement } = usePopoverContent();
  const unstyle = isBarebone || isUnstyled;

  return (
    <svg
      {...arrowProps}
      className={
        unstyle
          ? className
          : classNames(
              "dark:fill-secondary-700 stroke-secondary-300 absolute h-3 w-3 fill-white",
              "data-[placement=top]:top-full data-[placement=top]:-translate-x-1/2",
              "data-[placement=bottom]:bottom-full data-[placement=bottom]:-translate-x-1/2 data-[placement=bottom]:rotate-180",
              "data-[placement=left]:left-full data-[placement=left]:-translate-y-1/2 data-[placement=left]:-rotate-90",
              "data-[placement=right]:right-full data-[placement=right]:-translate-y-1/2 data-[placement=right]:rotate-90",
              className
            )
      }
      data-placement={placement}
    >
      <path d="M0 0,L6 6,L12 0" />
    </svg>
  );
}

export function PopoverClose({ onDismiss, ...props }: DismissButtonProps) {
  const { state } = usePopover();

  return (
    <DismissButton
      {...props}
      onDismiss={() => {
        state.close();
        if (onDismiss) onDismiss();
      }}
    />
  );
}
