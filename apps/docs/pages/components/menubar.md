---
title: Menu Bar
pageTitle: Menu Bar - Rafty UI
description: Menu Bar
---

## Import

A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands.

```jsx
import { Menubar, MenubarCheckboxItem, MenubarContent, MenubarItem, MenubarMenu, MenubarRadioGroup, MenubarRadioItem, MenubarSeparator, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger } from "@rafty/ui";
```

## Usage

```jsx
const [bookmarksChecked, setBookmarksChecked] = useState(true);
const [fullUrlChecked, setFullUrlChecked] = useState(true);
const [person, setPerson] = useState("1");

return (
  <div className="w-96">
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New Tab</MenubarItem>
          <MenubarItem>New Window</MenubarItem>
          <MenubarItem>New Incognito Window</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Print</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
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
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem checked={bookmarksChecked} onCheckedChange={setBookmarksChecked}>
            Always Show Bookmarks Bar
          </MenubarCheckboxItem>
          <MenubarCheckboxItem checked={fullUrlChecked} onCheckedChange={setFullUrlChecked}>
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
        <MenubarTrigger>Profiles</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value={person} onValueChange={setPerson}>
            <MenubarRadioItem value="1">Andy</MenubarRadioItem>
            <MenubarRadioItem value="2">Benolt</MenubarRadioItem>
            <MenubarRadioItem value="3">Luis</MenubarRadioItem>
            <MenubarSeparator />
            <MenubarItem>Edit…</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Add Profile…</MenubarItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  </div>
);
```

## Size

Pass the `size` prop if you need to adjust the size of the menubar. Values can be `sm, md, lg`.

### sm

```jsx
<Menubar size="sm">
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>New Tab</MenubarItem>
      <MenubarItem>Print</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>Edit</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>Undo</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>View</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>Toggle Fullscreen</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>Profiles</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>New Tab</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>
```

### md

```jsx
<Menubar size="md">
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>New Tab</MenubarItem>
      <MenubarItem>Print</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>Edit</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>Undo</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>View</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>Toggle Fullscreen</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>Profiles</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>New Tab</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>
```

### lg

```jsx
<Menubar size="lg">
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>New Tab</MenubarItem>
      <MenubarItem>Print</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>Edit</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>Undo</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>View</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>Toggle Fullscreen</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>Profiles</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>New Tab</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>
```

## Barebone

Pass `isBarebone` prop to remove all style in menubar.

```jsx
<Menubar isBarebone>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>New Tab</MenubarItem>
      <MenubarItem>Print</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>Edit</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>Undo</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>View</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>Toggle Fullscreen</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>Profiles</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>New Tab</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>
```

## UnStyled

Pass ` isUnstyled` prop to remove style from a particulart sub component.

```jsx
<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem isUnstyled>New Tab</MenubarItem>
      <MenubarItem>Print</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>Edit</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>Undo</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>View</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>Toggle Fullscreen</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>Profiles</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>New Tab</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>
```

### API

---

### Root

| Property      | Description                        | Type          | Default          |
| ------------- | ---------------------------------- | ------------- | ---------------- |
| className     |                                    | `string`      |                  |
| isBarebone    | Removes style from whole component | `boolean`     | false            |
| isUnStyled    | Removes Style from component       | `boolean`     | false            |
| size          |                                    | `sm, md, lg`  | md               |
| asChild       |                                    | `boolean`     | false            |
| defaultValue  |                                    | `string`      | No default value |
| value         |                                    | `string`      | No default value |
| onValueChange |                                    | `function`    | No default value |
| dir           |                                    | `ltr` / `rtl` | No default value |
| loop          |                                    | `boolean`     | false            |

### Menu

| Property | Description | Type      | Default |
| -------- | ----------- | --------- | ------- |
| asChild  |             | `boolean` | false   |
| value    |             | string    |         |

### Trigger

`MenubarTrigger`composes `Button` component

| Property           | Description | Type                     | Default |
| ------------------ | ----------- | ------------------------ | ------- |
| asChild            |             | `boolean`                | false   |
| Data Attribute     |             | Values                   |         |
| [data-state]       |             | `open` / `closed`        |         |
| [data-highlighted] |             | Present when highlighted |         |
| [data-disabled]    |             | Present when disabled    |         |

### Conetnt

| Property             | Description                  | Type                                | Default          |
| -------------------- | ---------------------------- | ----------------------------------- | ---------------- |
| className            |                              | `string`                            |                  |
| isUnstyled           | Removes style from component | `boolean`                           | false            |
| asChild              |                              | `boolean`                           | false            |
| loop                 |                              | `boolean`                           | false            |
| onCloseAutoFocus     |                              | `function`                          | No default value |
| onEscapeKeyDown      |                              | `function`                          | No default value |
| onPointerDownOutside |                              | `function`                          | No default value |
| onFocusOutside       |                              | `function`                          | No default value |
| onInteractOutside    |                              | `function`                          | No default value |
| forceMount           |                              | `boolean`                           | No default value |
| side                 |                              | `top` / `right` / `bottom` /`left`  | bottom           |
| sideOffset           |                              | `number`                            | 0                |
| align                |                              | `start` / `center` / `end`          | center           |
| alignOffset          |                              | `number`                            | 0                |
| avoidCollisions      |                              | `boolean`                           | true             |
| collisionBoundary    |                              | Boundary                            | []               |
| collisionPadding     |                              | `number`                            | 0                |
| arrowPadding         |                              | `number`                            | 0                |
| sticky               |                              | `partial` / `always`                | "partial"        |
| hideWhenDetached     |                              | `boolean`                           | false            |
| Data Attribute       |                              | Values                              |                  |
| [data-state]         |                              | `open`                              | `closed`         |
| [data-side]          |                              | `left` / `right` / `bottom` / `top` |                  |
| [data-align]         |                              | `start` / `end` /`center`           |                  |
| CSS Variable         |                              | Description                         |                  |

### Item

| Property           | Description                  | Type                     | Default          |
| ------------------ | ---------------------------- | ------------------------ | ---------------- |
| className          |                              | `string`                 |                  |
| isUnstyled         | Removes style from component | `boolean`                | false            |
| asChild            |                              | `boolean`                | false            |
| disabled           |                              | `boolean`                | No default value |
| onSelect           |                              | `function`               | No default value |
| textValue          |                              | `string`                 | No default value |
| Data Attribute     |                              | Values                   |                  |
| [data-highlighted] |                              | Present when highlighted |                  |
| [data-disabled]    |                              | Present when disabled    |                  |

### Group

| Property | Description | Type      | Default |
| -------- | ----------- | --------- | ------- |
| asChild  |             | `boolean` | false   |

### Label

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| className  |                              | `string`  |         |
| isUnstyled | Removes style from component | `boolean` | false   |
| asChild    |                              | `boolean` | false   |

### CheckboxItem

| Property           | Description                  | Type                                         | Default          |
| ------------------ | ---------------------------- | -------------------------------------------- | ---------------- |
| className          |                              | `string`                                     |                  |
| isUnstyled         | Removes style from component | `boolean`                                    | false            |
| asChild            |                              | `boolean`                                    | false            |
| checked            |                              | `boolean` / 'indeterminate' No default value |                  |
| onCheckedChange    |                              | `function`                                   | No default value |
| disabled           |                              | `boolean`                                    | No default value |
| onSelect           |                              | `function`                                   | No default value |
| textValue          |                              | `string`                                     | No default value |
| Data Attribute     |                              | Values                                       |                  |
| [data-state]       |                              | `checked` / `unchecked`                      |                  |
| [data-highlighted] |                              | Present when highlighted                     |                  |
| [data-disabled]    |                              | Present when disabled                        |                  |

### RadioGroup

| Property      | Description | Type       | Default           |
| ------------- | ----------- | ---------- | ----------------- |
| className     |             | `string`   |                   |
| asChild       |             | `boolean`  | false             |
| asChild       |             | `boolean`  | false             |
| value         |             | `string`   | No defau`lt value |
| onValueChange |             | `function` |                   |

### RadioItem

| Property           | Description                  | Type                     | Default          |
| ------------------ | ---------------------------- | ------------------------ | ---------------- |
| className          |                              | `string`                 |                  |
| isUnstyled         | Removes style from component | `boolean`                | false            |
| asChild            |                              | `boolean`                | false            |
| value              |                              | `string`                 | No default value |
| disabled           |                              | `boolean`                | No default value |
| onSelect           |                              | `function`               | No default value |
| textValue          |                              | `string`                 | No default value |
| Data Attribute     |                              | Values                   |                  |
| [data-state]       |                              | `checked` / `unchecked`  |                  |
| [data-highlighted] |                              | Present when highlighted |                  |
| [data-disabled]    |                              | Present when disabled    |                  |

### Saperator

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| className  |                              | `string`  |         |
| isUnstyled | Removes style from component | `boolean` | false   |
| asChild    |                              | `boolean` | false   |

### Sub

| Property     | Description | Type       | Default          |
| ------------ | ----------- | ---------- | ---------------- |
| defaultOpen  |             | `boolean`  | No default value |
| open         |             | `boolean`  | No default value |
| onOpenChange |             | `function` |

### SubTrigger

`MenubarSubTrigger`composes `Button` component

| Property           | Description | Type                     | Default          |
| ------------------ | ----------- | ------------------------ | ---------------- |
| asChild            |             | `boolean`                | false            |
| disabled           |             | `boolean`                | No default value |
| textValue          |             | `string`                 | No default value |
| Data Attribute     |             | Values                   |                  |
| [data-state]       |             | `open` / `closed`        |                  |
| [data-highlighted] |             | Present when highlighted |                  |
| [data-disabled]    |             | Present when disabled    |                  |

### SubContent

| Property             | Description                  | Type                           | Default          |
| -------------------- | ---------------------------- | ------------------------------ | ---------------- |
| className            |                              | `string`                       |                  |
| isUnstyled           | Removes style from component | `boolean`                      | false            |
| asChild              |                              | `boolean`                      | false            |
| loop                 |                              | `boolean`                      | false            |
| onEscapeKeyDown      |                              | `function`                     | No default value |
| onPointerDownOutside |                              | `function`                     | No default value |
| onFocusOutside       |                              | `function`                     | No default value |
| onInteractOutside    |                              | `function`                     | No default value |
| forceMount           |                              | `boolean`                      | No default value |
| sideOffset           |                              | `number`                       | 0                |
| alignOffset          |                              | `number`                       | 0                |
| avoidCollisions      |                              | `boolean`                      | true             |
| collisionBoundary    |                              | Boundary                       | []               |
| collisionPadding     |                              | `number`                       | 0                |
| arrowPadding         |                              | `number`                       | 0                |
| sticky               |                              | `partial` / `always` "partial" |                  |
| hideWhenDetached     |                              | `boolean`                      | false            |
| Data Attribute       |                              | Values                         |                  |
| [data-state]         |                              | `open` / `closed`              |                  |
| [data-side]          |                              | `left` / `right` / `bottom`    | "top"            |
| [data-align]         |                              | `start` / `end` / `center`     |                  |
| [data-orientation]   |                              | `vertical` / `horizontal`      |                  |
| CSS Variable         |                              | Description                    |                  |
