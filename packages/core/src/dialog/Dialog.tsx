import { AriaButtonProps, AriaDialogProps, useDialog } from "react-aria";
import { useButton, useFocusRing, mergeProps } from "react-aria";
import React, { useState } from "react";
import type { AriaModalOverlayProps } from "@react-aria/overlays";
import { Overlay, useModalOverlay } from "@react-aria/overlays";
import { OverlayTriggerState, useOverlayTriggerState } from "react-stately";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { classNames } from "../utils";
interface ModalProps extends AriaModalOverlayProps {
  children: React.ReactNode;
  state: OverlayTriggerState;
}

export function Modal(props: ModalProps) {
  const { children, state } = props;

  const ref = React.useRef(null);
  const { modalProps, underlayProps } = useModalOverlay(props, state, ref);
  const [exited, setExited] = useState(!state.isOpen);

  // Don't render anything if the modal is not open and we're not animating out.
  if (!(state.isOpen || !exited)) {
    return null;
  }

  return (
    // Animate opacity and backdrop blur of underlay
    <Overlay>
      <div
        className={classNames(
          state.isOpen
            ? "opacity-1 backdrop-blur-md transition ease-in"
            : "opacity-0 backdrop-blur-none transition ease-out"
        )}
      >
        <div
          className="fixed inset-0 flex justify-center z-100 bg-slate-400/20"
          {...underlayProps}
        >
          {/* Animate modal slightly upward when entering, and downward when exiting. */}
          <div
            className={classNames(
              state.isOpen
                ? "translate-y-0 transition ease-in"
                : "translate-y-2 transition ease-out"
            )}
          >
            <div
              {...modalProps}
              ref={ref}
              className="p-8 max-w-sm bg-white/90 border border-gray-300 shadow-2xl rounded-lg z-1 top-[10%] h-fit max-h-[80vh] relative focus:outline-none"
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </Overlay>
  );
}

interface AlertDialogProps extends AriaDialogProps {
  children: React.ReactNode;
  title: string;
  variant?: "default" | "destructive";
  confirmLabel: string;
  onClose: () => void;
}

export function AlertDialog(props: AlertDialogProps) {
  const { children, onClose, confirmLabel } = props;

  const ref = React.useRef(null);
  const { dialogProps, titleProps } = useDialog(
    {
      ...props,
      role: "alertdialog",
    },
    ref
  );

  return (
    <div {...dialogProps} ref={ref} className="outline-none">
      {props.variant === "destructive" && (
        <ExclamationTriangleIcon className="w-6 h-6 text-red-500 absolute right-8 top-8" />
      )}
      <h3 {...titleProps} className="text-lg font-medium pb-2">
        {props.title}
      </h3>
      <p className="text-sm text-gray-600">{children}</p>
      <div className="pt-8 flex space-x-3 justify-end">
        <Button onPress={onClose}>Cancel</Button>
        <Button variant={props.variant || "cta"} onPress={onClose}>
          {confirmLabel}
        </Button>
      </div>
    </div>
  );
}

interface ButtonProps extends AriaButtonProps {
  variant?: "default" | "cta" | "destructive";
}

function Button(props: ButtonProps) {
  const ref = React.useRef(null);
  const { buttonProps, isPressed } = useButton(props, ref);
  const { focusProps, isFocusVisible } = useFocusRing();

  let bg = "";
  if (props.variant === "destructive") {
    bg = isPressed ? "bg-red-600 text-white" : "bg-red-500 text-white";
  } else if (props.variant === "cta") {
    bg = isPressed ? "bg-blue-600 text-white" : "bg-blue-500 text-white";
  } else {
    bg = isPressed ? "bg-gray-300 text-gray-800" : "bg-gray-200 text-gray-800";
  }

  const focus = isFocusVisible ? "ring ring-offset-2 ring-blue-400" : "";

  return (
    <button
      {...mergeProps(buttonProps, focusProps)}
      ref={ref}
      className={`${focus} text-sm font-semibold py-2 px-4 rounded cursor-default focus:outline-none transition ${bg}`}
    >
      {props.children}
    </button>
  );
}

export default function Dialog() {
  const state = useOverlayTriggerState({});
  return (
    <div>
      <Button variant="cta" onPress={state.open}>
        Delete…
      </Button>
      <Modal state={state}>
        <AlertDialog
          title="Delete folder"
          confirmLabel="Delete"
          variant="destructive"
          onClose={state.close}
        >
          Are you sure you want to delete "Documents"? All contents will be
          perminately destroyed.
        </AlertDialog>
      </Modal>
    </div>
  );
}
