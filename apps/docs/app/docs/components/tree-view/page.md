---
title: TreeView
nextjs:
  metadata:
    title: TreeView
    description: A component that is used to show a tree hierarchy.
    twitter:
      title: TreeView
      images:
        url: https://rafty.rhinobase.io/api/og?title=Tree%20View
    openGraph:
      title: TreeView
      images:
        url: https://rafty.rhinobase.io/api/og?title=Tree%20View
---

A component that is used to show a tree hierarchy.

This component is made on top of [Ark UIs Tree View Component](https://ark-ui.com/react/docs/components/tree-view) with our styling conventions. This component has been shared with you, ensuring that all its native properties are accessible.

## Anatomy

Import all parts and piece them together.

```jsx
import {
  TreeView,
  TreeViewItem,
  TreeViewContent,
  TreeViewLabel,
} from "@rafty/ui";

<TreeView>
  <TreeViewItem>
    <TreeViewLabel />
    <TreeViewContent />
  </TreeViewItem>
</TreeView>;
```

## Usage

{% example %}

```jsx
<TreeView>
  <TreeViewItem value="A">
    <TreeViewLabel>A</TreeViewLabel>
    <TreeViewContent>
      <TreeViewItem value="a">
        <TreeViewLabel>Aa</TreeViewLabel>
      </TreeViewItem>
    </TreeViewContent>
  </TreeViewItem>
  <TreeViewItem value="B">
    <TreeViewLabel>B</TreeViewLabel>
  </TreeViewItem>
</TreeView>
```

{% /example %}

## Size

There are 3 `size` options available: `"sm"`, `"md"` (default) & `"lg"`.

{% example %}

```jsx
<TreeView size="lg">
  <TreeViewItem value="A">
    <TreeViewLabel>A</TreeViewLabel>
    <TreeViewContent>
      <TreeViewItem value="a">
        <TreeViewLabel>Aa</TreeViewLabel>
      </TreeViewItem>
    </TreeViewContent>
  </TreeViewItem>
  <TreeViewItem value="B">
    <TreeViewLabel>B</TreeViewLabel>
  </TreeViewItem>
</TreeView>
```

{% /example %}

## Indicator Icon

`indicatorIcon` prop is used to pass a custom indicator icon in place of the default provided icon.

{% example %}

```jsx
<TreeView>
  <TreeViewItem value="A">
    <TreeViewLabel openIndicator={<MinusIcon className="size-4 stroke-2" />}
   closeIndicator={<PlusIcon className="size-4 stroke-2"/>}>A</TreeViewLabel>
    <TreeViewContent>
      <TreeViewItem value="a">
        <TreeViewLabel>Aa</TreeViewLabel>
      </TreeViewItem>
    </TreeViewContent>
  </TreeViewItem>
  <TreeViewItem value="B">
    <TreeViewLabel>B</TreeViewLabel>
  </TreeViewItem>
</TreeView>
```

{% /example %}

## Show Indicator

`showIndicator` prop is used to manage the visible state of indicator and its default value is `true`.

{% example %}

```jsx
<TreeView>
  <TreeViewItem value="A">
    <TreeViewLabel showIndicator={false}>A</TreeViewLabel>
    <TreeViewContent>
      <TreeViewItem value="a">
        <TreeViewLabel>Aa</TreeViewLabel>
      </TreeViewItem>
    </TreeViewContent>
  </TreeViewItem>
  <TreeViewItem value="B">
    <TreeViewLabel>B</TreeViewLabel>
  </TreeViewItem>
</TreeView>
```

{% /example %}

---

## Props

### TreeView

`TreeView` component is built on top of [Ark Tree View Root](https://ark-ui.com/react/docs/components/tree-view#api-reference)

| Property | Description                                   | Type                                      | Default |
| -------- | --------------------------------------------- | ----------------------------------------- | ------- |
| size     | Size of the tree view and its sub-components. | `"sm"` or `"md"` or `"lg"` or `undefined` | `"md"`  |

### TreeViewItem

`TreeViewItem` component is built on top of [Ark Tree View Branch](https://ark-ui.com/react/docs/components/tree-view#api-reference)

### TreeViewLabel

`TreeViewLabel` component is built on top of [Ark Tree View BranchControl](https://ark-ui.com/react/docs/components/tree-view#api-reference)

| Property       | Description                              | Type                       | Default |
| -------------- | ---------------------------------------- | -------------------------- | ------- |
| openIndicator  | Custom indicator for the open state.     | `ReactNode` or `undefined` | -       |
| closeIndicator | Custom indicator for the close state.    | `ReactNode` or `undefined` | -       |
| showIndicator  | To manage the hidden state of indicator. | `boolean` or `undefined`   | `true`  |

### TreeViewContent

`TreeViewContent` component is built on top of [Ark Tree View BranchContent](https://ark-ui.com/react/docs/components/tree-view#api-reference)
