export type SelectProps = {
  type: "select";
  placeholder?: string;
  defaultValue?: string | number;
  options: {
    value: string | number;
    label?: string;
  }[];
};
