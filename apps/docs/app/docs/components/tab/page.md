---
title: Tab
nextjs:
  metadata:
    title: Tab
    description: A set of layered sections of content—known as tab panels—that are displayed one at a time.
    twitter:
      title: Tab
      images:
        url: https://rafty.rhinobase.io/api/og?title=Tab
    openGraph:
      title: Tab
      images:
        url: https://rafty.rhinobase.io/api/og?title=Tab
---

A set of layered sections of content—known as tab panels—that are displayed one at a time.

This component is made on top of [Radix UIs Tabs Component](https://www.radix-ui.com/primitives/docs/components/tabs) with our styling conventions. This component has been shared with you, ensuring that all its native properties are accessible. If you need to apply your own styling you can use the `isUnstyled` prop on parent element (to remove styling from entire component and its subcomponents) or `isUnstyled` prop on a subcomponent (to remove styling from a particular subcomponent).

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

## Unstyled

Pass `isUnstyled` prop in parent component to remove style in Tab.

{% example name="tab:unstyled" /%}

## Unstyled subcomponent

Pass `isUnstyled` prop in a particular subcomponent to remove style from that sub component.

{% example name="tab:unstyledsub" /%}

## Props

---

### Tab

This component is built on top of [Radix Tabs](https://www.radix-ui.com/primitives/docs/components/tabs#root)

| Properties  | Description                                             | Type                       | Default      |
| ----------- | ------------------------------------------------------- | -------------------------- | ------------ |
| size        | Size of the tab component.                              | `"sm"` or `"md"` or `"lg"` | `"md"`       |
| isUnstyled  | Removes style from whole component and its subcomponent | boolean                    | `false`      |
| orientation | Orientation of the component.                           | `horizontal` or `vertical` | `horizontal` |
| variant     | Style variant of the component.                         | `line` or `enclosed`       | `line`       |

### TabList

This component is built on top of [Radix Tabs](https://www.radix-ui.com/primitives/docs/components/tabs#list)

| Properties | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes style from component | `boolean` | `false` |

### TabTrigger

This component is built on top of [Radix Tabs](https://www.radix-ui.com/primitives/docs/components/tabs#trigger)

| Properties | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes style from component | `boolean` | `false` |

### TabContent

This component is built on top of [Radix Tabs](https://www.radix-ui.com/primitives/docs/components/tabs#content)

| Properties | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes style from component | `boolean` | `false` |
