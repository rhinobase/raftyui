"use client";
import React, { useState } from "react";
import {
  Button,
  Calendar,
  Card,
  CardContent,
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
import MenuOpen from "./Menu";
import Accordian from "./Accordian";
import AlertOpen from "./Alert";
import AlertDialogOpen from "./AlertDialog";
import ButtonOpen from "./Button";
import CheckBox from "./CheckBox";
import ComboBoxExample from "./ComboBox";
import CommandOpen from "./Command";
import ContextMenuOpen from "./ContextMenu";
import DrawerOpen from "./Drawer";
import MenuBarOpen from "./MenuBar";
import ProgressShow from "./Progress";
import RadioExample from "./Radio";
import SpinnerExample from "./Spinner";
import SelectExample from "./Select";
import StatShow from "./Stat";
import SwitchButton from "./Switch";
import TabExample from "./Tab";
import TableExample from "./Table";
import ToastExample from "./Toast";
import ToggleGroups from "./ToggleGroup";

enum ColorTheme {
  ORANGE = "orange",
  GREEN = "green",
  RED = "red",
  ROSE = "rose",
  STONE = "stone",
  YELLOW = "yellow",
  BLUE = "blue",
  SLATE = "slate",
  ZINC = "zinc",
}

const COMPONENTS = [
  MenuOpen,
  DatePicker,
  MenuBarOpen,
  Accordian,
  AlertOpen,
  AlertDialogOpen,
  ButtonOpen,
  CheckBox,
  ComboBoxExample,
  CommandOpen,
  ContextMenuOpen,
  DrawerOpen,
  InputField,
  PasswordField,
  ProgressShow,
  TagField,
  RangePicker,
  RadioExample,
  SelectExample,
  SpinnerExample,
  StatShow,
  SwitchButton,
  TabExample,
  TableExample,
  ToastExample,
  ToggleGroups,
  Textarea,
  Calendar,
];

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
                      onClick={() => {
                        setSelectedColor(color);
                      }}
                    >
                      {color}
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
      <Masonry columnsCount={3} gutter="15px" className="mt-10">
        {COMPONENTS.map((Component, index) => (
          <Card key={index}>
            <CardContent>
              <Component />
            </CardContent>
          </Card>
        ))}
      </Masonry>
    </div>
  );
}
