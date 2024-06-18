---
title: "Timeline"
nextjs:
  metadata:
    title: "Timeline"
    description: "This component is used when a series of information needs to be ordered by time (ascending or descending) or when you need a timeline to make a visual connection."
    twitter:
      title: "Timeline"
      images:
        url: "https://rafty.rhinobase.io/api/og?title=Timeline"
    openGraph:
      title: "Timeline"
      images:
        url: "https://rafty.rhinobase.io/api/og?title=Timeline"
---

This component is used when a series of information needs to be ordered by time (ascending or descending) or when you need a timeline to make a visual connection.

## Anatomy

Import all parts and piece them together.

```jsx
import { Timeline } from "@rafty/ui";

<Timeline>
  <TimelineItem />
</Timeline>;
```

## Usage

{% example %}

```jsx
<Timeline className="h-[300px]">
  <TimelineItem>Item 1</TimelineItem>
  <TimelineItem>Item 2</TimelineItem>
  <TimelineItem>Item 3</TimelineItem>
</Timeline>
```

{% /example %}

## Size

There are 3 `size` options available: `"sm"`, `"md"` (default) & `"lg"`.

{% example %}

```jsx
<Timeline size="lg" className="h-[300px]">
  <TimelineItem>Item 1</TimelineItem>
  <TimelineItem>Item 2</TimelineItem>
  <TimelineItem>Item 3</TimelineItem>
</Timeline>
```

{% /example %}

## Align

There are 2 `align` options available: `"left"`(default) & `"right"`.

{% example %}

```jsx
<Timeline align="right" className="h-[300px]">
  <TimelineItem>Item 1</TimelineItem>
  <TimelineItem>Item 2</TimelineItem>
  <TimelineItem>Item 3</TimelineItem>
</Timeline>
```

{% /example %}

## Status

There are 4 `status` options available in TimelineItem: `"error"`, `"info"` (default), `"success"` & `"warning"`.

{% example %}

```jsx
<Timeline className="h-[300px]">
  <TimelineItem status="error">Error Status</TimelineItem>
  <TimelineItem status="info">Info Status</TimelineItem>
  <TimelineItem status="success">Success Status</TimelineItem>
  <TimelineItem status="warning">Warning Status</TimelineItem>
</Timeline>
```

{% /example %}

## Loading

- `isLoading` prop is used to manage loading state of Timeline and its sub-components.
- `loadingText` prop can be used to pass custom string to display when Timeline is in loading state.

{% example %}

```jsx
<Timeline className="h-[300px]" isLoading loadingText="Loading more...">
  <TimelineItem>Item 1</TimelineItem>
  <TimelineItem>Item 2</TimelineItem>
  <TimelineItem>Item 3</TimelineItem>
</Timeline>
```

{% /example %}

## Description

`description` prop is used to pass descriptive text in TimelineItem.

{% example %}

```jsx
<Timeline className="h-[300px]">
  <TimelineItem description="2015-09-01 09:12:11">Sample Item 1</TimelineItem>
  <TimelineItem description="2015-09-01">Sample Item 2</TimelineItem>
  <TimelineItem description="2015-09-01 09:12:11">Sample Item 3</TimelineItem>
</Timeline>
```

{% /example %}

## Custom Icon

You can pass custom icon in TimelineItem using `icon` prop which is of `ReactNode` type.

{% example %}

```jsx
<Timeline className="h-[300px]">
  <TimelineItem icon={<PlusIcon className="size-5 stroke-2 text-green-500" />}>
    Sample Item 1
  </TimelineItem>
  <TimelineItem>Sample Item 2</TimelineItem>
  <TimelineItem>Sample Item 3</TimelineItem>
</Timeline>
```

{% /example %}

## Reverse

`isReverse` prop is used to change the order of TimelineItems to reverse.

{% example %}

```jsx
<Timeline isReverse className="h-[300px]">
  <TimelineItem>Item 1</TimelineItem>
  <TimelineItem>Item 2</TimelineItem>
  <TimelineItem>Item 3</TimelineItem>
</Timeline>
```

{% /example %}

---

## Props

### Timeline

`Timeline` composes the `<ul>` component.

| Property    | Description                                                       | Type                                                   | Default             |
| ----------- | ----------------------------------------------------------------- | ------------------------------------------------------ | ------------------- |
| size        | Size of the timeline and its sub-components.                      | `"sm"` or `"md"` or `"lg"` or `undefined`              | `"md"`              |
| align       | Alignment of the timeline items.                                  | `"left"` or `"right"` or `undefined`                   | `"left"`            |
| loadingDot  | Custom loading indicator for timeline item when in loading state. | `ReactNode` or `undefined`                             | -                   |
| loadingText | Custom loading text for the timeline item when in loading state.  | `ReactNode` or `undefined`                             | -                   |
| isLoading   | To manage the loading state of the timeline.                      | `boolean` or <Info>() => boolean</Info> or `undefined` | -                   |
| isReverse   | To reverse the timeline items order.                              | `boolean` or <Info>() => boolean</Info> or `undefined` | -                   |
| connector   | To render custom connector component between timeline items.      | <Info>() => JSX.Element</Info> or `undefined`          | `TimelineConnector` |

### TimelineItem

`TimelineItem` composes the `<li>` component.

| Property    | Description                                    | Type                                                               | Default  |
| ----------- | ---------------------------------------------- | ------------------------------------------------------------------ | -------- |
| status      | Status of the timeline item.                   | `"success"` or `"error"` or `"info"` or `"warning"` or `undefined` | `"info"` |
| icon        | Custom icon for the timeline item.             | `ReactNode` or `undefined`                                         | -        |
| description | Descriptive text content of the timeline item. | `ReactNode` or `undefined`                                         | -        |
