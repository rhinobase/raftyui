---
title: Stat
pageTitle: Stat - Rafty UI
description: Stat
---

## Import

As the name implies, the `Stat` component is used to display some statistics.Its is majorly used in finance projects.

```jsx
import { Stat, StatHelpText, StatIcon, StatLabel, StatValue } from '@rafty/ui'
```

## Usage

```jsx
<Stat type="decrease">
  <StatLabel>Daily Return</StatLabel>
  <StatValue>17,770.90</StatValue>
  <StatHelpText>
    <StatIcon /> 0.47%
  </StatHelpText>
</Stat>
```

## Type

Pass the `type` prop if you need to increase and decrease the stat type. Values can be `increase`, `decrease`, `normal`

```jsx
<Stat type="increase">
  <StatLabel>Daily Return</StatLabel>
  <StatValue>17,770.90</StatValue>
  <StatHelpText>
    <StatIcon /> 0.47%
  </StatHelpText>
</Stat>
```

### API

---

### Root

| Property  | Description | Type                               | Default  |
| --------- | ----------- | ---------------------------------- | -------- |
| className |             | `string`                           | -        |
| type      |             | `increase` \ `decrease` \ `normal` | `normal` |

### Label

| Property  | Description | Type     | Default |
| --------- | ----------- | -------- | ------- |
| className |             | `string` | -       |

### Value

| Property  | Description | Type     | Default |
| --------- | ----------- | -------- | ------- |
| className |             | `string` | -       |

### HelpText

| Property  | Description | Type     | Default |
| --------- | ----------- | -------- | ------- |
| className |             | `string` | -       |

### Icon

| Property  | Description | Type     | Default |
| --------- | ----------- | -------- | ------- |
| className |             | `string` | -       |
