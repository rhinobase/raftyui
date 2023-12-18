---
title: Menu
nextjs:
  metadata:
    title: Menu
    description: Displays a menu to the user—such as a set of actions or functions—triggered by a button.
    twitter:
      title: Menu
      images:
        url: https://rafty.rhinobase.io/api/og?title=Menu
    openGraph:
      title: Menu
      images:
        url: https://rafty.rhinobase.io/api/og?title=Menu
---

Displays a menu to the user—such as a set of actions or functions—triggered by a button. This component is made on top of [Radix UIs Dropdown Menu Component](https://www.radix-ui.com/primitives/docs/components/dropdown-menu) with our styling conventions. This component has been shared with you, ensuring that all its native properties are accessible. If you need to apply your own styling you can use the `isUnstyled` prop on parent element (to remove styling from entire component and its subcomponents) or `isUnstyled` prop on a subcomponent (to remove styling from a particular subcomponent).

## Anatomy

Import all parts and piece them together.

```jsx
import {
  Menu,
  MenuTrigger,
  MenuItem,
  MenuCheckboxItem,
  MenuContent,
  MenuSeparator,
  MenuRadioGroup,
  MenuLabel,
  MenuRadioItem,
} from "@rafty/ui";

<Menu>
  <MenuTrigger />
  <MenuContent>
    <MenuItem />
    <MenuSeparator />
    <MenuCheckboxItem />
    <MenuLabel />
    <MenuRadioGroup>
      <MenuRadioItem />
    </MenuRadioGroup>
  </MenuContent>
</Menu>;
```

## Usage

{% example %}

```jsx
<Menu>
  <MenuTrigger
    rightIcon={<ChevronDownIcon width={16} height={16} className="stroke-2" />}
  >
    Actions
  </MenuTrigger>
  <MenuContent>
    <MenuItem>New Tab</MenuItem>
    <MenuItem>New Window</MenuItem>
    <MenuItem disabled>New Private Window </MenuItem>
  </MenuContent>
</Menu>
```

{% /example %}

## Size

There are 3 `size` options in Menu: `sm`, `md` (default) & `lg`.

{% example %}

```jsx
function MenuExample() {
  const [isBookmarkChecked, setBookmarkChecked] = useState(true);
  const [showFullUrls, setShowFullUrls] = useState(true);
  const [selectedPerson, setSelectedPerson] = useState("pedro");

  return (
    <Menu size="sm">
      <MenuTrigger
        rightIcon={
          <ChevronDownIcon width={16} height={16} className="stroke-2" />
        }
      >
        Actions
      </MenuTrigger>
      <MenuContent>
        <MenuItem>New Tab</MenuItem>
        <MenuItem>New Window</MenuItem>
        <MenuItem disabled>New Private Window </MenuItem>
        <MenuSeparator />
        <MenuCheckboxItem
          checked={isBookmarkChecked}
          onCheckedChange={setBookmarkChecked}
        >
          Show Bookmarks <div className="RightSlot">⌘+B</div>
        </MenuCheckboxItem>
        <MenuCheckboxItem
          checked={showFullUrls}
          onCheckedChange={setShowFullUrls}
        >
          Show Full URLs
        </MenuCheckboxItem>
        <MenuSeparator />
        <MenuLabel>People</MenuLabel>
        <MenuRadioGroup
          value={selectedPerson}
          onValueChange={setSelectedPerson}
        >
          <MenuRadioItem value="pedro">Pedro Duarte</MenuRadioItem>
          <MenuRadioItem value="colm">Colm Tuite</MenuRadioItem>
        </MenuRadioGroup>
      </MenuContent>
    </Menu>
  );
}
```

{% /example %}

## SubMenu

{% example %}

```jsx
<Menu>
  <MenuTrigger
    rightIcon={<ChevronDownIcon width={16} height={16} className="stroke-2" />}
  >
    Actions
  </MenuTrigger>
  <MenuContent>
    <MenuSub>
      <MenuSubTrigger style={{ justifyContent: "space-between" }}>
        More Tools
      </MenuSubTrigger>
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

{% /example %}

## MenuCheckboxItem

{% example %}

```jsx
function MenuExample() {
  const [isBookmarkChecked, setBookmarkChecked] = useState(true);
  const [showFullUrls, setShowFullUrls] = useState(false);

  return (
    <Menu>
      <MenuTrigger
        rightIcon={
          <ChevronDownIcon width={16} height={16} className="stroke-2" />
        }
      >
        All Feature
      </MenuTrigger>
      <MenuContent>
        <MenuCheckboxItem
          checked={isBookmarkChecked}
          onCheckedChange={setBookmarkChecked}
        >
          Show Bookmarks <div className="RightSlot">⌘+B</div>
        </MenuCheckboxItem>
        <MenuCheckboxItem
          checked={showFullUrls}
          onCheckedChange={setShowFullUrls}
        >
          Show Full URLs
        </MenuCheckboxItem>
      </MenuContent>
    </Menu>
  );
}
```

{% /example %}

## MenuRadioGroup

{% example %}

```jsx
function MenuExample() {
  const [selectedPerson, setSelectedPerson] = useState("pedro");

  return (
    <Menu>
      <MenuTrigger
        rightIcon={
          <ChevronDownIcon width={16} height={16} className="stroke-2" />
        }
      >
        Actions
      </MenuTrigger>
      <MenuContent>
        <MenuLabel>People</MenuLabel>
        <MenuRadioGroup
          value={selectedPerson}
          onValueChange={setSelectedPerson}
        >
          <MenuRadioItem value="pedro">Pedro Duarte</MenuRadioItem>
          <MenuRadioItem value="colm">Colm Tuite</MenuRadioItem>
        </MenuRadioGroup>
      </MenuContent>
    </Menu>
  );
}
```

{% /example %}

## Unstyled

Pass `isUnstyled` prop in parent component to remove style in Menu.

{% example %}

```jsx
<Menu isUnstyled>
  <MenuTrigger
    size="sm"
    className="bg-secondary-200 dark:bg-secondary-600 dark:bg-secondar-500 hover:bg-primary-dark dark:hover:bg-secondary-dark  flex items-center space-x-2 rounded-md border-none px-3 py-2 text-black dark:text-white"
    rightIcon={<ChevronDownIcon width={16} height={16} className="stroke-2" />}
  >
    Actions
  </MenuTrigger>

  <MenuContent
    isArrow={false}
    sideOffset={5}
    className="bg-secondary-100 dark:bg-secondary-800  dark:text-primary space-y-1 rounded-md p-1 text-black  shadow-md dark:text-white "
  >
    <MenuItem className="hover:bg-primary-dark hover:bg-secondary-300 dark:hover:bg-secondary-700 rounded-md p-1 text-sm">
      New Tab
    </MenuItem>
    <MenuItem className="hover:bg-primary-dark hover:bg-secondary-300 dark:hover:bg-secondary-700  rounded-md p-1 text-sm ">
      New Window
    </MenuItem>
    <MenuItem className="text-primary dark:text-secondary-400 cursor-context-menu rounded-md p-1 text-sm ">
      New Private Window
    </MenuItem>
  </MenuContent>
</Menu>
```

{% /example %}

## UnStyled subcomponent

To remove styles from a specific sub component pass `isUnstyled` prop to that particular subcomponent.

{% example %}

```jsx
<Menu>
  <MenuTrigger
    size="icon"
    rightIcon={<ChevronDownIcon width={16} height={16} className="stroke-2" />}
  >
    Actions
  </MenuTrigger>
  <MenuContent
    isUnstyled
    className="dark:bg-secondary-800 rounded-md bg-white p-2"
  >
    <MenuItem>New Tab</MenuItem>
    <MenuItem>New Window</MenuItem>
    <MenuItem disabled>New Private Window </MenuItem>
  </MenuContent>
</Menu>
```

{% /example %}

## IsArrow

The `isArrow` prop exists in Menu Content subcomponent and is used to show/hide arrow on content. By default, its value is true.

{% example %}

```jsx
<Menu>
  <MenuTrigger
    rightIcon={<ChevronDownIcon width={16} height={16} className="stroke-2" />}
  >
    Actions
  </MenuTrigger>
  <MenuContent isArrow>
    <MenuItem>New Tab</MenuItem>
    <MenuItem>New Window</MenuItem>
    <MenuItem>New Private Window </MenuItem>
    <MenuLabel>People</MenuLabel>
    <MenuRadioGroup value="1">
      <MenuRadioItem value="1">Pedro Duarte</MenuRadioItem>
      <MenuRadioItem value="2">Colm Tuite</MenuRadioItem>
    </MenuRadioGroup>
  </MenuContent>
</Menu>
```

{% /example %}

## Props

---

### Menu

This component is built on top of [Radix Dropdown Menu](https://www.radix-ui.com/primitives/docs/components/dropdown-menu#root)

| Property   | Description                                            | Type                       | Default |
| ---------- | ------------------------------------------------------ | -------------------------- | ------- |
| size       | Size of the menu component and its subcomponents.      | `"sm"` or `"md"` or `"lg"` | `"md"`  |
| isUnstyled | Remove style from this component and its subcomponents | `boolean`                  | `false` |

### MenuTrigger

This component is built on top of [Radix Dropdown Menu Trigger](https://www.radix-ui.com/primitives/docs/components/dropdown-menu#trigger)

| Property    | Description                              | Type                                                     | Default       |
| ----------- | ---------------------------------------- | -------------------------------------------------------- | ------------- |
| size        | Size of the menu trigger component.      | `"sm"` or `"md"` or `"lg"` or `"icon"` or `"fab"`        | `"md"`        |
| variant     | Style variant of the component.          | `"solid"` or `"outline"` or `"ghost"`                    | `"ghost"`     |
| colorScheme | Color scheme of the component.           | `"primary"` or `"secondary"` or `"error"` or `"success"` | `"secondary"` |
| leftIcon    | Custom JSX element for the left icon.    | `JSX.Element`                                            | -             |
| rightIcon   | Custom JSX element for the right icon.   | `JSX.Element`                                            | -             |
| isDisabled  | To manage disabled state.                | `boolean`                                                | `false`       |
| isActive    | To manage active state.                  | `boolean`                                                | `false`       |
| isLoading   | To manage loading state.                 | `boolean`                                                | `false`       |
| isUnstyled  | Remove style from this component         | `boolean`                                                | `false`       |
| asChild     | Treats the component as a child element. | `boolean`                                                | `false`       |

### MenuContent

This component is built on top of [Radix Dropdown Menu Content](https://www.radix-ui.com/primitives/docs/components/dropdown-menu#content)

| Property        | Description                                   | Type      | Default |
| --------------- | --------------------------------------------- | --------- | ------- |
| isArrow         | Show arrow in content                         | `boolean` | `true`  |
| isUnstyled      | Remove style from this component              | `boolean` | `false` |
| arrowClassNames | Additional class names for the arrow element. | `string`  | -       |

### MenuGroup

This component is built on top of [Radix Dropdown Menu Group](https://www.radix-ui.com/primitives/docs/components/dropdown-menu#group)

### MenuItem

This component is built on top of [Radix Dropdown Menu Item](https://www.radix-ui.com/primitives/docs/components/dropdown-menu#item)

| Property   | Description                      | Type      | Default |
| ---------- | -------------------------------- | --------- | ------- |
| isUnstyled | Remove style from this component | `boolean` | `false` |

### MenuLabel

This component is built on top of [Radix Dropdown Menu Label](https://www.radix-ui.com/primitives/docs/components/dropdown-menu#label)

| Property   | Description                      | Type      | Default |
| ---------- | -------------------------------- | --------- | ------- |
| isUnstyled | Remove style from this component | `boolean` | `false` |

### MenuCheckboxItem

This component is built on top of [Radix Dropdown Menu Item](https://www.radix-ui.com/primitives/docs/components/dropdown-menu#item)

| Property   | Description                      | Type      | Default |
| ---------- | -------------------------------- | --------- | ------- |
| isUnstyled | Remove style from this component | `boolean` | `false` |

### MenuRadioGroup

This component is built on top of [Radix Dropdown Menu Radio Group](https://www.radix-ui.com/primitives/docs/components/dropdown-menu#radiogroup)

### MenuRadioItem

This component is built on top of [Radix Dropdown Menu Radio Item](https://www.radix-ui.com/primitives/docs/components/dropdown-menu#radioitem)

| Property   | Description                      | Type      | Default |
| ---------- | -------------------------------- | --------- | ------- |
| isUnstyled | Remove style from this component | `boolean` | `false` |

### MenuSub

This component is built on top of [Radix Dropdown Menu Sub](https://www.radix-ui.com/primitives/docs/components/dropdown-menu#sub)

### MenuSeparator

This component is built on top of [Radix Dropdown Menu Separator](https://www.radix-ui.com/primitives/docs/components/dropdown-menu#separator)

| Property   | Description                      | Type      | Default |
| ---------- | -------------------------------- | --------- | ------- |
| isUnstyled | Remove style from this component | `boolean` | `false` |

### MenuSubTrigger

This component is built on top of [Radix Dropdown Menu Sub Trigger](https://www.radix-ui.com/primitives/docs/components/dropdown-menu#subtrigger)

| Property   | Description                      | Type      | Default |
| ---------- | -------------------------------- | --------- | ------- |
| isUnstyled | Remove style from this component | `boolean` | `false` |

### MenuSubContent

This component is built on top of [Radix Dropdown Menu Sub Content](https://www.radix-ui.com/primitives/docs/components/dropdown-menu#subcontent)

| Property   | Description                              | Type      | Default |
| ---------- | ---------------------------------------- | --------- | ------- |
| isUnstyled | Remove style from this component         | `boolean` | `false` |
| sideOffset | Side offset of the content from trigger. | `number`  | `10`    |
