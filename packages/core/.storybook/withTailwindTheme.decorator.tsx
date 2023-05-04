import React from "react";
import { useEffect } from "react";

export const DEFAULT_THEME = "light";

export const withTailwindTheme = (Story, context) => {
  const { theme } = context.globals;

  useEffect(() => {
    const htmlTag = document.documentElement;

    // Set the "data-mode" attribute on the iFrame html tag
    htmlTag.setAttribute("data-mode", theme || DEFAULT_THEME);
  }, [theme]);

  return (
    <div className="dark:bg-secondary-900">
      <Story />
    </div>
  );
};
