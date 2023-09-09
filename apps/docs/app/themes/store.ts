import { create } from "zustand";

export const ColorTheme = {
  gray: "!bg-gray-500",
  red: "!bg-red-500",
  orange: "!bg-orange-500",
  yellow: "!bg-orange-500",
  green: "!bg-green-500",
  teal: "!bg-teal-500",
  sky: "!bg-sky-500",
  blue: "!bg-blue-500",
  indigo: "!bg-indigo-500",
  purple: "!bg-purple-500",
  fuchsia: "!bg-fuchsia-500",
  pink: "!bg-pink-500",
  rose: "!bg-rose-500",
};

type ColorStore = {
  color: keyof typeof ColorTheme;
  changeColor: (color: keyof typeof ColorTheme) => void;
};

export const useColorStore = create<ColorStore>((set) => ({
  color: "purple",
  changeColor: (color) => set({ color }),
}));
