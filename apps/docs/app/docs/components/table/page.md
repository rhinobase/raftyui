---
title: Table
nextjs:
  metadata:
    title: Table
    description: Table component is used to organize and display data efficiently. It renders a `<table>` element by default.
    twitter:
      title: Table
      images:
        url: https://rafty.rhinobase.io/api/og?title=Table
    openGraph:
      title: Table
      images:
        url: https://rafty.rhinobase.io/api/og?title=Table
---

Table component is used to organize and display data efficiently. It renders a `<table>` element by default.

Table and its subcomponents are made upon native table components

## Anatomy

Import all parts and piece them together.

```jsx
import {TableContainer,Table,TableHead,TableBody,TableFooter,Tr,Th,Td} from "@rafty/ui";

  <TableContainer>
  <Table>
    <TableHead>
      <Tr>
        <Th/>
      </Tr>
    </TableHead>
    <TableBody>
      <Tr>
        <Td/>
      </Tr>
    <TableBody>
    <TableFooter/>
  </Table>
  </TableContainer>
```

## Usage

{% example name="table:usage" /%}

## TableContainer

It is a custom additional component used to enclose Table in a container.

{% example name="table:container" /%}

## Size

There are 3 `size` options in spinner: `sm`, `md` (default) & `lg`

{% example name="table:size" /%}

## Variant

There are 2 `variants` in the table: `simple` (default) & `striped`.

{% example name="table:variant" /%}

## Unstyled

Pass `isUnstyled` prop in parent component to remove style in table.

{% example name="table:unstyled" /%}

## Unstyled subcomponent

Pass `isUnstyled` prop in a particular subcomponent to remove style from that sub component.

{% example name="table:unstyledsub" /%}

## Props

---

### TableContainer

`TableContainer` composes the `div` component.

### Table

`Table` composes the `table` component.

| Property   | Description                                              | Type                       | Default  |
| ---------- | -------------------------------------------------------- | -------------------------- | -------- |
| size       | Size of the switch component.                            | `"sm"` or `"md"` or `"lg"` | `"md"`   |
| variant    | Style variant of the component.                          | `simple` or `striped`      | `simple` |
| isUnstyled | Removes style from whole component and its subcomponents | `boolean`                  | `false`  |

### TableHead

`TableHead` composes the `thead` component.

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes Style from component | `boolean` | `false` |

### TableBody

`TableHead` composes the `tbody` component.

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes Style from component | `boolean` | `false` |

### Td

`Td` composes the `td` component.

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes Style from component | `boolean` | `false` |

### Th

`Th` composes the `th` component.

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes Style from component | `boolean` | `false` |

### Tr

`Tr` composes the `tr` component.

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes Style from component | `boolean` | `false` |

### TableFooter

`TableFooter` composes the `tfoot` component.

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes Style from component | `boolean` | `false` |
