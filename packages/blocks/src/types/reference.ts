export type OptionsType = {
  label: string;
  value: string | number | OptionsType[];
};

export type ReferenceFieldProps = {
  type: "reference";
  placeholder?: {
    trigger?: string | undefined;
    search?: string | undefined;
  };
  defaultValue?: string | number;
  options: OptionsType[];
};
