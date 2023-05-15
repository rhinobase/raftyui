import React from "react";
import {
  AriaButtonProps,
  DismissButton,
  Overlay,
  useButton,
  usePopover,
} from "react-aria";
import type { AriaPopoverProps } from "react-aria";
import {
  OverlayTriggerProps,
  OverlayTriggerState,
  useOverlayTriggerState,
} from "react-stately";
import { useOverlayTrigger } from "react-aria";
import { classNames } from "@rhino/utils";
import { PopoverContext, usePopoverContext } from "./context";

type PopoverContent = {
  children: React.ReactNode;
  state: OverlayTriggerState;
  className?: string;
  popoverRef?: React.RefObject<HTMLDivElement>;
} & Omit<AriaPopoverProps, "popoverRef"> &
  Partial<PopoverContext>;

export function PopoverContent({
  children,
  state,
  className,
  isNonModal,
  offset = 8,
  ...props
}: PopoverContent) {
  const popoverRef = React.useRef(null);
  const barebone = usePopoverContext();
  const unstyled = barebone;
  const { popoverProps, underlayProps, arrowProps, placement } = usePopover(
    {
      ...props,
      offset,
      popoverRef,
    },
    state
  );

  return (
    <Overlay>
      {!isNonModal && <div {...underlayProps} className="fixed top-0 left-0" />}
      <div
        {...popoverProps}
        ref={popoverRef}
        className={
          unstyled
            ? className
            : classNames(
                "z-10 shadow-lg border border-secondary-300 dark:border-secondary-700 bg-white dark:bg-secondary-800 dark:text-secondary-100 rounded-md",
                className
              )
        }
      >
        <svg
          {...arrowProps}
          className={classNames(
            "absolute fill-white dark:fill-secondary-700 w-3 h-3 stroke-secondary-300",
            "data-[placement=top]:top-full data-[placement=top]:-translate-x-1/2",
            "data-[placement=bottom]:bottom-full data-[placement=bottom]:-translate-x-1/2 data-[placement=bottom]:rotate-180",
            "data-[placement=left]:left-full data-[placement=left]:-translate-y-1/2 data-[placement=left]:-rotate-90",
            "data-[placement=right]:right-full data-[placement=right]:-translate-y-1/2 data-[placement=right]:rotate-90"
          )}
          data-placement={placement}
        >
          <path d="M0 0,L6 6,L12 0" />
        </svg>
        {!isNonModal && <DismissButton onDismiss={state.close} />}
        {children}
        <DismissButton onDismiss={state.close} />
      </div>
    </Overlay>
  );
}

type PopoverTrigger = {
  label: React.ReactNode;
  children: React.ReactNode;
} & OverlayTriggerProps;

export function PopoverTrigger({ label, children, ...props }: PopoverTrigger) {
  const ref = React.useRef(null);
  const state = useOverlayTriggerState(props);
  const { triggerProps } = useOverlayTrigger({ type: "dialog" }, state, ref);
  return (
    <div ref={ref}>
      <AriaButton {...triggerProps} className="border rounded px-3 py-1">
        {label}
      </AriaButton>
      {state.isOpen && (
        <PopoverContent
          {...props}
          triggerRef={ref}
          state={state}
          placement="bottom"
        >
          {children}
        </PopoverContent>
      )}
    </div>
  );
}

function AriaButton({
  ...props
}: AriaButtonProps<"button"> & {
  ref?: React.RefObject<HTMLButtonElement>;
  className?: string;
}) {
  const ref = React.useRef(null);
  const { buttonProps } = useButton(props, ref);
  return (
    <button {...buttonProps} ref={ref} className={props.className}>
      {props.children}
    </button>
  );
}
