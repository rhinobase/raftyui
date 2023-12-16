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

{% example %}

```jsx
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
```

{% /example %}

## TableContainer

It is a custom additional component used to enclose Table in a container.

{% example %}

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

{% /example %}

## Size

There are 3 `size` options in spinner: `sm`, `md` (default) & `lg`

{% example %}

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
```

{% /example %}

## Variant

There are 2 `variants` in the table: `simple` (default) & `striped`.

{% example %}

```jsx
<TableContainer>
  <Table variant="striped">
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

{% /example %}

## Unstyled

Pass `isUnstyled` prop in parent component to remove style in table.

{% example %}

```jsx
<TableContainer>
  <Table
    isUnstyled
    className="divide-secondary-300 dark:divide-secondary-700 min-w-full divide-y"
  >
    <TableHead>
      <Tr>
        <Th className="text-secondary-600 dark:text-secondary-300 px-4 py-3 text-left text-sm font-semibold">
          To Convert
        </Th>
        <Th className="text-secondary-600 dark:text-secondary-300 px-4 py-3 text-left text-sm font-semibold">
          Into
        </Th>
        <Th className="text-secondary-600 dark:text-secondary-300 px-4 py-3 text-left text-sm font-semibold">
          Multiply By
        </Th>
      </Tr>
    </TableHead>
    <TableBody>
      <Tr>
        <Td className="text-secondary-600 dark:text-secondary-300 whitespace-nowrap px-4 py-3 text-sm">
          inches
        </Td>
        <Td className="text-secondary-600 dark:text-secondary-300 whitespace-nowrap px-4 py-3 text-sm">
          millimetres (mm)
        </Td>
        <Td className="text-secondary-600 dark:text-secondary-300 whitespace-nowrap px-4 py-3 text-sm">
          25.4
        </Td>
      </Tr>
      <Tr>
        <Td className="text-secondary-600 dark:text-secondary-300 whitespace-nowrap px-4 py-3 text-sm">
          feet
        </Td>
        <Td className="text-secondary-600 dark:text-secondary-300 whitespace-nowrap px-4 py-3 text-sm">
          centimetres (cm)
        </Td>
        <Td className="text-secondary-600 dark:text-secondary-300 whitespace-nowrap px-4 py-3 text-sm">
          30.48
        </Td>
      </Tr>
      <Tr>
        <Td className="text-secondary-600 dark:text-secondary-300 whitespace-nowrap px-4 py-3 text-sm">
          yards
        </Td>
        <Td className="text-secondary-600 dark:text-secondary-300 whitespace-nowrap px-4 py-3 text-sm">
          metres (m)
        </Td>
        <Td className="text-secondary-600 dark:text-secondary-300 whitespace-nowrap px-4 py-3 text-sm">
          0.91444
        </Td>
      </Tr>
    </TableBody>
    <TableFooter>
      <Tr>
        <Th className="py-3text-secondary-600 dark:text-secondary-300 px-4 text-left text-sm font-semibold">
          To Convert
        </Th>
        <Th className="text-secondary-600 dark:text-secondary-300 px-4 py-3 text-left text-sm font-semibold">
          Into
        </Th>
        <Th className="text-secondary-600 dark:text-secondary-300 px-4 py-3 text-left text-sm font-semibold">
          Multiply By
        </Th>
      </Tr>
    </TableFooter>
  </Table>
</TableContainer>
```

{% /example %}

## Unstyled subcomponent

Pass `isUnstyled` prop in a particular subcomponent to remove style from that sub component.

{% example %}

```jsx
<TableContainer>
  <Table variant="striped">
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

{% /example %}

## Props

---

### TableContainer

`TableContainer` composes the `<div>` component.

### Table

`Table` composes the `<table>` component.

| Property   | Description                                            | Type                       | Default    |
| ---------- | ------------------------------------------------------ | -------------------------- | ---------- |
| size       | Size of the table component and its subcomponents.     | `"sm"` or `"md"` or `"lg"` | `"md"`     |
| variant    | Style variant of the component.                        | `"simple"` or `"striped"`  | `"simple"` |
| isUnstyled | Remove style from this component and its subcomponents | `boolean`                  | `false`    |

### TableHead

`TableHead` composes the `<thead>` component.

| Property   | Description                      | Type      | Default |
| ---------- | -------------------------------- | --------- | ------- |
| isUnstyled | Remove style from this component | `boolean` | `false` |

### TableBody

`TableHead` composes the `<tbody>` component.

| Property   | Description                      | Type      | Default |
| ---------- | -------------------------------- | --------- | ------- |
| isUnstyled | Remove style from this component | `boolean` | `false` |

### Td

`Td` composes the `<td>` component.

| Property   | Description                      | Type      | Default |
| ---------- | -------------------------------- | --------- | ------- |
| isUnstyled | Remove style from this component | `boolean` | `false` |

### Th

`Th` composes the `<th>` component.

| Property   | Description                      | Type      | Default |
| ---------- | -------------------------------- | --------- | ------- |
| isUnstyled | Remove style from this component | `boolean` | `false` |

### Tr

`Tr` composes the `<tr>` component.

| Property   | Description                      | Type      | Default |
| ---------- | -------------------------------- | --------- | ------- |
| isUnstyled | Remove style from this component | `boolean` | `false` |

### TableFooter

`TableFooter` composes the `<tfoot>` component.

| Property   | Description                      | Type      | Default |
| ---------- | -------------------------------- | --------- | ------- |
| isUnstyled | Remove style from this component | `boolean` | `false` |
