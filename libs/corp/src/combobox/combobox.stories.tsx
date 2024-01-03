import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { Avatar, classNames } from "@rafty/ui";
import { Meta, StoryObj } from "@storybook/react";
import { useReducer } from "react";
import {
  Combobox,
  ComboboxContent,
  ComboboxItem,
  ComboboxTrigger,
} from "./Combobox";
import { useComboboxContext } from "./context";

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
          onChange={console.log}
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
        />
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
          onChange={console.log}
          options={DATA}
          isDisabled={isDisabled}
          isLoading={isLoading}
          isReadonly={isReadonly}
        >
          <ComboboxRender />
        </Combobox>
      </div>
    );
  },
};

function ComboboxRender() {
  const { isOpen, setOpen } = useComboboxContext();

  const [selected, dispatch] = useReducer(
    (prev: DataItem | undefined, cur: string | undefined) => {
      // Checking if we have a value or not
      const value = prev?.value === cur ? undefined : cur;
      setOpen(false);

      if (value) return DATA.find((item) => item.value === value);

      return undefined;
    },
    undefined,
  );

  return (
    <>
      <ComboboxTrigger
        variant="outline"
        role="combobox"
        className="w-full justify-between"
        rightIcon={
          <ChevronUpDownIcon
            className={classNames(
              "h-3.5 w-3.5 shrink-0 stroke-2",
              isOpen
                ? "text-primary-500 dark:text-primary-400"
                : "text-secondary-500 dark:text-secondary-400",
            )}
          />
        }
      >
        {selected ? (
          <div className="flex items-center gap-2">
            <Avatar size="sm" name={selected.label} />
            {selected.label}
          </div>
        ) : (
          "Select Option"
        )}
      </ComboboxTrigger>
      <ComboboxContent>
        {({ label, value }) => (
          <ComboboxItem
            value={String(value)}
            onSelect={dispatch}
            className="gap-2"
          >
            <Avatar size="sm" name={label} />
            {label}
          </ComboboxItem>
        )}
      </ComboboxContent>
    </>
  );
}
