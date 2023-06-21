---
title: Menu
pageTitle: Menu - Rafty UI
description: Menu
---

## Import

An accessible dropdown menu for the common dropdown menu button design pattern. Menu uses roving tabIndex for focus management.

```jsx
import { Menu, MenuCheckboxItem, MenuContent, MenuGroup, MenuItem, MenuLabel, MenuRadioGroup, MenuRadioItem, MenuSeparator, MenuSub, MenuSubContent, MenuSubTrigger, MenuTrigger } from "@rafty/ui";
```

## Usage

```jsx
<Menu>
  <MenuTrigger rightIcon={<HiOutlineChevronDown />}>Actions</MenuTrigger>
  <MenuContent>
    <MenuItem>New Tab</MenuItem>
    <MenuItem>New Window</MenuItem>
    <MenuItem disabled>New Private Window </MenuItem>
    <MenuSeparator />
    <MenuCheckboxItem checked={bookmarksChecked} onCheckedChange={setBookmarksChecked}>
      Show Bookmarks <div className="RightSlot">⌘+B</div>
    </MenuCheckboxItem>
    <MenuCheckboxItem checked={urlsChecked} onCheckedChange={setUrlsChecked}>
      Show Full URLs
    </MenuCheckboxItem>
    <MenuSeparator />
    <MenuLabel>People</MenuLabel>
    <MenuRadioGroup value={person} onValueChange={setPerson}>
      <MenuRadioItem value="1">Pedro Duarte</MenuRadioItem>
      <MenuRadioItem value="2">Colm Tuite</MenuRadioItem>
    </MenuRadioGroup>
  </MenuContent>
</Menu>
```

## SubMenu

```jsx
<Menu>
  <MenuTrigger rightIcon={<HiOutlineChevronDown />}>Actions</MenuTrigger>
  <MenuContent>
    <MenuSub>
      <MenuSubTrigger style={{ justifyContent: "space-between" }}>More Tools </MenuSubTrigger>
      <MenuSubContent>
        <MenuItem className="justify-between">
          Save Page As… <div className="RightSlot">⌘+S</div>
        </MenuItem>
        <MenuItem>Create Shortcut…</MenuItem>
        <MenuItem>Name Window…</MenuItem>
        <MenuSeparator />
        <MenuItem>Developer Tools</MenuItem>
      </MenuSubContent>
    </MenuSub>
  </MenuContent>
</Menu>
```

## MenuCheckboxItem

```jsx
<Menu>
  <MenuTrigger rightIcon={<HiOutlineChevronDown />}>All Feature</MenuTrigger>
  <MenuContent>
    <MenuGroup>
      <MenuItem>New Tab</MenuItem>
      <MenuItem>New Window</MenuItem>
      <MenuItem disabled>New Private Window </MenuItem>
    </MenuGroup>
    <MenuSeparator />
    <MenuCheckboxItem checked={bookmarksChecked} onCheckedChange={setBookmarksChecked}>
      Show Bookmarks <div className="RightSlot">⌘+B</div>
    </MenuCheckboxItem>
    <MenuCheckboxItem checked={urlsChecked} onCheckedChange={setUrlsChecked}>
      Show Full URLs
    </MenuCheckboxItem>
  </MenuContent>
</Menu>
```

## MenuRadioGroup

```jsx
<Menu>
  <MenuTrigger rightIcon={<HiOutlineChevronDown />}>Actions</MenuTrigger>
  <MenuContent>
    <MenuItem>New Tab</MenuItem>
    <MenuItem>New Window</MenuItem>
    <MenuItem disabled>New Private Window </MenuItem>
    <MenuLabel>People</MenuLabel>
    <MenuRadioGroup value={person} onValueChange={setPerson}>
      <MenuRadioItem value="1">Pedro Duarte</MenuRadioItem>
      <MenuRadioItem value="2">Colm Tuite</MenuRadioItem>
    </MenuRadioGroup>
  </MenuContent>
</Menu>
```

## Barebone

Pass `isBarebone` prop to remove all style in Menu.

```jsx
<Menu isBarebone>
  <MenuTrigger rightIcon={<HiOutlineChevronDown />}>Actions</MenuTrigger>
  <MenuContent>
    <MenuItem>New Tab</MenuItem>
    <MenuItem>New Window</MenuItem>
    <MenuItem disabled>New Private Window </MenuItem>
  </MenuContent>
</Menu>
```

## UnStyled

Pass ` isUnstyled` prop to remove style from a particulart sub component.

```jsx
<Menu>
  <MenuTrigger size="icon" rightIcon={<HiOutlineChevronDown />}>
    Actions
  </MenuTrigger>
  <MenuContent isUnstyled>
    <MenuItem>New Tab</MenuItem>
    <MenuItem>New Window</MenuItem>
    <MenuItem disabled>New Private Window </MenuItem>
  </MenuContent>
</Menu>
```
