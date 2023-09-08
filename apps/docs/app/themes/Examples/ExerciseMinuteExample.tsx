import { LineChart, Line, Tooltip } from "recharts";
import { Text } from "@rafty/ui";
import { useCallback, useEffect, useState } from "react";
import { useColorStore } from "../store";

const data = [
  {
    uv: 4000,
    pv: 2400,
  },
  {
    uv: 3000,
    pv: 1398,
  },
  {
    uv: 2000,
    pv: 9800,
  },
  {
    uv: 2780,
    pv: 3908,
  },
  {
    uv: 1890,
    pv: 4800,
  },
  {
    uv: 2390,
    pv: 3800,
  },
  {
    uv: 3490,
    pv: 4300,
  },
];

export function CSSVariableValue(name: string, color: string) {
  return getComputedStyle(document.getElementsByClassName(`theme-${color}`)[0])
    .getPropertyValue(name)
    .split(" ")
    .join(",");
}

export function ExerciseMinuteExample() {
  const color = useColorStore((state) => state.color);
  const [variable, setVariable] = useState<string>();

  const cssvar = useCallback(
    (name: string) => CSSVariableValue(name, color),
    [color],
  );

  useEffect(() => {
    setVariable(cssvar("--color-primary-500"));
  }, [color]);

  return (
    <div className="space-y-1">
      <Text className="text-lg font-semibold">Exercise Minutes</Text>
      <Text className="text-xs opacity-60">
        Your exercise minutes are ahead of where you normally are.
      </Text>
      <div className="py-8">
        <LineChart width={550} height={300} data={data}>
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="rounded-lg border bg-background p-2 shadow-sm">
                    <div className="grid grid-cols-2 gap-2">
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
                  </div>
                );
              }

              return null;
            }}
          />
          <Line
            type="monotone"
            dataKey="pv"
            stroke={`rgb(${variable})`}
            activeDot={{ r: 6 }}
          />
          <Line type="monotone" dataKey="uv" stroke={`rgba(${variable},0.3)`} />
        </LineChart>
      </div>
    </div>
  );
}
