import { useState } from "react";
import { Button, Text } from "@rafty/ui";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Bar, BarChart, ResponsiveContainer } from "recharts";

const data = [
  {
    value: 400,
  },
  {
    value: 300,
  },
  {
    value: 200,
  },
  {
    value: 278,
  },
  {
    value: 189,
  },
  {
    value: 239,
  },
  {
    value: 349,
  },
];

export function CounterExample() {
  return (
    <div className="space-y-2 h-full w-full">
      <div>
        <Text className="text-2xl font-semibold leading-snug">Move goal</Text>
        <Text className="text-sm opacity-60">
          Set your daily activity goal.
        </Text>
      </div>
      <Counter />
      <ResponsiveContainer height={70}>
        <BarChart width={310} height={100} data={data} margin={{ top: 15 }}>
          <Bar dataKey="value" className="fill-primary-500/40" />
        </BarChart>
      </ResponsiveContainer>
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

function Counter() {
  const [count, setCount] = useState(350);

  return (
    <div className="flex justify-between items-center">
      <Button
        variant="outline"
        size="fab"
        onClick={() => setCount(count - 10)}
        className="!p-3"
        isDisabled={count <= 200}
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
        onClick={() => setCount(count + 10)}
        isDisabled={count >= 400}
      >
        <AiOutlinePlus />
      </Button>
    </div>
  );
}
