"use client";
import { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@rafty/ui";
import { HiCheck, HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import Masonry from "react-responsive-masonry";
import { TotalRevenueExample } from "./Examples";
import { useTheme } from "next-themes";
import TableExample from "./Examples/TableExample";
import CounterExample from "./Examples/CounterExample";

const ColorTheme = {
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

const COMPONENTS = [TotalRevenueExample];

export default function Home() {
  const { setTheme, theme, themes } = useTheme();
  const [color, setColor] = useState<keyof typeof ColorTheme>("purple");

  return (
    <div className={`p-10 w-full theme-${color}`}>
      <div className="flex justify-between">
        <div>
          <h1 className="text-5xl font-bold">Make it yours.</h1>
          <h4 className="text-secondary-400 text-lg">
            Hand-picked themes that you can copy and paste into your apps.
          </h4>
        </div>
        <div className="p-3 flex items-center gap-3 justify-end">
          {Object.entries(ColorTheme)
            .slice(0, 4)
            .map(([c, value]) => (
              <Button
                key={c}
                size="fab"
                className={`${value} !p-1 min-h-[26px] min-w-[26px]`}
                onClick={() => setColor(c as keyof typeof ColorTheme)}
              >
                {color == c && (
                  <HiCheck className="text-white stroke-1 font-bold" />
                )}
              </Button>
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
                        onClick={() => setColor(c as keyof typeof ColorTheme)}
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
      <Masonry columnsCount={3} gutter="15px" className="mt-10">
        {COMPONENTS.map((Component, index) => (
          <Card key={index} size="lg">
            <CardContent>
              <Component />
            </CardContent>
          </Card>
        ))}
        <CounterExample />
      </Masonry>
    </div>
  );
}
