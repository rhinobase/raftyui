export const dependencies = {
  "@tanstack/react-query": "^4.36.1",
};

const AppFile = `import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Combobox from "./Combobox";

export default function App() {
  const CLIENT = new QueryClient();
  return (
    <QueryClientProvider client={CLIENT}>
      <Combobox />
    </QueryClientProvider>
  );
}
`;

const ComboboxFile = `import {
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

export default function Combobox() {
  const triggerRef = useRef(null);
  const [contentwidth, setContentWidth] = useState(0);

  useEffect(() => {
    setContentWidth(triggerRef.current?.offsetWidth);
  }, []);

  const [isOpen, setOpen] = useState(false);

  const { data, error, fetchNextPage, hasNextPage, isLoading, isFetching } =
    useInfiniteQuery({
      queryKey: ["projects"],
      queryFn: () =>
        fetch("https://api.spacexdata.com/v4/launches/past").then((res) =>
          res.json()
        ),
      getNextPageParam: (_, pages) => pages.length,
    });

  const observer = useRef();
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

  const [selected, dispatch] = useReducer((prev, cur) => {
    // Checking if we have a value or not
    const value = prev?.id == cur ? undefined : cur;
    setOpen(false);

    if (value && pages) return pages.find((data) => data.id === value);

    return undefined;
  }, undefined);

  if (error) return <>Unable to load data!</>;

  return (
    <div className="w-full p-4">
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
                    "shrink-0 stroke-2"
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
                className="absolute right-10 z-20 p-1"
                onClick={() => dispatch("")}
              >
                <XMarkIcon width={14} height={14} className="stroke-2" />
              </Button>
            )}
          </div>
          <PopoverContent
            className="p-0"
            style={{ width: contentwidth, maxWidth: "none" }}
          >
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
        <Skeleton className="mx-auto -mt-[42px] h-[42px] w-full max-w-lg rounded-md" />
      )}
    </div>
  );
}
`;

export const files = {
  "App.js": AppFile,
  "Combobox.js": ComboboxFile,
};
