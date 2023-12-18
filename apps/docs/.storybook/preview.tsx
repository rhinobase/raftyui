import type { Preview } from "@storybook/react";
import React from "react";
/* eslint-disable @next/next/no-page-custom-font */
import "./storybook.css";

const DEFAULT_THEME = "light";

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    toolbar: {
      icon: "paintbrush",
      // Array of plain string values or MenuItem shape
      items: [
        { value: "light", title: "Light", left: "🌞" },
        { value: "dark", title: "Dark", left: "🌛" },
      ],
      // Change title based on selected value
      dynamicTitle: true,
    },
  },
};

const preview: Preview = {
  parameters: {
    layout: "fullscreen",
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const { theme } = context.globals;

      React.useEffect(() => {
        const htmlTag = document.documentElement;

        const tmp = theme || DEFAULT_THEME;
        if (tmp === "dark") htmlTag.classList.add("dark");
        else htmlTag.classList.remove("dark");
      }, [theme]);

      return (
        <div className="dark:bg-secondary-900">
          <div className="mx-auto flex h-screen w-full max-w-3xl flex-col items-center justify-center gap-2">
            <Story />
          </div>
        </div>
      );
    },
  ],
};

export default preview;
