import { DevTool } from "@hookform/devtools";
import type { Meta, StoryObj } from "@storybook/react";
import { Controller, useForm } from "react-hook-form";
import { Cascader, type ItemType } from "./Cascader";

const meta: Meta<typeof Cascader> = {
  title: "Components / Cascader ",
  args: {
    size: "md",
    placeholder: "Please Select Item",
    isDisabled: false,
    isReadOnly: false,
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Cascader>;

const items: ItemType[] = [
  {
    label: "Pants",
    value: "pants",
    children: [
      {
        label: "Denim",
        value: "denim",
        children: [
          {
            label: "Jeans",
            value: "jeans",
          },
        ],
      },
      {
        label: "Cargo",
        value: 4,
      },
    ],
  },
  {
    label: "Shoes",
    value: "Shoes",
    children: [
      {
        label: "Athletic",
        value: "athlietic",
        children: [
          {
            label: "Runing",
            value: "runing",
          },
        ],
      },
    ],
  },
];

export const Default: Story = {
  render: (props) => {
    const { control } = useForm();

    return (
      <form className="w-full">
        <Controller
          name="sample"
          control={control}
          render={({ field: { name, onChange, ref, value } }) => (
            <Cascader
              {...props}
              name={name}
              // defaultValue="jeans"
              items={items}
              value={value}
              onSelect={(value, selected) => onChange(value)}
              ref={ref}
            />
          )}
        />
        <DevTool control={control} />
      </form>
    );
  },
};

export const WithDefaultValue: Story = {
  render: (props) => <Cascader defaultValue="jeans" {...props} items={items} />,
};
