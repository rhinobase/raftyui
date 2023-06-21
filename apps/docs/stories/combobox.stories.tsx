/* eslint-disable @next/next/no-img-element */
import { Meta, StoryObj } from "@storybook/react";
import { Combobox, ComboboxItem, Spinner } from "@rafty/ui";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useCallback, useRef, useState } from "react";

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
  render: function Render({ size, variant }) {
    return (
      <div className="w-[500px]">
        <Combobox
          size={size}
          variant={variant}
          label="Favorite Animal"
          onInputChange={(value) => console.log(value)}
        >
          <ComboboxItem textValue="red panda">
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-full bg-red-200">RP</div>Red Panda
            </div>
          </ComboboxItem>
          <ComboboxItem>Cat</ComboboxItem>
          <ComboboxItem>Dog</ComboboxItem>
          <ComboboxItem>Aardvark</ComboboxItem>
          <ComboboxItem>Kangaroo</ComboboxItem>
          <ComboboxItem>Snake</ComboboxItem>
        </Combobox>
      </div>
    );
  },
};

export const InfiniteScroll: Story = {
  render: function Render() {
    const [search, setSearch] = useState<string | undefined>();

    const { data, isFetching, hasNextPage, fetchNextPage, isLoading } =
      useInfiniteQuery({
        queryKey: ["photos", search],
        queryFn: async ({ pageParam = 0 }) => {
          const res = await fetch(
            search
              ? `https://api.unsplash.com/search/photos?client_id=${CLIENT_ID}&query=${search}&page=${
                  pageParam + 1
                }`
              : `https://api.unsplash.com/photos?client_id=${CLIENT_ID}&page=${
                  pageParam + 1
                }`
          );
          const jsonData = await res.json();

          if (search) return jsonData.results;
          return jsonData;
        },
        getNextPageParam: (lastPage, pages) => {
          console.log(lastPage.length == 0);
          if (lastPage.length == 0) return undefined;
          return pages.length;
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
    const page_length = pages.length;

    const options = [];

    if (page_length != 0)
      options.push(
        ...(pages.map((item, index) => (
          <ComboboxItem key={item.id} textValue={item.alt_description}>
            <div
              className="flex items-center gap-2"
              ref={page_length == index + 1 ? lastElement : undefined}
            >
              <img
                src={item.urls.thumb}
                alt={item.alt_description}
                className="h-10 w-10 rounded object-cover"
              />
              {item.alt_description}
            </div>
          </ComboboxItem>
        )) ?? [])
      );
    else if (isLoading)
      options.push(
        <ComboboxItem>
          <div className="flex h-8 w-full items-center justify-center gap-2 text-sm text-secondary-500">
            <Spinner size="sm" />
            loading data
          </div>
        </ComboboxItem>
      );
    else
      options.push(
        <ComboboxItem>
          <div className="flex h-8 w-full items-center justify-center text-sm text-secondary-500">
            No data found
          </div>
        </ComboboxItem>
      );

    if (!isLoading && isFetching)
      options.push(
        <ComboboxItem>
          <div className="flex h-8 w-full items-center justify-center gap-2 text-sm text-secondary-500">
            <Spinner size="sm" />
            loading more data
          </div>
        </ComboboxItem>
      );

    return (
      <div className="w-[500px]">
        <Combobox
          label="Favorite Animal"
          onInputChange={setSearch}
          isLoading={isLoading || isFetching}
        >
          {options}
        </Combobox>
      </div>
    );
  },
};
