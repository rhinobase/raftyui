---
title: Table
pageTitle: Table - Rafty UI
description: Table
---

## Import

Table component is used to organize and display data efficiently. It renders a `<table>` element by default

```jsx
import { Table, TableBody, TableContainer, TableFooter, TableHead, Td, Th, Tr } from "@rafty/ui";
```

## Usage

```jsx
<TableContainer>
  <Table>
    <TableHead>
      <Tr>
        <Th>Name</Th>
        <Th>Title</Th>
        <Th>Email</Th>
        <Th>Role</Th>
      </Tr>
    </TableHead>
    <TableBody>
      <Tr>
        <Td>name</Td>
        <Td>title</Td>
        <Td>email</Td>
        <Td>role</Td>
      </Tr>
    </TableBody>
    <TableFooter></TableFooter>
  </Table>
</TableContainer>
```

## Size

Pass the `size` prop if you need to adjust the size of the table. Values can be `sm, md, lg`.

### sm

```jsx
<TableContainer>
  <Table size="sm">
    <TableHead>
      <Tr>
        <Th>Name</Th>
        <Th>Title</Th>
        <Th>Email</Th>
        <Th>Role</Th>
      </Tr>
    </TableHead>
    <TableBody>
      <Tr>
        <Td>name</Td>
        <Td>title</Td>
        <Td>email</Td>
        <Td>role</Td>
      </Tr>
    </TableBody>
    <TableFooter></TableFooter>
  </Table>
</TableContainer>
<TableContainer>
```

### md

```jsx
  <Table size="md">
    <TableHead>
      <Tr>
        <Th>Name</Th>
        <Th>Title</Th>
        <Th>Email</Th>
        <Th>Role</Th>
      </Tr>
    </TableHead>
    <TableBody>
      <Tr>
        <Td>name</Td>
        <Td>title</Td>
        <Td>email</Td>
        <Td>role</Td>
      </Tr>
    </TableBody>
    <TableFooter></TableFooter>
  </Table>
</TableContainer>
```

### lg

```jsx
<TableContainer>
  <Table size="lg">
    <TableHead>
      <Tr>
        <Th>Name</Th>
        <Th>Title</Th>
        <Th>Email</Th>
        <Th>Role</Th>
      </Tr>
    </TableHead>
    <TableBody>
      <Tr>
        <Td>name</Td>
        <Td>title</Td>
        <Td>email</Td>
        <Td>role</Td>
      </Tr>
    </TableBody>
    <TableFooter></TableFooter>
  </Table>
</TableContainer>
```

## Variant

Pass the `variant` prop if you need to adjust the visual style of the table. Values can be `simple,striped`.

### simple

```jsx
<TableContainer>
  <Table variant="simple">
    <TableHead>
      <Tr>
        <Th>Name</Th>
        <Th>Title</Th>
        <Th>Email</Th>
        <Th>Role</Th>
      </Tr>
    </TableHead>
    <TableBody>
      <Tr>
        <Td>name</Td>
        <Td>title</Td>
        <Td>email</Td>
        <Td>role</Td>
      </Tr>
    </TableBody>
    <TableFooter></TableFooter>
  </Table>
</TableContainer>
```

### striped

```jsx
<TableContainer>
  <Table variant="striped">
    <TableHead>
      <Tr>
        <Th>Name</Th>
        <Th>Title</Th>
        <Th>Email</Th>
        <Th>Role</Th>
      </Tr>
    </TableHead>
    <TableBody>
      <Tr>
        <Td>name</Td>
        <Td>title</Td>
        <Td>email</Td>
        <Td>role</Td>
      </Tr>
    </TableBody>
    <TableFooter></TableFooter>
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
        <Th>Name</Th>
        <Th>Title</Th>
        <Th>Email</Th>
        <Th>Role</Th>
      </Tr>
    </TableHead>
    <TableBody>
      <Tr>
        <Td>name</Td>
        <Td>title</Td>
        <Td>email</Td>
        <Td>role</Td>
      </Tr>
    </TableBody>
    <TableFooter></TableFooter>
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
        <Th>Name</Th>
        <Th>Title</Th>
        <Th>Email</Th>
        <Th>Role</Th>
      </Tr>
    </TableHead>
    <TableBody>
      <Tr>
        <Td>name</Td>
        <Td>title</Td>
        <Td>email</Td>
        <Td>role</Td>
      </Tr>
    </TableBody>
    <TableFooter></TableFooter>
  </Table>
</TableContainer>
```

### API

---

### Root

| Property   | Description | Type                    | Default  |
| ---------- | ----------- | ----------------------- | -------- |
| className  |             | `string`                |          |
| size:      |             | `sm` \ `md` \ \ `lg` \  | `md`     |
| variant:   |             | `simple` \ `striped`    | `simple` |
| isBarebone |             | `boolean`               |          |

### Head

| Property  | Description | Type     | Default |
| --------- | ----------- | -------- | ------- |
| className |             | `string` |         |

### Body

| Property  | Description | Type     | Default |
| --------- | ----------- | -------- | ------- |
| className |             | `string` |         |

### Tr

| Property  | Description | Type     | Default |
| --------- | ----------- | -------- | ------- |
| className |             | `string` |         |

### Td

| Property  | Description | Type     | Default |
| --------- | ----------- | -------- | ------- |
| className |             | `string` |         |
