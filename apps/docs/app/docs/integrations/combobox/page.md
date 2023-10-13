---
title: Rafty UI + React Query
nextjs:
  metadata:
    title: Combobox
    description: Rendering lists that can additively "load more" data onto an existing set of data or "infinite scroll" is also a very common UI pattern.
    twitter:
      title: Combobox
      images:
        url: https://rafty.rhinobase.io/api/og?title=Combobox
    openGraph:
      title: Combobox
      images:
        url: https://rafty.rhinobase.io/api/og?title=Combobox
---

Rendering lists that can additively "load more" data onto an existing set of data or "infinite scroll" is also a very common UI pattern. Over here we are using [TanStack React Query](https://tanstack.com/query/latest) for fetching the data.

```jsx
import { useInfiniteQuery } from "@tanstack/react-query";
import { useCallback, useReducer, useRef, useState } from "react";
import {
  Avatar,
  Button,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandLoading,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Spinner,
  Text,
  classNames,
} from "@rafty/ui";
import { HiCheck, HiChevronUpDown, HiXMark } from "react-icons/hi2";

export default function Projects() {
  const [isOpen, setOpen] = useState(false);

  const { data, error, fetchNextPage, hasNextPage, isLoading, isFetching } =
    useInfiniteQuery({
      queryKey: ["projects"],
      queryFn: () => {
        return fetch("https://api.spacexdata.com/v4/launches/past").then(
          (res) => res.json()
        );
      },
      getNextPageParam: (_, pages) => pages.length,
    });

  const observer = useRef<IntersectionObserver>();
  const lastElementRef = useCallback(
    (node: HTMLDivElement) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((enteris) => {
        if (enteris[0].isIntersecting && hasNextPage) fetchNextPage();
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, hasNextPage]
  );

  const pages = data?.pages.flat();

  const [selected, dispatch] = useReducer((prev: any, cur: any): any => {
    // Checking if we have a value or not
    const value = prev?.id == cur ? undefined : cur;
    setOpen(false);

    if (value)
      return {
        ...pages?.find((data) => data.id === value),
      };

    return undefined;
  }, undefined);

  if (error) return;

  if (pages)
    return (
      <div className=" max-w-lg w-full mx-auto">
        <Popover open={isOpen} onOpenChange={setOpen}>
          <div className="relative flex items-center">
            <PopoverTrigger
              variant="outline"
              role="combobox"
              aria-expanded={isOpen}
              className="w-full justify-between"
              rightIcon={
                <HiChevronUpDown
                  className={classNames(
                    isOpen
                      ? "text-primary-500"
                      : "text-secondary-500 dark:text-secondary-400",
                    "h-4 w-4 shrink-0 stroke-1"
                  )}
                />
              }
            >
              {selected ? (
                <div className="flex items-center gap-2 w-full ">
                  <Avatar
                    name={selected.name}
                    src={selected.links?.patch?.small}
                  />
                  <Text>{selected.name}</Text>
                </div>
              ) : (
                "Select Item"
              )}
            </PopoverTrigger>
            {selected && (
              <Button
                size="icon"
                colorScheme="error"
                variant="ghost"
                className="absolute right-10 z-20 !p-1"
                onClick={() => dispatch("")}
              >
                <HiXMark className="h-3.5 w-3.5 stroke-1" />
              </Button>
            )}
          </div>
          <PopoverContent className="!p-0 !w-[512px]">
            <Command shouldFilter={false}>
              <CommandList>
                <CommandGroup>
                  {pages.map((item, index) => {
                    const isLastElement = pages.length == index + 1;

                    return (
                      <CommandItem
                        key={item.id}
                        value={item.id}
                        onSelect={dispatch}
                      >
                        <div
                          className="flex items-center gap-2 w-full"
                          ref={isLastElement ? lastElementRef : undefined}
                        >
                          <Avatar
                            name={item.name}
                            src={item.links.patch.small}
                          />
                          <Text>{item.name}</Text>
                          <div className="flex-1" />
                          {selected?.id == item.id && (
                            <HiCheck className="h-3.5 w-3.5 stroke-1" />
                          )}
                        </div>
                      </CommandItem>
                    );
                  })}
                  {(isLoading || isFetching) && (
                    <CommandLoading>
                      <div className="flex select-none items-center justify-center gap-2 py-4">
                        <Spinner size="sm" />{" "}
                        <Text className="text-sm text-secondary-500">
                          Loading
                        </Text>
                      </div>
                    </CommandLoading>
                  )}
                  {pages.length == 0 && !isLoading && (
                    <CommandEmpty>No data found</CommandEmpty>
                  )}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    );
}

```
