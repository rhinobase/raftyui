import { Meta, StoryObj } from "@storybook/react";
import { DatePicker, FieldControl, Label } from "@rafty/ui";
import { DevTool } from "@hookform/devtools";
import { Controller, useForm } from "react-hook-form";

const meta: Meta<typeof DatePicker> = {
  title: "Form / DatePicker",
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  render: function Render() {
    const { control, handleSubmit } = useForm({
      defaultValues: {
        date: new Date("2023-10-03"),
      },
    });

    return (
      <>
        <form onClick={handleSubmit((value) => console.log(value))}>
          <FieldControl name="date">
            <Label>Date Picker</Label>
            <Controller
              name="date"
              control={control}
              render={({ field: { value, onChange, ref, ...register } }) => (
                <DatePicker
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
