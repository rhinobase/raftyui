import type { RangeTuple } from "fuse.js";

export type ComboboxOptionType = {
  label: string;
  value: string | number | ComboboxOptionType[];
  matches?: RangeTuple[];
};
