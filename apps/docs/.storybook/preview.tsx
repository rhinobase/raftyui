import "../styles/globals.css";
import type { Preview } from "@storybook/react";
import { useEffect } from "react";

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
    (Story) => (
      <div className="w-full flex flex-col items-center justify-center gap-2 mx-auto max-w-3xl h-screen">
        <Story />
      </div>
    ),
    (Story, context) => {
      const { theme } = context.globals;

      useEffect(() => {
        const htmlTag = document.documentElement;

        const tmp = theme || DEFAULT_THEME;
        if (tmp == "dark") htmlTag.classList.add("dark");
        else htmlTag.classList.remove("dark");
      }, [theme]);

      return (
        <div className="dark:bg-secondary-900">
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
