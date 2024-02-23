"use client";
import { useCallback, useEffect, useState } from "react";

const BREAKPOINTS = {
  sm: 0,
  md: 1,
  lg: 2,
  xl: 3,
} as const;

type BreakpointType = keyof typeof BREAKPOINTS;
const KEYS = Object.keys(BREAKPOINTS);

export function useBreakpointValue<T = unknown>(
  values?: {
    [K in BreakpointType]?: T;
  },
) {
  const [breakpoint, setBreakPoint] = useState<BreakpointType>("sm");
  const [width, setWidth] = useState<number>();

  const handleResize = useCallback(() => setWidth(window.innerWidth), []);

  useEffect(() => {
    // Calling for the first time, to initialize the value
    handleResize();

    // Adding the event listener to change value on resize
    window.addEventListener("resize", handleResize);

    // Removing the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  useEffect(() => {
    if (!width) return;

    if (width < 768) setBreakPoint("sm");
    else if (768 <= width && width < 1024) setBreakPoint("md");
    else if (1024 <= width && width < 1280) setBreakPoint("lg");
    else setBreakPoint("xl");
  }, [width]);

  if (values)
    for (let i = BREAKPOINTS[breakpoint]; i >= 0; i--) {
      const value = values[KEYS[i] as BreakpointType];
      if (value) return value;
    }

  return undefined;
}
