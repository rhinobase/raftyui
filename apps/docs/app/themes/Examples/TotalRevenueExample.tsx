import { Text } from "@rafty/ui";
import { Line, LineChart, ResponsiveContainer } from "recharts";

const data = [
  {
    value: 100,
  },
  {
    value: 200,
  },
  {
    value: 150,
  },
  {
    value: 140,
  },
  {
    value: 189,
  },
  {
    value: 200,
  },
  {
    value: 380,
  },
];

export function TotalRevenueExample() {
  return (
    <div className="space-y-1">
      <Text className="text-sm font-medium">Total Revenue</Text>
      <div>
        <Text className="text-2xl font-bold leading-snug">$15,231.89</Text>
        <Text className="text-xs opacity-60">+20.1% from last month</Text>
        <div className="w-full">
          <ResponsiveContainer width="100%" height={100}>
            <LineChart data={data} margin={{ top: 30, left: 10, right: 7 }}>
              <Line
                type="monotone"
                dataKey="value"
                stroke=""
                strokeWidth={2}
                className="stroke-primary-500"
                dot={{
                  stroke: "stroke-primary-500",
                  strokeWidth: 2,
                  fill: "white",
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
