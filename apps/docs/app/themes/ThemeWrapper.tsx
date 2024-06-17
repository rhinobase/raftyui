"use client";
import {
  CheckIcon,
  DocumentDuplicateIcon,
  MoonIcon,
  PaintBrushIcon,
  SunIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Button,
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
  Kbd,
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
  Text,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@rafty/ui";
import { useTheme } from "next-themes";
import Link from "next/link";
import {
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
  useState,
} from "react";
import { Fence } from "../../components/code";

const COLOR_THEME = {
  gray: "!bg-gray-500 !ring-gray-500",
  red: "!bg-red-500 !ring-red-500",
  orange: "!bg-orange-500 !ring-orange-500",
  yellow: "!bg-yellow-500 !ring-yellow-500",
  green: "!bg-green-500 !ring-green-500",
  teal: "!bg-teal-500 !ring-teal-500",
  sky: "!bg-sky-500 !ring-sky-500",
  blue: "!bg-blue-500 !ring-blue-500",
  indigo: "!bg-indigo-500 !ring-indigo-500",
  purple: "!bg-purple-500 !ring-purple-500",
  fuchsia: "!bg-fuchsia-500 !ring-fuchsia-500",
  pink: "!bg-pink-500 !ring-pink-500",
  rose: "!bg-rose-500 !ring-rose-500",
} as const;

const defaults: (keyof typeof COLOR_THEME)[] = [
  "purple",
  "red",
  "green",
  "blue",
  "gray",
];

export default function ThemeBuilderWrapper({ children }: PropsWithChildren) {
  const [color, changeColor] = useState<keyof typeof COLOR_THEME>("purple");

  return (
    <div
      className={`mx-auto w-full max-w-7xl px-4 py-4 md:px-10 md:py-10 lg:px-0 theme-${color}`}
    >
      <div className="flex flex-col justify-start lg:flex-row lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold md:text-3xl">Make it yours.</h1>
          <h2 className="text-secondary-400 text-sm lg:text-lg">
            Hand-picked themes that you can copy and paste into your apps.
          </h2>
        </div>
        <div className="flex items-center gap-1.5 py-2 md:gap-3">
          {defaults.map((c) => (
            <Tooltip key={c}>
              <TooltipTrigger asChild>
                <Button
                  name={`${c} button`}
                  size="fab"
                  className={`${COLOR_THEME[c]} min-h-[26px] min-w-[26px] p-1`}
                  onClick={() => changeColor(c as keyof typeof COLOR_THEME)}
                >
                  {color === c && (
                    <CheckIcon
                      height={16}
                      width={16}
                      className="stroke-[3] text-white"
                    />
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
      <div className="mt-4 flex flex-col items-center gap-2 md:mt-10 md:flex-row md:justify-between">
        <p className="text-secondary-600 text-xs leading-none">
          This page is inspired by{" "}
          <Link
            href="https://x.com/shadcn?t=2gBGi1FW3vmW37m13hN-TA&s=33"
            target="_blank"
            className="font-medium text-blue-600 dark:text-blue-400"
          >
            @shadcn
          </Link>
        </p>
        <p className="text-secondary-500 text-xs leading-none">
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
    <Popover size="lg">
      <PopoverTrigger asChild>
        <div>
          <Button
            variant="outline"
            leftIcon={<PaintBrushIcon height={19} width={19} />}
            className="hidden md:flex"
            aria-label="Select Theme Color"
          >
            Customize
          </Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <PaintBrushIcon height={19} width={19} />
          </Button>
        </div>
      </PopoverTrigger>
      <PopoverContent
        showArrow
        className="dark:bg-secondary-900"
        arrowClassName="dark:fill-secondary-900"
      >
        <div className="space-y-6">
          <div className="space-y-3">
            <h5 className="text-xs font-medium leading-none">Color</h5>
            <div className="grid grid-cols-3 gap-2.5">
              {Object.entries(COLOR_THEME).map(([c, value]) => (
                <Button
                  key={c}
                  size="sm"
                  isActive={color === c}
                  variant="outline"
                  className="justify-start capitalize"
                  leftIcon={
                    <div
                      className={`size-3 rounded-full ${value} flex items-center justify-center`}
                    />
                  }
                  onClick={() => changeColor(c as keyof typeof COLOR_THEME)}
                >
                  {c}
                </Button>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <h5 className="text-xs font-medium leading-none">Mode</h5>
            <div className="flex gap-2.5">
              <Button
                variant="outline"
                size="sm"
                leftIcon={
                  <SunIcon height={16} width={16} className="stroke-2" />
                }
                isActive={theme === themes[0]}
                onClick={() => setTheme("light")}
              >
                Light
              </Button>
              <Button
                variant="outline"
                size="sm"
                leftIcon={
                  <MoonIcon
                    type="moon"
                    height={16}
                    width={16}
                    className="stroke-2"
                  />
                }
                isActive={theme === themes[1]}
                onClick={() => setTheme("dark")}
              >
                Dark
              </Button>
            </div>
          </div>
        </div>
        <PopoverClose className="absolute right-2 top-2 p-1">
          <XMarkIcon
            type="x-mark"
            height={16}
            width={16}
            className="stroke-2 opacity-60"
          />
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
        <DocumentDuplicateIcon height={19} width={19} />
      </DialogTrigger>
      <DialogOverlay className="z-[70]" />
      <DialogContent className="z-[70] p-5">
        <div className="mb-5 space-y-1">
          <DialogTitle>Theme</DialogTitle>
          <Text className="text-sm leading-snug opacity-50">
            Copy and paste the following code into your{" "}
            <Kbd>tailwind.config.js</Kbd> file.
          </Text>
        </div>
        <Fence language="js">
          {`const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
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
