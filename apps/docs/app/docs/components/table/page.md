---
title: Table
pageTitle: Table - Rafty UI
description: Table
---

Table component is used to organize and display data efficiently. It renders a `<table>` element by default.

Table and its subcomponents are made upon native table components

## Anatomy

Import all parts and piece them together.

```jsx
import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableFooter,
    Tr,
    Th,
    Td
} from "@rafty/ui";


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

## Barebone

Pass `isBarebone` prop to remove all style in table.

{% example name="table:barebone" /%}

## UnStyled

Pass ` isUnstyled` prop to remove style from a particulart sub component.

{% example name="table:unstyled" /%}

### API

---

### Root

| Property   | Description                        | Type      | Default |
| ---------- | ---------------------------------- | --------- | ------- |
| isBarebone | Removes style from whole component | `boolean` | `false` |
| isUnstyled | Removes Style from component       | `string`  | -       |

### Head

| Property   | Description                  | Type     | Default |
| ---------- | ---------------------------- | -------- | ------- |
| isUnstyled | Removes Style from component | `string` | -       |

### Body

| Property   | Description                  | Type     | Default |
| ---------- | ---------------------------- | -------- | ------- |
| isUnstyled | Removes Style from component | `string` | -       |

### Tr

| Property   | Description                  | Type     | Default |
| ---------- | ---------------------------- | -------- | ------- |
| isUnstyled | Removes Style from component | `string` | -       |

### Td

| Property   | Description                  | Type     | Default |
| ---------- | ---------------------------- | -------- | ------- |
| isUnstyled | Removes Style from component | `string` | -       |

### TableFooter

| Property   | Description                  | Type     | Default |
| ---------- | ---------------------------- | -------- | ------- |
| isUnstyled | Removes Style from component | `string` | -       |
