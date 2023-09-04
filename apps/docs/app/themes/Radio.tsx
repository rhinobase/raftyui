import { RadioGroup, RadioGroupItem } from "@rafty/ui";
import React from "react";

export default function RadioExample() {
  return (
    <>
      <RadioGroup>
        <div className="flex flex-col gap-4">
          <RadioGroupItem value="1">Radio 1</RadioGroupItem>
          <RadioGroupItem value="2">Radio 2</RadioGroupItem>
          <RadioGroupItem value="3">Radio 3</RadioGroupItem>
        </div>
      </RadioGroup>
    </>
  );
}
