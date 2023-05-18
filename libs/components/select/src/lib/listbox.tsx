import * as React from "react";
import type { AriaListBoxOptions } from "@react-aria/listbox";
import type { ListState } from "react-stately";
import type { Node } from "@react-types/shared";
import { useListBox, useListBoxSection, useOption } from "react-aria";
import { CheckIcon } from "@heroicons/react/24/outline";
import { classNames } from "@rhino/utils";

export type ListBox = {
  listBoxRef?: React.RefObject<HTMLUListElement>;
  state: ListState<unknown>;
  size?: "sm" | "md" | "lg";
} & AriaListBoxOptions<unknown>;

export function ListBox(props: ListBox) {
  const ref = React.useRef<HTMLUListElement>(null);
  const { listBoxRef = ref, state } = props;
  const { listBoxProps } = useListBox(props, state, listBoxRef);

  return (
    <ul
      {...listBoxProps}
      ref={listBoxRef}
      className="w-full max-h-72 overflow-auto outline-none"
    >
      {[...state.collection].map((item) =>
        item.type === "section" ? (
          <ListBoxSection key={item.key} section={item} state={state} />
        ) : (
          <Option key={item.key} item={item} state={state} size={props.size} />
        )
      )}
    </ul>
  );
}

type ListBoxSection = {
  section: Node<unknown>;
  state: ListState<unknown>;
  size?: "sm" | "md" | "lg";
};

function ListBoxSection({ section, state, size }: ListBoxSection) {
  const { itemProps, headingProps, groupProps } = useListBoxSection({
    heading: section.rendered,
    "aria-label": section["aria-label"],
  });

  return (
    <li {...itemProps} className="pt-2">
      {section.rendered && (
        <span
          {...headingProps}
          className="text-xs font-bold uppercase text-gray-500 mx-3"
        >
          {section.rendered}
        </span>
      )}
      <ul {...groupProps}>
        {[...section.childNodes].map((node) => (
          <Option key={node.key} item={node} state={state} size={size} />
        ))}
      </ul>
    </li>
  );
}

type Option = {
  item: Node<unknown>;
  state: ListState<unknown>;
  size?: "sm" | "md" | "lg";
};

function Option({ item, state, size }: Option) {
  const ref = React.useRef<HTMLLIElement>(null);
  const { optionProps, isDisabled, isSelected, isFocused } = useOption(
    {
      key: item.key,
    },
    state,
    ref
  );

  return (
    <li
      {...optionProps}
      ref={ref}
      className={classNames(
        size === "sm" && "px-2 py-1 text-sm rounded",
        size === "md" && "px-3 py-1.5 rounded-md",
        size === "lg" && "px-4 py-2 text-lg rounded-md",
        isFocused || isSelected
          ? "text-secondary-600 dark:text-secondary-100"
          : isDisabled
          ? "text-secondary-200"
          : "text-secondary-700 dark:text-secondary-200",
        isFocused && "bg-secondary-200/70 dark:bg-secondary-700/60",
        isSelected &&
          "font-semibold bg-secondary-200/70 dark:bg-secondary-700/60",
        "m-1 outline-none cursor-pointer flex items-center justify-between"
      )}
    >
      {item.rendered}
      {isSelected && (
        <CheckIcon
          aria-hidden="true"
          className="w-5 h-5 text-secondary-600 dark:text-secondary-100"
        />
      )}
    </li>
  );
}
