import type { Meta, StoryObj } from "@storybook/react";
import {
  QueryClient,
  QueryClientProvider,
  useInfiniteQuery,
} from "@tanstack/react-query";
import {
  ScrollArea,
  ScrollAreaInfinityList,
  ScrollAreaList,
} from "./ScrollArea";

const meta: Meta<typeof ScrollArea> = {
  title: "Components / ScrollArea",
  args: {
    layout: "vertical",
    itemSize: 37,
  },
  argTypes: {
    layout: {
      control: "select",
      options: ["vertical", "horizontal"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ScrollArea>;

export const Default: Story = {
  render: (props) => {
    const length = 1000;
    const tags = Array.from({ length }).map((_, i) => i + 1);

    return (
      <ScrollArea
        {...props}
        itemCount={length}
        className="dark:border-secondary-700 border-secondary-300 h-60 w-full rounded-md border"
      >
        <ScrollAreaList className="dark:[&>div]:divide-secondary-700 [&>div]:divide-secondary-200 [&>div]:divide-y">
          {({ index, style, isScrolling }) => (
            <div
              key={index}
              className="dark:text-secondary-100 flex items-center justify-between px-4 text-sm"
              style={style}
            >
              {isScrolling ? "Loading.." : tags[index]}
            </div>
          )}
        </ScrollAreaList>
      </ScrollArea>
    );
  },
};

export const InfinityScroll: Story = {
  render: () => {
    const CLIENT = new QueryClient();
    return (
      <QueryClientProvider client={CLIENT}>
        <DynamicDataScroll />
      </QueryClientProvider>
    );
  },
};

function DynamicDataScroll() {
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
      itemSize={37}
      className="dark:border-secondary-700 h-60 w-[400px] rounded-md border"
    >
      <ScrollAreaInfinityList
        isItemLoaded={(index) => Boolean(items?.[index])}
        loadMoreItems={async () => {
          await fetchNextPage();
        }}
        className="dark:[&>div]:divide-secondary-700 [&>div]:divide-secondary-200 [&>div]:divide-y"
      >
        {({ index, style, isScrolling }) => {
          const launch = items?.[index];

          return (
            <div
              key={index}
              className="dark:text-secondary-100 flex items-center px-4 text-sm"
              style={style}
            >
              {isScrolling || !launch
                ? "Loading..."
                : `${launch?.flight_number}. ${launch?.mission_name}`}
            </div>
          );
        }}
      </ScrollAreaInfinityList>
    </ScrollArea>
  );
}
