---
title: Table
pageTitle: Table - Rafty UI
description: Table
---

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

## Container

Container is a wrapper component for table to put table in a container with border. Its a optional component
{% example name="table:container" /%}

## Size

Pass the `size` prop if you need to adjust the size of the table. Values can be `sm`, `md`, `lg`.
{% example name="table:size" /%}

## Variant

Pass the `variant` prop if you need to adjust the visual style of the table. Values can be `simple`, `striped`.
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
