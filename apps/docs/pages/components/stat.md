---
title: Stat
pageTitle: Stat - Rafty UI
description: Stat
---

## Import

As the name implies, the `Stat` component is used to display some statistics.

- Stat
- StatHelpText
- StatIcon
- StatLabel
- StatValue

```jsx
import { Stat, StatHelpText, StatIcon, StatLabel, StatValue } from "@rafty/ui";
```

## Usage

Pass the `type` prop if you need to increase and decrease the stat type. Values can be `increase, decrease`

```jsx
<Stat type="decrease">
  <StatLabel>Daily Return</StatLabel>
  <StatValue>17,770.90</StatValue>
  <StatHelpText>
    <StatIcon /> 0.47%
  </StatHelpText>
</Stat>
<Stat type="increase">
  <StatLabel>Daily Return</StatLabel>
  <StatValue>17,770.90</StatValue>
  <StatHelpText>
    <StatIcon /> 0.47%
  </StatHelpText>
</Stat>
```
