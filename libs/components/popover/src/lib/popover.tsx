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
import { classNames } from "@rhino/utils";
import { Button } from "@rhino/button";

export type Popover = {
  children: React.ReactNode;
  isBarebone?: boolean;
} & OverlayTriggerProps;

export const Popover = forwardRef<HTMLDivElement, Popover>(
  ({ ...props }, forwardedRef) => {
    return (
      <PopoverProvider
        isBarebone={Boolean(props.isBarebone)}
        triggerProps={props}
      >
        <div ref={forwardedRef}>{props.children}</div>
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
        unstyle ? className : classNames("border rounded px-3 py-1", className)
      }
    >
      {children}
    </Button>
  );
}

export type PopoverContent = {
  children: React.ReactNode;
  triggerState?: OverlayTriggerState;
  className?: string;
  isUnstyled?: boolean;
  popoverRef?: React.RefObject<Element>;
} & Omit<AriaPopoverProps, "popoverRef">;

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

  // console.log(state.isOpen);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  if (!triggerState?.isOpen && !state.isOpen) return <></>;

  const { popoverProps, underlayProps } = values;

  return (
    <PopoverContentProvider value={values}>
      {!isNonModal && <div {...underlayProps} className="fixed top-0 left-0" />}
      <div
        {...popoverProps}
        ref={popoverRef}
        className={
          unstyle
            ? className
            : classNames(
                "z-10 shadow-lg border border-secondary-300 dark:border-secondary-700 bg-white dark:bg-secondary-800 dark:text-secondary-100 rounded-md",
                className
              )
        }
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
              "absolute fill-white dark:fill-secondary-700 w-3 h-3 stroke-secondary-300",
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

export function PopoverClose(props: DismissButtonProps) {
  const { state } = usePopover();

  return (
    <DismissButton
      {...props}
      onDismiss={() => {
        state.close();
        if (props.onDismiss) props.onDismiss();
      }}
    />
  );
}
