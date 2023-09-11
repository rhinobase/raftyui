---
title: Tab
pageTitle: Tab - Rafty UI
description: A set of layered sections of content—known as tab panels—that are displayed one at a time.
---

A set of layered sections of content—known as tab panels—that are displayed one at a time.

This component is made on top of [Radix UIs Tabs Component](https://www.radix-ui.com/primitives/docs/components/tabs) with our styling conventions. This component has been shared with you, ensuring that all its native properties are accessible. If you need to apply your own styling you can use the `isBarebone` (to remove styling from entire component and its subcomponents) or `isUnstyled` (to remove styling from a particular subcomponent).

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

There are 3 size options in spinner: `sm`, `md` (default) & `lg`.

{% example name="tab:size" /%}

## Variant

There are 2 `variant` options in tab: `line` (default) & `enclosed`.

{% example name="tab:variant" /%}

## Orientation

There are 2 `orientation` options in tab: `horizontal` (default) & `vertical`.
Both `orientation` supports all `variant`.

### Vertical Line Variant

{% example name="tab:Orientation-line" /%}

### Vertical Enclosed Variant

{% example name="tab:Orientation-enclosed" /%}

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
