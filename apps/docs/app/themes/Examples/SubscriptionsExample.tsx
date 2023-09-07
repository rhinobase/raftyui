import { Bar } from "react-chartjs-2";
import { Text } from "@rafty/ui";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { useCallback, useEffect, useState } from "react";
import { useColorStore } from "../store";

ChartJS.register(CategoryScale, LinearScale, BarElement);

export function SubscriptionsExample() {
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
    <div>
      <div>
        <Text className="text-md font-semibold">Subscriptions</Text>
        <Text className="text-2xl font-bold">+2350</Text>
        <Text className="text-secondary-700 ">+180.1% from last month</Text>
      </div>
      <div className="py-4">
        <Bar
          data={{
            labels: Array(8).fill(""),
            datasets: [
              {
                data: [6, 5, 3, 5, 2, 3, 6, 5],
                backgroundColor: variable,
              },
            ],
          }}
          options={{
            responsive: true,
            scales: {
              x: { display: false },
              y: { display: false },
            },
            plugins: {
              legend: {
                display: false,
              },
            },
            interaction: {
              mode: "index",
              intersect: false,
              includeInvisible: false,
              axis: "r",
            },
          }}
          height={100}
          style={{ height: 100 }}
        />
      </div>
    </div>
  );
}
