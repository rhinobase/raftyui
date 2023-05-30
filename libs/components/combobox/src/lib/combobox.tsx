import { useRef } from "react";
import type { ComboBoxProps } from "@react-types/combobox";
import { useComboBoxState } from "react-stately";
import { useComboBox, useFilter, useButton } from "react-aria";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { InputField, InputGroup, Suffix } from "@rafty/input";
import { Button } from "@rafty/button";
import { PopoverContent } from "@rafty/popover";
import { ListBox } from "@rafty/select";
export {
  Item as ComboboxItem,
  Section as ComboboxSection,
} from "react-stately";

export type Combobox<T> = ComboBoxProps<T> & {
  size?: "sm" | "md" | "lg";
  variant?: "solid" | "outline" | "ghost";
};

export function Combobox<T extends object>(props: Combobox<T>) {
  const { size = "md", variant = "outline" } = props;

  const { contains } = useFilter({ sensitivity: "base" });
  const state = useComboBoxState({ ...props, defaultFilter: contains });

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
      listBoxRef,
      popoverRef,
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
          onFocus={() => state.open()}
          ref={inputRef}
        />
        <Suffix>
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
      {state.isOpen && (
        <PopoverContent
          triggerState={state}
          triggerRef={popoverRef}
          placement="bottom start"
          className="-ml-3 w-full"
        >
          <ListBox
            {...listBoxProps}
            listBoxRef={listBoxRef}
            state={state}
            size={size}
          />
        </PopoverContent>
      )}
    </div>
  );
}
