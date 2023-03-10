import * as React from "react";
import type { ComboBoxProps } from "@react-types/combobox";
import { useComboBoxState, useSearchFieldState } from "react-stately";
import { useComboBox, useFilter, useButton, useSearchField } from "react-aria";
import type { OverlayTriggerState } from "react-stately";
import type { AriaPopoverProps } from "@react-aria/overlays";
import { usePopover, DismissButton, Overlay } from "@react-aria/overlays";
import type { AriaListBoxOptions } from "@react-aria/listbox";
import type { ListState } from "react-stately";
import type { Node } from "@react-types/shared";
import { useListBox, useListBoxSection, useOption } from "react-aria";
import { InputField } from "../input-field";

export { Item } from "react-stately";

export function SearchAutocomplete<T extends object>(props: ComboBoxProps<T>) {
  let { contains } = useFilter({ sensitivity: "base" });
  let state = useComboBoxState({ ...props, defaultFilter: contains });

  let inputRef = React.useRef(null);
  let listBoxRef = React.useRef(null);
  let popoverRef = React.useRef(null);

  let { inputProps, listBoxProps, labelProps } = useComboBox(
    {
      ...props,
      inputRef,
      listBoxRef,
      popoverRef,
    },
    state,
  );

  // Get props for the clear button from useSearchField
  let searchProps = {
    label: props.label,
    value: state.inputValue,
    onChange: (v: string) => state.setInputValue(v),
  };

  let searchState = useSearchFieldState(searchProps);
  let { clearButtonProps } = useSearchField(searchProps, searchState, inputRef);
  let clearButtonRef = React.useRef(null);
  let { buttonProps } = useButton(clearButtonProps, clearButtonRef);
  let outerRef = React.useRef(null);

  return (
    <div className="relative mt-4 flex flex-col gap-1">
      <label
        {...labelProps}
        className="block text-left text-sm font-medium text-gray-700"
      >
        {props.label}
      </label>
      <div ref={outerRef} className="relative w-full">
        <div className="absolute top-0 left-0 flex h-full w-10 items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-5 w-5 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
        <InputField
          {...inputProps}
          onFocus={() => state.setOpen(true)}
          onBlur={() => state.setOpen(false)}
          ref={inputRef}
          className="!px-10 py-1 outline-none"
        />
        <button
          {...buttonProps}
          ref={clearButtonRef}
          style={{ visibility: state.inputValue !== "" ? "visible" : "hidden" }}
          className="absolute right-0 top-0 flex h-full w-10 items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4 text-gray-500 hover:text-gray-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      {state.isOpen && (
        <Popover
          popoverRef={popoverRef}
          triggerRef={outerRef}
          state={state}
          isNonModal
          placement="bottom start"
          className="w-52"
        >
          <ListBox {...listBoxProps} listBoxRef={listBoxRef} state={state} />
        </Popover>
      )}
    </div>
  );
}

interface PopoverProps extends Omit<AriaPopoverProps, "popoverRef"> {
  children: React.ReactNode;
  state: OverlayTriggerState;
  className?: string;
  popoverRef?: React.RefObject<HTMLDivElement>;
}

export function Popover(props: PopoverProps) {
  let ref = React.useRef<HTMLDivElement>(null);
  let { popoverRef = ref, state, children, className, isNonModal } = props;

  let { popoverProps, underlayProps } = usePopover(
    {
      ...props,
      popoverRef,
    },
    state,
  );

  return (
    <Overlay>
      {!isNonModal && <div {...underlayProps} className="fixed inset-0" />}
      <div
        {...popoverProps}
        ref={popoverRef}
        className={`z-10 mt-2 rounded-md border border-gray-300 bg-white shadow-lg ${className}`}
      >
        {!isNonModal && <DismissButton onDismiss={state.close} />}
        {children}
        <DismissButton onDismiss={state.close} />
      </div>
    </Overlay>
  );
}

interface ListBoxProps extends AriaListBoxOptions<unknown> {
  listBoxRef?: React.RefObject<HTMLUListElement>;
  state: ListState<unknown>;
}

interface SectionProps {
  section: Node<unknown>;
  state: ListState<unknown>;
}

interface OptionProps {
  item: Node<unknown>;
  state: ListState<unknown>;
}

export function ListBox(props: ListBoxProps) {
  let ref = React.useRef<HTMLUListElement>(null);
  let { listBoxRef = ref, state } = props;
  let { listBoxProps } = useListBox(props, state, listBoxRef);

  return (
    <ul
      {...listBoxProps}
      ref={listBoxRef}
      className="max-h-72 w-full overflow-auto outline-none"
    >
      {[...state.collection].map((item) =>
        item.type === "section" ? (
          <ListBoxSection key={item.key} section={item} state={state} />
        ) : (
          <Option key={item.key} item={item} state={state} />
        ),
      )}
    </ul>
  );
}

function ListBoxSection({ section, state }: SectionProps) {
  let { itemProps, headingProps, groupProps } = useListBoxSection({
    heading: section.rendered,
    "aria-label": section["aria-label"],
  });

  return (
    <>
      <li {...itemProps} className="pt-2">
        {section.rendered && (
          <span
            {...headingProps}
            className="mx-3 text-xs font-bold uppercase text-gray-500"
          >
            {section.rendered}
          </span>
        )}
        <ul {...groupProps}>
          {[...section.childNodes].map((node) => (
            <Option key={node.key} item={node} state={state} />
          ))}
        </ul>
      </li>
    </>
  );
}

function Option({ item, state }: OptionProps) {
  let ref = React.useRef<HTMLLIElement>(null);
  let { optionProps, isDisabled, isSelected, isFocused } = useOption(
    {
      key: item.key,
    },
    state,
    ref,
  );

  let text = "text-gray-700";
  if (isFocused || isSelected) {
    text = "text-primary-600";
  } else if (isDisabled) {
    text = "text-gray-200";
  }

  return (
    <li
      {...optionProps}
      ref={ref}
      className={`m-1 flex cursor-default items-center justify-between rounded-md py-2 px-2 text-sm outline-none ${text} ${
        isFocused ? "bg-primary-50" : ""
      } ${isSelected ? "font-bold" : ""}`}
    >
      {item.rendered}
      {isSelected && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="text-primary-600 h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>
      )}
    </li>
  );
}
