import "../styles/compile.css";
import React from "react";
import type { Preview } from "@storybook/react";
import { withTailwindTheme } from "./withTailwindTheme.decorator";

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
  ],
};
export const decorators = [withTailwindTheme];

export default preview;
