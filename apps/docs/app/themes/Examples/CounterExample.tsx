"use client";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { Button, Text } from "@rafty/ui";
import { useState } from "react";
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
    <div className="h-full w-full space-y-2">
      <div>
        <Text className="text-2xl font-semibold leading-snug">Move goal</Text>
        <Text className="text-sm leading-snug opacity-60">
          Set your daily activity goal
        </Text>
      </div>
      <Counter />
      <ResponsiveContainer height={96} className="!-mt-3">
        <BarChart width={310} height={100} data={data} margin={{ top: 15 }}>
          <Bar dataKey="value" className="fill-primary-500/30" />
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
    <div className="flex items-center">
      <Button
        variant="outline"
        size="fab"
        onClick={() => setCount(count - 10)}
        className="!p-2"
        isDisabled={count <= 200}
        aria-label="Decrement Value"
      >
        <MinusIcon height={18} width={18} />
      </Button>
      <div className="flex w-full flex-col items-center">
        <Text className="text-5xl tabular-nums">{count}</Text>
        <Text className="text-sm font-medium leading-none opacity-50">
          CALORIES/DAY
        </Text>
      </div>
      <Button
        variant="outline"
        size="fab"
        className="!p-2"
        onClick={() => setCount(count + 10)}
        isDisabled={count >= 400}
        aria-label="Increment Value"
      >
        <PlusIcon height={18} width={18} />
      </Button>
    </div>
  );
}
