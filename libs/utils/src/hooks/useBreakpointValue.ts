import { useCallback, useEffect, useState } from "react";

const breakpoints = {
  320: "sm",
  768: "md",
  1024: "lg",
  1280: "xl",
};

export function useBreakpointValue<T>(props: {
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
}) {
  const [breakpoint, setBreakPoint] = useState("sm");
  const [windowSize, setWindowSize] = useState<{
    width?: number;
    height?: number;
  }>({
    width: undefined,
    height: undefined,
  });

  const handleResize = useCallback(
    () =>
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      }),
    []
  );

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowSize.width)
      if (360 <= windowSize.width && windowSize.width < 768)
        setBreakPoint(breakpoints[320]);
      else if (768 <= windowSize.width && windowSize.width < 1024)
        setBreakPoint(breakpoints[768]);
      else if (1024 <= windowSize.width && windowSize.width < 1280)
        setBreakPoint(breakpoints[1024]);
      else if (1280 <= windowSize.width) setBreakPoint(breakpoints[1280]);
  }, [windowSize.width]);

  return props[breakpoint as keyof typeof props];
}
