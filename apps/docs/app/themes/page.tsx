"use client";
import { Card, CardContent, Calendar } from "@rafty/ui";
import {
  TotalRevenueExample,
  SubscriptionsExample,
  CounterExample,
  TeamMembersExample,
  CookieSettingsExample,
  PaymentMethodExample,
  ChatBoxExample,
  CreateAnAccountExample,
  ReportIssueExample,
  ExerciseMinuteExample,
  TableExample,
} from "./Examples";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Theme Generator",
};

export default function ThemeComponents() {
  return (
    <div className="md:grids-col-2 mt-10 grid md:gap-4 lg:grid-cols-10 xl:grid-cols-11 xl:gap-4 ">
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
          <div className="flex justify-center">
            <Calendar className="!w-[285px]" />
          </div>
          <div className="pt-3 sm:pl-2 sm:pt-0 xl:pl-4">
            <Card>
              <CardContent>
                <CounterExample />
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
          <Calendar className="!w-[280px]" />
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
  );
}
