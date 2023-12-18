---
title: Menubar
nextjs:
  metadata:
    title: Menubar
    description: A visually persistent menu, commonly found in desktop applications, offers rapid access to a consistent set of commands.
    twitter:
      title: Menubar
      images:
        url: https://rafty.rhinobase.io/api/og?title=Menu%20Bar
    openGraph:
      title: Menubar
      images:
        url: https://rafty.rhinobase.io/api/og?title=Menu%20Bar
---

A visually persistent menu, commonly found in desktop applications, offers rapid access to a consistent set of commands.

This component is made on top of [Radix UIs Menu Component](https://www.radix-ui.com/primitives/docs/components/menubar) with our styling conventions. This component has been shared with you, ensuring that all its native properties are accessible. If you need to apply your own styling you can use the `isUnstyled` prop on parent element (to remove styling from entire component and its subcomponents) or `isUnstyled` prop on a subcomponent (to remove styling from a particular subcomponent).

## Anatomy

Import all parts and piece them together.

```jsx
import { Menubar, MenubarCheckboxItem, MenubarContent, MenubarGroup, MenubarItem, MenubarMenu, MenubarRadioGroup, MenubarRadioItem, MenubarSeparator, MenubarSub, MenubarLabel, MenubarSubContent, MenubarSubTrigger, MenubarTrigger } from "@rafty/ui";

<Menubar>
  <MenubarMenu>
    <MenubarTrigger />
    <MenubarContent>
      <MenubarLabel />
      <MenubarItem />
      <MenubarGroup />
      <MenubarCheckboxItem />
      <MenubarRadioGroup>
        <MenubarRadioItem />
      </MenubarRadioGroup>
      <MenubarSub>
        <MenubarSubTrigger />
        <MenubarSubContent />
      </MenubarSub>
      <MenubarSeparator />
    </MenubarContent>
  </MenubarMenu>
</Menubar>;
```

## Usage

{% example %}

```jsx
function MenubarExample() {
  const [isBookmarkChecked, setBookmarkChecked] = useState(true);
  const [showFullUrls, setShowFullUrls] = useState(true);
  const [selectedPerson, setSelectedPerson] = useState("andy");

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger variant="ghost">File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New Tab</MenubarItem>
          <MenubarItem>New Window</MenubarItem>
          <MenubarItem>New Incognito Window</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Print</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger variant="ghost">Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Undo</MenubarItem>
          <MenubarItem>Redo</MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Find</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Search the web…</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Find…</MenubarItem>
              <MenubarItem>Find Next</MenubarItem>
              <MenubarItem>Find Previous</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>Cut</MenubarItem>
          <MenubarItem>Copy</MenubarItem>
          <MenubarItem>Paste</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger variant="ghost">View</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem checked={isBookmarkChecked} onCheckedChange={setBookmarkChecked}>
            Always Show Bookmarks Bar
          </MenubarCheckboxItem>
          <MenubarCheckboxItem checked={showFullUrls} onCheckedChange={setShowFullUrls}>
            Always Show Full URLs
          </MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarItem>Reload</MenubarItem>
          <MenubarItem>Force Reload</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Toggle Fullscreen</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Hide Sidebar</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger variant="ghost">Profiles</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value={selectedPerson} onValueChange={setSelectedPerson}>
            <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
            <MenubarRadioItem value="benolt">Benolt</MenubarRadioItem>
            <MenubarRadioItem value="luis">Luis</MenubarRadioItem>
            <MenubarSeparator />
            <MenubarItem>Edit…</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Add Profile…</MenubarItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
```

{% /example %}

## Size

There are 3 `size` options in the menu bar: `sm`, `md` (default) & `lg`.

{% example %}

```jsx
function MenubarExample() {
  const [isBookmarkChecked, setBookmarkChecked] = useState(true);
  const [showFullUrls, setShowFullUrls] = useState(true);
  const [selectedPerson, setSelectedPerson] = useState("andy");

  return (
    <Menubar size="sm">
      <MenubarMenu>
        <MenubarTrigger variant="ghost">File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New Tab</MenubarItem>
          <MenubarItem>New Window</MenubarItem>
          <MenubarItem>New Incognito Window</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Print</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger variant="ghost">Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Undo</MenubarItem>
          <MenubarItem>Redo</MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Find</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Search the web…</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Find…</MenubarItem>
              <MenubarItem>Find Next</MenubarItem>
              <MenubarItem>Find Previous</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>Cut</MenubarItem>
          <MenubarItem>Copy</MenubarItem>
          <MenubarItem>Paste</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger variant="ghost">View</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem checked={isBookmarkChecked} onCheckedChange={setBookmarkChecked}>
            Always Show Bookmarks Bar
          </MenubarCheckboxItem>
          <MenubarCheckboxItem checked={showFullUrls} onCheckedChange={setShowFullUrls}>
            Always Show Full URLs
          </MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarItem>Reload</MenubarItem>
          <MenubarItem>Force Reload</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Toggle Fullscreen</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Hide Sidebar</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger variant="ghost">Profiles</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value={selectedPerson} onValueChange={setSelectedPerson}>
            <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
            <MenubarRadioItem value="benolt">Benolt</MenubarRadioItem>
            <MenubarRadioItem value="luis">Luis</MenubarRadioItem>
            <MenubarSeparator />
            <MenubarItem>Edit…</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Add Profile…</MenubarItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
```

{% /example %}

## Unstyled

Pass `isUnstyled` prop in parent component to remove style in menubar.

{% example %}

```jsx
function MenubarExample() {
  const [isBookmarkChecked, setBookmarkChecked] = useState(true);
  const [showFullUrls, setShowFullUrls] = useState(true);

  return (
    <Menubar className="flex w-max items-center" isUnstyled>
      <MenubarMenu>
        <MenubarTrigger variant="ghost" className="hover:bg-secondary-200 dark:hover:bg-secondary-700 rounded-md px-4 py-1 focus:outline-none dark:text-white">
          File
        </MenubarTrigger>
        <MenubarContent className="dark:bg-secondary-800 w-full space-y-2 rounded-md bg-white p-2 py-1.5 text-sm">
          <MenubarItem className="hover:bg-secondary-200 dark:hover:bg-secondary-700 cursor-pointer rounded-md px-4 py-1.5 focus:outline-none">New Tab</MenubarItem>
          <MenubarItem className="hover:bg-secondary-200 dark:hover:bg-secondary-700 cursor-pointer rounded-md px-4 py-1.5 focus:outline-none">New Window</MenubarItem>
          <MenubarItem className="hover:bg-secondary-200 dark:hover:bg-secondary-700 cursor-pointer rounded-md px-4 py-1.5 focus:outline-none">New Incognito Window</MenubarItem>
          <MenubarSeparator className="border-secondary-200 dark:border-secondary-700 border " />
          <MenubarItem className="hover:bg-secondary-200 dark:hover:bg-secondary-700 cursor-pointer rounded-md px-4 py-1.5 focus:outline-none">Print</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger variant="ghost" className="hover:bg-secondary-200 dark:hover:bg-secondary-700 rounded-md px-4 py-1 focus:outline-none dark:text-white">
          Edit
        </MenubarTrigger>
        <MenubarContent className="dark:bg-secondary-800 w-[200px] space-y-1 rounded-md bg-white p-2 text-sm">
          <MenubarItem className="hover:bg-secondary-200 dark:hover:bg-secondary-700 cursor-pointer rounded-md px-4 py-1.5 focus:outline-none">Undo</MenubarItem>
          <MenubarItem className="hover:bg-secondary-200 dark:hover:bg-secondary-700 cursor-pointer rounded-md px-4 py-1.5 focus:outline-none">Redo</MenubarItem>
          <MenubarSeparator className="border-secondary-200 dark:border-secondary-700 border " />
          <MenubarSub>
            <MenubarSubTrigger className="hover:bg-secondary-200 dark:hover:bg-secondary-700 flex cursor-pointer items-center justify-between rounded-lg px-4 py-1.5 focus:outline-none">Find</MenubarSubTrigger>
            <MenubarSubContent className="dark:bg-secondary-800 ml-1 w-[200px] space-y-1 rounded-md bg-white p-2 text-sm">
              <MenubarItem className="hover:bg-secondary-200 dark:hover:bg-secondary-700 cursor-pointer rounded-md px-4 py-1.5 focus:outline-none">Search the web…</MenubarItem>
              <MenubarSeparator className="border-secondary-200 dark:border-secondary-700 border " />
              <MenubarItem className="hover:bg-secondary-200 dark:hover:bg-secondary-700 cursor-pointer rounded-md px-4 py-1.5 focus:outline-none">Find…</MenubarItem>
              <MenubarItem className="hover:bg-secondary-200 dark:hover:bg-secondary-700 cursor-pointer rounded-md px-4 py-1.5 focus:outline-none">Find Next</MenubarItem>
              <MenubarItem className="hover:bg-secondary-200 dark:hover:bg-secondary-700 cursor-pointer rounded-md px-4 py-1.5 focus:outline-none">Find Previous</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator className="border-secondary-200 dark:border-secondary-700 border " />
          <MenubarItem className="hover:bg-secondary-200 dark:hover:bg-secondary-700 cursor-pointer rounded-md px-4 py-1.5 focus:outline-none">Cut</MenubarItem>
          <MenubarItem className="hover:bg-secondary-200 dark:hover:bg-secondary-700 cursor-pointer rounded-md px-4 py-1.5 focus:outline-none">Copy</MenubarItem>
          <MenubarItem className="hover:bg-secondary-200 dark:hover:bg-secondary-700 cursor-pointer rounded-md px-4 py-1.5 focus:outline-none">Paste</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger variant="ghost" className="hover:bg-secondary-200 dark:hover:bg-secondary-700 rounded-md px-4 py-1 focus:outline-none dark:text-white">
          View
        </MenubarTrigger>
        <MenubarContent className="dark:bg-secondary-800 text-md w-full space-y-1 rounded-md bg-white p-2 text-sm">
          <MenubarCheckboxItem checked={isBookmarkChecked} onCheckedChange={setBookmarkChecked} className="hover:bg-secondary-200 dark:hover:bg-secondary-700 cursor-pointer rounded-md px-6 py-1.5 focus:outline-none">
            Always Show Bookmarks Bar
          </MenubarCheckboxItem>
          <MenubarCheckboxItem checked={showFullUrls} onCheckedChange={setShowFullUrls} className="hover:bg-secondary-200 item-center dark:hover:bg-secondary-700 flex cursor-pointer rounded-md py-1.5 pl-6 focus:outline-none">
            Always Show Full URLs
          </MenubarCheckboxItem>
          <MenubarSeparator className="border-secondary-200 dark:border-secondary-700 border " />
          <MenubarItem className="hover:bg-secondary-200 dark:hover:bg-secondary-700 cursor-pointer rounded-md px-4 py-1.5 focus:outline-none">Reload</MenubarItem>
          <MenubarItem className="hover:bg-secondary-200 dark:hover:bg-secondary-700 cursor-pointer rounded-md px-4 py-1.5 focus:outline-none">Force Reload</MenubarItem>
          <MenubarSeparator className="border-secondary-200 dark:border-secondary-700 border " />
          <MenubarItem className="hover:bg-secondary-200 dark:hover:bg-secondary-700 cursor-pointer rounded-md px-4 py-1.5 focus:outline-none">Toggle Fullscreen</MenubarItem>
          <MenubarSeparator className="border-secondary-200 dark:border-secondary-700 border " />
          <MenubarItem className="hover:bg-secondary-200 dark:hover:bg-secondary-700 cursor-pointer rounded-md px-4 py-1.5 focus:outline-none">Hide Sidebar</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger variant="ghost" className="hover:bg-secondary-200 dark:hover:bg-secondary-700 rounded-md px-4 py-1 focus:outline-none dark:text-white">
          Profiles
        </MenubarTrigger>
        <MenubarContent className="dark:bg-secondary-800 w-[180px] space-y-1 rounded-md bg-white p-2 px-1 text-sm">
          <MenubarSeparator className="border-secondary-200 dark:border-secondary-700 border " />
          <MenubarItem className="hover:bg-secondary-200 dark:hover:bg-secondary-700 cursor-pointer rounded-md px-2 py-1.5 focus:outline-none">Edit…</MenubarItem>
          <MenubarSeparator className="border-secondary-200 dark:border-secondary-700 border " />
          <MenubarItem className="hover:bg-secondary-200 dark:hover:bg-secondary-700 cursor-pointer rounded-md px-2 py-1.5 focus:outline-none">Add Profile…</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
```

{% /example %}

## Unstyled subcomponent

To remove styles from a specific sub component pass `isUnstyled` prop to that particular subcomponent.

{% example %}

```jsx
function MenubarExample() {
  const [isBookmarkChecked, setBookmarkChecked] = useState(true);
  const [showFullUrls, setShowFullUrls] = useState(true);
  const [selectedPerson, setSelectedPerson] = useState("andy");

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger variant="ghost">File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem isUnstyled className="hover:bg-secondary-100 dark:hover:bg-secondary-700/60 text-secondary-600 dark:text-secondary-200 cursor-pointer rounded-sm px-3.5 py-1.5 text-sm font-medium focus:outline-none">
            New Tab
          </MenubarItem>
          <MenubarItem>New Window</MenubarItem>
          <MenubarItem>New Incognito Window</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Print</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger variant="ghost">Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Undo</MenubarItem>
          <MenubarItem>Redo</MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Find</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Search the web…</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Find…</MenubarItem>
              <MenubarItem>Find Next</MenubarItem>
              <MenubarItem>Find Previous</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>Cut</MenubarItem>
          <MenubarItem>Copy</MenubarItem>
          <MenubarItem>Paste</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger variant="ghost">View</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem checked={isBookmarkChecked} onCheckedChange={setBookmarkChecked}>
            Always Show Bookmarks Bar
          </MenubarCheckboxItem>
          <MenubarCheckboxItem checked={showFullUrls} onCheckedChange={setShowFullUrls}>
            Always Show Full URLs
          </MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarItem>Reload</MenubarItem>
          <MenubarItem>Force Reload</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Toggle Fullscreen</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Hide Sidebar</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger variant="ghost">Profiles</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value={selectedPerson} onValueChange={setSelectedPerson}>
            <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
            <MenubarRadioItem value="benolt">Benolt</MenubarRadioItem>
            <MenubarRadioItem value="luis">Luis</MenubarRadioItem>
            <MenubarSeparator />
            <MenubarItem>Edit…</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Add Profile…</MenubarItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
```

{% /example %}

## Props

---

### Menubar

This component is built on top of [Radix Menubar](https://www.radix-ui.com/primitives/docs/components/menubar#root)

| Property   | Description                                            | Type                       | Default |
| ---------- | ------------------------------------------------------ | -------------------------- | ------- |
| size       | Size of the menubar component and its subcomponent.    | `"sm"` or `"md"` or `"lg"` | `"md"`  |
| isUnstyled | Remove style from this component and its subcomponents | `boolean`                  | `false` |

### MenubarMenu

This component is built on top of [Radix Menubar Menu](https://www.radix-ui.com/primitives/docs/components/menubar#menu)

### MenubarTrigger

This component is built on top of [Radix Menubar Trigger](https://www.radix-ui.com/primitives/docs/components/menubar#trigger)

| Property    | Description                              | Type                                                     | Default       |
| ----------- | ---------------------------------------- | -------------------------------------------------------- | ------------- |
| size        | Size of the menubar trigger component.   | `"sm"` or `"md"` or `"lg"` or `"icon"` or `"fab"`        | `"md"`        |
| variant     | Style variant of the component.          | `"solid"` or `"outline"` or `"ghost"`                    | `"solid"`     |
| colorScheme | Color scheme of the component.           | `"primary"` or `"secondary"` or `"error"` or `"success"` | `"secondary"` |
| leftIcon    | Custom JSX element for the left icon.    | `JSX.Element`                                            | -             |
| rightIcon   | Custom JSX element for the right icon.   | `JSX.Element`                                            | -             |
| isDisabled  | To manage disabled state.                | `boolean`                                                | `false`       |
| isActive    | To manage active state.                  | `boolean`                                                | `false`       |
| isLoading   | To manage loading state.                 | `boolean`                                                | `false`       |
| isUnstyled  | Remove style from this component         | `boolean`                                                | `false`       |
| asChild     | Treats the component as a child element. | `boolean`                                                | `false`       |

### MenubarContent

This component is built on top of [Radix Menubar Content](https://www.radix-ui.com/primitives/docs/components/menubar#content)

| Property   | Description                              | Type      | Default |
| ---------- | ---------------------------------------- | --------- | ------- |
| sideOffset | Side offset of the content from trigger. | `number`  | `5`     |
| isUnstyled | Remove style from this component         | `boolean` | `false` |

### MenubarItem

This component is built on top of [Radix Menubar Item](https://www.radix-ui.com/primitives/docs/components/menubar#item)

| Property   | Description                      | Type      | Default |
| ---------- | -------------------------------- | --------- | ------- |
| isUnstyled | Remove style from this component | `boolean` | `false` |

### MenubarLabel

This component is built on top of [Radix Menubar Label](https://www.radix-ui.com/primitives/docs/components/menubar#label)

| Property   | Description                      | Type      | Default |
| ---------- | -------------------------------- | --------- | ------- |
| isUnstyled | Remove style from this component | `boolean` | `false` |

### MenubarGroup

This component is built on top of [Radix Menubar Group](https://www.radix-ui.com/primitives/docs/components/menubar#group)

### MenubarCheckboxItem

This component is built on top of [Radix Menubar Checkbox Item](https://www.radix-ui.com/primitives/docs/components/menubar#checkboxitem)

| Property   | Description                      | Type      | Default |
| ---------- | -------------------------------- | --------- | ------- |
| isUnstyled | Remove style from this component | `boolean` | `false` |

### MenubarRadioGroup

This component is built on top of [Radix Menubar Radio Group](https://www.radix-ui.com/primitives/docs/components/menubar#radiogroup)

### MenubarRadioItem

This component is built on top of [Radix Menubar Radio Item](https://www.radix-ui.com/primitives/docs/components/menubar#radioitem)

| Property   | Description                      | Type      | Default |
| ---------- | -------------------------------- | --------- | ------- |
| isUnstyled | Remove style from this component | `boolean` | `false` |

### MenubarSub

This component is built on top of [Radix Menubar Sub](https://www.radix-ui.com/primitives/docs/components/menubar#sub)

### MenubarSeparator

This component is built on top of [Radix Menubar Separator](https://www.radix-ui.com/primitives/docs/components/menubar#separator)

| Property   | Description                      | Type      | Default |
| ---------- | -------------------------------- | --------- | ------- |
| isUnstyled | Remove style from this component | `boolean` | `false` |

### MenubarSubTrigger

This component is built on top of [Radix Menubar Sub Trigger](https://www.radix-ui.com/primitives/docs/components/menubar#subtrigger)

| Property   | Description                      | Type      | Default |
| ---------- | -------------------------------- | --------- | ------- |
| isUnstyled | Remove style from this component | `boolean` | `false` |

### MenubarSubContent

This component is built on top of [Radix Menubar Sub Content](https://www.radix-ui.com/primitives/docs/components/menubar#subcontent)

| Property   | Description                      | Type      | Default |
| ---------- | -------------------------------- | --------- | ------- |
| isUnstyled | Remove style from this component | `boolean` | `false` |
