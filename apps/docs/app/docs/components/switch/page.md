---
title: Switch
nextjs:
  metadata:
    title: Switch
    description: A control that allows the user to toggle between checked and not checked.It is used as an alternative for the checkbox component.
    twitter:
      title: Switch
      images:
        url: https://rafty.rhinobase.io/api/og?title=Switch
    openGraph:
      title: Switch
      images:
        url: https://rafty.rhinobase.io/api/og?title=Switch
---

# Switch

A control that allows the user to toggle between checked and not checked. It is used as an alternative for the checkbox component.

This component is made on top of [Radix UIs Switch Component](https://www.radix-ui.com/primitives/docs/components/switch) with our styling conventions. This component has been shared with you, ensuring that all its native properties are accessible.

## Anatomy

Import the component.

```jsx
import { Switch } from "@rafty/ui";

<Switch />;
```

## Usage

{% example %}

```jsx
<Switch />
```

{% /example %}

## Size

There are 3 size options available: `"sm"`, `"md"` (default) & `"lg"`.

{% example %}

```jsx
<div className="flex items-center gap-4">
  <Switch size="sm" />
  <Switch size="md" />
  <Switch size="lg" />
</div>
```

{% /example %}

## Disabled

`isDisabled` prop is used to show select component in disabled state.

{% example %}

```jsx
<Switch isDisabled />
```

{% /example %}

## Checked

Pass the `checked` prop is used to manage checked state.

{% example %}

```jsx
<Switch checked />
```

{% /example %}

## Required

`isRequired` prop is used to show select in required state.

{% example %}

```jsx
<Switch isRequired />
```

{% /example %}

## ReadOnly

`isReadOnly` prop is used to show select in readonly state.

{% example %}

```jsx
<Switch isReadOnly />
```

{% /example %}

## Invalid

`isInvalid` prop is used to show select in invalid state.

{% example %}

```jsx
<Switch isInvalid />
```

{% /example %}

---

## Props

### Switch

This component is built on top of [Radix Switch](https://www.radix-ui.com/primitives/docs/components/switch#root)

| Property       | Description                            | Type                                                   | Default |
| -------------- | -------------------------------------- | ------------------------------------------------------ | ------- |
| size           | Size of the switch component.          | `"sm"` or `"md"` or `"lg"`                             | `"md"`  |
| defaultChecked | To manage the default state of switch. | `boolean` or `undefined`                               | `false` |
| isDisabled     | To manage the disabled state.          | `boolean` or <Info>() => boolean</Info> or `undefined` | -       |
| isRequired     | To manage the required state.          | `boolean` or <Info>() => boolean</Info> or `undefined` | -       |
| isReadOnly     | To manage the readonly state.          | `boolean` or <Info>() => boolean</Info> or `undefined` | -       |
| isInvalid      | To manage the invalid state.           | `boolean` or <Info>() => boolean</Info> or `undefined` | -       |
| isLoading      | To manage the loading state.           | `boolean` or <Info>() => boolean</Info> or `undefined` | -       |
