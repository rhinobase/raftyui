import { Text } from "@rafty/ui";
import { Bar, BarChart, ResponsiveContainer } from "recharts";

const data = [
  {
    value: 400,
  },
  {
    value: 300,
  },
  {
    value: 200,
  },
  {
    value: 278,
  },
  {
    value: 189,
  },
  {
    value: 239,
  },
  {
    value: 249,
  },
  {
    value: 179,
  },
  {
    value: 349,
  },
];

export function SubscriptionsExample() {
  return (
    <div className="size-full space-y-2">
      <Text className="text-[0.875rem] font-medium leading-[1.5rem]">
        Subscriptions
      </Text>
      <div>
        <Text className="text-[1.5rem] font-bold leading-[2.5rem] leading-snug">
          +2350
        </Text>
        <Text className="text-[0.75rem] leading-[1rem] opacity-60">
          +180.1% from last month
        </Text>
      </div>
      <ResponsiveContainer width="100%" height="50%">
        <BarChart width={310} height={100} data={data} margin={{ top: 15 }}>
          <Bar dataKey="value" className="fill-primary-500" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
