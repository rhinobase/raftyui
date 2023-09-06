import React, { useCallback, useEffect, useRef, useState } from "react";
import { Text } from "@rafty/ui";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { useColorStore } from "../store";

export function TotalRevenueExample() {
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

  const chartRef = useRef<undefined>();

  useEffect(() => {
    const data = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Revenue",
          data: [1000, 1500, 2000, 1800, 2500, 2200],
          borderColor: "rgb(75, 192, 192)",
          borderWidth: 2,
          fill: false,
        },
      ],
    };

    const ctx = chartRef.current.getContext("2d");
    new Chart(ctx, {
      type: "line",
      data: data,
      Options: Option,
    });
  }, []);

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
                data: [6, 5, 3, 5, 2, 3, 6, 5],
                backgroundColor: variable,
              },
            ],
          }}
          ref={chartRef}
          width="400"
          height="200"
          options={{
            responsive: true,
            scales: { x: { display: false }, y: { display: false } },
            interaction: {
              mode: "index",
              intersect: false,
              includeInvisible: false,
              axis: "r",
            },
          }}
        ></Line>
      </div>
    </div>
  );
}
