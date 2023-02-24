import Select, { components } from "react-select";
import { classNames } from "@rhinobase/utils";
import React from "react";

// ReactSelect Component
export interface MultiSelect {
  name?: string;
  options: object[];
  defaultValue?: object;
  placeholder?: string;
  isSearchable?: boolean;
  isClearable?: boolean;
  disabled?: boolean;
}

export function MultiSelect({
  name = "select",
  options,
  defaultValue,
  placeholder = "",
  isClearable = false,
  disabled = false,
}: MultiSelect) {
  return (
    <Select
      name={name}
      isDisabled={disabled}
      isMulti
      defaultValue={defaultValue}
      placeholder={placeholder}
      unstyled
      components={{
        DropdownIndicator: () => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        ),
        // ClearIndicator: () => (
        //   <svg
        //     xmlns="http://www.w3.org/2000/svg"
        //     fill="none"
        //     viewBox="0 0 24 24"
        //     strokeWidth="1.5"
        //     stroke="currentColor"
        //     className="w-5 h-5 text-zinc-700"
        //   >
        //     <path
        //       strokeLinecap="round"
        //       strokeLinejoin="round"
        //       d="M6 18L18 6M6 6l12 12"
        //     />
        //   </svg>
        // ),
        IndicatorSeparator: () => null,
        Input: (props) => (
          <components.Input
            {...props}
            type={undefined}
            className="dark:text-secondary-100"
          />
        ),
      }}
      isClearable
      isSearchable
      options={options}
      styles={{
        control: (base, state) => ({
          ...base,
          zIndex: 1,
        }),
        menuPortal: (base) => ({
          ...base,
          zIndex: 999,
        }),
        menu: () => ({}),
      }}
      menuPortalTarget={document.body}
      // menuIsOpen
      classNames={{
        container: () => "rounded-md",
        control: (state) =>
          classNames(
            state.isFocused
              ? "ring-2 border-primary-500 ring-primary-100/10"
              : "dark:border-secondary-700",
            "dark:bg-transparent  dark:text-secondary-100 rounded-md px-2 border z-1 !min-h-[30px] md:!min-h-[42px] !py-1",
          ),
        clearIndicator: () => "text-zinc-400 stroke-1 hover:text-zinc-600",
        menu: () =>
          "dark:bg-secondary-800 bg-white rounded-md shadow-xl p-1 border-0 w-full absolute mt-1",
        menuList: () => "focus:dark:bg-secondary-700",
        valueContainer: () => "gap-1",
        multiValue: () =>
          "dark:bg-secondary-800 dark:text-secondary-100 bg-secondary-100",
        multiValueLabel: () =>
          "dark:text-secondary-100 px-2 font-medium text-sm",
        multiValueRemove: (state) =>
          "bg-secondary-300/50 dark:bg-secondary-700 text-secondary-600 dark:text-secondary-200 px-[3px]",
        input: () => "dark:text-secondary-100",
        singleValue: () => "dark:text-secondary-100",
        option: (state) =>
          classNames(
            state.isFocused && "bg-secondary-200/60 dark:bg-secondary-700/50",
            state.isSelected && "bg-secondary-200/60 dark:bg-secondary-700/50",
            "text-secondary-700 hover:bg-secondary-200/60 dark:text-secondary-300 dark:hover:bg-secondary-700/50 active:bg-secondary-200 dark:active:bg-secondary-700 rounded-md px-5 py-1 font-semibold",
          ),
      }}
    />
  );
}
