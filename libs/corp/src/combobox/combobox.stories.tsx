import { zodResolver } from "@hookform/resolvers/zod";
import { Button, ErrorMessage, FieldControl, Label } from "@rafty/ui";
import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import z from "zod";
import { Combobox } from "./Combobox";

const meta: Meta<typeof Combobox> = {
  title: "Corp / Combobox",
};

export default meta;

type Story = StoryObj<typeof Combobox>;

const schema = z.object({
  lang: z.string(),
});

export const Default: Story = {
  render: () => {
    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm<z.infer<typeof schema>>({
      resolver: zodResolver(schema),
    });

    return (
      <div className="w-[500px]">
        <form
          onSubmit={handleSubmit((value) => console.log(value))}
          className="w-full space-y-3"
        >
          <FieldControl name="lang" isRequired>
            <Label>Language</Label>
            <Controller
              name="lang"
              control={control}
              render={({ field }) => (
                <Combobox
                  name={field.name}
                  value={field.value}
                  onChange={field.onChange}
                  options={[
                    {
                      label: "Node JS",
                      value: "js",
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
              )}
            />
            <ErrorMessage>{errors.lang?.message}</ErrorMessage>
          </FieldControl>
          <Button type="submit" colorScheme="primary">
            Submit
          </Button>
        </form>
      </div>
    );
  },
};
