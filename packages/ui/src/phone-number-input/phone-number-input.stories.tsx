import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta, StoryObj } from "@storybook/react";
import { Controller, useForm } from "react-hook-form";
import z from "zod";
import { PhoneNumberInput } from "./PhoneNumberInput";

const meta: Meta<typeof PhoneNumberInput> = {
  title: "Form / PhoneNumberInput",
};

export default meta;
type Story = StoryObj<typeof PhoneNumberInput>;

const schema = z.object({
  phone: z.string(),
});

export const Default: Story = {
  render: (props) => {
    const { control } = useForm<z.infer<typeof schema>>({
      resolver: zodResolver(schema),
      defaultValues: {
        phone: "",
      },
    });

    return (
      <Controller
        name="phone"
        control={control}
        render={({ field }) => <PhoneNumberInput {...props} {...field} />}
      />
    );
  },
};
