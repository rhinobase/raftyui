import { createContext } from "@rafty/ui";

export const [TimelineProvider, useTimelineContext] =
  createContext<TimelineContext>({
    name: "TimelineContext",
    hookName: "useTimelineContext",
    providerName: "<Timeline />",
  });

export interface TimelineContext {
  readonly mode: "left" | "right" | undefined;
  readonly reverse: boolean | undefined;
}
