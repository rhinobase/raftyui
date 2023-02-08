import React from "react";
import { RadioGroup, Radio, CustomRadioBox } from "./Radio";

const data = ["Red", "Green", "Blue"];

export function Example() {
  return (
    <RadioGroup orientation="horizontal" defaultValue="red">
      {data.map((item, index) => (
        <Radio value={item.toLowerCase()} id={String(index)}>
          {item}
        </Radio>
      ))}
    </RadioGroup>
  );
}

export function Box() {
  return (
    <RadioGroup
      orientation="horizontal"
      defaultValue="red"
      className="grid grid-cols-3 gap-2"
    >
      {data.map((item, index) => (
        <CustomRadioBox value={item.toLowerCase()} id={String(index)}>
          <label htmlFor={String(index)}>{item}</label>
        </CustomRadioBox>
      ))}
    </RadioGroup>
  );
}

export function VerticalBox() {
  return (
    <RadioGroup
      orientation="vertical"
      defaultValue="red"
      className="grid grid-cols-1 gap-2"
    >
      {data.map((item, index) => (
        <CustomRadioBox value={item.toLowerCase()} id={String(index)}>
          <label htmlFor={String(index)}>{item}</label>
        </CustomRadioBox>
      ))}
    </RadioGroup>
  );
}
