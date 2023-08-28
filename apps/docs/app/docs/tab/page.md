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
import { Tab, TabTrigger, TabList, TabContent } from "@rafty/ui";
```

## Usage

{% example name="tab:usage" /%}

## Size

Pass the `size` prop if you need to adjust the size of the tab. Values can be `sm`, `md`, `lg`.

{% example name="tab:size" /%}

## Orientation

Pass the `orientation` prop if you need to adjust the orientation of the Tabs. Values can be `horizontal`, `vertical`.
{% example name="tab:Orientation" /%}

## Barebone

Pass `isBarebone` prop to remove all style in tab and its sub components.

{% example name="tab:barebone" /%}

## UnStyled

Pass ` isUnstyled` prop to remove style from a particular sub component.

{% example name="tab:unstyled" /%}

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
