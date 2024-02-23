import { Meta, StoryObj } from "@storybook/react";
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
};

export default meta;
type Story = StoryObj<typeof ScrollArea>;

export const Default: Story = {
  render: () => {
    const length = 1000;
    const tags = Array.from({ length }).map((_, i) => i);

    return (
      <ScrollArea
        itemCount={length}
        itemSize={50}
        className="dark:border-secondary-700 h-60 w-[200px] rounded-md border"
      >
        <ScrollAreaList>
          {({ index, style }) => (
            <div
              key={index}
              className="dark:text-secondary-100 dark:border-secondary-700 flex items-center justify-center border-b text-sm"
              style={style}
            >
              {tags[index]}
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
        <DyanmicScroll />
      </QueryClientProvider>
    );
  },
};

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
              className="dark:text-secondary-100 dark:border-secondary-700 flex items-center border-b px-4 text-sm"
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
