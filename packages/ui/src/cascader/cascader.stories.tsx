import { DevTool } from "@hookform/devtools";
import type { Meta, StoryObj } from "@storybook/react";
import { Controller, useForm } from "react-hook-form";
import { Cascader } from "./Cascader";

const meta: Meta<typeof Cascader> = {
  title: "Components / Cascader ",
  args: {
    size: "md",
    inputPlaceholder: "Please Select Item",
    isDisabled: false,
    separatorIcon: ", ",
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

const items = [
  {
    label: "pants",
    value: "pants",
    children: [
      {
        label: "denim",
        value: "denim",
        children: [
          {
            label: "jeans",
            value: "jeans",
          },
        ],
      },
    ],
  },
  {
    label: "shoes",
    value: "shoes",
    children: [
      {
        label: "athletic",
        value: "athlietic",
        children: [
          {
            label: "runing",
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
          render={({ field: { name, onChange, ref, value, disabled } }) => {
            const val = value?.pop();

            return (
              <Cascader
                {...props}
                name={name}
                items={items}
                value={val?.value}
                onSelect={(value, selected) => onChange(selected)}
                disabled={disabled}
                ref={ref}
              />
            );
          }}
        />
        <DevTool control={control} />
      </form>
    );
  },
};
