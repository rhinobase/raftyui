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
import ComboBox from "./ComboBox";
import CommandOpen from "./Command";
import ContextMenuOpen from "./ContextMenu";
import DrawerOpen from "./Drawer";
import MenuBarOpen from "./MenuBar";
import ProgressShow from "./Progress";
import Radio from "./Radio";
import Spinner from "./Spinner";
import Select from "./Select";
import StatShow from "./Stat";
import SwitchButton from "./Switch";
import Tab from "./Tab";
import Table from "./Table";
import Toast from "./Toast";
import ToggleGroups from "./ToggleGroup";
import { useTheme } from "next-themes";

enum ColorTheme {
  PURPLE = "purple",
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
  CommandOpen,
  DatePicker,
  MenuBarOpen,
  Accordian,
  AlertOpen,
  AlertDialogOpen,
  ButtonOpen,
  CheckBox,
  ComboBox,
  ContextMenuOpen,
  Radio,
  DrawerOpen,
  InputField,
  PasswordField,
  ProgressShow,
  TagField,
  RangePicker,
  Select,
  Spinner,
  StatShow,
  SwitchButton,
  Tab,
  Table,
  Toast,
  ToggleGroups,
  Textarea,
  Calendar,
];

export default function Home() {
  const { setTheme } = useTheme();
  const [color, setColor] = useState<ColorTheme>(ColorTheme.PURPLE);

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
          {Object.keys(ColorTheme)
            .slice(0, 4)
            .map((c) => (
              <Button
                key={c}
                size="icon"
                className={`!bg-${c}-500 !rounded-full`}
                onClick={() => setColor(c as ColorTheme)}
              >
                {color == c && <HiCheck className="text-white font-bold" />}
              </Button>
            ))}
          <Popover>
            <PopoverTrigger>Customize</PopoverTrigger>
            <PopoverContent showArrow>
              <div className="w-[300px] p-2 space-y-2">
                <h5 className="text-xs">Color</h5>
                <div className="grid grid-cols-3 gap-2">
                  {Object.keys(ColorTheme).map((c) => (
                    <Button
                      key={c}
                      size="sm"
                      variant="outline"
                      className="capitalize"
                      leftIcon={
                        <div
                          className={`h-4 w-4 bg-${c.toLowerCase()}-500 rounded-full flex justify-center items-center`}
                        >
                          {color === c && (
                            <HiCheck
                              className="text-white font-bold"
                              size={12}
                            />
                          )}
                        </div>
                      }
                      onClick={() => setColor(c as ColorTheme)}
                    >
                      {c.toLowerCase()}
                    </Button>
                  ))}
                </div>
                <h5 className="text-xs">Mode</h5>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    leftIcon={<BsSun />}
                    onClick={() => setTheme("light")}
                  >
                    Light
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    leftIcon={<BsMoon />}
                    onClick={() => setTheme("dark")}
                  >
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
