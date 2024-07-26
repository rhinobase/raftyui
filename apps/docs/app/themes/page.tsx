"use client";
import { Calendar, Card, CardContent, Skeleton } from "@rafty/ui";
import { useWindowSize } from "@uidotdev/usehooks";
import dynamic from "next/dynamic";

const TotalRevenueExample = dynamic(
  () =>
    import("./Cards/TotalRevenueExample").then(
      (mod) => mod.TotalRevenueExample,
    ),
  { loading: () => <Skeleton className="h-[177px] w-[312px]" /> },
);

const SubscriptionsExample = dynamic(
  () =>
    import("./Cards/SubscriptionsExample").then(
      (mod) => mod.SubscriptionsExample,
    ),
  { loading: () => <Skeleton className="h-[178px] w-[312px]" /> },
);

const CounterExample = dynamic(
  () => import("./Cards/CounterExample").then((mod) => mod.CounterExample),
  { loading: () => <Skeleton className="h-[264px] w-[258px]" /> },
);

const TeamMembersExample = dynamic(
  () =>
    import("./Cards/TeamMembersExample").then((mod) => mod.TeamMembersExample),
  { loading: () => <Skeleton className="h-[226px] w-[312px]" /> },
);

const CookieSettingsExample = dynamic(
  () =>
    import("./Cards/CookieSettingsExample").then(
      (mod) => mod.CookieSettingsExample,
    ),
  { loading: () => <Skeleton className="h-[326px] w-[312px]" /> },
);

const PaymentMethodExample = dynamic(
  () =>
    import("./Cards/PaymentMethodExample").then(
      (mod) => mod.PaymentMethodExample,
    ),
  { loading: () => <Skeleton className="h-[485px] w-[312px]" /> },
);

const ChatBoxExample = dynamic(
  () => import("./Cards/ChatBoxExample").then((mod) => mod.ChatBoxExample),
  { loading: () => <Skeleton className="h-[322px] w-[312px]" /> },
);

const CreateAnAccountExample = dynamic(
  () =>
    import("./Cards/CreateAnAccountExample").then(
      (mod) => mod.CreateAnAccountExample,
    ),
  { loading: () => <Skeleton className="h-[348px] w-[312px]" /> },
);

const ReportIssueExample = dynamic(
  () =>
    import("./Cards/ReportIssueExample").then((mod) => mod.ReportIssueExample),
  { loading: () => <Skeleton className="h-[407px] w-[312px]" /> },
);

const ExerciseMinuteExample = dynamic(
  () =>
    import("./Cards/ExerciseMinuteExample").then(
      (mod) => mod.ExerciseMinuteExample,
    ),
  { loading: () => <Skeleton className="h-[286px] w-[554px]" /> },
);

const TableExample = dynamic(
  () => import("./Cards/TableExample").then((mod) => mod.TableExample),
  { loading: () => <Skeleton className="h-[489px] w-[554px]" /> },
);

export default function ThemeComponents() {
  const { width } = useWindowSize();

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
            <Calendar size="sm" />
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
          <div className="pt-3 sm:col-span-2 sm:pl-2 sm:pt-0 xl:pl-3">
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
              {width && width >= 768 && <TableExample />}
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
        <div className="hidden md:block [&>*]:w-max">
          <Calendar />
        </div>
      </div>
    </div>
  );
}
