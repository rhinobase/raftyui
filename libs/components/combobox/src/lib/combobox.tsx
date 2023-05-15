import * as React from "react";
import type { ComboBoxProps } from "@react-types/combobox";
import { useComboBoxState } from "react-stately";
import { useComboBox, useFilter, useButton } from "react-aria";
import { ListBox } from "@rhino/select";
import { PopoverContent } from "@rhino/popover";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { Input, InputGroup, Suffix } from "@rhino/input";
import { useRef } from "react";
import { Button } from "@rhino/button";
export {
  Item as ComboboxItem,
  Section as ComboboxSection,
} from "react-stately";

export type ComboBox = {
  size?: "sm" | "md" | "lg";
  variant?: "solid" | "outline" | "ghost";
};

export function ComboBox<T extends object>(props: ComboBoxProps<T> & ComboBox) {
  const { size = "md", variant = "outline" } = props;

  const ref = useRef(null);

  const { contains } = useFilter({ sensitivity: "base" });
  const state = useComboBoxState({ ...props, defaultFilter: contains });

  const buttonRef = React.useRef(null);
  const inputRef = React.useRef(null);
  const listBoxRef = React.useRef(null);
  const popoverRef = React.useRef(null);

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
    <div className="relative" ref={ref}>
      <InputGroup ref={ref}>
        <Input
          inputProps={inputProps}
          size={size}
          variant={variant}
          ref={inputRef}
        />
        <Suffix>
          <Button
            {...buttonProps}
            ref={buttonRef}
            isActive={state.isFocused}
            size="icon"
            variant="ghost"
          >
            <ChevronUpDownIcon className="w-6 h-6" aria-hidden="true" />
          </Button>
        </Suffix>
      </InputGroup>
      <PopoverContent
        triggerState={state}
        triggerRef={ref}
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
