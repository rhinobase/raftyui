---
title: Tab
pageTitle: Tab - Rafty UI
description: Tab
---

## Anatomy

Import all parts and piece them together.

```jsx
import { Tab, TabTrigger, TabList, TabContent } from "@rafty/ui";

<Tab>
  <TabList>
    <TabTrigger />
    <TabContent />
  </TabList>
</Tab>;
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

| Properties | Description                        | Type    | Default |
| ---------- | ---------------------------------- | ------- | ------- |
| isBarebone | Removes style from whole component | boolean | false   |

### List

| Properties | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnStyled | Removes style from component | `boolean` |         |

### Trigger

| Properties | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnStyled | Removes style from component | `boolean` | `false` |

### Content

| Properties | Description                  | Type | Default |
| ---------- | ---------------------------- | ---- | ------- |
| isUnStyled | Removes style from component |      |         |
