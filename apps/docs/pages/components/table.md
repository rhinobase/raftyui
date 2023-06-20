---
title: Table
pageTitle: Table - Rafty UI
description: Table
---

# Import

Table component is used to organize and display data efficiently. It renders a `<table>` element by default

- Table
- TableBody
- TableContainer
- TableFooter
- TableHead
- Td
- Th
- Tr

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

```jsx
<TableContainer>
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
