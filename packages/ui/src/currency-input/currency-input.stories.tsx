import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta, StoryObj } from "@storybook/react";
import { Controller, useForm } from "react-hook-form";
import z from "zod";
import { CurrencyInput } from "./CurrencyInput";

const meta: Meta<typeof CurrencyInput> = {
  title: "Form / CurrencyInput",
  args: {
    currencyCode: "usd",
    size: "md",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof CurrencyInput>;

const schema = z.object({
  currency: z.string(),
});

export const Default: Story = {
  render: (props) => {
    const { control } = useForm<z.infer<typeof schema>>({
      resolver: zodResolver(schema),
      defaultValues: {
        currency: "0.00",
      },
    });

    return (
      <form className="w-full">
        <Controller
          name="currency"
          control={control}
          render={({ field }) => <CurrencyInput {...props} {...field} />}
        />
      </form>
    );
  },
};
