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
