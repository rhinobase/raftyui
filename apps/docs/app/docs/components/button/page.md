---
title: Button
nextjs:
  metadata:
    title: Button
    description: Buttons enable users to take action and make choices with a single click.
    twitter:
      title: Button
      images:
        url: https://rafty.rhinobase.io/api/og?title=Button
    openGraph:
      title: Button
      images:
        url: https://rafty.rhinobase.io/api/og?title=Button
---

Buttons enable users to take action and make choices with a single click.

It is built over native html Button component, enhanced with our styling conventions and additional props to manage various states, sizes, colors, and inclusion of icons. If you wish to apply your own styling you can use the `isUnstyled` prop to remove all styling.

## Anatomy

Import the component.

```jsx
import { Button } from "@rafty/ui";

<Button />;
```

## Usage

By default, it is a medium sized secondary solid Button with hover effects and focus ring.

{% example %}

```jsx
<Button>Button</Button>
```

{% /example %}

## Size

- There are 5 `size` options available: `"sm"`, `"md"` (default), `"lg"`, `"icon"` & `"fab"`.
- `icon` size is used when you want only icon.
- `fab` size is used for circular Button.

{% example %}

```jsx
<div className="flex items-center gap-4">
  <Button size="sm">Button</Button>
  <Button size="md">Button</Button>
  <Button size="lg">Button</Button>
  <Button size="fab">
    <ArchiveBoxIcon width={16} height={16} className="stroke-2" />
  </Button>
  <Button size="icon">
    <BackspaceIcon width={16} height={16} className="stroke-2" />
  </Button>
</div>
```

{% /example %}

## ColorScheme

There are 4 `colorScheme` options available: `"primary"` (default), `"secondary"`, `"error"` & `"success"`.

{% example %}

```jsx
<div className="flex items-center gap-4">
  <Button colorScheme="primary">Button</Button>
  <Button colorScheme="secondary">Button</Button>
  <Button colorScheme="error">Button</Button>
  <Button colorScheme="success">Button</Button>
</div>
```

{% /example %}

## Variant

There are 3 `variant` options available: `"solid"` (default), `"outline"` & `"ghost"`.

{% example %}

```jsx
<div className="flex items-center gap-4">
  <Button variant="solid">Button</Button>
  <Button variant="outline">Button</Button>
  <Button variant="ghost">Button</Button>
</div>
```

{% /example %}

## LeftIcon & RightIcon

- You can pass JSX Element in `leftIcon` to add icon on left side of Button.
- You can pass JSX Element in `rightIcon` to add icon on right side of Button.

{% example %}

```jsx
<div className="flex items-center gap-4">
  <Button
    leftIcon={<PhoneIcon width={16} height={16} className="stroke-2" />}
    colorScheme="primary"
    variant="solid"
  >
    Button
  </Button>
  <Button
    rightIcon={
      <PaperAirplaneIcon width={16} height={16} className="stroke-2" />
    }
    colorScheme="primary"
    variant="solid"
  >
    Button
  </Button>
</div>
```

{% /example %}

## UnStyled

Pass `isUnstyled` prop to remove all style.

{% example %}

```jsx
<Button
  isUnstyled
  className="rounded-lg bg-white p-2 px-5 hover:bg-secondary-200 dark:bg-secondary-500 dark:text-white dark:hover:bg-secondary-700"
>
  Button
</Button>
```

{% /example %}

## Active

`isActive` prop is used to manage active state of Button.

{% example %}

```jsx
<Button isActive>Button</Button>
```

{% /example %}

## Loading

- `isLoading` prop is used to manage loading state of Button.
- You can also change the Button text when the Button is in loading state using `loadingText` prop.

{% example %}

```jsx
<Button isLoading>Button</Button>
```

{% /example %}

## Disabled

`isDisabled` prop is used to manage disable state of Button.

{% example %}

```jsx
<Button isDisabled>Button</Button>
```

{% /example %}

---

## Props

### Button

`Button` composes the `<button>` component.

| Property    | Description                                            | Type                                                                    | Default       |
| ----------- | ------------------------------------------------------ | ----------------------------------------------------------------------- | ------------- |
| size        | Size of the button component.                          | `"sm"` or `"md"` or `"lg"` or `"icon"` or `"fab"` or `undefined`        | `"md"`        |
| variant     | Style variant of the component.                        | `"solid"` or `"outline"` or `"ghost"` or `undefined`                    | `"solid"`     |
| colorScheme | Color scheme of the component.                         | `"primary"` or `"secondary"` or `"error"` or `"success"` or `undefined` | `"secondary"` |
| leftIcon    | Custom JSX element for the left icon.                  | `JSX.Element` or `undefined`                                            | -             |
| rightIcon   | Custom JSX element for the right icon.                 | `JSX.Element` or `undefined`                                            | -             |
| isDisabled  | To manage the disabled state.                          | `boolean` or <Info>() => boolean</Info> or `undefined`                  | -             |
| isActive    | To manage the active state.                            | `boolean` or <Info>() => boolean</Info> or `undefined`                  | -             |
| loadingText | Text to be displayed during component's loading state. | `string` or `undefined`                                                 | -             |
| isLoading   | To manage the loading state.                           | `boolean` or <Info>() => boolean</Info> or `undefined`                  | -             |
| isUnstyled  | Remove style from this component                       | `boolean` or `undefined`                                                | `false`       |
| type        | Type of the component.                                 | `"button"` or `"submit"` or `"reset"`                                   | `"button"`    |
