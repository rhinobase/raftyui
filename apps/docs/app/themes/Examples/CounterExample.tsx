import { useCallback, useEffect, useState } from "react";
import { Button, Text } from "@rafty/ui";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Bar } from "react-chartjs-2";

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
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export function CounterExample() {
  const [count, setCount] = useState(200);
  const color = useColorStore((state) => state.color);
  const [secondaryVariable, setSecondaryVariable] = useState<string>("");

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
    setSecondaryVariable(cssvar("--color-primary-500", 0.2));
  }, [color]);

  return (
    <div className="space-y-3 w-[290px] h-[255px]">
      <div>
        <Text className="text-md font-semibold">Move goal</Text>
        <Text className="text-gray-500">Set your daily activity goal.</Text>
      </div>

      <div className="flex justify-between items-center">
        <Button
          variant="outline"
          size="fab"
          onClick={() => {
            if (count > 200) setCount(count - 10);
          }}
          className="!p-3"
          isDisabled={count == 200}
        >
          <AiOutlineMinus />
        </Button>
        <div className="w-full flex justify-center items-center flex-col">
          <Text className="text-5xl tabular-nums">{count}</Text>
          <Text>CALORIES/DAY</Text>
        </div>

        <Button
          variant="outline"
          size="fab"
          className="!p-3"
          onClick={() => {
            if (count < 400) setCount(count + 10);
          }}
          isDisabled={count == 400}
        >
          <AiOutlinePlus />
        </Button>
      </div>
      <Bar
        className="w-60"
        data={{
          labels: Array(13).fill(""),
          datasets: [
            {
              data: [4, 4.5, 3.5, 4.5, 3.5, 3.9, 3.4, 4.5, 3.5, 4, 3.5, 3, 3],
              backgroundColor: secondaryVariable,
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
        height={50}
        style={{ height: 100 }}
      />
      <Button
        type="button"
        variant="solid"
        colorScheme="primary"
        className="!w-full "
      >
        Set Goal
      </Button>
    </div>
  );
}
