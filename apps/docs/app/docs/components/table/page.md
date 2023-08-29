---
title: Table
pageTitle: Table - Rafty UI
description: Table
---

## Import

Table component is used to organize and display data efficiently. It renders a `<table>` element by default

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

()=>(
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
)
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

### Container

| Property  | Description | Type     | Default |
| --------- | ----------- | -------- | ------- |
| className |             | `string` | -       |

### Root

| Property   | Description                        | Type                    | Default  |
| ---------- | ---------------------------------- | ----------------------- | -------- |
| className  |                                    | `string`                | -        |
| size       |                                    | `sm` \ `md` \ \ `lg` \  | `md`     |
| variant    |                                    | `simple` \ `striped`    | `simple` |
| isBarebone | Removes style from whole component | `boolean`               | `false`  |

### Head

| Property  | Description | Type     | Default |
| --------- | ----------- | -------- | ------- |
| className |             | `string` | -       |

### Body

| Property  | Description | Type     | Default |
| --------- | ----------- | -------- | ------- |
| className |             | `string` | -       |

### Tr

| Property  | Description | Type     | Default |
| --------- | ----------- | -------- | ------- |
| className |             | `string` | -       |

### Td

| Property  | Description | Type     | Default |
| --------- | ----------- | -------- | ------- |
| className |             | `string` | -       |
