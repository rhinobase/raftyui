export type ListboxProps = {
  type: "listbox";
  options: {
    value: string;
    label?: string;
  }[];
  defaultValue?: string;
};
