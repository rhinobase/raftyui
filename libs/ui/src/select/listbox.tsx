import React from "react";
import type { AriaListBoxOptions } from "@react-aria/listbox";
import type { ListState } from "react-stately";
import type { Node } from "@react-types/shared";
import { useListBox, useListBoxSection, useOption } from "react-aria";
import { CheckIcon } from "@heroicons/react/24/outline";
import { classNames } from "@rafty/utils";

export type ListBox = AriaListBoxOptions<unknown> & {
  listBoxRef?: React.RefObject<HTMLUListElement>;
  state: ListState<unknown>;
  size?: "sm" | "md" | "lg";
};

export function ListBox(props: ListBox) {
  const ref = React.useRef<HTMLUListElement>(null);
  const { listBoxRef = ref, state } = props;
  const { listBoxProps } = useListBox(props, state, listBoxRef);

  return (
    <ul
      {...listBoxProps}
      className="max-h-72 w-full overflow-auto outline-none"
      ref={listBoxRef}
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
          className="mx-3 text-xs font-bold uppercase text-gray-500"
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

const optionClasses = {
  size: {
    sm: "rounded px-2 py-1 text-sm",
    md: "rounded-md px-3 py-1.5",
    lg: "rounded-md px-4 py-2 text-lg",
  },
};

type Option = {
  item: Node<unknown>;
  state: ListState<unknown>;
  size?: "sm" | "md" | "lg";
};

function Option({ item, state, size = "md" }: Option) {
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
        optionClasses.size[size],
        isFocused || isSelected
          ? "text-secondary-600 dark:text-secondary-100"
          : "text-secondary-700 dark:text-secondary-200 data-[disabled=true]:text-secondary-200",
        "data-[focused=true]:bg-secondary-100 dark:data-[focused=true]:bg-secondary-700/50",
        "data-[selected=true]:bg-secondary-200/70 dark:data-[selected=true]:bg-secondary-700 font-semibold",
        "m-1 flex cursor-pointer items-center justify-between outline-none"
      )}
      data-selected={isSelected}
      data-focused={isFocused}
      data-disabled={isDisabled}
    >
      {item.rendered}
      {isSelected && (
        <CheckIcon
          aria-hidden="true"
          className="text-secondary-600 dark:text-secondary-100 h-5 w-5"
        />
      )}
    </li>
  );
}
