export type SwitchGroupProps = {
  type: "switchGroup";
  options: {
    value: string | number;
    label?: string;
  }[];
  defaultValue?: (string | number)[];
};
