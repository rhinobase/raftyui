---
title: Radio
pageTitle: Radio - Rafty UI
description: Radio
---

## Import

Radios are used when only one choice may be selected in a series of options.

```jsx
import { Radio, RadioCard, RadioGroup } from '@rafty/ui'
```

## Usage

```jsx
<RadioGroup>
  <div className="flex flex-col gap-4">
    <Radio value="1">Radio 1</Radio>
    <Radio value="2">Radio 2</Radio>
    <Radio value="3">Radio 3</Radio>
  </div>
</RadioGroup>
```

## Default Value

```jsx
<RadioGroup defaultValue="2">
  <div className="flex flex-col gap-4">
    <Radio value="1">Radio 1</Radio>
    <Radio value="2">Radio 2</Radio>
    <Radio value="3">Radio 3</Radio>
  </div>
</RadioGroup>
```

## Disabled

Pass the `isDisabled` prop if you need to disable the radio-group and its sub components.

```jsx
<RadioGroup isDisabled>
  <div className="flex flex-col gap-4">
    <Radio value="4">Radio 4</Radio>
    <Radio value="5">Radio 5</Radio>
    <Radio value="6">Radio 6</Radio>
  </div>
</RadioGroup>
```

## Radio Card

```jsx
<RadioGroup defaultValue="ABC">
  <div className="flex gap-4">
    <RadioCard
      aria-label="red"
      value="ABC"
      className="data-[selected=true]:ring-2 data-[selected=true]:ring-red-500 data-[selected=true]:ring-offset-1"
    >
      <div className="flex h-10 w-10 items-center justify-center bg-red-500 text-white">
        ABC
      </div>
    </RadioCard>
    <RadioCard
      aria-label="red"
      value="BCD"
      className="data-[selected=true]:ring-2 data-[selected=true]:ring-orange-500 data-[selected=true]:ring-offset-1"
    >
      <div className="flex h-10 w-10 items-center justify-center bg-orange-500 text-white">
        BCD
      </div>
    </RadioCard>
    <RadioCard
      aria-label="orange"
      value="CDE"
      className="data-[selected=true]:ring-2 data-[selected=true]:ring-yellow-500 data-[selected=true]:ring-offset-1"
    >
      <div className="flex h-10 w-10 items-center justify-center bg-yellow-500 text-white">
        CDE
      </div>
    </RadioCard>
    <RadioCard
      aria-label="red"
      value="DEF"
      className="data-[selected=true]:ring-2 data-[selected=true]:ring-green-500 data-[selected=true]:ring-offset-1"
    >
      <div className="flex h-10 w-10 items-center justify-center bg-green-500">
        DEF
      </div>
    </RadioCard>
  </div>
</RadioGroup>
```

## Custom Radio Card

```jsx
<div className="flex gap-4">
  <RadioGroup defaultValue="ABC">
    <div className="flex gap-4">
      <RadioCard
        aria-label="red"
        value="ABC"
        className="data-[selected=true]:ring-primary-500 data-[selected=true]:ring-2"
      >
        <div className="group-data-[selected=true]:bg-primary-50/50 relative flex flex-col gap-2 border p-2">
          <CheckCircleIcon className="text-primary-500 absolute right-2 top-2 hidden h-5 w-5 group-data-[selected=true]:block" />
          <h2 className="font-medium">Heading</h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </RadioCard>
      <RadioCard
        aria-label="red"
        value="BCD"
        className="data-[selected=true]:ring-primary-500 data-[selected=true]:ring-2"
      >
        <div className="group-data-[selected=true]:bg-primary-50/50 relative flex flex-col gap-2 border p-2">
          <CheckCircleIcon className="text-primary-500 absolute right-2 top-2 hidden h-5 w-5 group-data-[selected=true]:block" />
          <h2 className="font-medium">Heading</h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </RadioCard>
    </div>
  </RadioGroup>
</div>
```

## Radio as Tab

```jsx
<div className="flex ">
  <RadioGroup label="Tab Group" defaultValue="ABC">
    <div className="divide-secondary-400 grid w-[500px] grid-cols-4 divide-x overflow-hidden rounded-md">
      <RadioCard
        aria-label="red"
        value="ABC"
        className="bg-secondary-200 data-[selected=true]:bg-primary-500 flex w-full items-center justify-center py-2 outline-none data-[selected=true]:text-white"
      >
        ABC
      </RadioCard>
      <RadioCard
        aria-label="red"
        value="BCD"
        className="bg-secondary-200 data-[selected=true]:bg-primary-500 flex w-full items-center justify-center py-2 outline-none data-[selected=true]:text-white"
      >
        BCD
      </RadioCard>
      <RadioCard
        aria-label="orange"
        value="CDE"
        className="bg-secondary-200 data-[selected=true]:bg-primary-500 flex w-full items-center justify-center py-2 outline-none data-[selected=true]:text-white"
      >
        CDE
      </RadioCard>
      <RadioCard
        aria-label="red"
        value="DEF"
        className="bg-secondary-200 data-[selected=true]:bg-primary-500 flex w-full items-center justify-center py-2 outline-none data-[selected=true]:text-white"
      >
        EFG
      </RadioCard>
    </div>
  </RadioGroup>
</div>
```

### API

### RadioGroup

| Property     | Description                                                                                   | Type                                      | Default    |
| ------------ | --------------------------------------------------------------------------------------------- | ----------------------------------------- | ---------- |
| defaultValue |                                                                                               | `string` / `undefined`                    | -          |
| isDisabled   |                                                                                               | `boolean` / `undefined`                   | -          |
| isReadOnly   |                                                                                               | `boolean` / `undefined`                   | -          |
| isRequired   |                                                                                               | `boolean` / `undefined`                   | -          |
| name         |                                                                                               | `string` / `undefined`                    | -          |
| onChange     |                                                                                               | ((value: string) => void) / `undefined`   | -          |
| value        |                                                                                               | `string` / `undefined`                    | -          |
| size         |                                                                                               | `sm` / `md` / `lg`                        | `md`       |
| children     |                                                                                               | `ReactNode`                               | -          |
| description  | A description for the field. Provides a hint such as specific requirements for what to choose | `ReactNode`                               | -          |
| onChange     | Handler that is called when the value changes                                                 | `((value: string) => void)` / `undefined` | -          |
| orientation  | The axis the Radio Button(s) should align with                                                | `Orientation` / `undefined`               | `vertical` |

### Radio

| Property      | Description                                                    | Type                                                              | Default |
| ------------- | -------------------------------------------------------------- | ----------------------------------------------------------------- | ------- |
| value\*       |                                                                | `string`                                                          |         |
| isDisabled    |                                                                | `boolean` / `undefined`                                           | -       |
| autoFocus     | Whether the element should receive focus on render             | `boolean` / `undefined`                                           | -       |
| id            | The element's unique identifier                                | `string` / `undefined`                                            | -       |
| onBlur        | Handler that is called when the element loses focus            | `((e: React.FocusEvent<Element, Element>) => void)` /`undefined`  | -       |
| onFocus       | Handler that is called when the element receives focus         | `((e: React.FocusEvent<Element, Element>) => void)` / `undefined` | -       |
| onFocusChange | Handler that is called when the element's focus status changes | `((isFocused: boolean) => void)` / `undefined`                    | -       |
| onKeyDown     | Handler that is called when a key is pressed                   | `((e: KeyboardEvent) => void)` / `undefined`                      | -       |
| onKeyUp       | Handler that is called when a key is released                  | `((e: KeyboardEvent) => void)` / `undefined`                      | -       |
