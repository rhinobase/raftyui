import f from "@fibr/core";
import { FibrForm, Fields } from "@fibr/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Meta, StoryObj } from "@storybook/react";
import { FieldValues, Resolver } from "react-hook-form";
import { z } from "zod";
import { DevTool } from "../utils";

const meta: Meta = {
  title: "fibr / Array",
};

export default meta;

type Story = StoryObj;

const defaultSchema = z.object({
  name: z.string(),
  default_page: z.array(z.string()),
  new_page: z.string(),
});
export const Default: Story = {
  render: () => (
    <FibrForm
      blueprint={f.form<z.infer<typeof defaultSchema>, Resolver<FieldValues>>({
        validation: zodResolver(defaultSchema),
        default_values: {
          default_page: ["Lorem ipsum"],
        },
        fields: {
          name: f.array({
            label: "Name",
            of: f.string({ label: "Name" }),
          }),
          default_page: f.array({
            label: "Name",
            of: f.string({ label: "Name" }),
            readOnly: true,
          }),
          new_page: f.array({
            label: "Name",
            of: f.string({ label: "Name" }),
            hidden: true,
          }),
        },
      })}
      onSubmit={console.log}
    >
      <Fields />
      <DevTool />
    </FibrForm>
  ),
};

const nestedSchema = z.object({
  name: z.array(
    z.object({
      sample: z.string(),
    }),
  ),
});
export const NestedFields: Story = {
  render: () => (
    <FibrForm
      onSubmit={console.log}
      blueprint={f.form<z.infer<typeof nestedSchema>, Resolver<FieldValues>>({
        validation: zodResolver(nestedSchema),
        fields: {
          name: f.array({
            label: "Name",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            of: f.object({
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
          }),
        },
      })}
    >
      <Fields />
      <DevTool />
    </FibrForm>
  ),
};
