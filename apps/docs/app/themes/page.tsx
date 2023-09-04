"use client";
import React, { useState } from "react";
import {
  Button,
  Calendar,
  DatePicker,
  InputField,
  PasswordField,
  Popover,
  PopoverContent,
  PopoverTrigger,
  RangePicker,
  Tag,
  TagField,
  Textarea,
} from "@rafty/ui";
import { BsSun, BsMoon } from "react-icons/bs";
import { HiCheck } from "react-icons/hi2";
import Masonry from "react-responsive-masonry";

enum ColorTheme {
  ORANGE = "orange",
  GREEN = "green",
}

export default function Home() {
  const [theme, setTheme] = useState<ColorTheme>();
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const THEMES = [
    "zinc",
    "slate",
    "stone",
    "rose",
    "orange",
    "blue",
    "yellow",
    "green",
    "red",
  ];
  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <div className="p-10 w-full">
      <div className="flex justify-between">
        <div>
          <h1 className="text-5xl font-bold">Make it yours.</h1>
          <h4 className="text-secondary-400 text-lg">
            Hand-picked themes that you can copy and paste into your apps.
          </h4>
        </div>
        <div className="p-3 flex items-center gap-4 justify-end">
          <Button
            size="icon"
            className="!bg-orange-500 "
            onClick={() => setTheme(ColorTheme.ORANGE)}
          />
          <Button
            size="icon"
            className="!bg-green-500"
            onClick={() => setTheme(ColorTheme.GREEN)}
          />
          <Button
            size="icon"
            className="!bg-blue-500"
            onClick={() => setTheme(ColorTheme.ORANGE)}
          />
          <Button
            size="icon"
            className="!bg-red-500"
            onClick={() => setTheme(ColorTheme.ORANGE)}
          />
          <Popover>
            <PopoverTrigger>Customize</PopoverTrigger>
            <PopoverContent>
              <div className="w-[300px] p-2 space-y-2">
                <h5 className="text-xs">Color</h5>
                <div className="grid grid-cols-3 gap-2">
                  {THEMES.map((color) => (
                    <Button
                      key={color}
                      size="sm"
                      variant="outline"
                      leftIcon={
                        <div
                          className={`h-4 w-4 bg-${color}-500 rounded-full items-center`}
                        >
                          {selectedColor === color && (
                            <HiCheck
                              className="text-white font-bold"
                              size={15}
                            />
                          )}
                        </div>
                      }
                      onClick={() => handleColorSelect(color)}
                    >
                      {color.charAt(0).toUpperCase() + color.slice(1)}
                    </Button>
                  ))}
                </div>
                <h5 className="text-xs">Mode</h5>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" leftIcon={<BsSun />}>
                    Light
                  </Button>
                  <Button variant="outline" size="sm" leftIcon={<BsMoon />}>
                    Dark
                  </Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <Masonry columnsCount={3} gutter="70px" className="mt-10">
        <DatePicker />

        <div className="h-22 w-22"></div>

        <InputField variant="solid" placeholder="Enter a Value" />
        <PasswordField />

        <TagField />
        <Tag>Tag sample text</Tag>
        <RangePicker />

        <Textarea placeholder="placeholder" />
        <Calendar />
      </Masonry>
    </div>
  );
}
