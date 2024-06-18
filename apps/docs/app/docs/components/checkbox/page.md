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

# Checkbox

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
<Checkbox id="usage-checkbox">
  Checkbox
</Checkbox>
```

{% /example %}

## Default Checked

Pass `defaultChecked` prop to set default check state of the Checkbox.

{% example %}

```jsx
<Checkbox defaultChecked id="default-checked-checkbox">
  Checkbox
</Checkbox>
```

{% /example %}

## size

There are 3 `size` options available: `"sm"`, `"md"` (default) & `"lg"`.

{% example %}

```jsx
<div className="w-full space-y-3">
  <Checkbox size="sm" id="size-sm-checkbox">
    Checkbox
  </Checkbox>
  <Checkbox size="md" id="size-md-checkbox">
    Checkbox
  </Checkbox>
  <Checkbox size="lg" id="size-lg-checkbox">
    Checkbox
  </Checkbox>
</div>
```

{% /example %}

## Disabled

`isDisabled` prop is used to manage disable state of Checkbox.

{% example %}

```jsx
<Checkbox isDisabled id="disabled-checkbox">
  Checkbox
</Checkbox>
```

{% /example %}

## Checked

`checked` prop is used to manage check state of Checkbox.

{% example %}

```jsx
<Checkbox checked id="checked-checkbox">
  Checkbox
</Checkbox>
```

{% /example %}

## Required

`isRequired` prop is used to manage required state of Checkbox

{% example %}

```jsx
<Checkbox isRequired id="required-checkbox">
  Checkbox
</Checkbox>
```

{% /example %}

## Invalid

`isInvalid` prop is used to manage invalid state of Checkbox

{% example %}

```jsx
<Checkbox isInvalid id="invalid-checkbox">
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
