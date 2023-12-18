import { Text } from "@rafty/ui";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

const DATA = [
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
      <div>
        <Text className="text-xl font-semibold leading-snug">
          Exercise Minutes
        </Text>
        <Text className="text-sm opacity-60">
          Your exercise minutes are ahead of where you normally are.
        </Text>
      </div>
      <div className="sm:flex sm:justify-center">
        <ResponsiveContainer width="100%" height={230}>
          <LineChart data={DATA} margin={{ top: 20, right: 7, left: 7 }}>
            <Tooltip
              content={({ active, payload }) => {
                if (!(active && payload && payload.length)) return;

                return (
                  <div className="dark:bg-secondary-800 grid grid-cols-2 gap-2 rounded-lg border bg-white p-2">
                    <div className="flex flex-col">
                      <span className="text-muted-foreground text-[0.70rem] uppercase">
                        Average
                      </span>
                      <span className="text-muted-foreground font-bold">
                        {payload[0].value}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-muted-foreground text-[0.70rem] uppercase">
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
    </div>
  );
}
