import { createContext } from "@rafty/shared";

export const [TimelineProvider, useTimelineContext] =
  createContext<TimelineContext>({
    name: "TimelineContext",
    hookName: "useTimelineContext",
    providerName: "<Timeline />",
  });

export interface TimelineContext {
  readonly mode: "left" | "right";
}
