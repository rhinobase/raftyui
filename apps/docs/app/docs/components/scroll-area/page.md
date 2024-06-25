---
title: Scroll Area
nextjs:
  metadata:
    title: Scroll Area
    description: Enhances native scroll functionality for custom, cross-browser styling.
    twitter:
      title: Scroll Area
      images:
        url: https://rafty.rhinobase.io/api/og?title=Scroll%20Area
    openGraph:
      title: Scroll Area
      images:
        url: https://rafty.rhinobase.io/api/og?title=Scroll%20Area
---

Enhances native scroll functionality for adding virtualization to a list of data.

This component is made on top of [React Window's Variable Size List Component](https://www.npmjs.com/package/react-window) with our styling conventions, and it uses [Auto Sizer](https://www.npmjs.com/package/react-virtualized-auto-sizer) for managing dynamic width and height. This component has been shared with you, ensuring that all its native properties are accessible.

## Anatomy

Import the components for making static data list.

```jsx
import { ScrollArea, ScrollAreaList } from "@rafty/ui";

<ScrollArea>
  <ScrollAreaList>
</ScrollArea>;
```

Import the components for making variable/infinity loading data list.

```jsx
import { ScrollArea, ScrollAreaInfinityList } from "@rafty/ui";

<ScrollArea>
  <ScrollAreaInfinityList>
</ScrollArea>;
```

## ScrollArea List

{% example %}

```jsx
<ScrollArea
  itemCount={1000}
  itemSize={50}
  className="dark:border-secondary-700 h-60 w-[200px] rounded-md border"
>
  <ScrollAreaList>
    {({ index, style }) => (
      <div
        key={index}
        className="dark:border-secondary-700 dark:text-secondary-100 flex items-center justify-center border-b text-sm"
        style={style}
      >
        {index}
      </div>
    )}
  </ScrollAreaList>
</ScrollArea>
```

{% /example %}

## ScrollArea Infinity List

You can check out live example for Infinity List on [Storybook](https://storybook.rafty.rhinobase.io/?path=/story/components-scrollarea--infinity-scroll).

```jsx
function DyanmicScroll() {
  const itemCount = 110;
  const { data, fetchNextPage } = useInfiniteQuery({
    queryKey: ["launches"],
    queryFn: ({ pageParam = 0 }) =>
      fetch(
        `https://api.spacexdata.com/v3/launches?limit=20&offset=${
          pageParam * 20
        }`,
      ).then((res) => res.json()),
    getNextPageParam: (_, pages) => {
      const tmp = pages.flat().length;
      if (itemCount <= tmp) return undefined;
      return pages.length;
    },
  });

  const items = data?.pages.flat();

  return (
    <ScrollArea
      itemCount={itemCount}
      itemSize={50}
      className="dark:border-secondary-700 h-60 w-[400px] rounded-md border"
    >
      <ScrollAreaInfinityList
        isItemLoaded={(index) => Boolean(items?.[index])}
        loadMoreItems={async () => {
          await fetchNextPage();
        }}
      >
        {({ index, style }) => {
          const launch = items?.[index];

          return (
            <div
              key={index}
              className="dark:border-secondary-700 dark:text-secondary-100 flex items-center border-b px-4 text-sm"
              style={style}
            >
              {launch?.flight_number}. {launch?.mission_name}
            </div>
          );
        }}
      </ScrollAreaInfinityList>
    </ScrollArea>
  );
}
```

---

## Props

### ScrollArea

`ScrollArea` composes the `<div>` component.

| Property  | Description                                   | Type                                               | Default      |
| --------- | --------------------------------------------- | -------------------------------------------------- | ------------ |
| layout    | The scrolling layout direction.               | `"horizontal"` or `"vertical"`                     | `"vertical"` |
| itemCount | The total number of items in the scroll area. | `number` or <Info>() => number</Info>              | -            |
| itemSize  | The size of each item of the scroll area.     | `number` or <Info>(index: number) => number</Info> | -            |

### ScrollAreaList

This component is built on top of [react-virtualized-auto-sizer](https://github.com/bvaughn/react-virtualized-auto-sizer#readme) and [react-window](https://react-window.vercel.app/#/examples/list/fixed-size)

### ScrollAreaInfinityList

This component is built on top of [react-window-infinite-loader](https://github.com/bvaughn/react-window-infinite-loader/#readme)

| Property         | Description                                                          | Type                                                 | Default |
| ---------------- | -------------------------------------------------------------------- | ---------------------------------------------------- | ------- |
| minimumBatchSize | Minimum number of items to load per batch.                           | `number` or `undefined`                              | -       |
| threshold        | Number of rows or columns to buffer in addition to the visible area. | `number` or `undefined`                              | -       |
| isItemLoaded     | The callback invoke when item at a specific index is loaded.         | `boolean` or <Info>(index: number) => boolean</Info> | -       |
| loadMoreItems    | The callback to load more items when nearing the end of the list.    | <Info>() => void</Info> or `undefined`               | -       |
