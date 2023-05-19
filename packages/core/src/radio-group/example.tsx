import React from "react";
import { RadioGroup } from "..";

// const RadioGroup = BaseRadioGroup;

const data = ["Red", "Green", "Blue"];

export function Example() {
  return (
    <RadioGroup.Root orientation="horizontal" defaultValue="red">
      {data.map((item, index) => (
        <RadioGroup.Item value={item.toLowerCase()} id={String(index)}>
          {item}
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  );
}

export function Box() {
  return (
    <RadioGroup.Root
      orientation="horizontal"
      defaultValue="red"
      className="grid grid-cols-3 gap-2"
    >
      {data.map((item, index) => (
        <RadioGroup.Box value={item.toLowerCase()} id={String(index)}>
          <label htmlFor={String(index)}>{item}</label>
        </RadioGroup.Box>
      ))}
    </RadioGroup.Root>
  );
}

export function VerticalBox() {
  return (
    <RadioGroup.Root
      orientation="vertical"
      defaultValue="red"
      className="grid grid-cols-1 gap-2"
    >
      {data.map((item, index) => (
        <RadioGroup.Box value={item.toLowerCase()} id={String(index)}>
          <label htmlFor={String(index)}>{item}</label>
        </RadioGroup.Box>
      ))}
    </RadioGroup.Root>
  );
}
