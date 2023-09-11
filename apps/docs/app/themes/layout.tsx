"use client";
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@rafty/ui";
import { HiCheck, HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useTheme } from "next-themes";
import { useState } from "react";

const ColorTheme = {
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

const defaults: (keyof typeof ColorTheme)[] = [
  "purple",
  "red",
  "green",
  "blue",
  "gray",
];

export default function ThemeBuilderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [color, changeColor] = useState<keyof typeof ColorTheme>("purple");
  const { setTheme, theme, themes } = useTheme();

  return (
    <div
      className={`md:py-10 px-4 py-4 md:px-10 lg:px-0 w-full theme-${color}`}
    >
      <div className="flex justify-start lg:justify-between flex-col lg:flex-row">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold">Make it yours.</h1>
          <h4 className="text-secondary-400 text-sm lg:text-lg">
            Hand-picked themes that you can copy and paste into your apps.
          </h4>
        </div>
        <div className="flex items-center gap-3 py-2 lg:justify-end">
          {defaults.map((c) => (
            <Tooltip key={c}>
              <TooltipTrigger asChild>
                <Button
                  key={c}
                  size="fab"
                  className={`${ColorTheme[c]} !p-1 min-h-[26px] min-w-[26px]`}
                  onClick={() => changeColor(c as keyof typeof ColorTheme)}
                >
                  {color == c && (
                    <HiCheck className="text-white stroke-1 font-bold" />
                  )}
                </Button>
              </TooltipTrigger>
              <TooltipContent side="top">{c}</TooltipContent>
            </Tooltip>
          ))}
          <Popover>
            <PopoverTrigger variant="outline">Customize</PopoverTrigger>
            <PopoverContent showArrow align="end">
              <div className="w-[300px] p-2 space-y-3">
                <div className="space-y-1">
                  <h5 className="text-xs font-medium">Color</h5>
                  <div className="grid grid-cols-3 gap-2">
                    {Object.entries(ColorTheme).map(([c, value]) => (
                      <Button
                        key={c}
                        size="sm"
                        isActive={color == c}
                        variant="outline"
                        className="capitalize !justify-start"
                        leftIcon={
                          <div
                            className={`h-3 w-3 rounded-full ${value} flex justify-center items-center`}
                          />
                        }
                        onClick={() =>
                          changeColor(c as keyof typeof ColorTheme)
                        }
                      >
                        {c}
                      </Button>
                    ))}
                  </div>
                </div>
                <div className="space-y-1">
                  <h5 className="text-xs font-medium">Mode</h5>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      leftIcon={<HiOutlineSun size={15} />}
                      isActive={theme == themes[0]}
                      onClick={() => setTheme("light")}
                    >
                      Light
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      leftIcon={<HiOutlineMoon size={15} />}
                      isActive={theme == themes[1]}
                      onClick={() => setTheme("dark")}
                    >
                      Dark
                    </Button>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      {children}
    </div>
  );
}
