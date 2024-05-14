export type SegmentedControlProps = {
  type: "segmentedControl";
  options: {
    value: string;
    label?: string;
  }[];
  defaultValue?: string;
};
