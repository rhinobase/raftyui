import { type SizeType, createContext } from "../utils/index.js";

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
