import { useState } from "react";
import { Button, Card, Text } from "@rafty/ui";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export function CounterExample() {
  const [count, setCount] = useState(200);

  return (
    <div className="space-y-8">
      <div className=" py-2">
        <Text className="text-xl font-bold">Move goal</Text>
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
      <Button
        type="button"
        variant="solid"
        colorScheme="primary"
        className="!w-full"
      >
        Set Goal
      </Button>
    </div>
  );
}
