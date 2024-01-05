import f from "@fibr/core";
import { FibrForm, Fields } from "@fibr/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@rafty/ui";
import { Meta, StoryObj } from "@storybook/react";
import { FieldValues, Resolver } from "react-hook-form";
import z from "zod";
import { DevTool } from "../stories/utils";

const meta: Meta = {
  title: "fibr / Required Field",
};

export default meta;

type Story = StoryObj;

const allFieldsSchema = z.object({
  name: z.string(),
  phone: z.number(),
  list: z.array(z.string()),
  check: z.boolean(),
  date: z.date(),
  date_time: z.date(),
  object_field: z.object({}),
  array_field: z.array(
    z.object({
      sample: z.string(),
      on_off: z.boolean(),
    }),
  ),
});

const blueprint = f.form<
  z.infer<typeof allFieldsSchema>,
  Resolver<FieldValues>
>({
  validation: zodResolver(allFieldsSchema),
  default_values: {
    array_field: [{ sample: "lorem ipsem", on_off: false }],
  },
  fields: {
    name: f.string({
      label: "Name",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      required: true,
    }),
    phone: f.number({
      label: "Phone",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      required: true,
    }),
    list: f.array({
      label: "Father",
      of: f.string({ label: "Father Name" }),
      required: true,
    }),
    check: f.boolean({
      label: "Checkbox",
      description: "Lorem ipsum dolor sit amet",
      required: true,
    }),
    date: f.date({
      label: "Date",
      description: "Lorem ipsum dolor sit amet",
      required: true,
    }),
    date_time: f.datetime({
      label: "Date Time",
      required: true,
    }),
    object_field: f.object({
      label: "Father",
      required: true,
      fields: {
        first_name: f.string({ label: "First Name" }),
        last_name: f.string({
          label: "Last Name",
          placeholder: "Enter your last name",
        }),
      },
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    }),
    array_field: f.array({
      label: "Message Box",
      required: true,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      of: f.object({
        label: "Object",
        fields: {
          sample: f.text({
            label: "Discription",
          }),
          on_off: f.boolean({
            label: "Name",
          }),
        },
      }),
    }),
  },
});
export const Required: Story = {
  render: () => (
    <FibrForm blueprint={blueprint} onSubmit={console.log}>
      <Fields />
      <Button type="submit" variant="outline">
        Submit
      </Button>
      <DevTool />
    </FibrForm>
  ),
};
