import type { Slider } from "@rafty/ui";

export type SliderProps = Pick<Slider, "min" | "max" | "step"> & {
  type: "slider";
  defaultValue?: number;
};
