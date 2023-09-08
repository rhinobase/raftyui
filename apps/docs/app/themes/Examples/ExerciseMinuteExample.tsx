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
  Tooltip,
} from "chart.js/auto";
import { CSSVariableValue } from "./SubscriptionsExample";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
);

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

  ChartJS.register({
    id: "customTooltip",
    afterDraw: (chart) => {
      const ctx = chart.ctx;
      const tooltip = chart.tooltip;
      const x = tooltip?.caretX;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(x, chart.chartArea.top);
      ctx.lineTo(x, chart.chartArea.bottom);
      ctx.lineWidth = 1;
      ctx.strokeStyle = "#9e9e9e";
      ctx.stroke();
      ctx.restore();
    },
  });

  return (
    <div className="space-y-1">
      <Text className="text-lg  font-semibold">Exercise Minutes</Text>
      <Text className="text-xs opacity-60">
        Your exercise minutes are ahead of where you normally are.
      </Text>

      <div className="py-8">
        <div>
          <Line
            className="w-full"
            id="tooltipLine"
            data={{
              labels: Array(8).fill(""),
              datasets: [
                {
                  label: "Today",
                  data: [240, 139, 980, 390, 480, 380, 430, 380],
                  borderColor: `rgb(${variable})`,
                  tension: 0.3,
                  backgroundColor: "white",
                },
                {
                  label: "Average",
                  data: [400, 300, 200, 278, 189, 239, 349, 239],
                  borderColor: `rgba(${variable}, 0.3)`,
                  fill: false,
                  cubicInterpolationMode: "monotone",
                  tension: 0.3,
                  backgroundColor: "white",
                },
              ],
            }}
            style={{ width: "100%", height: 200 }}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                x: {
                  display: false,
                },
                y: { display: false },
              },
              interaction: {
                mode: "index",
                intersect: false,
              },
              plugins: {
                legend: {
                  display: false,
                },

                tooltip: {
                  enabled: true,
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
