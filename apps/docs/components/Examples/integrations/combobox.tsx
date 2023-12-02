"use client";
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

CheckIcon.displayName = "CheckIcon";
ChevronUpDownIcon.displayName = "ChevronUpDownIcon";
XMarkIcon.displayName = "XMarkIcon";

type SpaceXData = {
  id: string;
  name: string;
  links: {
    patch: {
      small: string;
    };
  };
};

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
    useInfiniteQuery<SpaceXData>({
      queryKey: ["projects"],
      queryFn: () =>
        fetch("https://api.spacexdata.com/v4/launches/past").then((res) =>
          res.json(),
        ),
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

  const [selected, dispatch] = useReducer(
    (prev: SpaceXData | undefined, cur: string): SpaceXData | undefined => {
      // Checking if we have a value or not
      const value = prev?.id == cur ? undefined : cur;
      setOpen(false);

      if (value && pages) return pages.find((data) => data.id === value);

      return undefined;
    },
    undefined,
  );

  if (error) return <>Unable to load data!</>;

  return (
    <div className="mx-auto w-full max-w-lg">
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
                  width={16}
                  height={16}
                  className={classNames(
                    isOpen
                      ? "text-primary-500"
                      : "text-secondary-500 dark:text-secondary-400",
                    "shrink-0 stroke-2",
                  )}
                />
              }
            >
              {selected ? (
                <div className="flex w-full items-center gap-2 ">
                  <Avatar
                    name={selected.name}
                    src={selected.links.patch.small}
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
                <XMarkIcon width={14} height={14} className="stroke-2" />
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
                            className="flex w-full items-center gap-2"
                            ref={isLastElement ? lastElementRef : undefined}
                          >
                            <Avatar
                              name={item.name}
                              src={item.links.patch.small}
                            />
                            <Text>{item.name}</Text>
                            <div className="flex-1" />
                            {selected?.id == item.id && (
                              <CheckIcon
                                width={14}
                                height={14}
                                className="stroke-2"
                              />
                            )}
                          </div>
                        </CommandItem>
                      );
                    })
                  ) : (
                    <CommandLoading>
                      <div className="flex select-none items-center justify-center gap-2 py-4">
                        <Spinner size="sm" />{" "}
                        <Text className="text-secondary-500 text-sm">
                          Loading
                        </Text>
                      </div>
                    </CommandLoading>
                  )}
                  {(isLoading || isFetching) && (
                    <CommandLoading>
                      <div className="flex select-none items-center justify-center gap-2 py-4">
                        <Spinner size="sm" />{" "}
                        <Text className="text-secondary-500 text-sm">
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
        <Skeleton className="mx-auto !-mt-[42px] h-[42px] w-full max-w-lg rounded-md" />
      )}
    </div>
  );
}

const CLIENT = new QueryClient();

export const combobox_examples = {
  "combobox:usage": (
    <QueryClientProvider client={CLIENT}>
      <Combobox />
    </QueryClientProvider>
  ),
};
