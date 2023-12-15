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

It is built over native html button component, enhanced with our styling conventions and additional props to manage various states, sizes, colors, and inclusion of icons

## Anatomy

Import the component.

```jsx
import { Button } from "@rafty/ui";

<Button />;
```

## Usage

By default, it is a medium sized secondary solid button with hover effects and focus ring..

{% example %}

```jsx
import React from "react";
import { Button } from "@rafty/ui";

export default function App() {
  return <Button>Button</Button>;
}
```

{% /example %}

## Size

- There are 5 `size` options in button: `sm`, `md` (default), `lg`, `icon` & `fab`.
- `icon` size is used when you want only icon.
- `fab` size is used for circular button.

{% example %}

```jsx
import React from "react";
import { Button } from "@rafty/ui";
import { ArchiveBoxIcon, BackspaceIcon } from "@heroicons/react/24/outline";

export default function App() {
  return (
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
  );
}
```

{% /example %}

## ColorScheme

There are 4 `colorScheme` options in button: `primary` (default), `secondary`, `error` & `success`.

{% example %}

```jsx
import React from "react";
import { Button } from "@rafty/ui";

export default function App() {
  return (
    <div className="flex items-center gap-4">
      <Button colorScheme="primary">Button</Button>
      <Button colorScheme="secondary">Button</Button>
      <Button colorScheme="error">Button</Button>
      <Button colorScheme="success">Button</Button>
    </div>
  );
}
```

{% /example %}

## Variant

There are 3 `variant` in button: `solid` (default), `outline` & `ghost`.

{% example %}

```jsx
import React from "react";
import { Button } from "@rafty/ui";

export default function App() {
  return (
    <div className="flex items-center gap-4">
      <Button variant="solid">Button</Button>
      <Button variant="outline">Button</Button>
      <Button variant="ghost">Button</Button>
    </div>
  );
}
```

{% /example %}

## LeftIcon & RightIcon

- You can pass JSX Element in `leftIcon` to add icon on left side of button.
- You can pass JSX Element in `rightIcon` to add icon on right side of button.

{% example %}

```jsx
import React from "react";
import { Button } from "@rafty/ui";
import { PaperAirplaneIcon, PhoneIcon } from "@heroicons/react/24/outline";

export default function App() {
  return (
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
  );
}
```

{% /example %}

## UnStyled

Pass ` isUnstyled` prop to remove style component.

{% example %}

```jsx
import React from "react";
import { Button } from "@rafty/ui";

export default function App() {
  return (
    <Button
      isUnstyled
      className="hover:bg-secondary-200 dark:bg-secondary-500 dark:hover:bg-secondary-700 rounded-lg bg-white p-2 px-5 dark:text-white"
    >
      Button
    </Button>
  );
}
```

{% /example %}

## Active

You can manage the active state of button using `isActive` prop.

{% example %}

```jsx
import React from "react";
import { Button } from "@rafty/ui";

export default function App() {
  return <Button isActive>Button</Button>;
}
```

{% /example %}

## Loading

- You can manage the loading state of the button using this prop.
- You can also change the button text when the button is in loading state using `loadingText` prop.

{% example %}

```jsx
import React from "react";
import { Button } from "@rafty/ui";

export default function App() {
  return <Button isLoading>Button</Button>;
}
```

{% /example %}

## Disabled

You can manage disabled button state using `isDisabled` prop.

{% example %}

```jsx
import React from "react";
import { Button } from "@rafty/ui";

export default function App() {
  return <Button isDisabled>Button</Button>;
}
```

{% /example %}

## Props

---

### Button

`Button` composes the `<button>` component.

| Property    | Description                                            | Type                                                     | Default       |
| ----------- | ------------------------------------------------------ | -------------------------------------------------------- | ------------- |
| size        | Size of the button component.                          | `"sm"` or `"md"` or `"lg"` or `"icon"` or `"fab"`        | `"md"`        |
| variant     | Style variant of the component.                        | `"solid"` or `"outline"` or `"ghost"`                    | `"solid"`     |
| colorScheme | Color scheme of the component.                         | `"primary"` or `"secondary"` or `"error"` or `"success"` | `"secondary"` |
| leftIcon    | Custom JSX element for the left icon.                  | `JSX.Element`                                            | -             |
| rightIcon   | Custom JSX element for the right icon.                 | `JSX.Element`                                            | -             |
| isDisabled  | To manage disabled state.                              | `boolean`                                                | `false`       |
| isActive    | To manage active state.                                | `boolean`                                                | `false`       |
| loadingText | Text to be displayed during component's loading state. | `string`                                                 | -             |
| isLoading   | To manage loading state.                               | `boolean`                                                | `false`       |
| isUnstyled  | Remove style from this component                       | `boolean`                                                | `false`       |
| type        | Type of the component.                                 | `"button"` or `"submit"` or `"reset"`                    | `"button"`    |
