import { Meta, StoryObj } from "@storybook/react";
import { Combobox, ComboboxItem } from "@rafty/ui";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useCallback, useRef } from "react";
import { item } from "@markdoc/markdoc/dist/src/schema";

const meta: Meta<typeof Combobox> = {
  title: "Form / Combobox",

  args: {
    size: "md",
    variant: "outline",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["ghost", "solid", "outline"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Combobox>;
const CLIENT_ID = "qtSiDbipH06mlQxvVz7alCSFDXnPeEnH446DOxBd-sQ";

export const Default: Story = {
  render: function InfiniteScroll() {
    const { data, isFetching, hasNextPage, fetchNextPage } = useInfiniteQuery({
      queryKey: ["photos"],
      queryFn: async () => {
        const res = await fetch(
          `https://api.unsplash.com/photos?client_id=${CLIENT_ID}`
        );
        const jsonData = await res.json();
        return jsonData;
      },
      getNextPageParam: (lastPage, Pages) => {
        if (lastPage == 0) return undefined;
        return Pages.length;
      },
    });
    const observer = useRef<IntersectionObserver>();
    const lastElement = useCallback(
      (node: HTMLDivElement) => {
        if (isFetching) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting && hasNextPage) fetchNextPage();
        });
        if (node) observer.current?.observe(node);
      },
      [isFetching, hasNextPage]
    );

    const pages = data?.pages.flat() ?? [];

    const options = [];

    if (pages.length != 0)
      options.push(
        ...(pages.map((item, index) => {
          const isLastElement = pages.length == index + 1;
          return (
            <ComboboxItem key={index}>
              <div ref={isLastElement ? lastElement : undefined}>
                {item.alt_description}
              </div>
            </ComboboxItem>
          );
        }) ?? [])
      );
    return (
      <div className="w-[500px]">
        <Combobox
          label="Favorite Animal"
          onInputChange={(value) => console.log(value)}
        >
          {options}
        </Combobox>
      </div>
    );
  },
};
