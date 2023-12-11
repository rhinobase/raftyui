import { Meta, StoryObj } from "@storybook/react";
import { FieldControl, Label, RangePicker } from "@rafty/ui";
import { Controller, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

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
