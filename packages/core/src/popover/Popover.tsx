import React from "react";
import { DismissButton, Overlay, usePopover } from "react-aria";
import type { AriaPopoverProps } from "react-aria";
import type { OverlayTriggerState } from "react-stately";
import { useOverlayTrigger } from "react-aria";
import { useOverlayTriggerState } from "react-stately";
import { classNames } from "../utils";
import { PopoverContext, usePopoverContext } from "./context";

type PopoverProps = {
  children: React.ReactNode;
  state: OverlayTriggerState;
  className?: string;
  popoverRef?: React.RefObject<HTMLDivElement>;
} & Omit<AriaPopoverProps, "popoverRef"> &
  Partial<PopoverContext>;

export function Popover({
  children,
  state,
  className,
  isNonModal,
  offset = 8,
  ...props
}: PopoverProps) {
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
        {!isNonModal && <DismissButton onDismiss={state.close} />}
        {children}
        <DismissButton onDismiss={state.close} />
      </div>
    </Overlay>
  );
}
// Reuse the Button from your component library. See below for details.

type PopoverTrigger = {
  label: React.ReactNode;
  children: React.DetailedReactHTMLElement<any, HTMLElement>;
} & OverlayTriggerState;

export function PopoverTrigger({ label, children, ...props }: PopoverTrigger) {
  const ref = React.useRef(null);
  const state = useOverlayTriggerState(props);
  const { triggerProps, overlayProps } = useOverlayTrigger(
    { type: "dialog" },
    state,
    ref
  );

  return (
    <>
      <button {...triggerProps} ref={ref}>
        {label}
      </button>
      {state.isOpen && (
        <Popover {...props} triggerRef={ref} state={state}>
          {React.cloneElement(children, overlayProps)}
        </Popover>
      )}
    </>
  );
}

// import { ComponentProps, forwardRef } from "react";
// import * as PopoverPrimitive from "@radix-ui/react-popover";
// import { Button } from "../button";
// import { classNames } from "../utils";
// import { PopoverContext, PopoverProvider, usePopoverContext } from "./context";

// export type Popover = ComponentProps<(typeof PopoverPrimitive)["Root"]> &
//   Partial<PopoverContext>;
// export const Popover = ({ children, barebone = false, ...props }: Popover) => {
//   return (
//     <PopoverProvider
//       value={{
//         barebone,
//       }}
//     >
//       <PopoverPrimitive.Root {...props}>{children}</PopoverPrimitive.Root>
//     </PopoverProvider>
//   );
// };
// Popover.displayName = "Popover";

// export type PopoverTrigger = ComponentProps<
//   (typeof PopoverPrimitive)["Trigger"]
// > &
//   Button;
// export const PopoverTrigger = forwardRef<HTMLButtonElement, PopoverTrigger>(
//   (
//     {
//       children,
//       className,
//       variant,
//       size,
//       leftIcon = undefined,
//       rightIcon = undefined,
//       disabled = false,
//       active = false,
//       loading = false,
//       asChild = true,
//       unstyled = false,
//       ...props
//     },
//     forwardedRef
//   ) => {
//     const { barebone } = usePopoverContext();
//     const unstyle = barebone || unstyled;
//     return (
//       <PopoverPrimitive.Trigger
//         {...props}
//         className={className}
//         ref={forwardedRef}
//         asChild={asChild}
//       >
//         {asChild ? (
//           <Button
//             variant={variant}
//             size={size}
//             unstyled={unstyle}
//             className={className}
//             leftIcon={leftIcon}
//             rightIcon={rightIcon}
//             disabled={disabled}
//             active={active}
//             loading={loading}
//           >
//             {children}
//           </Button>
//         ) : (
//           children
//         )}
//       </PopoverPrimitive.Trigger>
//     );
//   }
// );
// PopoverTrigger.displayName = "PopoverTrigger";

// export type PopoverAnchor = ComponentProps<(typeof PopoverPrimitive)["Anchor"]>;
// export const PopoverAnchor = forwardRef<HTMLDivElement, PopoverAnchor>(
//   ({ children, className, ...props }, forwardedRef) => {
//     return (
//       <PopoverPrimitive.Anchor
//         {...props}
//         className={className}
//         ref={forwardedRef}
//       >
//         {children}
//       </PopoverPrimitive.Anchor>
//     );
//   }
// );
// PopoverAnchor.displayName = "PopoverAnchor";

// export type PopoverContent = ComponentProps<
//   (typeof PopoverPrimitive)["Content"]
// > & {
//   unstyled?: boolean;
// };
// export const PopoverContent = forwardRef<HTMLDivElement, PopoverContent>(
//   ({ children, className, unstyled = false, ...props }, forwardedRef) => {
//     const { barebone } = usePopoverContext();
//     const unstyle = barebone || unstyled;
//     return (
//       <PopoverPrimitive.Content
//         {...props}
//         className={
//           unstyle
//             ? className
//             : classNames(
//                 "data-[side=top]:animate-slide-up data-[side=bottom]:animate-slide-down shadow-[0px_3px_15px_0px_rgba(22,45,60,0.11)]",
//                 className
//               )
//         }
//         ref={forwardedRef}
//       >
//         {children}
//       </PopoverPrimitive.Content>
//     );
//   }
// );
// PopoverContent.displayName = "PopoverContent";

// export type PopoverArrow = ComponentProps<
//   (typeof PopoverPrimitive)["Arrow"]
// > & {
//   unstyled?: boolean;
// };
// export const PopoverArrow = forwardRef<SVGSVGElement, PopoverArrow>(
//   ({ children, className, unstyled = false, ...props }, forwardedRef) => {
//     const { barebone } = usePopoverContext();
//     const unstyle = barebone || unstyled;
//     return (
//       <PopoverPrimitive.Arrow
//         {...props}
//         className={
//           unstyle
//             ? className
//             : classNames("dark:fill-secondary-800 fill-white", className)
//         }
//         ref={forwardedRef}
//       >
//         {children}
//       </PopoverPrimitive.Arrow>
//     );
//   }
// );
// PopoverArrow.displayName = "PopoverArrow";

// export type PopoverClose = ComponentProps<(typeof PopoverPrimitive)["Close"]>;
// export const PopoverClose = forwardRef<HTMLButtonElement, PopoverClose>(
//   ({ children, className, ...props }, forwardedRef) => {
//     return (
//       <PopoverPrimitive.Close
//         {...props}
//         className={className}
//         ref={forwardedRef}
//       >
//         {children}
//       </PopoverPrimitive.Close>
//     );
//   }
// );
// PopoverClose.displayName = "PopoverClose";
