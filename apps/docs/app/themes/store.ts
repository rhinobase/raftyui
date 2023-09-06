import { create } from "zustand";

export const ColorTheme = {
  purple: "!bg-purple-500",
  teal: "!bg-teal-500",
  fuchsia: "!bg-fuchsia-500",
  rose: "!bg-rose-500",
  pink: "!bg-pink-500",
  indigo: "!bg-indigo-500",
  blue: "!bg-blue-500",
  sky: "!bg-sky-500",
  emerald: "!bg-emerald-500",
};

type ColorStore = {
  color: keyof typeof ColorTheme;
  changeColor: (color: keyof typeof ColorTheme) => void;
};

export const useColorStore = create<ColorStore>((set) => ({
  color: "purple",
  changeColor: (color) => set({ color }),
}));
