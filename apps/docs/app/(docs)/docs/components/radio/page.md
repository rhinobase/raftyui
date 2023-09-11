---
title: Radio
pageTitle: Radio - Rafty UI
description: A set of checkable buttons—known as radio buttons—where only one button can be checked at a time.
---

A set of checkable buttons—known as radio buttons—where only one button can be checked at a time.

This component is made on top of [Radix UIs Radio Group Component](https://www.radix-ui.com/primitives/docs/components/radio-group) with our styling conventions. This component has been shared with you, ensuring that all its native properties are accessible.

## Anatomy

Import all parts and piece them together.

```jsx
import { RadioGroup, RadioGroupItem } from "@rafty/ui";

<RadioGroup>
  <RadioGroupItem />
</RadioGroup>;
```

## Usage

{% example name="radio:usage" /%}

## Size

There are 3 `size` options in progress: `sm`, `md` (default) & `lg`.

{% example name="radio:size" /%}

## Default Value

{% example name="radio:default" /%}

## Disabled

Pass the `isDisabled` prop if you need to disable the radio-group and its sub components.

{% example name="radio:disabled" /%}
