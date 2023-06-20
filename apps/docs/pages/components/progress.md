---
title: Progress
pageTitle: Progress - Rafty UI
description: Progress
---

## Import

Progress is used to display the progress status for a task that takes a long time or consists of several steps.

```jsx
import { Progress } from "@rafty/ui";
```

## Usage

```jsx
<Progress size={size} value={80} colorScheme={colorScheme} isIndeterminate={isIndeterminate} />

<Progress value={80} />
```

## size

Pass the `size` prop if you need to adjust the size of the progress. Values can be `sm, md, lg`.

```jsx
<Progress value={80} size="sm" />
<Progress value={80} size="md" />
<Progress value={80} size="lg" />
```

## colorScheme

Pass the `colorScheme` prop to change the color of the button. You can set the value to `primary, error, success, warning`.

```jsx
<Progress value={80} colorScheme="primary" />
<Progress value={80} colorScheme="error" />
<Progress value={80} colorScheme="success" />
<Progress value={80} colorScheme="warning" />
```

## isIndeterminate

To show an animated progress, pass the `isIndeterminate` prop.

```jsx
<Progress value={80} colorScheme="primary" isIndeterminate />
```
