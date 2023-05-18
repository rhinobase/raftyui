import { useRef } from "react";
import type { ComboBoxProps } from "@react-types/combobox";
import { useComboBoxState } from "react-stately";
import { useComboBox, useFilter, useButton } from "react-aria";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { Input, InputGroup, Suffix } from "@rhino/input";
import { Button } from "@rhino/button";
import { PopoverContent } from "@rhino/popover";
import { ListBox } from "@rhino/select";
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
        <Input
          inputProps={inputProps}
          size={size}
          variant={variant}
          inputRef={inputRef}
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
            <ChevronUpDownIcon className="w-5 h-5" aria-hidden="true" />
          </Button>
        </Suffix>
      </InputGroup>
      <PopoverContent
        triggerState={state}
        triggerRef={popoverRef}
        placement="bottom start"
        className="w-full -ml-3"
      >
        <ListBox
          {...listBoxProps}
          listBoxRef={listBoxRef}
          state={state}
          size={size}
        />
      </PopoverContent>
    </div>
  );
}
