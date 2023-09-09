import { LineChart, Line, Tooltip, ResponsiveContainer } from "recharts";
import { Text } from "@rafty/ui";

const data = [
  {
    a: 4000,
    b: 2400,
  },
  {
    a: 3000,
    b: 1398,
  },
  {
    a: 2000,
    b: 9800,
  },
  {
    a: 2780,
    b: 3908,
  },
  {
    a: 1890,
    b: 4800,
  },
  {
    a: 2390,
    b: 3800,
  },
  {
    a: 3490,
    b: 4300,
  },
];

export function ExerciseMinuteExample() {
  return (
    <div className="space-y-1">
      <Text className="text-lg font-semibold">Exercise Minutes</Text>
      <Text className="text-sm opacity-60">
        Your exercise minutes are ahead of where you normally are.
      </Text>
      <ResponsiveContainer height={230}>
        <LineChart
          width={550}
          height={300}
          data={data}
          margin={{ top: 20, right: 7, left: 7 }}
        >
          <Tooltip
            content={({ active, payload }) => {
              if (!(active && payload && payload.length)) return;

              return (
                <div className="grid grid-cols-2 gap-2 rounded-lg border p-2 dark:bg-secondary-800 bg-white">
                  <div className="flex flex-col">
                    <span className="text-[0.70rem] uppercase text-muted-foreground">
                      Average
                    </span>
                    <span className="font-bold text-muted-foreground">
                      {payload[0].value}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[0.70rem] uppercase text-muted-foreground">
                      Today
                    </span>
                    <span className="font-bold">{payload[1].value}</span>
                  </div>
                </div>
              );
            }}
          />
          <Line
            type="monotone"
            dataKey="b"
            strokeWidth={2}
            activeDot={{
              r: 6,
              className: "fill-primary-500",
            }}
            stroke=""
            className="stroke-primary-500"
          />
          <Line
            type="monotone"
            dataKey="a"
            strokeWidth={2}
            activeDot={{
              className: "fill-primary-500",
            }}
            stroke=""
            className="stroke-primary-500/30"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
