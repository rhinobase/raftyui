import { DevTool } from "@hookform/devtools";
import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { FieldControl } from "../field-control";
import { Label } from "../label";
import { RangePicker } from "./RangePicker";

const meta: Meta<typeof RangePicker> = {
  title: "Form / RangePicker",
};

export default meta;
type Story = StoryObj<typeof RangePicker>;

export const Default: Story = {
  render: function Render() {
    const { control, handleSubmit } = useForm({
      defaultValues: {
        range: {
          from: new Date("2023-10-03"),
          to: new Date("2023-11-06"),
        },
      },
    });

    return (
      <>
        <form onClick={handleSubmit((value) => console.log(value))}>
          <FieldControl name="range">
            <Label>Range picker</Label>
            <Controller
              name="range"
              control={control}
              render={({ field: { value, onChange, ...register } }) => (
                <RangePicker
                  {...register}
                  onSelect={onChange}
                  selected={value}
                />
              )}
            />
          </FieldControl>
        </form>
        <DevTool control={control} />
      </>
    );
  },
};
