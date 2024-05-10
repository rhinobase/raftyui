import type { Slider } from "@rafty/ui";

export type RangeSliderProps = Pick<Slider, "min" | "max" | "step"> & {
  type: "rangeSlider";
  defaultValue?: [number, number];
};
