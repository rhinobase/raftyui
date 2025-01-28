import { createContext } from "../utils/client/index.js";
import type { SizeType } from "../utils/index.js";

export const [SliderProvider, useSliderContext] = createContext<SliderContext>({
  name: "SliderContext",
  hookName: "useSliderContext",
  providerName: "<Slider />",
});

export interface SliderContext {
  readonly size: SizeType;
  readonly colorScheme:
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning";
}
