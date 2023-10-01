"use client";
import { useCallback, useEffect, useState } from "react";

type Breakpoint = "sm" | "md" | "lg" | "xl";

export function useBreakpointValue<T = unknown>(props?: {
  [K in Breakpoint]?: T;
}) {
  const [breakpoint, setBreakPoint] = useState<Breakpoint>("sm");
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

  if (!props) return undefined;

  return props[breakpoint as keyof typeof props];
}
