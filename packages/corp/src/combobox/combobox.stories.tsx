import { CheckIcon } from "@heroicons/react/24/outline";
import { zodResolver } from "@hookform/resolvers/zod";
import { Avatar, useLastElement } from "@rafty/ui";
import type { Meta, StoryObj } from "@storybook/react";
import {
  QueryClient,
  QueryClientProvider,
  useInfiniteQuery,
} from "@tanstack/react-query";
import { forwardRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import z from "zod";
import {
  Combobox,
  ComboboxClearButton,
  ComboboxContent,
  ComboboxItem,
  ComboboxTrigger,
} from "./Combobox";
import { useComboboxContext } from "./context";
import type { ComboboxOptionType } from "./types";
import { findLabel } from "./utils";

const meta: Meta<typeof Combobox> = {
  title: "Corp / Combobox",
  args: {
    type: "single",
    placeholder: {
      trigger: "Select language",
      search: "Search language",
    },
    isDisabled: false,
    isLoading: false,
    isReadOnly: false,
    isInvalid: false,
  },
  argTypes: {
    type: { control: "select", options: ["single", "multi"] },
  },
};

export default meta;

type Story = StoryObj<typeof Combobox>;

const OPTIONS: ComboboxOptionType[] = [
  {
    label: "Java",
    value: "java",
  },
  {
    label: "Javascript",
    value: "javascript",
  },
  {
    label: "Node JS",
    value: [
      { label: "Node 16", value: "node-16" },
      { label: "Node 18", value: "node-18" },
      { label: "Node 20", value: "node-20" },
      { label: "Node 22", value: "node-22" },
    ],
  },
  {
    label: "Python",
    value: [
      { label: "Python 3.10", value: "py-3.10" },
      { label: "Python 3.9", value: "py-3.9" },
    ],
  },
];

export const Default: Story = {
  render: (props) => {
    return (
      <Combobox
        {...props}
        id="lang"
        onSelectionChange={console.log}
        options={OPTIONS}
      >
        <ComboboxTrigger />
        <div className="mt-2 flex flex-row-reverse empty:hidden">
          <ComboboxClearButton />
        </div>
        <ComboboxContent />
      </Combobox>
    );
  },
};

const schema = z.object({
  language: z.string(),
});

export const WithController: Story = {
  render: (props) => {
    const { control } = useForm<z.infer<typeof schema>>({
      resolver: zodResolver(schema),
    });

    return (
      <Controller
        name="language"
        control={control}
        render={({ field: { name, value, onChange, disabled } }) => (
          // @ts-ignore
          <Combobox
            {...props}
            id={name}
            selected={value}
            onSelectionChange={onChange}
            isDisabled={disabled}
            options={OPTIONS}
          >
            <ComboboxTrigger />
            <div className="mt-1 flex w-full flex-row-reverse empty:hidden">
              <ComboboxClearButton />
            </div>
            <ComboboxContent />
          </Combobox>
        )}
      />
    );
  },
};

type DataItem = {
  label: string;
  value: string;
};

const DATA: DataItem[] = [
  {
    label: "Rhinobase",
    value: "rhinobase",
  },
  {
    label: "Fibr",
    value: "fibr",
  },
  {
    label: "Rafty",
    value: "rafty",
  },
  {
    label: "Dawn",
    value: "dawn",
  },
  {
    label: "Roxy",
    value: "roxy",
  },
];

export const Custom: Story = {
  render: (props) => {
    return (
      // @ts-ignore
      <Combobox
        {...props}
        id="products"
        type="single"
        onSelectionChange={console.log}
        options={DATA}
      >
        <ComboboxTrigger>
          <CustomTriggerRender />
        </ComboboxTrigger>
        <div className="mt-2 flex flex-row-reverse empty:hidden">
          <ComboboxClearButton />
        </div>
        <ComboboxContent>{CustomContentRender}</ComboboxContent>
      </Combobox>
    );
  },
};

function CustomTriggerRender() {
  const { selected, options } = useComboboxContext();
  const label = findLabel(selected[0], options);

  if (selected.length > 0)
    return (
      <div className="flex items-center gap-2">
        <Avatar size="sm" name={label} />
        {label}
      </div>
    );
  return "Select Option";
}

function CustomContentRender({
  option: { label, value },
}: {
  option: ComboboxOptionType;
}) {
  const { onSelectionChange, selected } = useComboboxContext();

  // Checking if the current value is selected
  const isSelected = selected.findIndex((val) => val === value) !== -1;

  return (
    <ComboboxItem
      value={String(value)}
      onSelect={onSelectionChange}
      className="gap-2"
    >
      <Avatar size="sm" name={label} />
      {label}
      <div className="flex-1" />
      {isSelected && (
        <CheckIcon
          width={16}
          height={16}
          className="stroke-primary-500 dark:stroke-primary-300 stroke-2"
        />
      )}
    </ComboboxItem>
  );
} // TODO: Experimental
// export const Virtualized: Story = {
//   render: (props) => {
//     return (
//       <div className="w-[500px] space-y-3">
//         <Tag size="sm" colorScheme="warning">
//           Experimental
//         </Tag>
//         <Combobox
//           id="products"
//           type="single"
//           onSelectionChange={console.log}
//           options={DATA}
//           {...props}
//         >
//           <ComboboxTrigger />
//           <ComboboxContent>
//             {VirtualizedContentRender}
//           </ComboboxContent>
//         </Combobox>
//       </div>
//     );
//   },
// };

// function VirtualizedContentRender() {
//   const { options, onSelectionChange, selected } = useComboboxContext();

//   return (
//     <ScrollArea itemCount={options.length} itemSize={100}>
//       <CommandList className="p-1">
//         <ScrollAreaList className="dark:border-secondary-700 h-60 w-[200px]">
//           {({ index, style }) => {
//             const { label, value } = options[index];
//             return (
//               <ComboboxItem
//                 value={String(value)}
//                 onSelect={onSelectionChange}
//                 className="gap-2"
//                 style={style}
//               >
//                 <Avatar size="sm" name={label} />
//                 {label}
//                 <div className="flex-1" />
//                 {selected[0] === value && (
//                   <CheckIcon
//                     width={16}
//                     height={16}
//                     className="stroke-secondary-600 stroke-2"
//                   />
//                 )}
//               </ComboboxItem>
//             );
//           }}
//         </ScrollAreaList>
//         <ComboboxItem>ASD</ComboboxItem>
//       </CommandList>
//     </ScrollArea>
//   );
// }

export const InfinityScroll: Story = {
  render: (props) => {
    const CLIENT = new QueryClient();

    return (
      <QueryClientProvider client={CLIENT}>
        <InfinityCombobox {...props} />
      </QueryClientProvider>
    );
  },
};

const DATA_LIMIT = 20;

const requestHeaders = new Headers();
requestHeaders.append("Content-Type", "application/json");

function InfinityCombobox(props: Combobox) {
  const [search, setSearch] = useState<string>("");
  const { data, error, fetchNextPage, hasNextPage, isFetching } =
    useInfiniteQuery({
      queryKey: ["launches", search],
      queryFn: ({ pageParam = 0 }) =>
        fetch("https://api.spacexdata.com/v4/launches/query", {
          method: "POST",
          headers: requestHeaders,
          body: JSON.stringify({
            query: search
              ? {
                  name: { $regex: search, $options: "ig" },
                }
              : {},
            options: {
              limit: DATA_LIMIT,
              offset: DATA_LIMIT * pageParam,
            },
          }),
          redirect: "follow",
        }).then((res) => res.json()),
      getNextPageParam: (lastPage) => lastPage.nextPage,
    });

  const lastElementRef = useLastElement({
    isFetching,
    hasNextPage,
    fetchNextPage,
  });

  const pages = data?.pages.flatMap(({ docs }) => docs) ?? [];
  const total_items = pages.length;

  const options = pages.map(({ id, name }) => ({ label: name, value: id }));

  return (
    <Combobox {...props} id="infinity" options={options}>
      <ComboboxTrigger />
      <div className="mt-2 flex flex-row-reverse empty:hidden">
        <ComboboxClearButton />
      </div>
      <ComboboxContent
        isLoading={isFetching}
        search={search}
        onSearchChange={setSearch}
        shouldFilter={false}
      >
        {({ option: { value }, index }) => {
          const isLastElement = total_items - index === 1;

          const launch = pages.find(({ id }) => id === value);

          return (
            <InfinityComboboxOption
              key={index}
              ref={isLastElement ? lastElementRef : undefined}
              {...launch}
            />
          );
        }}
      </ComboboxContent>
    </Combobox>
  );
}

type InfinityComboboxOption = {
  id: string;
  name: string;
  details: string;
};

const InfinityComboboxOption = forwardRef<
  HTMLDivElement,
  InfinityComboboxOption
>((props, forwardedRef) => {
  const { selected, onSelectionChange } = useComboboxContext();

  // Checking if the current value is selected
  const isSelected = selected.findIndex((value) => value === props.id) !== -1;

  return (
    <ComboboxItem
      value={props.id}
      onSelect={onSelectionChange}
      ref={forwardedRef}
    >
      <div className="text-left">
        <p>{props.name}</p>
        <p className="text-secondary-500 text-xs empty:hidden">
          {props.details}
        </p>
      </div>
      <div className="flex-1" />
      {isSelected && (
        <CheckIcon
          width={16}
          height={16}
          className="stroke-primary-500 dark:stroke-primary-300 min-h-4 min-w-4 stroke-2"
        />
      )}
    </ComboboxItem>
  );
});
