import { Bar } from "react-chartjs-2";
import { Text } from "@rafty/ui";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement);
const chartData = {
  labels: ["a", "b", "c", "d", "e", "f", "g", "h"],
  datasets: [
    {
      data: [6, 5, 3, 5, 2, 3, 6, 5],
      backgroundColor: "#a855f7",
    },
  ],
};

export function SubscriptionsExample() {
  return (
    <div>
      <div>
        <Text className="text-md font-semibold">Subscriptions</Text>
        <Text className="text-2xl font-bold">+2350</Text>
        <Text className="text-secondary-700 ">+180.1% from last month</Text>
      </div>
      <div className="py-4">
        <Bar
          data={chartData}
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
          height={100}
          style={{ height: 100 }}
        />
      </div>
    </div>
  );
}
