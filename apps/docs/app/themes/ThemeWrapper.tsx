"use client";
import {
  Button,
  Dialog,
  DialogContent,
  Text,
  DialogOverlay,
  DialogTrigger,
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  DialogTitle,
} from "@rafty/ui";
import { HiCheck, HiOutlineMoon, HiOutlineSun, HiX } from "react-icons/hi";
import { useTheme } from "next-themes";
import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { Fence } from "../../components/Fence";
import {
  HiOutlineDocumentDuplicate,
  HiOutlinePaintBrush,
} from "react-icons/hi2";

const COLOR_THEME = {
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

const defaults: (keyof typeof COLOR_THEME)[] = [
  "purple",
  "red",
  "green",
  "blue",
  "gray",
];

export default function ThemeBuilderWrapper({
  children,
}: {
  children: ReactNode;
}) {
  const [color, changeColor] = useState<keyof typeof COLOR_THEME>("purple");

  return (
    <div
      className={`w-full px-4 py-4 md:px-10 md:py-10 lg:px-0 theme-${color}`}
    >
      <div className="flex flex-col justify-start lg:flex-row lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold md:text-3xl">Make it yours.</h1>
          <h4 className="text-secondary-400 text-sm lg:text-lg">
            Hand-picked themes that you can copy and paste into your apps.
          </h4>
        </div>
        <div className="flex items-center gap-1.5 py-2 md:gap-3">
          {defaults.map((c) => (
            <Tooltip key={c}>
              <TooltipTrigger asChild>
                <Button
                  key={c}
                  size="fab"
                  className={`${COLOR_THEME[c]} min-h-[26px] min-w-[26px] !p-1`}
                  onClick={() => changeColor(c as keyof typeof COLOR_THEME)}
                >
                  {color == c && (
                    <HiCheck className="stroke-1 font-bold text-white" />
                  )}
                </Button>
              </TooltipTrigger>
              <TooltipContent side="top">{c}</TooltipContent>
            </Tooltip>
          ))}
          <div className="flex-1 md:hidden" />
          <CustomizeMenu color={color} changeColor={changeColor} />
          <CopyCodeDialog color={color} />
        </div>
      </div>
      {children}
      <div className="flex flex-col md:flex-row items-center gap-2 md:justify-between mt-4 md:mt-10">
        <p className="text-xs leading-none text-secondary-600">
          This page is inspired by{" "}
          <a
            href="https://x.com/shadcn?t=2gBGi1FW3vmW37m13hN-TA&s=33"
            target="_blank"
            className="text-blue-600 font-medium dark:text-blue-400"
          >
            @shadcn
          </a>
        </p>
        <p className="text-xs leading-none text-secondary-500">
          &copy; {new Date().getFullYear()} rhinobase, Inc. All rights reserved.
        </p>
      </div>
    </div>
  );
}

function CustomizeMenu({
  color,
  changeColor,
}: {
  color: keyof typeof COLOR_THEME;
  changeColor: Dispatch<SetStateAction<keyof typeof COLOR_THEME>>;
}) {
  const { setTheme, theme, themes } = useTheme();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div>
          <Button
            variant="outline"
            leftIcon={<HiOutlinePaintBrush size={19} />}
            className="hidden md:flex"
            aria-label="Select Theme Color"
          >
            Customize
          </Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <HiOutlinePaintBrush size={19} />
          </Button>
        </div>
      </PopoverTrigger>
      <PopoverContent
        showArrow
        className="dark:!bg-secondary-900"
        arrowClassName="dark:!fill-secondary-900"
      >
        <div className="w-[300px] space-y-3 p-2">
          <div className="space-y-1.5">
            <h5 className="text-xs font-medium">Color</h5>
            <div className="grid grid-cols-3 gap-2">
              {Object.entries(COLOR_THEME).map(([c, value]) => (
                <Button
                  key={c}
                  size="sm"
                  isActive={color == c}
                  variant="outline"
                  className="!justify-start capitalize"
                  leftIcon={
                    <div
                      className={`h-3 w-3 rounded-full ${value} flex items-center justify-center`}
                    />
                  }
                  onClick={() => changeColor(c as keyof typeof COLOR_THEME)}
                >
                  {c}
                </Button>
              ))}
            </div>
          </div>
          <div className="space-y-1.5">
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
        <PopoverClose className="absolute right-2 top-2 p-1">
          <HiX className="opacity-60" />
        </PopoverClose>
      </PopoverContent>
    </Popover>
  );
}

function CopyCodeDialog({ color }: { color: keyof typeof COLOR_THEME }) {
  return (
    <Dialog>
      <DialogTrigger variant="outline" className="hidden md:block">
        Copy code
      </DialogTrigger>
      <DialogTrigger variant="outline" size="icon" className="md:hidden">
        <HiOutlineDocumentDuplicate size={19} />
      </DialogTrigger>
      <DialogOverlay />
      <DialogContent className="!p-5">
        <div className="space-y-1 mb-5">
          <DialogTitle>Theme</DialogTitle>
          <Text className="text-sm opacity-50 leading-snug">
            Copy and paste the following code into your{" "}
            <em>tailwind.config.js</em> file.
          </Text>
        </div>
        <Fence language="js" className="overflow-x-auto rounded-xl px-5 py-4">
          {`const colors = require('tailwindcss/colors')

{
  darkMode: "class", // optional
  content: [
    ...
    "./node_modules/@rafty/ui/**/*.{js,cjs}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.${color},
        secondary: colors.zinc, // default
      },
    },
  },
  plugins: [require("@rafty/plugin")],
}`}
        </Fence>
      </DialogContent>
    </Dialog>
  );
}
