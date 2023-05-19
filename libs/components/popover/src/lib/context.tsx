import { useContext, createContext, ReactNode, useRef } from "react";
import { OverlayTriggerProps, useOverlayTriggerState } from "react-stately";
import { createContext as createCustomContext } from "@rafty/utils";
import { PopoverAria } from "react-aria";

const PopoverContext = createContext<ReturnType<typeof useProvidePopover>>({
  isBarebone: false,
  triggerRef: { current: null },
  state: {
    isOpen: false,
    setOpen: () => undefined,
    open: () => undefined,
    toggle: () => undefined,
    close: () => undefined,
  },
});

type Props = {
  children: ReactNode;
} & useProvidePopover;

export function PopoverProvider({ children, ...values }: Props) {
  const value = useProvidePopover(values);
  return (
    <PopoverContext.Provider value={value}>{children}</PopoverContext.Provider>
  );
}

type useProvidePopover = {
  isBarebone: boolean;
  triggerProps: OverlayTriggerProps;
};
function useProvidePopover(props: useProvidePopover) {
  const state = useOverlayTriggerState(props.triggerProps);
  const triggerRef = useRef<Element>(null);

  return {
    isBarebone: props.isBarebone,
    triggerRef,
    state,
  };
}

export const usePopover = () => useContext(PopoverContext);

export const [PopoverContentProvider, usePopoverContent] =
  createCustomContext<PopoverAria>({
    name: "PopoverContentContext",
    hookName: "usePopoverContentContext",
    providerName: "<PopoverContent />",
  });
