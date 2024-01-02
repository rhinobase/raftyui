import f from "@fibr/core";
import { FibrForm, Fields } from "@fibr/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Meta, StoryObj } from "@storybook/react";
import { FieldValues, Resolver } from "react-hook-form";
import { z } from "zod";
import { DevTool } from "../utils";

const meta: Meta = {
  title: "fibr / String",
};

export default meta;

type Story = StoryObj;

const defaultSchema = z.object({
  name: z.string(),
  readOnly: z.string(),
  hidden: z.string(),
});

export const Default: Story = {
  render: () => (
    <FibrForm
      onSubmit={console.log}
      blueprint={f.form<z.infer<typeof defaultSchema>, Resolver<FieldValues>>({
        validation: zodResolver(defaultSchema),
        default_values: {
          readOnly: "Lorem ipsum",
        },
        fields: {
          name: f.string({
            label: "Name",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            placeholder: "Enter something here",
          }),
          readOnly: f.string({
            label: "Name",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            readOnly: true,
          }),
          hidden: f.string({
            label: "Name",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            hidden: true,
          }),
        },
      })}
    >
      <Fields />
      <DevTool />
    </FibrForm>
  ),
};

const radioSchema = z.object({
  name: z.string(),
  readOnly: z.string(),
  hidden: z.string(),
});

export const Radio: Story = {
  render: () => (
    <FibrForm
      onSubmit={console.log}
      blueprint={f.form<z.infer<typeof radioSchema>, Resolver<FieldValues>>({
        validation: zodResolver(radioSchema),
        default_values: {
          readOnly: "node js",
        },
        fields: {
          name: f.string({
            label: "Name",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
          readOnly: f.string({
            label: "Name",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
            readOnly: true,
          }),
          hidden: f.string({
            label: "Name",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
            hidden: true,
          }),
        },
      })}
    >
      <Fields />
      <DevTool />
    </FibrForm>
  ),
};

const checkboxSchema = z.object({
  name: z.string(),
  readOnly: z.string(),
  hidden: z.string(),
});

export const Checkbox: Story = {
  render: () => (
    <FibrForm
      onSubmit={console.log}
      blueprint={f.form<z.infer<typeof checkboxSchema>, Resolver<FieldValues>>({
        validation: zodResolver(checkboxSchema),
        default_values: {
          readOnly: "sit amet, consectetur",
        },
        fields: {
          name: f.string({
            label: "Name",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
          readOnly: f.string({
            label: "Example",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            options: {
              list: [
                {
                  label: "React ",
                  value: "Next js",
                },
                {
                  label: "java",
                  value: [
                    { label: "java 3.9", value: "py-3.9" },
                    { label: "java 3.10", value: "py-3.10" },
                  ],
                },
              ],
              layout: "checkbox",
            },
            readOnly: true,
          }),
          hidden: f.string({
            label: "Name",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
            hidden: true,
          }),
        },
      })}
    >
      <Fields />
      <DevTool />
    </FibrForm>
  ),
};

const comboboxSchema = z.object({
  name: z.string(),
  readOnly: z.string(),
  hidden: z.string(),
});

export const Combobox: Story = {
  render: () => (
    <FibrForm
      onSubmit={console.log}
      blueprint={f.form<z.infer<typeof comboboxSchema>, Resolver<FieldValues>>({
        validation: zodResolver(comboboxSchema),
        default_values: {
          readOnly: "Lorem  dolor sit amet ipsum",
        },
        fields: {
          name: f.string({
            label: "Name",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
          readOnly: f.string({
            label: "Name",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
            readOnly: true,
          }),
          hidden: f.string({
            label: "Name",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
            hidden: true,
          }),
        },
      })}
    >
      <Fields />
      <DevTool />
    </FibrForm>
  ),
};
const selectSchema = z.object({
  name: z.string(),
  readOnly: z.string(),
  hidden: z.string(),
});
export const Select: Story = {
  render: () => (
    <FibrForm
      onSubmit={console.log}
      blueprint={f.form<z.infer<typeof selectSchema>, Resolver<FieldValues>>({
        validation: zodResolver(selectSchema),
        default_values: {
          readOnly: "sit amet, consectetur",
        },
        fields: {
          name: f.string({
            label: "Name",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
          readOnly: f.string({
            label: "Name",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
            readOnly: true,
          }),
          hidden: f.string({
            label: "Name",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
            hidden: true,
          }),
        },
      })}
    >
      <Fields />
      <DevTool />
    </FibrForm>
  ),
};

const multipleSchema = z.object({
  name: z.array(z.string()),
  combo_sample: z.array(z.string()),
  drop_example: z.array(z.string()),
});

export const Multiple: Story = {
  render: () => (
    <FibrForm
      onSubmit={console.log}
      blueprint={f.form<z.infer<typeof multipleSchema>, Resolver<FieldValues>>({
        validation: zodResolver(multipleSchema),
        default_values: {
          combo_sample: ["py-3.10"],
        },
        fields: {
          name: f.string({
            label: "Name",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
              layout: "multi",
            },
          }),
          combo_sample: f.string({
            label: "Esxample",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
              layout: "multi",
            },
            readOnly: true,
          }),
          drop_example: f.string({
            label: "Name",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
              layout: "multi",
            },
            hidden: true,
          }),
        },
      })}
    >
      <Fields />
      <DevTool />
    </FibrForm>
  ),
};
