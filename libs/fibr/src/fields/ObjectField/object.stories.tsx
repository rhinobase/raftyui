import f from "@fibr/core";
import { FibrForm, Fields } from "@fibr/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Meta, StoryObj } from "@storybook/react";
import { FieldValues, Resolver } from "react-hook-form";
import { z } from "zod";
import { DevTool } from "../utils";

const meta: Meta = {
  title: "fibr / Object",
};

export default meta;

type Story = StoryObj;

const defaultSchema = z.object({
  name: z.string(),
});

export const Default: Story = {
  render: () => (
    <FibrForm
      onSubmit={console.log}
      blueprint={f.form<z.infer<typeof defaultSchema>, Resolver<FieldValues>>({
        validation: zodResolver(defaultSchema),
        fields: {
          name: f.object({
            label: "Name",
            fields: {
              first_name: f.string({ label: "First Name" }),
              middle_name: f.string({
                label: "Middle Name",
                fieldset: "social",
              }),

              last_name: f.string({
                label: "Last Name (Read Only)",
                fieldset: "social",
                readOnly: true,
              }),

              structure: f.string({
                label: "Last Name",
                fieldset: "social",
                hidden: true,
              }),

              on_off: f.boolean({
                label: "Name",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

                options: {
                  layout: "switch",
                },
                fieldset: "service",
              }),
              date_range: f.date({
                label: "Name",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                fieldset: "range",
              }),
              discription: f.text({
                label: "Name",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                options: {
                  rows: 1,
                },
                fieldset: "hello",
              }),
            },
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            fieldsets: [
              { title: "Social", value: "social" },
              { title: "Service", value: "service" },
              { title: "Date Range", value: "range" },
              { title: "Discription", value: "example" },
            ],
          }),
        },
      })}
    >
      <Fields />
      <DevTool />
    </FibrForm>
  ),
};

const nestedFields = z.object({
  name: z.array(z.string()),
});

export const NestedFields: Story = {
  render: () => (
    <FibrForm
      onSubmit={console.log}
      blueprint={f.form<z.infer<typeof nestedFields>, Resolver<FieldValues>>({
        validation: zodResolver(nestedFields),
        fields: {
          name: f.object({
            label: "Name",
            fields: {
              sample: f.string({
                label: "Sample",
              }),
              on_off: f.boolean({
                label: "Name",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              }),
              date_picker: f.date({
                label: "Name",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              }),
              discription: f.text({
                label: "Name",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                options: {
                  rows: 1,
                },
              }),
              date_range: f.datetime({
                label: "Name",
              }),
              phone: f.number({
                label: "Phone No.",
                description: "Lorem ipsum dolor sit amet, consectetur",
              }),
            },
          }),
        },
      })}
    >
      <Fields />
      <DevTool />
    </FibrForm>
  ),
};
