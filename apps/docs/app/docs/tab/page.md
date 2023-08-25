---
title: Tab
pageTitle: Tab - Rafty UI
description: Tab
---

## Import

A set of layered sections of content—known as tab panels—that are displayed one at a time.

- Tab
- TabTrigger
- TabList
- TabContent

```jsx
import { Tab, TabTrigger, TabList, TabContent } from '@rafty/ui'
```

## Usage

```jsx
<Tab defaultValue="tab1">
  <TabList>
    <TabTrigger value="tab1">Tab1</TabTrigger>
    <TabTrigger value="tab2">Tab2</TabTrigger>
  </TabList>
  <TabContent value="tab1" className="p-4">
    1 large-scale networks, high-radix switches reduce hop and switch count,
    which decreases latency and power
  </TabContent>
  <TabContent value="tab2" className="p-4">
    2 large-scale networks, high-radix switches reduce hop and switch count,
    which decreases latency and power
  </TabContent>
</Tab>
```

## Size

Pass the `size` prop if you need to adjust the size of the tab. Values can be `sm`, `md`, `lg`.

```jsx
<Tab defaultValue="tab1" size="sm">
  <TabList>
    <TabTrigger value="tab1">Tab1</TabTrigger>
    <TabTrigger value="tab2">Tab2</TabTrigger>
  </TabList>
  <TabContent value="tab1" className="p-4">
    1 large-scale networks, high-radix switches reduce hop and switch count,
    which decreases latency and power
  </TabContent>
  <TabContent value="tab2" className="p-4">
    2 large-scale networks, high-radix switches reduce hop and switch count,
    which decreases latency and power
  </TabContent>
</Tab>
```

## Orientation

Pass the `orientation` prop if you need to adjust the orientation of the Tabs. Values can be `horizontal`, `vertical`.

```jsx
<Tab defaultValue="tab1" orientation="horizontal">
  <TabList>
    <TabTrigger value="tab1">Tab1</TabTrigger>
    <TabTrigger value="tab2">Tab2</TabTrigger>
  </TabList>
  <TabContent value="tab1" className="p-4">
    1 large-scale networks, high-radix switches reduce hop and switch count,
    which decreases latency and power
  </TabContent>
  <TabContent value="tab2" className="p-4">
    2 large-scale networks, high-radix switches reduce hop and switch count,
    which decreases latency and power
  </TabContent>
</Tab>
```

## Barebone

Pass `isBarebone` prop to remove all style in tab and its sub components.

```jsx
<Tab defaultValue="tab1" isBarebone>
  <TabList>
    <TabTrigger value="tab1">Tab1</TabTrigger>
    <TabTrigger value="tab2">Tab2</TabTrigger>
  </TabList>
  <TabContent value="tab1" className="p-4">
    1 large-scale networks, high-radix switches reduce hop and switch count,
    which decreases latency and power
  </TabContent>
  <TabContent value="tab2" className="p-4">
    2 large-scale networks, high-radix switches reduce hop and switch count,
    which decreases latency and power
  </TabContent>
</Tab>
```

## UnStyled

Pass ` isUnstyled` prop to remove style from a particular sub component.

```jsx
<Tab defaultValue="tab1">
  <TabList isUnstyled>
    <TabTrigger value="tab1">Tab1</TabTrigger>
    <TabTrigger value="tab2">Tab2</TabTrigger>
  </TabList>
  <TabContent value="tab1" className="p-4">
    1 large-scale networks, high-radix switches reduce hop and switch count,
    which decreases latency and power
  </TabContent>
  <TabContent value="tab2" className="p-4">
    2 large-scale networks, high-radix switches reduce hop and switch count,
    which decreases latency and power
  </TabContent>
</Tab>
```

### API

---

### Root

| Properties         | Description                                                                                                                            | Type                      | Default            |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- | ------------------ |
| className          |                                                                                                                                        | `string`                  | -                  |
| isBarebone         | Removes style from all elements under the root element                                                                                 | `boolean`                 | `false`            |
| isUnStyled         | Removes style from a particular component                                                                                              | `boolean`                 | `false`            |
| asChild            |                                                                                                                                        | `boolean`                 | `false`            |
| defaultValue       | The value of the tab that should be active when initially rendered. Use when you do not need to control the state of the tabs.         | `string`                  | `No default value` |
| value              | The controlled value of the tab to activate. Should be used in conjunction with `onValueChange`.                                       | `string`                  | `No default value` |
| onValueChange      | Event handler called when the value changes.                                                                                           | `(value: string) => void` | -                  |
| orientation        | The orientation of the component.                                                                                                      | `horizontal` / `vertical` | `horizontal`       |
| dir                | The reading direction of the tabs. If omitted, inherits globally from `DirectionProvider` or assumes LTR (left-to-right) reading mode. | `ltr` / `rtl`             | -                  |
| activationMode     | When `automatic`, tabs are activated when receiving focus. When `manual`, tabs are activated when clicked.                             | `automatic` / `manual`    | `automatic`        |
| [data-orientation] |                                                                                                                                        | `vertical` / `horizontal` |                    |
| size               |                                                                                                                                        | `sm` / `md` / `lg`        | `md`               |
| variant            |                                                                                                                                        | `line` / `enclosed`       | `line`             |

### List

| Properties         | Description                                                                        | Type                      | Default |
| ------------------ | ---------------------------------------------------------------------------------- | ------------------------- | ------- |
| className          |                                                                                    | `string`                  | -       |
| isUnStyled         | Removes style from component                                                       | `boolean`                 | `false` |
| asChild            |                                                                                    | `boolean`                 | `false` |
| loop               | When `true`, keyboard navigation will loop from last tab to first, and vice versa. | `boolean`                 | `true`  |
| [data-orientation] |                                                                                    | `vertical` / `horizontal` |         |

### Trigger

| Properties         | Description                                                   | Type                       | Default |
| ------------------ | ------------------------------------------------------------- | -------------------------- | ------- |
| className          |                                                               | `string`                   | -       |
| isUnStyled         | Removes style from component                                  | `boolean`                  | `false` |
| asChild            |                                                               | `boolean`                  | `false` |
| value\*            | A unique value that associates the trigger with a content.    | `string`                   | -       |
| disabled           | When `true`, prevents the user from interacting with the tab. | `boolean`                  | `false` |
| [data-state]       |                                                               | `active` / `inactive`      |         |
| [data-disabled]    |                                                               | `Present when disabled   ` |         |
| [data-orientation] |                                                               | `vertical` / `horizontal`  |         |

### Content

| Properties         | Description                                                                                                           | Type                      | Default |
| ------------------ | --------------------------------------------------------------------------------------------------------------------- | ------------------------- | ------- |
| className          |                                                                                                                       | `string`                  | -       |
| isUnStyled         | Removes style from component                                                                                          | `boolean`                 | `false` |
| asChild            |                                                                                                                       | `boolean`                 | `false` |
| value\*            | A unique value that associates the content with a trigger.                                                            | `string `                 | -       |
| forceMount         | Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries. | `boolean`                 | -       |
| [data-state]       |                                                                                                                       | `active` / `inactive`     |         |
| [data-orientation] |                                                                                                                       | `vertical` / `horizontal` |         |
