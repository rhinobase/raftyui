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

Table and its sub-components are made upon native table components. If you wish to apply your own styling you can use the `isUnstyled` prop on root element (to remove styling from root component as well as from all its sub-components) or `isUnstyled` prop on a sub-component (to remove styling from that particular sub-component).

## Anatomy

Import all parts and piece them together.

```jsx
import {Table,TableHeader,TableBody,TableFooter,Tr,Th,Td} from "@rafty/ui";
  <Table>
    <TableHeader>
      <Tr>
        <Th/>
      </Tr>
    </TableHeader>
    <TableBody>
      <Tr>
        <Td/>
      </Tr>
    <TableBody>
    <TableFooter/>
  </Table>
```

## Usage

{% example %}

```jsx
<Table>
  <TableHeader>
    <Tr>
      <Th>To Convert</Th>
      <Th>Into</Th>
      <Th>Multiply By</Th>
    </Tr>
  </TableHeader>
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

## Size

There are 3 `size` options available: `"sm"`, `"md"` (default) & `"lg"`.

{% example %}

```jsx
<Table size="sm">
  <TableHeader>
    <Tr>
      <Th>To Convert</Th>
      <Th>Into</Th>
      <Th>Multiply By</Th>
    </Tr>
  </TableHeader>
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

## Variant

There are 2 `variant` options available: `"simple"` (default) & `"striped"`.

{% example %}

```jsx
<Table variant="striped">
  <TableHeader>
    <Tr>
      <Th>To Convert</Th>
      <Th>Into</Th>
      <Th>Multiply By</Th>
    </Tr>
  </TableHeader>
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

## Unstyled

Pass `isUnstyled` prop in root element to remove style from Table and all its sub-components.

{% example %}

```jsx
<Table
  isUnstyled
  className="divide-secondary-300 dark:divide-secondary-700 w-full min-w-full divide-y"
>
  <TableHeader>
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
  </TableHeader>
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
```

{% /example %}

## Unstyled Sub-Component

Pass `isUnstyled` prop in a particular sub-component to remove style from that sub-component.

{% example %}

```jsx
<Table>
  <TableHeader isUnstyled>
    <Tr>
      <Th>To Convert</Th>
      <Th>Into</Th>
      <Th>Multiply By</Th>
    </Tr>
  </TableHeader>
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

---

## Props

### Table

`Table` composes the `<table>` component.

| Property   | Description                                             | Type                                      | Default    |
| ---------- | ------------------------------------------------------- | ----------------------------------------- | ---------- |
| size       | Size of the table and its sub-components.               | `"sm"` or `"md"` or `"lg"` or `undefined` | `"md"`     |
| variant    | Style variant of the component.                         | `"simple"` or `"striped"` or `undefined`  | `"simple"` |
| isUnstyled | Remove style from this component and its sub-components | `boolean` or `undefined`                  | `false`    |

### TableHeader

`TableHeader` composes the `<thead>` component.

| Property   | Description                      | Type                     | Default |
| ---------- | -------------------------------- | ------------------------ | ------- |
| isUnstyled | Remove style from this component | `boolean` or `undefined` | `false` |

### TableBody

`TableBody` composes the `<tbody>` component.

### Td

`Td` composes the `<td>` component.

| Property   | Description                      | Type                     | Default |
| ---------- | -------------------------------- | ------------------------ | ------- |
| isUnstyled | Remove style from this component | `boolean` or `undefined` | `false` |

### Th

`Th` composes the `<th>` component.

| Property   | Description                      | Type                     | Default |
| ---------- | -------------------------------- | ------------------------ | ------- |
| isUnstyled | Remove style from this component | `boolean` or `undefined` | `false` |

### Tr

`Tr` composes the `<tr>` component.

| Property   | Description                      | Type                     | Default |
| ---------- | -------------------------------- | ------------------------ | ------- |
| isUnstyled | Remove style from this component | `boolean` or `undefined` | `false` |

### TableFooter

`TableFooter` composes the `<tfoot>` component.

| Property   | Description                      | Type                     | Default |
| ---------- | -------------------------------- | ------------------------ | ------- |
| isUnstyled | Remove style from this component | `boolean` or `undefined` | `false` |
