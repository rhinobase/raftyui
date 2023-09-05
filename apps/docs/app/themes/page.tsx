"use client";
import { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Popover,
  PopoverContent,
  PopoverTrigger,
  classNames,
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
import TextAreaExample from "./TextAreaExample";
import PasswordFieldExample from "./PasswordFieldExample";
import InputFieldExample from "./InputFieldExample";
import TagFieldExample from "./TagFieldExample";
import RangePickerExample from "./RangePickerExample";
import CalendarExample from "./CalendarExample";
import DatePickerExample from "./DatePickerExample";

enum ColorTheme {
  PURPLE = "#a855f7",
  GREEN = "#22c55e",
  RED = "#ef4444",
  ROSE = "#f43f5e",
  STONE = "#78716c",
  YELLOW = "#eab308",
  BLUE = "#3b82f6",
  SLATE = "#64748b",
  ZINC = "#71717a",
}

const COMPONENTS = [
  MenuOpen,
  CommandOpen,
  DatePickerExample,
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
  InputFieldExample,
  PasswordFieldExample,
  ProgressShow,
  TagFieldExample,
  RangePickerExample,
  Select,
  Spinner,
  StatShow,
  SwitchButton,
  Tab,
  Table,
  Toast,
  ToggleGroups,
  TextAreaExample,
  CalendarExample,
];

export default function Home() {
  const { setTheme, theme, themes } = useTheme();
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
          {Object.entries(ColorTheme)
            .slice(0, 4)
            .map(([c, value]) => {
              return (
                <Button
                  key={c}
                  size="icon"
                  style={{ background: value }}
                  className="!rounded-full"
                  onClick={() => setColor(c as ColorTheme)}
                >
                  {color == c && <HiCheck className="text-white font-bold" />}
                </Button>
              );
            })}
          <Popover>
            <PopoverTrigger>Customize</PopoverTrigger>
            <PopoverContent showArrow>
              <div className="w-[300px] p-2 space-y-3">
                <div className="space-y-1">
                  <h5 className="text-xs font-medium">Color</h5>
                  <div className="grid grid-cols-3 gap-2">
                    {Object.entries(ColorTheme).map(([c, value]) => (
                      <Button
                        key={c}
                        size="sm"
                        variant="outline"
                        className="capitalize"
                        leftIcon={
                          <div
                            style={{ background: value }}
                            className="h-3 w-3 rounded-full flex justify-center items-center"
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
                </div>
                <div className="space-y-1">
                  <h5 className="text-xs font-medium">Mode</h5>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      leftIcon={<BsSun size={13} />}
                      isActive={theme == themes[0]}
                      onClick={() => setTheme("light")}
                    >
                      Light
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      leftIcon={<BsMoon size={13} />}
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
