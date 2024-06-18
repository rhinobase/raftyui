---
title: Checkbox
nextjs:
  metadata:
    title: Checkbox
    description: Checkboxes give users binary choices when presented with multiple options in a series.
    twitter:
      title: Checkbox
      images:
        url: https://rafty.rhinobase.io/api/og?title=Checkbox
    openGraph:
      title: Checkbox
      images:
        url: https://rafty.rhinobase.io/api/og?title=Checkbox
---

Checkboxes give users binary choices when presented with multiple options in a series.

This component is made on top of [Radix UIs Checkbox Component](https://www.radix-ui.com/primitives/docs/components/checkbox.) with our styling conventions. This component has been shared with you, ensuring that all its native properties are accessible.

## Anatomy

Import the component.

```jsx
import { Checkbox } from "@rafty/ui";

<Checkbox />;
```

## Usage

Checkbox component is used in forms when a user needs to select multiple values from several options.

{% example %}

```jsx
<Checkbox name="checkbox" id="1">
  Checkbox
</Checkbox>
```

{% /example %}

## Default Selected

Pass `defaultSelected` prop to set default check the Checkbox.

{% example %}

```jsx
<Checkbox defaultChecked id="2">
  Checkbox
</Checkbox>
```

{% /example %}

## size

There are 3 `size` options available: `"sm"`, `"md"` (default) & `"lg"`.

{% example %}

```jsx
<div className="w-full space-y-3">
  <Checkbox size="sm" id="6">
    Checkbox
  </Checkbox>
  <Checkbox size="md" id="7">
    Checkbox
  </Checkbox>
  <Checkbox size="lg" id="8">
    Checkbox
  </Checkbox>
</div>
```

{% /example %}

## Disabled

Pass `isDisabled` prop to disable Checkbox.

This property can also be passed in child/ sub-component.

{% example %}

```jsx
<Checkbox isDisabled id="3">
  Checkbox
</Checkbox>
```

{% /example %}

## Checked

{% example %}

```jsx
<Checkbox checked id="4">
  Checkbox
</Checkbox>
```

{% /example %}

## Required

This property can also be passed in child/ sub-component.

{% example %}

```jsx
<Checkbox isRequired id="5">
  Checkbox
</Checkbox>
```

{% /example %}

## Invalid

This property can also be passed in child/ sub-component.

{% example %}

```jsx
<Checkbox isInvalid id="6">
  Checkbox
</Checkbox>
```

{% /example %}

---

## Props

### Checkbox

This component is built on top of [Radix Checkbox](https://www.radix-ui.com/primitives/docs/components/checkbox#root)

| Property   | Description                     | Type                                                   | Default |
| ---------- | ------------------------------- | ------------------------------------------------------ | ------- |
| size       | Size of the checkbox component. | `"sm"` or `"md"` or `"lg"` or `undefined`              | `"md"`  |
| isReadOnly | To manage the readonly state.   | `boolean` or <Info>() => boolean</Info> or `undefined` | -       |
| isDisabled | To manage the disabled state.   | `boolean` or <Info>() => boolean</Info> or `undefined` | -       |
| isRequired | To manage the required state.   | `boolean` or <Info>() => boolean</Info> or `undefined` | -       |
| isInvalid  | To manage the invalid state.    | `boolean` or <Info>() => boolean</Info> or `undefined` | -       |
| isLoading  | To manage the loading state.    | `boolean` or <Info>() => boolean</Info> or `undefined` | -       |
