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

export function TotalRevenueExample() {
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
  const [variable, setVariable] = useState<string>();

  const cssvar = useCallback(
    (name: string) => {
      const value = getComputedStyle(
        document.getElementsByClassName(`theme-${color}`)[0],
      )
        .getPropertyValue(name)
        .split(" ")
        .join(",");
      return `rgb(${value})`;
    },
    [color],
  );

  useEffect(() => {
    setVariable(cssvar("--color-primary-500"));
  }, [color]);

  return (
    <div className="space-y-1">
      <Text className="text-sm font-medium">Total Revenue</Text>
      <div>
        <Text className="text-2xl font-bold leading-snug">$15,231.89</Text>
        <Text className="text-xs opacity-60">+20.1% from last month</Text>
      </div>
      <Line
        data={{
          labels: Array(7).fill(""),
          datasets: [
            {
              data: [113, 114, 113, 112, 111, 112, 117],
              borderColor: variable,
              backgroundColor: "white",
              tension: 0.3,
            },
          ],
        }}
        height={80}
        options={{
          responsive: true,
          scales: { x: { display: false }, y: { display: false } },
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
      />
    </div>
  );
}
