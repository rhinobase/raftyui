import React, { useCallback, useEffect, useState } from "react";
import { Text } from "@rafty/ui";
import { Line } from "react-chartjs-2";
import { useColorStore } from "../store";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

export function ExerciseMinuteExample() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  );

  const color = useColorStore((state) => state.color);
  const [primaryVariable, setPrimaryVariable] = useState<string>();
  const [secondaryVariable, setSecondaryVariable] = useState<string>();

  const cssvar = useCallback(
    (name: string, opacity?: number) => {
      const value = getComputedStyle(
        document.getElementsByClassName(`theme-${color}`)[0],
      )
        .getPropertyValue(name)
        .split(" ")
        .join(",");

      if (opacity) return `rgba(${value},${opacity})`;
      return `rgb(${value})`;
    },
    [color],
  );

  useEffect(() => {
    setPrimaryVariable(cssvar("--color-primary-500"));
    setSecondaryVariable(cssvar("--color-primary-500", 0.3));
  }, [color]);

  return (
    <div className="space-y-1">
      <Text className="text-sm font-medium">Total Revenue</Text>
      <div>
        <Text className="text-2xl font-bold">$15,231.89</Text>
        <Text className="text-xs opacity-60">+20.1% from last month</Text>
      </div>
      <div>
        <Line
          data={{
            labels: Array(8).fill(""),
            datasets: [
              {
                data: [115, 113, 119, 110, 112, 110, 113],
                borderColor: primaryVariable,
                tension: 0.3,
              },
              {
                label: "Linear interpolation (default)",
                data: [115, 118, 114, 112, 111, 110, 117],
                borderColor: secondaryVariable,
                fill: false,
                cubicInterpolationMode: "monotone",
                tension: 0.4,
              },
            ],
          }}
          width="308"
          height="80"
          options={{
            responsive: true,
            scales: { x: { display: true }, y: { display: false } },
            interaction: {
              mode: "index",
              intersect: false,
              includeInvisible: false,
              axis: "r",
            },
            plugins: {
              legend: {
                display: false,
              },
            },
          }}
        ></Line>
      </div>
    </div>
  );
}
