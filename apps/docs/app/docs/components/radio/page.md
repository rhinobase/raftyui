---
title: Radio
pageTitle: Radio - Rafty UI
description: Radio
---

## Import

Radios are used when only one choice may be selected in a series of options.

```jsx
import { Radio, RadioCard, RadioGroup } from "@rafty/ui";

() => (
  <RadioGroup>
    <RadioGroupItem></RadioGroupItem>
  </RadioGroup>
);
```

## Usage

{% example name="radio:usage" /%}

## Default Value

{% example name="radio:default" /%}

## Disabled

Pass the `isDisabled` prop if you need to disable the radio-group and its sub components.

{% example name="radio:disabled" /%}
