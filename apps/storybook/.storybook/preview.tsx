import "./styles.css";
import React from "react";
import type { Preview } from "@storybook/react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const DEFAULT_THEME = "light";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: Infinity },
  },
});

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
        <QueryClientProvider client={queryClient}>
          <div className="dark:bg-secondary-900">
            <div className="mx-auto flex h-screen w-full max-w-3xl flex-col items-center justify-center gap-2">
              <Story />
            </div>
          </div>
        </QueryClientProvider>
      );
    },
  ],
};

export default preview;
