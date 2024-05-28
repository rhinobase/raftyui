import { createContext } from "../utils";

export const [TimelineProvider, useTimelineContext] =
  createContext<TimelineContext>({
    name: "TimelineContext",
    hookName: "useTimelineContext",
    providerName: "<Timeline />",
  });

export interface TimelineContext {
  readonly align: "left" | "right";
  readonly size: "sm" | "md" | "lg";
}
