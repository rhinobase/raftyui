import { Text } from "@rafty/ui";
import { Bar, BarChart, ResponsiveContainer } from "recharts";

const data = [
  {
    value: 4000,
  },
  {
    value: 3000,
  },
  {
    value: 2000,
  },
  {
    value: 2780,
  },
  {
    value: 1890,
  },
  {
    value: 2390,
  },
  {
    value: 2490,
  },
  {
    value: 1790,
  },
  {
    value: 3490,
  },
];

export function SubscriptionsExample() {
  return (
    <div className="h-full w-full space-y-2">
      <Text className="text-sm font-medium">Subscriptions</Text>
      <div>
        <Text className="text-2xl font-bold leading-snug">+2350</Text>
        <Text className="text-xs opacity-60">+180.1% from last month</Text>
      </div>
      <ResponsiveContainer width="100%" height="50%">
        <BarChart width={310} height={100} data={data} margin={{ top: 15 }}>
          <Bar dataKey="value" className="fill-primary-500" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
