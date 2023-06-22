import { useRef } from "react";
import type { ComboBoxProps } from "@react-types/combobox";
import { useComboBoxState } from "react-stately";
import { useComboBox, useButton } from "react-aria";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { InputField, InputGroup, Suffix } from "../input";
import { Button } from "../button";
import { PopoverContent } from "../popover";
import { ListBox } from "../select";
import { Spinner } from "../spinner";

export {
  Item as ComboboxItem,
  Section as ComboboxSection,
} from "react-stately";

export type Combobox<T> = ComboBoxProps<T> & {
  size?: "sm" | "md" | "lg";
  variant?: "solid" | "outline" | "ghost";
  isLoading?: boolean;
};

export function Combobox<T extends object>({
  size = "md",
  variant = "outline",
  isLoading = false,
  ...props
}: Combobox<T>) {
  const state = useComboBoxState({
    ...props,
    allowsEmptyCollection: true,
  });

  // Used by combobox
  const buttonRef = useRef(null);
  const inputRef = useRef(null);
  const listBoxRef = useRef(null);
  const popoverRef = useRef(null);

  const {
    buttonProps: triggerProps,
    inputProps,
    listBoxProps,
  } = useComboBox(
    {
      ...props,
      inputRef,
      buttonRef,
      popoverRef,
      listBoxRef,
      menuTrigger: "focus",
    },
    state
  );

  const { buttonProps } = useButton(triggerProps, buttonRef);

  return (
    <div className="relative" ref={popoverRef}>
      <InputGroup>
        <InputField
          {...inputProps}
          size={size}
          variant={variant}
          ref={inputRef}
          onClickCapture={() => state.open()}
        />
        <Suffix>
          {isLoading && (
            <Spinner size="sm" className="absolute right-10 top-2.5" />
          )}
          <Button
            {...buttonProps}
            ref={buttonRef}
            isActive={state.isOpen}
            size="sm"
            variant="ghost"
            className="!z-[1] !p-1"
          >
            <ChevronUpDownIcon className="h-5 w-5" aria-hidden="true" />
          </Button>
        </Suffix>
      </InputGroup>
      <PopoverContent
        triggerState={state}
        triggerRef={popoverRef}
        scrollRef={listBoxRef}
        isNonModal
        placement="bottom start"
        className="-ml-3 w-full"
      >
        <ListBox
          {...listBoxProps}
          listBoxRef={listBoxRef}
          autoFocus={state.focusStrategy}
          shouldSelectOnPressUp
          state={state}
          shouldUseVirtualFocus
          size={size}
        />
      </PopoverContent>
    </div>
  );
}
