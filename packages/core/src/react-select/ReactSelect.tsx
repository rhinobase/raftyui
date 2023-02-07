import { HiChevronDown } from "react-icons/hi2";
import Select, { components } from "react-select";
import { classNames } from "@rhinobase/lib";

// ReactSelect Component
export interface IReactSelect {
  name?: string;
  options: object[];
  type: "single" | "multiple";
  defaultValue?: object;
  placeholder?: string;
  isSearchable?: boolean;
  isClearable?: boolean;
  disabled?: boolean;
}

export function ReactSelect({
  name = "select",
  options,
  type = "single",
  defaultValue,
  placeholder = "",
  isSearchable = false,
  isClearable = false,
  disabled = false,
}: IReactSelect) {
  return (
    <Select
      name={name}
      isDisabled={disabled}
      isMulti={type == "multiple" ? true : false}
      defaultValue={defaultValue}
      placeholder={placeholder}
      components={{
        DropdownIndicator: () => <HiChevronDown className="text-secondary-600 mr-2" size={14} />,
        IndicatorSeparator: () => null,
        Input: (props) => (
          <components.Input {...props} type={undefined} className="dark:text-secondary-100" />
        ),
      }}
      isClearable={isClearable}
      isSearchable={isSearchable}
      options={options}
      styles={{
        control: (base, state) => ({
          ...base,
          zIndex: 1,
        }),
        option: (base, state) => ({
          ...base,
          fontSize: "14px",
          backgroundColor: state.isSelected ? "#FDFDFC" : "",
        }),
        menuPortal: (base) => ({
          ...base,
          zIndex: 999,
        }),
        menu: () => ({}),
      }}
      menuPortalTarget={document.body}
      menuIsOpen
      classNames={{
        container: () => "rounded-md",
        control: () => "dark:bg-transparent dark:border-secondary-700 dark:text-secondary-100 rounded-md",
        menu: () =>
          "dark:bg-secondary-800 bg-white rounded-md shadow-lg py-base px-md border-0 w-full absolute mt-1",
        menuList: () => "focus:dark:bg-secondary-700",
        multiValue: () => "dark:bg-secondary-800 dark:text-secondary-100",
        multiValueLabel: () => "dark:text-secondary-100",
        multiValueRemove: () =>
          "bg-secondary-300/50 dark:bg-secondary-700/30 dark:hover:bg-secondary-600 hover:dark:text-white",
        input: () => "dark:text-secondary-100",
        singleValue: () => "dark:text-secondary-100",
        option: (state) =>
          classNames(
            state.isFocused && "bg-secondary-200/60 dark:bg-secondary-700",
            state.isSelected && "bg-secondary-200/60 dark:bg-secondary-700",
            "text-secondary-700 hover:bg-secondary-100 dark:text-secondary-300 dark:hover:bg-secondary-700/40 active:bg-secondary-200 dark:active:bg-secondary-700 rounded-md px-2xl py-md font-medium"
          ),
      }}
    />
  );
}
