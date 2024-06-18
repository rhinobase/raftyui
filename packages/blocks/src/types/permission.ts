type OptionsType = {
  label: string;
  value: string | number | OptionsType[];
};

export type PermissionFieldProps = {
  type: "permission";
  placeholder?: string;
  defaultValue?: {
    collection: string | number;
    list: boolean;
    view: boolean;
    create: boolean;
    update: boolean;
    delete: boolean;
  }[];
  options: OptionsType[];
};
