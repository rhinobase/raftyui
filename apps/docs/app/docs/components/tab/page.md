---
title: Tab
nextjs:
  metadata:
    title: Tab
    description: A set of layered sections of content—known as tab panels—that are displayed one at a time.
    twitter:
      title: Tab
      images:
        url: https://rafty.rhinobase.io/api/og?title=Tab
    openGraph:
      title: Tab
      images:
        url: https://rafty.rhinobase.io/api/og?title=Tab
---

A set of layered sections of content—known as Tab panels—that are displayed one at a time.

This component is made on top of [Radix UIs Tabs Component](https://www.radix-ui.com/primitives/docs/components/tabs) with our styling conventions. This component has been shared with you, ensuring that all its native properties are accessible. If you wish to apply your own styling you can use the `isUnstyled` prop on root element (to remove styling from root component as well as from all its sub-components) or `isUnstyled` prop on a sub-component (to remove styling from that particular sub-component).

## Anatomy

Import all parts and piece them together.

```jsx
import { Tab, TabTrigger, TabList, TabContent } from "@rafty/ui";

<Tab>
  <TabList>
    <TabTrigger />
    <TabContent />
  </TabList>
</Tab>;
```

## Usage

{% example %}

```jsx
<Tab defaultValue="tab1">
  <TabList>
    <TabTrigger value="tab1">Tab1</TabTrigger>
    <TabTrigger value="tab2">Tab2</TabTrigger>
  </TabList>
  <TabContent value="tab1" className="p-4">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quidem nulla
    ipsum tempore, ad, voluptatibus necessitatibus blanditiis enim nemo commodi
    temporibus nostrum dolor suscipit exercitationem molestias distinctio. Esse,
    ad explicabo.
  </TabContent>
  <TabContent value="tab2" className="p-4">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam ex nostrum
    accusamus, harum aperiam consectetur assumenda excepturi, placeat maxime
    totam libero natus quis minima, laboriosam incidunt repellendus ratione
    animi repudiandae.
  </TabContent>
</Tab>
```

{% /example %}

## Size

There are 3 size options available: `"sm"`, `"md"` (default) & `"lg"`.

{% example %}

```jsx
<Tab size="sm" defaultValue="tab1">
  <TabList>
    <TabTrigger value="tab1">Tab1</TabTrigger>
    <TabTrigger value="tab2">Tab2</TabTrigger>
  </TabList>
  <TabContent value="tab1" className="p-4">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
    pariatur expedita incidunt veniam temporibus ipsum culpa blanditiis nemo!
    Error ea facere quod fuga voluptatum accusamus totam neque laboriosam
    expedita ducimus.
  </TabContent>
  <TabContent value="tab2" className="p-4">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, sapiente. Eius
    facilis voluptate repellendus, tempora aliquam ipsum distinctio aliquid eum
    fuga pariatur delectus odit adipisci voluptatum error cupiditate iusto
    laboriosam!
  </TabContent>
</Tab>
```

{% /example %}

## Variant

There are 2 `variant` options available: `"line"` (default) & `"enclosed"`.

{% example %}

```jsx
<Tab defaultValue="tab1" variant="enclosed">
  <TabList>
    <TabTrigger value="tab1">Tab1</TabTrigger>
    <TabTrigger value="tab2">Tab2</TabTrigger>
  </TabList>
  <TabContent value="tab1" className="p-4">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate placeat
    officiis hic itaque numquam sequi fugiat similique esse reiciendis? Corrupti
    atque ducimus quas at numquam iste nostrum modi nesciunt eius.
  </TabContent>
  <TabContent value="tab2" className="p-4">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id maiores
    excepturi unde, laboriosam natus odit itaque. Necessitatibus, corrupti
    itaque tempore aut ut voluptates! Doloribus, enim quidem dolore culpa
    adipisci reprehenderit
  </TabContent>
</Tab>
```

{% /example %}

## Orientation

There are 2 `orientation` options available: `"horizontal"` (default) & `"vertical"`. Both `orientation` supports all `variant`.

### Vertical Line Variant

{% example %}

```jsx
<Tab defaultValue="tab1" orientation="vertical" className="h-[200px]">
  <TabList>
    <TabTrigger value="tab1">Tab1</TabTrigger>
    <TabTrigger value="tab2">Tab2</TabTrigger>
  </TabList>
  <TabContent value="tab1">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi adipisci fuga
    mollitia, quia neque rem, blanditiis possimus ducimus at nulla nam cumque
    veritatis laudantium accusantium quae ex perspiciatis facere aperiam.
  </TabContent>
  <TabContent value="tab2">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate quis
    placeat, officia labore quas voluptas quisquam asperiores ut. Est nostrum
    incidunt perferendis iste facere rem expedita dolorem quod asperiores sed.
  </TabContent>
</Tab>
```

{% /example %}

### Vertical Enclosed Variant

{% example %}

```jsx
<Tab
  defaultValue="tab1"
  orientation="vertical"
  variant="enclosed"
  className="h-[200px]"
>
  <TabList>
    <TabTrigger value="tab1">Tab1</TabTrigger>
    <TabTrigger value="tab2">Tab2</TabTrigger>
  </TabList>
  <TabContent value="tab1">
    <Text className="px-3">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero quasi id
      nesciunt ipsam quaerat ad quod sunt provident! Quidem quod velit ut
      corporis dolore ipsum, rerum provident magnam impedit nisi.
    </Text>
  </TabContent>
  <TabContent value="tab2">
    <Text className="px-3">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem suscipit
      est rerum ullam rem quos quo veniam maxime! Eius labore porro dolor, ad
      accusamus vel culpa delectus non at quae!
    </Text>
  </TabContent>
</Tab>
```

{% /example %}

## Unstyled

Pass `isUnstyled` prop in root element to remove style from Tab and all its sub-components.

{% example %}

```jsx
<Tab defaultValue="tab1" isUnstyled>
  <TabList className="dark:border-secondary-700 flex w-full items-stretch border-b">
    <TabTrigger
      value="tab1"
      className="text-secondary-500 data-[disabled]:text-secondary-400 dark:text-secondary-400
        data-[disabled]:dark:text-secondary-600 data-[state=active]:dark:text-secondary-100
        p-4 transition-colors data-[disabled]:cursor-not-allowed
        data-[state=active]:border-b-2 data-[state=active]:border-blue-500
        data-[state=active]:text-black dark:data-[state=active]:border-blue-400"
    >
      Tab1
    </TabTrigger>
    <TabTrigger
      value="tab2"
      className="text-secondary-500 data-[disabled]:text-secondary-400 dark:text-secondary-400
        data-[disabled]:dark:text-secondary-600 data-[state=active]:dark:text-secondary-100
        p-4 transition-colors data-[disabled]:cursor-not-allowed
        data-[state=active]:border-b-2 data-[state=active]:border-blue-500
        data-[state=active]:text-black dark:data-[state=active]:border-blue-400"
    >
      Tab2
    </TabTrigger>
  </TabList>
  <TabContent value="tab1" className="p-4">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, nulla
    velit asperiores expedita error assumenda tempore ut dolores commodi minima
    incidunt cupiditate hic earum nemo, sunt porro, nobis distinctio recusandae.
  </TabContent>
  <TabContent value="tab2" className="p-4">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nostrum earum
    minus, aliquid doloremque optio harum odio repellat! Doloribus consectetur
    facere, repellendus omnis rerum dicta consequuntur iure dignissimos.
    Numquam, accusamus?
  </TabContent>
</Tab>
```

{% /example %}

## Unstyled Sub-Component

Pass `isUnstyled` prop in a particular sub-component to remove style from that sub-component.

{% example %}

```jsx
<Tab defaultValue="tab1">
  <TabList
    isUnstyled
    className="border-secondary-200 dark:border-secondary-700 border-b"
  >
    <TabTrigger value="tab1">Tab1</TabTrigger>
    <TabTrigger value="tab2">Tab2</TabTrigger>
  </TabList>
  <TabContent value="tab1" className="p-4">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ut veniam
    sequi totam accusantium beatae hic doloribus facilis qui cum, explicabo iste
    distinctio! Nostrum sunt incidunt consequatur in quibusdam assumenda.
  </TabContent>
  <TabContent value="tab2" className="p-4">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur alias
    eius voluptas ratione dolorum accusantium cum quam eum labore debitis.
    Ipsum, soluta? Numquam, minima fuga. Libero incidunt doloremque qui omnis.
  </TabContent>
</Tab>
```

{% /example %}

---

## Props

### Tab

This component is built on top of [Radix Tabs](https://www.radix-ui.com/primitives/docs/components/tabs#root)

| Properties  | Description                                             | Type                                          | Default        |
| ----------- | ------------------------------------------------------- | --------------------------------------------- | -------------- |
| size        | Size of the tab and its sub-components.                 | `"sm"` or `"md"` or `"lg"` or `undefined`     | `"md"`         |
| isUnstyled  | Remove style from this component and its sub-components | `boolean` or `undefined`                      | `false`        |
| orientation | Tab orientation.                                        | `"horizontal"` or `"vertical"` or `undefined` | `"horizontal"` |
| variant     | Tab style variant.                                      | `"line"` or `"enclosed"` or `undefined`       | `"line"`       |

### TabList

This component is built on top of [Radix Tabs List](https://www.radix-ui.com/primitives/docs/components/tabs#list)

| Properties | Description                      | Type      | Default |
| ---------- | -------------------------------- | --------- | ------- |
| isUnstyled | Remove style from this component | `boolean` | `false` |

### TabTrigger

This component is built on top of [Radix Tabs Trigger](https://www.radix-ui.com/primitives/docs/components/tabs#trigger)

| Properties | Description                      | Type      | Default |
| ---------- | -------------------------------- | --------- | ------- |
| isUnstyled | Remove style from this component | `boolean` | `false` |

### TabContent

This component is built on top of [Radix Tabs Content](https://www.radix-ui.com/primitives/docs/components/tabs#content)

| Properties | Description                      | Type      | Default |
| ---------- | -------------------------------- | --------- | ------- |
| isUnstyled | Remove style from this component | `boolean` | `false` |
