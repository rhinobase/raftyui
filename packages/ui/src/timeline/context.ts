import { createContext } from "../utils/client/index.js";
import type { SizeType } from "../utils/index.js";

export const [TimelineProvider, useTimelineContext] =
  createContext<TimelineContext>({
    name: "TimelineContext",
    hookName: "useTimelineContext",
    providerName: "<Timeline />",
  });

export interface TimelineContext {
  readonly align: "left" | "right";
  readonly size: SizeType;
}
