---
title: Rafty UI + React Query = Combobox
nextjs:
  metadata:
    title: Rafty UI + React Query = Combobox
    description: Rendering lists that can additively "load more" data onto an existing set of data or "infinite scroll" is also a very common UI pattern.
    twitter:
      title: Rafty UI + React Query = Combobox
      images:
        url: https://rafty.rhinobase.io/api/og?title=Rafty%20UI%20+%20React%20Query%20=%20Combobox
    openGraph:
      title: Rafty UI + React Query = Combobox
      images:
        url: https://rafty.rhinobase.io/api/og?title=Rafty%20UI%20+%20React%20Query%20=%20Combobox
---

Rendering lists that can additively "load more" data onto an existing set of data or "infinite scroll" is also a very common UI pattern. Over here we are using [TanStack React Query](https://tanstack.com/query/latest) for fetching the data.

{% example name="combobox:usage" %}

```jsx
import {
  CheckIcon,
  ChevronUpDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
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
  Skeleton,
  Spinner,
  Text,
  classNames,
} from "@rafty/ui";
import {
  QueryClient,
  QueryClientProvider,
  useInfiniteQuery,
} from "@tanstack/react-query";
import { useCallback, useEffect, useReducer, useRef, useState } from "react";

function Combobox() {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [contentwidth, setContentWidth] = useState(0);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    setContentWidth(triggerRef.current?.offsetWidth);
  }, []);

  const [isOpen, setOpen] = useState(false);

  const { data, error, fetchNextPage, hasNextPage, isLoading, isFetching } =
    useInfiniteQuery({
      queryKey: ["projects"],
      queryFn: () => {
        return fetch("https://api.spacexdata.com/v4/launches/past").then(
          (res) => res.json(),
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
    [isLoading, hasNextPage],
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

  if (error) return <>Unable to load data!</>;

  return (
    <div className="max-w-lg w-full mx-auto">
      <div className={!pages ? "invisible" : undefined}>
        <Popover open={isOpen} onOpenChange={setOpen}>
          <div className="relative flex items-center">
            <PopoverTrigger
              ref={triggerRef}
              variant="outline"
              role="combobox"
              aria-expanded={isOpen}
              className="w-full justify-between"
              rightIcon={
                <ChevronUpDownIcon
                  height={16}
                  width={16}
                  className={classNames(
                    isOpen
                      ? "text-primary-500"
                      : "text-secondary-500 dark:text-secondary-400",
                    "shrink-0 stroke-1",
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
                <XMarkIcon height={14} width={14} className="stroke-1" />
              </Button>
            )}
          </div>
          <PopoverContent className="!p-0" style={{ width: contentwidth }}>
            <Command shouldFilter={false}>
              <CommandList>
                <CommandGroup>
                  {pages ? (
                    pages.map((item, index) => {
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
                              <CheckIcon height={14} width={14} className="stroke-1" />
                            )}
                          </div>
                        </CommandItem>
                      );
                    })
                  ) : (
                    <CommandLoading>
                      <div className="flex select-none items-center justify-center gap-2 py-4">
                        <Spinner size="sm" />
                        <Text className="text-sm text-secondary-500">
                          Loading
                        </Text>
                      </div>
                    </CommandLoading>
                  )}
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
                  {pages?.length == 0 && !isLoading && (
                    <CommandEmpty>No data found</CommandEmpty>
                  )}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
      {!pages && (
        <Skeleton className="max-w-lg w-full mx-auto h-[42px] rounded-md !-mt-[42px]" />
      )}
    </div>
  );
}
```

{% /example %}
