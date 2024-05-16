export type DateRangeFieldProps = {
  type: "dateRange";
  placeholder?: {
    from?: string;
    to?: string;
  };
  defaultValue?: [string] | [string, string];
};
