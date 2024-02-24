import { createContext } from "@rafty/shared";

export const [SliderProvider, useSliderContext] = createContext<SliderContext>({
  name: "SliderContext",
  hookName: "useSliderContext",
  providerName: "<Slider />",
});

export interface SliderContext {
  readonly size: "sm" | "md" | "lg";
  readonly colorScheme:
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning";
}
