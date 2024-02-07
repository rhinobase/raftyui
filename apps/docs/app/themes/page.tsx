"use client";
import {
  DocumentDuplicateIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import {
  Button,
  Calendar,
  DatePicker,
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
  Kbd,
  Label,
  RangePicker,
  Switch,
  TagField,
  Text,
  Textarea,
} from "@rafty/ui";
import { useTheme } from "next-themes";
import { Dispatch, SetStateAction, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Fence } from "../../components/code";
import {
  AccordianExample,
  AlertDialogExample,
  AlertExample,
  AvatarExample,
  BadgeExample,
  ButtonExample,
  CammandExample,
  CardExample,
  CardWrapper,
  CheckBoxExample,
  ContextMenuExample,
  DialogExample,
  DrawerExample,
  FieldControlExample,
  HoverCardExample,
  InputFieldExample,
  ListExample,
  MenuExample,
  MenubarExample,
  NavigationMenuExample,
  PaginationExample,
  PasswordFieldExample,
  PopoverExample,
  ProgressExample,
  RadioExample,
  ScrollAreaExample,
  SearchFieldExample,
  SelectExample,
  SkeletonExample,
  SpinnerExample,
  StatExample,
  SwitchExample,
  TabExample,
  TableExample,
  TagExample,
  ToastExample,
  ToggleGroupExample,
  TooltipExample,
} from "./Components";
import { ThemeEditorProvider } from "./Context";

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

export default function ThemeComponents() {
  const [color, changeColor] = useState<keyof typeof COLOR_THEME>("purple");
  const [checked, setChecked] = useState(false);

  return (
    <ThemeEditorProvider value={{ isDisabled: checked }}>
      <div className="flex w-full items-center gap-4">
        <div className="h-full w-[400px]">
          <div className="fixed bottom-0 -ml-0.5 h-[calc(100vh-4.75rem)] w-[400px] space-y-6 overflow-y-auto overflow-x-hidden px-2 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-semibold leading-none">
                Theme Editor
              </h1>
              <CopyCodeDialog color={color} />
            </div>
            <CustomizeMenu color={color} changeColor={changeColor} />
            <div className="space-y-3">
              <h5 className="text-xs font-medium leading-none">Disabled</h5>
              <Switch onCheckedChange={(value) => setChecked(value)} />
            </div>
          </div>
        </div>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 300: 1, 500: 3, 700: 3, 900: 4 }}
          className={`flex-1 py-4 theme-${color}`}
        >
          <Masonry gutter="14px">
            <CardWrapper>
              <ButtonExample />
            </CardWrapper>
            <ToastExample />
            <CardWrapper>
              <SkeletonExample />
            </CardWrapper>
            <CardWrapper>
              <TableExample />
            </CardWrapper>
            <CardWrapper className="flex justify-between">
              <SwitchExample />
              <SelectExample />
            </CardWrapper>
            <ToggleGroupExample />
            <CardWrapper>
              <TagExample />
            </CardWrapper>
            <CardWrapper>
              <TagField isDisabled={checked} initialData={["sample", "data"]} />
            </CardWrapper>
            <CardWrapper>
              <TabExample />
            </CardWrapper>
            <CardWrapper>
              <SearchFieldExample />
            </CardWrapper>
            <CardWrapper className="space-y-3">
              <RangePicker disableNavigation={checked} disabled={checked} />
              <DatePicker disableNavigation={checked} disabled={checked} />
            </CardWrapper>
            <CardWrapper>
              <PasswordFieldExample />
            </CardWrapper>
            <CardWrapper className="flex justify-between">
              <RadioExample />
              <CheckBoxExample />
            </CardWrapper>
            <CardWrapper>
              <ProgressExample />
            </CardWrapper>
            <CardWrapper className="flex justify-between">
              <PopoverExample />
              <DialogExample />
              <DrawerExample />
            </CardWrapper>
            <CardWrapper>
              <NavigationMenuExample />
            </CardWrapper>
            <CardWrapper>
              <ListExample />
            </CardWrapper>
            <CammandExample />
            <CardWrapper>
              <InputFieldExample />
            </CardWrapper>
            <CardWrapper className="flex items-center justify-between">
              <Kbd>shift + K</Kbd>
              <Text>Text</Text>
              <HoverCardExample />
            </CardWrapper>
            <Calendar disabled={checked} disableNavigation={checked} />
            <CardWrapper>
              <AccordianExample />
            </CardWrapper>
            <CardWrapper>
              <ContextMenuExample />
            </CardWrapper>
            <CardWrapper className="flex items-center justify-between">
              <BadgeExample />
              <TooltipExample />
              <AvatarExample />
            </CardWrapper>
            <CardWrapper className="flex items-center justify-between">
              <AlertDialogExample />
              <Label>Label</Label>
              <MenuExample />
            </CardWrapper>
            <CardWrapper>
              <FieldControlExample />
            </CardWrapper>
            <CardWrapper>
              <MenubarExample />
            </CardWrapper>
            <ScrollAreaExample />
            <CardWrapper>
              <PaginationExample />
            </CardWrapper>
            <CardWrapper>
              <SpinnerExample />
            </CardWrapper>
            <CardWrapper>
              <StatExample />
            </CardWrapper>
            <CardExample />
            <CardWrapper>
              <AlertExample />
            </CardWrapper>
            <Textarea placeholder="This is a sample placeholder" />
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </ThemeEditorProvider>
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

function CustomizeMenu({
  color,
  changeColor,
}: {
  color: keyof typeof COLOR_THEME;
  changeColor: Dispatch<SetStateAction<keyof typeof COLOR_THEME>>;
}) {
  const { setTheme, theme, themes } = useTheme();

  return (
    <>
      <div className="space-y-3">
        <h5 className="text-xs font-medium leading-none">Color</h5>
        <div className="grid grid-cols-3 gap-2.5">
          {Object.entries(COLOR_THEME).map(([c, value]) => (
            <Button
              key={c}
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
            leftIcon={<SunIcon height={16} width={16} className="stroke-2" />}
            isActive={theme === themes[0]}
            onClick={() => setTheme("light")}
          >
            Light
          </Button>
          <Button
            variant="outline"
            leftIcon={<MoonIcon height={16} width={16} className="stroke-2" />}
            isActive={theme === themes[1]}
            onClick={() => setTheme("dark")}
          >
            Dark
          </Button>
        </div>
      </div>
    </>
  );
}
