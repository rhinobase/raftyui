"use client";
import {
  Button,
  Card,
  CardContent,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@rafty/ui";
import { HiCheck, HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import {
  ChatBoxExample,
  CookieSettingsExample,
  CounterExample,
  CreateAnAccountExample,
  PaymentMethodExample,
  CalendarExample,
  ReportIssueExample,
  SubscriptionsExample,
  TableExample,
  TeamMembersExample,
  TotalRevenueExample,
  ExerciseMinuteExample,
} from "./Examples";
import { useTheme } from "next-themes";
import { ColorTheme, useColorStore } from "./store";

export default function Home() {
  const { color, changeColor } = useColorStore();

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
          {Object.entries(ColorTheme)
            .slice(0, 4)
            .map(([c, value]) => (
              <Button
                key={c}
                size="fab"
                className={`${value} !p-1 min-h-[26px] min-w-[26px]`}
                onClick={() => changeColor(c as keyof typeof ColorTheme)}
              >
                {color == c && (
                  <HiCheck className="text-white stroke-1 font-bold" />
                )}
              </Button>
            ))}
          <CustomizePopover />
        </div>
      </div>

      <div className="md:grids-col-2 grid md:gap-4 lg:grid-cols-10 xl:grid-cols-11 xl:gap-4 mt-10">
        <div className="space-y-4 lg:col-span-4 xl:col-span-6 xl:space-y-4">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-2">
            <Card>
              <CardContent>
                <TotalRevenueExample />
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <SubscriptionsExample />
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-1 sm:grid-cols-[280px_1fr] md:hidden">
            <CalendarExample />
            <div className="pt-3 sm:pl-2 sm:pt-0 xl:pl-4">
              <Card>
                <CardContent>
                  <CounterExample />
                </CardContent>
              </Card>
            </div>
            <div className="pt-3 sm:col-span-2 xl:pt-4">
              <Card>
                <CardContent>
                  <div />
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <div className="space-y-4 xl:space-y-4">
              <Card>
                <CardContent>
                  <TeamMembersExample />
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <CookieSettingsExample />
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <PaymentMethodExample />
                </CardContent>
              </Card>
            </div>
            <div className="space-y-4 xl:space-y-4">
              <Card>
                <CardContent>
                  <ChatBoxExample />
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <CreateAnAccountExample />
                </CardContent>
              </Card>
              <div className="hidden xl:block">
                <Card>
                  <CardContent>
                    <ReportIssueExample />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4 lg:col-span-6 xl:col-span-5 xl:space-y-4">
          <div className="hidden gap-1 sm:grid-cols-[280px_1fr] md:grid">
            <CalendarExample />

            <div className="pt-3 sm:pl-2 sm:pt-0 xl:pl-3">
              <Card>
                <CardContent>
                  <CounterExample />
                </CardContent>
              </Card>
            </div>
            <div className="pt-3 sm:col-span-2 xl:pt-3">
              <Card>
                <CardContent>
                  <ExerciseMinuteExample />
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="hidden md:block">
            <Card>
              <CardContent>
                <TableExample />
              </CardContent>
            </Card>
          </div>
          <div className="xl:hidden">
            <Card>
              <CardContent>
                <ReportIssueExample />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

function CustomizePopover() {
  const { color, changeColor } = useColorStore();
  const { setTheme, theme, themes } = useTheme();

  return (
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
                  onClick={() => changeColor(c as keyof typeof ColorTheme)}
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
  );
}
