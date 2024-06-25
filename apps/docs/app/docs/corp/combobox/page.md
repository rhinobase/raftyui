---
title: Combobox
nextjs:
  metadata:
  title: Combobox
  description: A custom select component with search functionality, as well as the ability to add custom trigger and option elements.
  twitter:
    title: Combobox
    images:
      url: https://rafty.rhinobase.io/api/og?title=Combobox
  openGraph:
    title: Combobox
    images:
      url: https://rafty.rhinobase.io/api/og?title=Combobox
---

A custom select component with search functionality, as well as the ability to add custom trigger and option elements.

This is a custom component crafted to adhere to our styling conventions, resulting in limited styling options and available props.

## Anatomy

Import all parts and piece them together.

```jsx
import {
  Combobox,
  ComboboxTrigger,
  ComboboxContent,
  ComboboxClearButton,
} from "@rafty/ui";

<Combobox>
  <ComboboxTrigger />
  <ComboboxContent />
  <ComboboxClearButton />
</Combobox>;
```

## Usage

{% example %}

```jsx
<div className="w-full">
  <Combobox
    options={[
      {
        label: "Java",
        value: "java",
      },
      {
        label: "Javascript",
        value: "javascript",
      },
      {
        label: "Node JS",
        value: [
          { label: "Node 16", value: "node-16" },
          { label: "Node 18", value: "node-18" },
          { label: "Node 20", value: "node-20" },
          { label: "Node 22", value: "node-22" },
        ],
      },
      {
        label: "Python",
        value: [
          { label: "Python 3.10", value: "py-3.10" },
          { label: "Python 3.9", value: "py-3.9" },
        ],
      },
    ]}
  >
    <ComboboxTrigger />
    <div className="mt-2 flex flex-row-reverse empty:hidden">
      <ComboboxClearButton />
    </div>
    <ComboboxContent />
  </Combobox>
</div>
```

{% /example %}

## Type

- `type` prop is used to define whether single or multiple options can be selected at a time.
- There are 2 `type` options available: `"single"` (default) & `"multi"`.

{% example %}

```jsx
<div className="w-full">
  <Combobox
    type="multi"
    options={[
      {
        label: "Java",
        value: "java",
      },
      {
        label: "Javascript",
        value: "javascript",
      },
      {
        label: "Node JS",
        value: [
          { label: "Node 16", value: "node-16" },
          { label: "Node 18", value: "node-18" },
          { label: "Node 20", value: "node-20" },
          { label: "Node 22", value: "node-22" },
        ],
      },
      {
        label: "Python",
        value: [
          { label: "Python 3.10", value: "py-3.10" },
          { label: "Python 3.9", value: "py-3.9" },
        ],
      },
    ]}
  >
    <ComboboxTrigger />
    <div className="mt-2 flex flex-row-reverse empty:hidden">
      <ComboboxClearButton />
    </div>
    <ComboboxContent />
  </Combobox>
</div>
```

{% /example %}

## Custom Render

Combobox allows user to render custom `ComboboxTrigger` and `ComboboxContent` components ,and `useComboboxContext` can be used to access combobox props.

{% example noInline=true %}

```jsx
  function CustomCombobox() {

    return (
    <Combobox
      options={[
      {
        label: "Java",
        value: "java",
      },
      {
        label: "Javascript",
        value: "javascript",
      },
      {
        label: "Node JS",
        value: [
          { label: "Node 16", value: "node-16" },
          { label: "Node 18", value: "node-18" },
          { label: "Node 20", value: "node-20" },
          { label: "Node 22", value: "node-22" },
        ],
      },
      {
        label: "Python",
        value: [
          { label: "Python 3.10", value: "py-3.10" },
          { label: "Python 3.9", value: "py-3.9" },
        ],
      },
    ]}
    >
    <ComboboxTrigger>
      <CustomTriggerRender />
    </ComboboxTrigger>
    <div className="mt-2 flex flex-row-reverse empty:hidden">
      <ComboboxClearButton />
    </div>
    <ComboboxContent>{CustomContentRender}</ComboboxContent>
    </Combobox>
    )

}

function CustomTriggerRender() {
const { selected, options } = useComboboxContext();
const label = findLabel(selected[0], options);

if (selected.length > 0)
return (

<div className="flex items-center gap-2">
  <Avatar size="sm" name={label} />
  {label}
</div>
); return "Select Option"; }

function CustomContentRender({
option: { label, value },
}: {
option: ComboboxOptionType;
}) {
const { onSelectionChange, selected } = useComboboxContext();

// Checking if the current value is selected
const isSelected = selected.findIndex((val) => val === value) !== -1;

return (

<ComboboxItem
  value={String(value)}
  onSelect={onSelectionChange}
  className="gap-2"
>
  <Avatar size="sm" name={label} />
  {label}
  <div className="flex-1" />
  {isSelected && (
    <CheckIcon
      width={16}
      height={16}
      className="stroke-primary-500 stroke-2 dark:stroke-primary-300"
    />
  )}
</ComboboxItem>
);
}

render(
  <CustomCombobox/>
)

```

{% /example %}

## Disabled

`isDisabled` prop can be used to manage disable state of combobox.

{% example %}

```jsx
<div className="w-full">
  <Combobox
    isDisabled
    options={[
      {
        label: "Java",
        value: "java",
      },
      {
        label: "Javascript",
        value: "javascript",
      },
      {
        label: "Node JS",
        value: [
          { label: "Node 16", value: "node-16" },
          { label: "Node 18", value: "node-18" },
          { label: "Node 20", value: "node-20" },
          { label: "Node 22", value: "node-22" },
        ],
      },
      {
        label: "Python",
        value: [
          { label: "Python 3.10", value: "py-3.10" },
          { label: "Python 3.9", value: "py-3.9" },
        ],
      },
    ]}
  >
    <ComboboxTrigger />
    <div className="mt-2 flex flex-row-reverse empty:hidden">
      <ComboboxClearButton />
    </div>
    <ComboboxContent />
  </Combobox>
</div>
```

{% /example %}

## Loading

`isLoading` prop can be used to manage loading state of combobox.

{% example %}

```jsx
<div className="w-full">
  <Combobox
    isLoading
    options={[
      {
        label: "Java",
        value: "java",
      },
      {
        label: "Javascript",
        value: "javascript",
      },
      {
        label: "Node JS",
        value: [
          { label: "Node 16", value: "node-16" },
          { label: "Node 18", value: "node-18" },
          { label: "Node 20", value: "node-20" },
          { label: "Node 22", value: "node-22" },
        ],
      },
      {
        label: "Python",
        value: [
          { label: "Python 3.10", value: "py-3.10" },
          { label: "Python 3.9", value: "py-3.9" },
        ],
      },
    ]}
  >
    <ComboboxTrigger />
    <div className="mt-2 flex flex-row-reverse empty:hidden">
      <ComboboxClearButton />
    </div>
    <ComboboxContent />
  </Combobox>
</div>
```

{% /example %}

## ReadOnly

`isReadOnly` prop can be used to manage readonly state of combobox.

{% example %}

```jsx
<div className="w-full">
  <Combobox
    isReadOnly
    options={[
      {
        label: "Java",
        value: "java",
      },
      {
        label: "Javascript",
        value: "javascript",
      },
      {
        label: "Node JS",
        value: [
          { label: "Node 16", value: "node-16" },
          { label: "Node 18", value: "node-18" },
          { label: "Node 20", value: "node-20" },
          { label: "Node 22", value: "node-22" },
        ],
      },
      {
        label: "Python",
        value: [
          { label: "Python 3.10", value: "py-3.10" },
          { label: "Python 3.9", value: "py-3.9" },
        ],
      },
    ]}
  >
    <ComboboxTrigger />
    <div className="mt-2 flex flex-row-reverse empty:hidden">
      <ComboboxClearButton />
    </div>
    <ComboboxContent />
  </Combobox>
</div>
```

{% /example %}

## Invalid

`isInvalid` prop can used to manage invalid state of combobox.

{% example %}

```jsx
<div className="w-full">
  <Combobox
    isInvalid
    options={[
      {
        label: "Java",
        value: "java",
      },
      {
        label: "Javascript",
        value: "javascript",
      },
      {
        label: "Node JS",
        value: [
          { label: "Node 16", value: "node-16" },
          { label: "Node 18", value: "node-18" },
          { label: "Node 20", value: "node-20" },
          { label: "Node 22", value: "node-22" },
        ],
      },
      {
        label: "Python",
        value: [
          { label: "Python 3.10", value: "py-3.10" },
          { label: "Python 3.9", value: "py-3.9" },
        ],
      },
    ]}
  >
    <ComboboxTrigger />
    <div className="mt-2 flex flex-row-reverse empty:hidden">
      <ComboboxClearButton />
    </div>
    <ComboboxContent />
  </Combobox>
</div>
```

{% /example %}

---

## Props

### Combobox

`Combobox` is made using [Command](https://rafty.rhinobase.io/docs/components/command).

| Property          | Description                                                 | Type                                                                                        | Default    |
| ----------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ---------- |
| id                | Identifier for the combobox                                 | `string` or `undefined`                                                                     | -          |
| type              | Type of selection allowed in the combobox.                  | `"single"` or `"multi"` or `undefined`                                                      | `"single"` |
| options           | Options available for selection in the combobox.            | `ComboboxOptionType[]` or `undefined`                                                       | `[]`       |
| placeholder       | Placeholder text for the combobox input and search field.   | `{trigger?: string, search?: string}` or `undefined`                                        | -          |
| selected          | Selected value(s) in the combobox.                          | `(string or number)` or `(string or number)[]` or `undefined`                               | -          |
| onSelectionChange | The callback invoke when value(s) is changed.               | <Info>(selected?: (string or number) or (string or number)[]) => void</Info> or `undefined` | -          |
| isReadOnly        | To manage the readonly state.                               | `boolean` or `undefined`                                                                    | `false`    |
| isDisabled        | To manage the disabled state.                               | `boolean` or `undefined`                                                                    | `false`    |
| isInvalid         | To manage the invalid state.                                | `boolean` or `undefined`                                                                    | `false`    |
| isLoading         | To manage the loading state.                                | `boolean` or `undefined`                                                                    | `false`    |
| triggerRef        | Reference to the button element that triggers the combobox. | `RefObject<HTMLButtonElement>` or `undefined`                                               | -          |

### ComboboxTrgger

`ComboboxTrgger` is made using [Button](https://rafty.rhinobase.io/docs/components/button).

### ComboboxContent

`ComboboxContent` is made using [Command](https://rafty.rhinobase.io/docs/components/command).

| Property       | Description                                                       | Type                                                                                           | Default |
| -------------- | ----------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------- |
| showSearch     | Whether to show the search input.                                 | `boolean` or `undefined`                                                                       | `true`  |
| shouldFilter   | Whether the options should be filtered based on the search input. | `boolean` or `undefined`                                                                       | -       |
| search         | The value of the search input.                                    | `string` or `undefined`                                                                        | -       |
| onSearchChange | The callback invoke when value of search input is changed.        | <Info>(search: string) => void</Info> or `undefined`                                           | -       |
| children       | Function to render custom option components.                      | <Info>(props: `{option: ComboboxOptionType;index: number}`) => ReactNode</Info> or `undefined` | -       |
| isLoading      | To manage the loading state of the combobox.                      | `boolean` or `undefined`                                                                       | -       |

### ComboboxItem

`ComboboxItem` is made using [CommandItem](https://rafty.rhinobase.io/docs/components/command).

### ComboboxItemsGroup

`ComboboxItemsGroup` is made using [CommandGroup](https://rafty.rhinobase.io/docs/components/command).

### ComboboxClearButton

`ComboboxClearButton` is made using [Button](https://rafty.rhinobase.io/docs/components/button).
