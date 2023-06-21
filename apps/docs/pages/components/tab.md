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

```jsx
<Tab defaultValue="tab1">
  <TabList>
    <TabTrigger value="tab1">Tab1</TabTrigger>
    <TabTrigger value="tab2">Tab2</TabTrigger>
  </TabList>
  <TabContent value="tab1" className="p-4">
    1 large-scale networks, high-radix switches reduce hop and switch count, which decreases latency and power
  </TabContent>
  <TabContent value="tab2" className="p-4">
    2 large-scale networks, high-radix switches reduce hop and switch count, which decreases latency and power
  </TabContent>
</Tab>
```

## Size

Pass the `size` prop if you need to adjust the size of the tab. Values can be `sm, md, lg`.

### sm

```jsx
<Tab defaultValue="tab1" size="sm">
  <TabList>
    <TabTrigger value="tab1">Tab1</TabTrigger>
    <TabTrigger value="tab2">Tab2</TabTrigger>
  </TabList>
  <TabContent value="tab1" className="p-4">
    1 large-scale networks, high-radix switches reduce hop and switch count, which decreases latency and power
  </TabContent>
  <TabContent value="tab2" className="p-4">
    2 large-scale networks, high-radix switches reduce hop and switch count, which decreases latency and power
  </TabContent>
</Tab>
```

### md

```jsx
<Tab defaultValue="tab1" size="md">
  <TabList>
    <TabTrigger value="tab1">Tab1</TabTrigger>
    <TabTrigger value="tab2">Tab2</TabTrigger>
  </TabList>
  <TabContent value="tab1" className="p-4">
    1 large-scale networks, high-radix switches reduce hop and switch count, which decreases latency and power
  </TabContent>
  <TabContent value="tab2" className="p-4">
    2 large-scale networks, high-radix switches reduce hop and switch count, which decreases latency and power
  </TabContent>
</Tab>
```

### lg

```jsx
<Tab defaultValue="tab1" size="lg">
  <TabList>
    <TabTrigger value="tab1">Tab1</TabTrigger>
    <TabTrigger value="tab2">Tab2</TabTrigger>
  </TabList>
  <TabContent value="tab1" className="p-4">
    1 large-scale networks, high-radix switches reduce hop and switch count, which decreases latency and power
  </TabContent>
  <TabContent value="tab2" className="p-4">
    2 large-scale networks, high-radix switches reduce hop and switch count, which decreases latency and power
  </TabContent>
</Tab>
```

## Orientation

Pass the `orientation` prop if you need to adjust the orientation of the Tabs. Values can be `horizontal, vertical`.
Orientation can be `horizontal, vertical`

### horizontal

```jsx
<Tab defaultValue="tab1" orientation="horizontal">
  <TabList>
    <TabTrigger value="tab1">Tab1</TabTrigger>
    <TabTrigger value="tab2">Tab2</TabTrigger>
  </TabList>
  <TabContent value="tab1" className="p-4">
    1 large-scale networks, high-radix switches reduce hop and switch count, which decreases latency and power
  </TabContent>
  <TabContent value="tab2" className="p-4">
    2 large-scale networks, high-radix switches reduce hop and switch count, which decreases latency and power
  </TabContent>
</Tab>
```

### vertical

```jsx
<Tab defaultValue="tab1" orientation="vertical">
  <TabList>
    <TabTrigger value="tab1">Tab1</TabTrigger>
    <TabTrigger value="tab2">Tab2</TabTrigger>
  </TabList>
  <TabContent value="tab1" className="p-4">
    1 large-scale networks, high-radix switches reduce hop and switch count, which decreases latency and power
  </TabContent>
  <TabContent value="tab2" className="p-4">
    2 large-scale networks, high-radix switches reduce hop and switch count, which decreases latency and power
  </TabContent>
</Tab>
```

## Barebone

Pass `isBarebone` prop to remove all style in tab.

```jsx
<Tab defaultValue="tab1" isBarebone>
  <TabList>
    <TabTrigger value="tab1">Tab1</TabTrigger>
    <TabTrigger value="tab2">Tab2</TabTrigger>
  </TabList>
  <TabContent value="tab1" className="p-4">
    1 large-scale networks, high-radix switches reduce hop and switch count, which decreases latency and power
  </TabContent>
  <TabContent value="tab2" className="p-4">
    2 large-scale networks, high-radix switches reduce hop and switch count, which decreases latency and power
  </TabContent>
</Tab>
```

## UnStyled

Pass ` isUnstyled` prop to remove style from a particulart sub component.

```jsx
<Tab defaultValue="tab1">
  <TabList isUnstyled>
    <TabTrigger value="tab1">Tab1</TabTrigger>
    <TabTrigger value="tab2">Tab2</TabTrigger>
  </TabList>
  <TabContent value="tab1" className="p-4">
    1 large-scale networks, high-radix switches reduce hop and switch count, which decreases latency and power
  </TabContent>
  <TabContent value="tab2" className="p-4">
    2 large-scale networks, high-radix switches reduce hop and switch count, which decreases latency and power
  </TabContent>
</Tab>
```
