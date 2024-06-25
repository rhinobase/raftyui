export type MultiListboxProps = {
  type: "multiListbox";
  options: {
    value: string;
    label?: string;
  }[];
  defaultValue?: string[];
};
