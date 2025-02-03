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
    <div className="size-full space-y-4">
      <div>
        <Text className="text-[1.5rem] font-semibold leading-[2.5rem]">
          Move goal
        </Text>
        <Text className="text-[0.875rem] leading-[1.5rem] opacity-60">
          Set your daily activity goal
        </Text>
      </div>
      <Counter />
      <ResponsiveContainer height={96} className="-mt-3">
        <BarChart width={310} height={100} data={data} margin={{ top: 15 }}>
          <Bar dataKey="value" className="fill-primary-500/30" />
        </BarChart>
      </ResponsiveContainer>
      <Button
        type="button"
        variant="solid"
        colorScheme="primary"
        className="w-full"
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
        className="p-2"
        isDisabled={count <= 200}
        aria-label="Decrement Value"
      >
        <MinusIcon height={18} width={18} className="stroke-2" />
      </Button>
      <div className="flex w-full flex-col items-center">
        <Text className="text-[3rem] tabular-nums leading-[3.5rem]">
          {count}
        </Text>
        <Text className="text-[0.875rem] font-medium leading-[1.5rem] leading-none opacity-50">
          CALORIES/DAY
        </Text>
      </div>
      <Button
        variant="outline"
        size="fab"
        className="p-2"
        onClick={() => setCount(count + 10)}
        isDisabled={count >= 400}
        aria-label="Increment Value"
      >
        <PlusIcon height={18} width={18} className="stroke-2" />
      </Button>
    </div>
  );
}
