import f from "@fibr/core";
import { FibrForm, Fields } from "@fibr/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@rafty/ui";
import { FieldValues, Resolver } from "react-hook-form";
import z from "zod";
import { DevTool } from "./DevTool";

type AllFields = {
  defaultValues?: Record<string, unknown>;
};

const allFieldsSchema = z.object({
  array_list_field: z.array(z.string()),
  boolean_check_field: z.boolean(),
  boolean_switch_field: z.boolean(),
  string_field: z.string(),
  string_checkbox_field: z.string(),
  string_combobox_field: z.string(),
  string_multi_field: z.string(),
  string_radio_field: z.string(),
  string_select_field: z.string(),
  number_field: z.number(),
  number_checkbox_field: z.number(),
  number_combobox_field: z.number(),
  number_multi_field: z.number(),
  number_radio_field: z.number(),
  number_select_field: z.number(),
  date_field: z.date(),
  date_time_field: z.date(),
  object_field: z.object({}),
  text_field: z.string(),
  array_object_field: z.array(
    z.object({
      sample: z.string(),
      on_off: z.boolean(),
    }),
  ),
});

export function AllFields(props: AllFields) {
  const blueprint = f.form<
    z.infer<typeof allFieldsSchema>,
    Resolver<FieldValues>
  >({
    validation: zodResolver(allFieldsSchema),
    default_values: props.defaultValues,
    fields: {
      array_list_field: f.array({
        label: "Inbox",
        of: f.string({ label: "Name" }),
      }),
      boolean_check_field: f.boolean({
        label: "Checkbox",
        description: "Lorem ipsum dolor sit amet",
      }),
      boolean_switch_field: f.boolean({
        label: "Swith",
        description: "Lorem ipsum dolor sit amet",
        options: {
          layout: "switch",
        },
      }),
      string_field: f.string({
        label: "Name",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      }),
      string_checkbox_field: f.string({
        label: "String Checkbox Field",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        options: {
          list: [
            {
              label: "Node JS",
              value: "js",
            },
            {
              label: "Python",
              value: [
                { label: "Python 3.9", value: "py-3.9" },
                { label: "Python 3.10", value: "py-3.10" },
              ],
            },
          ],
          layout: "checkbox",
        },
      }),
      string_combobox_field: f.string({
        label: "Name",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        options: {
          list: [
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
          ],
          layout: "combobox",
        },
      }),
      string_multi_field: f.string({
        label: "Multi",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        options: {
          list: [
            {
              label: "Node JS",
              value: "js",
            },
            {
              label: "Python",
              value: [
                { label: "Python 3.9", value: "py-3.9" },
                { label: "Python 3.10", value: "py-3.10" },
              ],
            },
          ],
          layout: "multi",
        },
      }),
      string_radio_field: f.string({
        label: "Name",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        options: {
          list: [
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
          ],
          layout: "radio",
        },
      }),
      string_select_field: f.string({
        label: "Select",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        options: {
          list: [
            {
              label: "Node JS",
              value: "js",
            },
            {
              label: "Python",
              value: [
                { label: "Python 3.9", value: "py-3.9" },
                { label: "Python 3.10", value: "py-3.10" },
              ],
            },
          ],
          layout: "select",
        },
      }),
      number_field: f.number({
        label: "Phone",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      }),
      number_checkbox_field: f.number({
        label: "Name",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        options: {
          list: [
            {
              label: "Node-JS",
              value: 1,
            },
            {
              label: "Python",
              value: [
                { label: "Python-3.10", value: 12 },
                { label: "Python-3.9", value: 20 },
              ],
            },
          ],
          layout: "checkbox",
        },
      }),
      number_combobox_field: f.number({
        label: "Name",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        options: {
          list: [
            {
              label: "Node JS",
              value: 1,
            },
            {
              label: "Python",
              value: [
                { label: "Python 3.10", value: 12 },
                { label: "Python 3.9", value: 20 },
              ],
            },
          ],
          layout: "combobox",
        },
      }),
      number_multi_field: f.number({
        label: "Name",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        options: {
          list: [
            {
              label: "Node JS",
              value: 1,
            },
            {
              label: "Python",
              value: [
                { label: "Python 3.10", value: 12 },
                { label: "Python 3.9", value: 20 },
              ],
            },
          ],
          layout: "multi",
        },
      }),
      number_radio_field: f.number({
        label: "Name",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        options: {
          list: [
            {
              label: "Node-JS",
              value: 1,
            },
            {
              label: "Python",
              value: [
                { label: "Python-3.10", value: 12 },
                { label: "Python-3.9", value: 20 },
              ],
            },
          ],
          layout: "radio",
        },
      }),
      number_select_field: f.number({
        label: "Number Select",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        options: {
          list: [
            {
              label: "Node JS",
              value: 12,
            },
            {
              label: "Python",
              value: [
                { label: "Python 3.9", value: 30 },
                { label: "Python 3.10", value: 37 },
              ],
            },
          ],
          layout: "select",
        },
      }),
      date_field: f.date({
        label: "Date",
        description: "Lorem ipsum dolor sit amet",
      }),
      date_time_field: f.datetime({
        label: "Date Time",
      }),
      object_field: f.object({
        label: "Father Name",
        fields: {
          first_name: f.string({ label: "First Name" }),
          last_name: f.string({
            label: "Last Name",
            placeholder: "Enter your last name",
          }),
        },
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      }),
      text_field: f.text({
        label: "Detail",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      }),
      array_object_field: f.array({
        label: "Message Box",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        of: f.object({
          fields: {
            description: f.text({
              label: "Discription",
            }),
            on_off: f.boolean({
              label: "Name",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            }),
          },
        }),
      }),
    },
  });
  return (
    <FibrForm blueprint={blueprint} onSubmit={console.log}>
      <Fields />
      <Button type="submit" variant="outline">
        Submit
      </Button>
      <DevTool />
    </FibrForm>
  );
}
