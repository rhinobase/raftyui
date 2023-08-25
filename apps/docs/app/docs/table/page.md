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
  Td,
} from '@rafty/ui'
```

## Usage

```jsx
<TableContainer>
  <Table>
    <TableHead>
      <Tr>
        <Th>To Convert</Th>
        <Th>Into</Th>
        <Th>Multiply By</Th>
      </Tr>
    </TableHead>
    <TableBody>
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td>25.4</Td>
      </Tr>
      <Tr>
        <Td>feet</Td>
        <Td>centimetres (cm)</Td>
        <Td>30.48</Td>
      </Tr>
      <Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td>0.91444</Td>
      </Tr>
    </TableBody>
    <TableFooter>
      <Tr>
        <Th>To Convert</Th>
        <Th>Into</Th>
        <Th>Multiply By</Th>
      </Tr>
    </TableFooter>
  </Table>
</TableContainer>
```

## Container

Container is a wrapper component for table to put table in a container with border. Its a optional component

## Size

Pass the `size` prop if you need to adjust the size of the table. Values can be `sm`, `md`, `lg`.

```jsx
<TableContainer>
  <Table size="sm">
    <TableHead>
      <Tr>
        <Th>To Convert</Th>
        <Th>Into</Th>
        <Th>Multiply By</Th>
      </Tr>
    </TableHead>
    <TableBody>
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td>25.4</Td>
      </Tr>
      <Tr>
        <Td>feet</Td>
        <Td>centimetres (cm)</Td>
        <Td>30.48</Td>
      </Tr>
      <Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td>0.91444</Td>
      </Tr>
    </TableBody>
    <TableFooter>
      <Tr>
        <Th>To Convert</Th>
        <Th>Into</Th>
        <Th>Multiply By</Th>
      </Tr>
    </TableFooter>
  </Table>
</TableContainer>
<TableContainer>
```

## Variant

Pass the `variant` prop if you need to adjust the visual style of the table. Values can be `simple`, `striped`.

```jsx
<TableContainer>
  <Table variant="simple">
    <TableHead>
      <Tr>
        <Th>To Convert</Th>
        <Th>Into</Th>
        <Th>Multiply By</Th>
      </Tr>
    </TableHead>
    <TableBody>
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td>25.4</Td>
      </Tr>
      <Tr>
        <Td>feet</Td>
        <Td>centimetres (cm)</Td>
        <Td>30.48</Td>
      </Tr>
      <Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td>0.91444</Td>
      </Tr>
    </TableBody>
    <TableFooter>
      <Tr>
        <Th>To Convert</Th>
        <Th>Into</Th>
        <Th>Multiply By</Th>
      </Tr>
    </TableFooter>
  </Table>
</TableContainer>
```

## Barebone

Pass `isBarebone` prop to remove all style in table.

```jsx
<TableContainer>
  <Table isBarebone>
    <TableHead>
      <Tr>
        <Th>To Convert</Th>
        <Th>Into</Th>
        <Th>Multiply By</Th>
      </Tr>
    </TableHead>
    <TableBody>
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td>25.4</Td>
      </Tr>
      <Tr>
        <Td>feet</Td>
        <Td>centimetres (cm)</Td>
        <Td>30.48</Td>
      </Tr>
      <Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td>0.91444</Td>
      </Tr>
    </TableBody>
    <TableFooter>
      <Tr>
        <Th>To Convert</Th>
        <Th>Into</Th>
        <Th>Multiply By</Th>
      </Tr>
    </TableFooter>
  </Table>
</TableContainer>
```

## UnStyled

Pass ` isUnstyled` prop to remove style from a particulart sub component.

```jsx
<TableContainer>
  <Table>
    <TableHead isUnstyled>
      <Tr>
        <Th>To Convert</Th>
        <Th>Into</Th>
        <Th>Multiply By</Th>
      </Tr>
    </TableHead>
    <TableBody>
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td>25.4</Td>
      </Tr>
      <Tr>
        <Td>feet</Td>
        <Td>centimetres (cm)</Td>
        <Td>30.48</Td>
      </Tr>
      <Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td>0.91444</Td>
      </Tr>
    </TableBody>
    <TableFooter>
      <Tr>
        <Th>To Convert</Th>
        <Th>Into</Th>
        <Th>Multiply By</Th>
      </Tr>
    </TableFooter>
  </Table>
</TableContainer>
```

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
