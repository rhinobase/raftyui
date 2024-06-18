---
title: Context Menu
nextjs:
  metadata:
    title: Context Menu
    description: It displays a menu located at the pointer, triggered by a right-click or a long-press.
    twitter:
      title: Context Menu
      images:
        url: https://rafty.rhinobase.io/api/og?title=Context%20Menu
    openGraph:
      title: Context Menu
      images:
        url: https://rafty.rhinobase.io/api/og?title=Context%20Menu
---

It displays a menu located at the pointer, triggered by a right-click or a long-press.

This component is made on top of [Radix UIs Context Menu Component](https://www.radix-ui.com/primitives/docs/components/context-menu) with our styling conventions. This component has been shared with you, ensuring that all its native properties are accessible. If you wish to apply your own styling you can use the `isUnstyled` prop on root element (to remove styling from root component as well as from all its sub-components) or `isUnstyled` prop on a sub-component (to remove styling from that particular sub-component).

## Anatomy

Import all parts and piece them together.

```jsx
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@rafty/ui";

<ContextMenu>
  <ContextMenuTrigger />
  <ContextMenuContent>
    <ContextMenuItem />
    <ContextMenuSub>
      <ContextMenuSubTrigger />
      <ContextMenuSubContent>
        <ContextMenuItem />
        <ContextMenuSeparator />
      </ContextMenuSubContent>
    </ContextMenuSub>
    <ContextMenuSeparator />
    <ContextMenuCheckboxItem />
    <ContextMenuSeparator />
    <ContextMenuLabel />
    <ContextMenuRadioGroup>
      <ContextMenuRadioItem />
    </ContextMenuRadioGroup>
  </ContextMenuContent>
</ContextMenu>;
```

## Usage

Unlike other similar components like Dialog, Menu, etc., it's trigger is not made using button component. You can use any element as its trigger because it is supposed to cover a area where you need to add context menu and use can use `asChild` prop to pass on the trigger props to its child element.

{% example %}

```jsx
function ContextMenuExample() {
  const [isBookmarkChecked, setBookmarkChecked] = useState(true);
  const [showFullUrls, setShowFullUrls] = useState(true);
  const [selectedPerson, setSelectedPerson] = useState("Denial");

return (

<ContextMenu>
  <ContextMenuTrigger asChild>
  <div className="flex h-[200px] w-full items-center justify-center select-none border-2 border-dotted data-[state='open']:border-primary-500 dark:data-[state='open']:border-primary-300 data-[state='closed']:border-secondary-300 dark:data-[state='closed']:border-secondary-700">
    Right Click here
    </div>
  </ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Back</ContextMenuItem>
    <ContextMenuSub>
      <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
      <ContextMenuSubContent>
        <ContextMenuItem>Save Page As...</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Developer Tools</ContextMenuItem>
      </ContextMenuSubContent>
    </ContextMenuSub>
    <ContextMenuSeparator />
    <ContextMenuCheckboxItem
      checked={isBookmarkChecked}
      onCheckedChange={setBookmarkChecked}
    >
      Show Bookmarks
    </ContextMenuCheckboxItem>
    <ContextMenuCheckboxItem
      checked={showFullUrls}
      onCheckedChange={setShowFullUrls}
    >
      Show Full URLs
    </ContextMenuCheckboxItem>
    <ContextMenuSeparator />
    <ContextMenuLabel>People</ContextMenuLabel>
    <ContextMenuRadioGroup
      value={selectedPerson}
      onValueChange={setSelectedPerson}
    >
      <ContextMenuRadioItem value="Jack">Jack</ContextMenuRadioItem>
      <ContextMenuRadioItem value="Denial">Denial</ContextMenuRadioItem>
    </ContextMenuRadioGroup>
  </ContextMenuContent>
</ContextMenu>
); }

```

{% /example %}

## Size

There are 3 `size` options available: `"sm"`, `"md"` (default), & `"lg"`.

{% example %}

```jsx
<ContextMenu size="sm">
  <ContextMenuTrigger asChild>
  <div className="flex h-[200px] w-full items-center justify-center select-none border-2 border-dotted data-[state='open']:border-primary-500 dark:data-[state='open']:border-primary-300 data-[state='closed']:border-secondary-300 dark:data-[state='closed']:border-secondary-700">
    Right Click here
    </div>
  </ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Back</ContextMenuItem>
    <ContextMenuSub>
      <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
      <ContextMenuSubContent>
        <ContextMenuItem>Save Page As...</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Developer Tools</ContextMenuItem>
      </ContextMenuSubContent>
    </ContextMenuSub>
    <ContextMenuSeparator />
    <ContextMenuCheckboxItem checked>Show Bookmarks</ContextMenuCheckboxItem>
    <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
    <ContextMenuSeparator />
    <ContextMenuLabel>People</ContextMenuLabel>
    <ContextMenuRadioGroup value="2">
      <ContextMenuRadioItem value="1">Jack</ContextMenuRadioItem>
      <ContextMenuRadioItem value="2">Denial</ContextMenuRadioItem>
    </ContextMenuRadioGroup>
  </ContextMenuContent>
</ContextMenu>
```

{% /example %}

## Unstyled

Pass `isUnstyled` prop in root element to remove style from Context Menu and all its sub-components.

{% example %}

```jsx
<ContextMenu isUnstyled>
  <ContextMenuTrigger asChild>
  <div className="flex h-[200px] w-full items-center justify-center select-none border-2 border-dotted data-[state='open']:border-primary-500 dark:data-[state='open']:border-primary-300 data-[state='closed']:border-secondary-300 dark:data-[state='closed']:border-secondary-700">
    Right Click here
    </div>
  </ContextMenuTrigger>
  <ContextMenuContent className="w-[200px] space-y-1.5 rounded-md  bg-white p-1 text-sm focus:outline-none dark:bg-secondary-800">
    <ContextMenuItem className="py-1focus:outline-none cursor-pointer rounded-md px-6  py-1 hover:bg-secondary-200 dark:hover:bg-secondary-700 ">
      Back
    </ContextMenuItem>
    <ContextMenuSub>
      <ContextMenuSubTrigger className="flex w-full cursor-pointer items-center justify-between rounded-md px-6 py-1 hover:border-none hover:bg-secondary-200 focus:outline-none dark:hover:bg-secondary-700">
        More Tools
      </ContextMenuSubTrigger>
      <ContextMenuSubContent className="w-[180px] cursor-pointer  space-y-2 rounded-md bg-white p-1 text-sm focus:outline-none dark:bg-secondary-800">
        <ContextMenuItem className="cursor-pointer rounded-md px-6 py-1 hover:border-none hover:bg-secondary-200 focus:outline-none dark:hover:bg-secondary-700">
          Save Page As...
        </ContextMenuItem>
        <ContextMenuSeparator className="border border-secondary-200 dark:border-secondary-700" />
        <ContextMenuItem className="cursor-pointer rounded-md px-6 py-1 hover:border-none hover:bg-secondary-200 focus:outline-none dark:hover:bg-secondary-700">
          Developer Tools
        </ContextMenuItem>
      </ContextMenuSubContent>
    </ContextMenuSub>
    <ContextMenuSeparator className="border border-secondary-200 dark:border-secondary-700" />
    <ContextMenuCheckboxItem
      checked
      className="flex cursor-pointer items-center rounded-md px-6 py-1 hover:border-none hover:bg-secondary-200 focus:outline-none dark:hover:bg-secondary-700"
    >
      Show Bookmarks
    </ContextMenuCheckboxItem>
    <ContextMenuCheckboxItem className="cursor-pointer rounded-md px-6 py-1 hover:border-none hover:bg-secondary-200 focus:outline-none dark:hover:bg-secondary-700">
      Show Full URLs
    </ContextMenuCheckboxItem>
    <ContextMenuSeparator className="border  border-secondary-200 dark:border-secondary-700" />
    <ContextMenuLabel className="cursor-context-menu rounded-md px-6 text-xs  hover:border-none focus:outline-none dark:text-secondary-400">
      People
    </ContextMenuLabel>
    <ContextMenuRadioGroup value="2">
      <ContextMenuRadioItem
        value="1"
        className="cursor-pointer rounded-md px-6 py-1 hover:border-none hover:bg-secondary-200 focus:outline-none dark:hover:bg-secondary-700 "
      >
        Jack
      </ContextMenuRadioItem>
      <ContextMenuRadioItem
        value="2"
        className="flex cursor-pointer items-center rounded-md px-6 py-1 hover:border-none hover:bg-secondary-200 focus:outline-none dark:hover:bg-secondary-700"
      >
        Denial
      </ContextMenuRadioItem>
    </ContextMenuRadioGroup>
  </ContextMenuContent>
</ContextMenu>
```

{% /example %}

## Unstyled Sub-Component

Pass `isUnstyled` prop in a particular sub-component to remove style from that sub-component.

{% example %}

```jsx
<ContextMenu>
  <ContextMenuTrigger asChild>
  <div className="flex h-[200px] w-full items-center justify-center select-none border-2 border-dotted data-[state='open']:border-primary-500 dark:data-[state='open']:border-primary-300 data-[state='closed']:border-secondary-300 dark:data-[state='closed']:border-secondary-700">
    Right Click here
    </div>
  </ContextMenuTrigger>
  <ContextMenuContent
    isUnstyled
    className="w-[200px] rounded-md bg-white p-1 text-sm dark:bg-secondary-800 "
  >
    <ContextMenuItem>Back</ContextMenuItem>
    <ContextMenuSub>
      <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
      <ContextMenuSubContent>
        <ContextMenuItem>Save Page As...</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Developer Tools</ContextMenuItem>
      </ContextMenuSubContent>
    </ContextMenuSub>
    <ContextMenuSeparator />
    <ContextMenuCheckboxItem checked>Show Bookmarks</ContextMenuCheckboxItem>
    <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
    <ContextMenuSeparator />
    <ContextMenuLabel>People</ContextMenuLabel>
    <ContextMenuRadioGroup value="2">
      <ContextMenuRadioItem value="1">Jack</ContextMenuRadioItem>
      <ContextMenuRadioItem value="2">Denial</ContextMenuRadioItem>
    </ContextMenuRadioGroup>
  </ContextMenuContent>
</ContextMenu>
```

{% /example %}

---

## Props

### ContextMenu

This component is built on top of [Radix Context Menu](https://www.radix-ui.com/primitives/docs/components/context-menu#root)

| Property   | Description                                              | Type                                     | Default |
| ---------- | -------------------------------------------------------- | ---------------------------------------- | ------- |
| size       | Size of the context menu and its subcomonents.           | `"sm"` or `"md"` or `"lg"`or `undefined` | `"md"`  |
| isUnstyled | Removes style from this component and its sub-components | `boolean`or `undefined`                  | `false` |

### ContextMenuTrigger

This component is built on top of [Radix Context Menu Trigger](https://www.radix-ui.com/primitives/docs/components/context-menu#trigger)

### ContextMenuContent

This component is built on top of [Radix Context Menu Content](https://www.radix-ui.com/primitives/docs/components/context-menu#content)

| Property   | Description                      | Type                     | Default |
| ---------- | -------------------------------- | ------------------------ | ------- |
| isUnstyled | Remove style from this component | `boolean` or `undefined` | `false` |

### ContextMenuItem

This component is built on top of [Radix Context Menu Item](https://www.radix-ui.com/primitives/docs/components/context-menu#item)

| Property   | Description                      | Type                     | Default |
| ---------- | -------------------------------- | ------------------------ | ------- |
| isUnstyled | Remove style from this component | `boolean` or `undefined` | `false` |

### ContextMenuCheckBoxGroup

This component is built on top of [Radix Context Menu Group](https://www.radix-ui.com/primitives/docs/components/context-menu#group)

| Property | Description                              | Type                     | Default |
| -------- | ---------------------------------------- | ------------------------ | ------- |
| asChild  | Treats the component as a child element. | `boolean` or `undefined` | `false` |

### ContextMenuLabel

This component is built on top of [Radix Context Menu Label](https://www.radix-ui.com/primitives/docs/components/context-menu#label)

| Property   | Description                      | Type                     | Default |
| ---------- | -------------------------------- | ------------------------ | ------- |
| isUnstyled | Remove style from this component | `boolean` or `undefined` | `false` |

### ContextMenuCheckboxItem

This component is built on top of [Radix Context Menu Checkbox Item](https://www.radix-ui.com/primitives/docs/components/context-menu#checkboxitem)

| Property   | Description                      | Type                     | Default |
| ---------- | -------------------------------- | ------------------------ | ------- |
| isUnstyled | Remove style from this component | `boolean` or `undefined` | `false` |

### ContextMenuSub

This component is built on top of [Radix Context Menu Sub](https://www.radix-ui.com/primitives/docs/components/context-menu#sub)

### ContextMenuRadioGroup

This component is built on top of [Radix Context Menu Radio Group](https://www.radix-ui.com/primitives/docs/components/context-menu#radiogroup)

### ContextMenuRadioItem

This component is built on top of [Radix Context Menu Radio Item](https://www.radix-ui.com/primitives/docs/components/context-menu#radioitem)

| Property   | Description                      | Type                     | Default |
| ---------- | -------------------------------- | ------------------------ | ------- |
| isUnstyled | Remove style from this component | `boolean` or `undefined` | `false` |

### ContextMenuSeparator

This component is built on top of [Radix Context Menu Separator](https://www.radix-ui.com/primitives/docs/components/context-menu#separator)

| Property   | Description                      | Type                     | Default |
| ---------- | -------------------------------- | ------------------------ | ------- |
| isUnstyled | Remove style from this component | `boolean` or `undefined` | `false` |

### ContextMenuSubTrigger

This component is built on top of [Radix Context Menu Sub Trigger](https://www.radix-ui.com/primitives/docs/components/context-menu#subtrigger)

| Property   | Description                      | Type                     | Default |
| ---------- | -------------------------------- | ------------------------ | ------- |
| isUnstyled | Remove style from this component | `boolean` or `undefined` | `false` |

### ContextMenuSubContent

This component is built on top of [Radix Context Menu Sub Content](https://www.radix-ui.com/primitives/docs/components/context-menu#subcontent)

| Property   | Description                              | Type                     | Default |
| ---------- | ---------------------------------------- | ------------------------ | ------- |
| sideOffset | Side offset of the content from trigger. | `number`                 | `10`    |
| isUnstyled | Remove style from this component         | `boolean` or `undefined` | `false` |
