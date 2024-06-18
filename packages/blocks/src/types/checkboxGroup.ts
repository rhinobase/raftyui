export type CheckboxGroupProps = {
  type: "checkboxGroup";
  options: {
    value: string | number;
    label?: string;
  }[];
  defaultValue?: (string | number)[];
};
