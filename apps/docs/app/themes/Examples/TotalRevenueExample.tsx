import { Text } from "@rafty/ui";
import { Line, LineChart, ResponsiveContainer } from "recharts";

const data = [
  {
    value: 1000,
  },
  {
    value: 2000,
  },
  {
    value: 1500,
  },
  {
    value: 1400,
  },
  {
    value: 1890,
  },
  {
    value: 2000,
  },
  {
    value: 3800,
  },
];

export function TotalRevenueExample() {
  return (
    <div className="space-y-1">
      <Text className="text-sm font-medium">Total Revenue</Text>
      <div>
        <Text className="text-2xl font-bold leading-snug">$15,231.89</Text>
        <Text className="text-xs opacity-60">+20.1% from last month</Text>
        <ResponsiveContainer height={100}>
          <LineChart
            width={300}
            height={90}
            data={data}
            margin={{ top: 30, left: 10, right: 7 }}
          >
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
  );
}
