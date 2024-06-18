---
title: Stepper
nextjs:
  metadata:
    title: Stepper
    description: A navigation bar that guides users through the steps of a task.
    twitter:
      title: Stepper
      images:
        url: https://rafty.rhinobase.io/api/og?title=Stepper
    openGraph:
      title: "Stepper"
      images:
        url: https://rafty.rhinobase.io/api/og?title=Stepper
---

A navigation bar that guides users through the steps of a task.

This is a custom component crafted to adhere to our styling conventions, resulting in limited styling options and available props.

## Anatomy

Import the component.

```jsx
import { Stepper } from "@rafty/ui";

<Stepper />;
```

## Usage

{% example %}

```jsx
<Stepper
  steps={[
    {
      title: "Home",
      subTitle: "Aliquam",
      description: "Lorem ipsum dolor sit amet",
    },
    {
      title: "Menu",
      description: "Donec et lectus a risus",
    },
    {
      title: "Article",
      description: "Donec et lectus a risus",
    },
  ]}
/>
```

{% /example %}

## Value

`value` prop can be used to manage current value of Stepper.

{% example %}

```jsx
function StepperUsage() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev < 2 ? prev + 1 : prev));
  };

  const prev = () => {
    setCurrent((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const STEPS: StepType[] = [
    {
      title: "Home",
      subTitle: "Aliquam",
      description: "Lorem ipsum dolor sit amet",
    },
    {
      title: "Menu",
      description: "Donec et lectus a risus",
    },
    {
      title: "Article",
      description: "Donec et lectus a risus",
    },
  ]

  return (
    <div className="flex-col w-full" >
      <Stepper value={current} steps={STEPS} />
      <div className="mt-4 flex w-full justify-between">
        <Button size="sm" onClick={prev} isDisabled={current <= 0}>
          Previous
        </Button>
        <Button size="sm" onClick={next} isDisabled={current >= 2}>
          Next
        </Button>
      </div>
    </div>
  );

}

```

{% /example %}

## Size

There are 3 `size` options available: `"sm"`, `"md"` (default) & `"lg"`.

{% example %}

```jsx
<Stepper
  size="sm"
  steps={[
    {
      title: "Home",
      subTitle: "Aliquam",
      description: "Lorem ipsum dolor sit amet",
    },
    {
      title: "Menu",
      description: "Donec et lectus a risus",
    },
    {
      title: "Article",
      description: "Donec et lectus a risus",
    },
  ]}
/>
```

{% /example %}

## Initial

`initial` prop is used to pass starting value of the initial step.

{% example %}

```jsx
<Stepper
  initial={1}
  steps={[
    {
      title: "Home",
      subTitle: "Aliquam",
      description: "Lorem ipsum dolor sit amet",
    },
    {
      title: "Menu",
      description: "Donec et lectus a risus",
    },
    {
      title: "Article",
      description: "Donec et lectus a risus",
    },
  ]}
/>
```

{% /example %}

## Direction

There are 2 `direction` options available: `"horizontal"` (default) & `"vertical"`.

{% example %}

```jsx
<Stepper
  direction="vertical"
  className="h-[500px]"
  steps={[
    {
      title: "Home",
      subTitle: "Aliquam",
      description: "Lorem ipsum dolor sit amet",
    },
    {
      title: "Menu",
      description: "Donec et lectus a risus",
    },
    {
      title: "Article",
      description: "Donec et lectus a risus",
    },
  ]}
/>
```

{% /example %}

## Disabled

`isDisabled` prop is used to manage disable state of field.

{% example %}

```jsx
<Stepper
  isDisabled
  steps={[
    {
      title: "Home",
      subTitle: "Aliquam",
      description: "Lorem ipsum dolor sit amet",
    },
    {
      title: "Menu",
      description: "Donec et lectus a risus",
    },
    {
      title: "Article",
      description: "Donec et lectus a risus",
    },
  ]}
/>
```

{% /example %}

## Custom Connector

`connector` prop is used to pass custom connector node to Stepper and it is of `({active: boolean}) => JSX.Element` callback type, so that you can style connector node in active state.

{% example %}

```jsx
<Stepper
  steps={[
    {
      title: "Home",
      subTitle: "Aliquam",
      description: "Lorem ipsum dolor sit amet",
    },
    {
      title: "Menu",
      description: "Donec et lectus a risus",
    },
    {
      title: "Article",
      description: "Donec et lectus a risus",
    },
  ]}
  connector={({ active }) => (
    <hr
      className={classNames(
        "h-px w-full border-t-2",
        active ? "border-blue-500" : "border-secondary-400 border-dotted",
      )}
    />
  )}
/>
```

{% /example %}

---

## Props

### Stepper

`Stepper` composes the `<div>` component.

| Property      | Description                                       | Type                                                                       | Default          |
| ------------- | ------------------------------------------------- | -------------------------------------------------------------------------- | ---------------- |
| steps         | Array of steps to be displayed in the stepper.    | `StepType[]`                                                               | -                |
| size          | Size of the stepper component.                    | `"sm"` or `"md"` or `"lg"` or `undefined`                                  | `"md"`           |
| direction     | Orientation of the steps components.              | `"horizontal"` or `"vertical"` or `undefined`                              | `"horizontal"`   |
| initial       | The starting value of initial step.               | `number` or `undefined`                                                    | `1`              |
| value         | Value of the stepper.                             | `number` or `undefined`                                                    | `initial`        |
| isDisabled    | To manage the disable state.                      | `boolean` or `undefined`                                                   | `false`          |
| onValueChange | The callback invoke when value is changed.        | <Info>(value?: number) => void</Info> or `undefined`                       | -                |
| connector     | To pass custom connector component between steps. | <Info>(props?: `{ active: boolean }`) => JSX.Element</Info> or `undefined` | `StepsConnector` |
