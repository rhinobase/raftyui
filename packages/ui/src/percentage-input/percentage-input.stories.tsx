import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta, StoryObj } from "@storybook/react";
import { Controller, useForm } from "react-hook-form";
import z from "zod";
import { PercentageInput } from "./PercentageInput";

const meta: Meta<typeof PercentageInput> = {
  title: "Form / PercentageInput",
};

export default meta;
type Story = StoryObj<typeof PercentageInput>;

const schema = z.object({
  percentage: z.string(),
});

export const Default: Story = {
  render: (props) => {
    const { control } = useForm<z.infer<typeof schema>>({
      resolver: zodResolver(schema),
      defaultValues: {
        percentage: "0%",
      },
    });

    return (
      <form>
        <Controller
          name="percentage"
          control={control}
          render={({ field }) => <PercentageInput {...props} {...field} />}
        />
      </form>
    );
  },
};
