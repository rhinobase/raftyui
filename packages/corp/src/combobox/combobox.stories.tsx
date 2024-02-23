import { CheckIcon } from "@heroicons/react/24/outline";
import {
  Avatar,
  CommandEmpty,
  CommandList,
  ScrollArea,
  ScrollAreaList,
  Tag,
} from "@rafty/ui";
import { Meta, StoryObj } from "@storybook/react";
import {
  Combobox,
  ComboboxClearButton,
  ComboboxContent,
  ComboboxItem,
  ComboboxTrigger,
} from "./Combobox";
import { useComboboxContext } from "./context";
import { findLabel } from "./utils";

const meta: Meta<typeof Combobox> = {
  title: "Corp / Combobox",
  args: {
    isDisabled: false,
    isLoading: false,
    isReadonly: false,
    type: "single",
  },
  argTypes: {
    type: { control: "select", options: ["single", "multi"] },
  },
};

export default meta;

type Story = StoryObj<typeof Combobox>;

export const Default: Story = {
  render: ({ isDisabled, isLoading, isReadonly, type }) => {
    return (
      <div className="w-[500px]">
        <Combobox
          name="lang"
          type={type}
          isDisabled={isDisabled}
          isLoading={isLoading}
          isReadonly={isReadonly}
          placeholder={{
            trigger: "Select languages",
            search: "Search language",
          }}
          onSelectionChange={console.log}
          options={[
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
          ]}
        >
          <ComboboxTrigger />
          <div className="mt-2 flex flex-row-reverse">
            <ComboboxClearButton />
          </div>
          <ComboboxContent />
        </Combobox>
      </div>
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
  render: ({ isDisabled, isLoading, isReadonly }) => {
    return (
      <div className="w-[500px]">
        <Combobox
          name="products"
          type="single"
          onSelectionChange={console.log}
          options={DATA}
          isDisabled={isDisabled}
          isLoading={isLoading}
          isReadonly={isReadonly}
        >
          <ComboboxTrigger>
            <CustomTriggerRender />
          </ComboboxTrigger>
          <ComboboxContent>
            <CustomContentRender />
          </ComboboxContent>
        </Combobox>
      </div>
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

function CustomContentRender() {
  const { options, onSelectionChange, selected } = useComboboxContext();

  return (
    <CommandList className="p-1">
      {options.map(({ label, value }) => (
        <ComboboxItem
          value={String(value)}
          onSelect={onSelectionChange}
          className="gap-2"
        >
          <Avatar size="sm" name={label} />
          {label}
          <div className="flex-1" />
          {selected[0] === value && (
            <CheckIcon
              width={16}
              height={16}
              className="stroke-secondary-600 stroke-2"
            />
          )}
        </ComboboxItem>
      ))}
      <CommandEmpty>No data found</CommandEmpty>
    </CommandList>
  );
}

// TODO: Experimental
export const Virtualized: Story = {
  render: ({ isDisabled, isLoading, isReadonly }) => {
    return (
      <div className="w-[500px] space-y-3">
        <Tag size="sm" colorScheme="warning">
          Experimental
        </Tag>
        <Combobox
          name="products"
          type="single"
          onSelectionChange={console.log}
          options={DATA}
          isDisabled={isDisabled}
          isLoading={isLoading}
          isReadonly={isReadonly}
        >
          <ComboboxTrigger />
          <ComboboxContent>
            <VirtualizedContentRender />
          </ComboboxContent>
        </Combobox>
      </div>
    );
  },
};

function VirtualizedContentRender() {
  const { options, onSelectionChange, selected } = useComboboxContext();

  return (
    <ScrollArea itemCount={options.length} itemSize={100}>
      <CommandList className="p-1">
        <ScrollAreaList className="dark:border-secondary-700 h-60 w-[200px]">
          {({ index, style }) => {
            const { label, value } = options[index];
            return (
              <ComboboxItem
                value={String(value)}
                onSelect={onSelectionChange}
                className="gap-2"
                style={style}
              >
                <Avatar size="sm" name={label} />
                {label}
                <div className="flex-1" />
                {selected[0] === value && (
                  <CheckIcon
                    width={16}
                    height={16}
                    className="stroke-secondary-600 stroke-2"
                  />
                )}
              </ComboboxItem>
            );
          }}
        </ScrollAreaList>
        <ComboboxItem>ASD</ComboboxItem>
      </CommandList>
    </ScrollArea>
  );
}
