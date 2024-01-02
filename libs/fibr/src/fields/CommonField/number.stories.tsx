import f from "@fibr/core";
import { FibrForm, Fields } from "@fibr/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Meta, StoryObj } from "@storybook/react";
import { FieldValues, Resolver } from "react-hook-form";
import { z } from "zod";
import { DevTool } from "../utils";

const meta: Meta = {
  title: "fibr / Number",
};

export default meta;

type Story = StoryObj;

const defaultSchema = z.object({
  name: z.number(),
  readOnly: z.number(),
  hidden: z.number(),
});

export const Default: Story = {
  render: () => (
    <FibrForm
      onSubmit={console.log}
      blueprint={f.form<z.infer<typeof defaultSchema>, Resolver<FieldValues>>({
        validation: zodResolver(defaultSchema),
        default_values: {
          readOnly: 12,
        },
        fields: {
          name: f.number({
            label: "Name",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          }),
          readOnly: f.number({
            label: "Name",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            readOnly: true,
          }),
          hidden: f.number({
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
          readOnly: "Lorem ipsum nothing else",
        },
        fields: {
          name: f.number({
            label: "Name",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
              layout: "radio",
            },
          }),
          readOnly: f.number({
            label: "Example",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            options: {
              list: [
                {
                  label: "React",
                  value: 1,
                },
                {
                  label: "Java",
                  value: [
                    { label: "C++ 3.10", value: 12 },
                    { label: "C 3.9", value: 20 },
                  ],
                },
              ],
              layout: "radio",
            },
            readOnly: true,
          }),
          hidden: f.number({
            label: "Name",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
          readOnly: "Lorem ipsum nothing else",
        },
        fields: {
          name: f.number({
            label: "Name",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
              layout: "checkbox",
            },
          }),
          readOnly: f.number({
            label: "Name",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            options: {
              list: [
                {
                  label: "React",
                  value: 1,
                },
                {
                  label: "Next",
                  value: [
                    { label: "Next 3.10", value: 12 },
                    { label: "Next 3.9", value: 20 },
                  ],
                },
              ],
              layout: "checkbox",
            },
            readOnly: true,
          }),
          hidden: f.number({
            label: "Name",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
  selector: z.number(),
  blank_selector: z.string(),
});

export const Combobox: Story = {
  render: () => (
    <FibrForm
      onSubmit={console.log}
      blueprint={f.form<z.infer<typeof comboboxSchema>, Resolver<FieldValues>>({
        validation: zodResolver(comboboxSchema),
        default_values: {
          selector: 12,
        },
        fields: {
          name: f.number({
            label: "Name",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
          selector: f.number({
            label: "Name",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
            readOnly: true,
          }),
          blank_selector: f.number({
            label: "Name",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
  name: z.number(),
  readOnly: z.number(),
  hidden: z.number(),
});
export const Select: Story = {
  render: () => (
    <FibrForm
      onSubmit={console.log}
      blueprint={f.form<z.infer<typeof selectSchema>, Resolver<FieldValues>>({
        validation: zodResolver(selectSchema),
        default_values: {
          readOnly: 29229,
        },
        fields: {
          name: f.number({
            label: "Name",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
          readOnly: f.number({
            label: "Name",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            options: {
              list: [
                {
                  label: "Node JS",
                  value: 99,
                },
                {
                  label: "Python",
                  value: [
                    { label: "Python 3.9", value: 383 },
                    { label: "Python 3.10", value: 10 },
                  ],
                },
              ],
              layout: "select",
            },
            readOnly: true,
          }),
          hidden: f.number({
            label: "Name",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            options: {
              list: [
                {
                  label: "Node JS",
                  value: 48,
                },
                {
                  label: "Python",
                  value: [
                    { label: "Python 3.9", value: 38 },
                    { label: "Python 3.10", value: 209 },
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
  name: z.string(),
  change_item: z.array(z.number()),
  hidden_item: z.string(),
});

export const Multiple: Story = {
  render: () => (
    <FibrForm
      onSubmit={console.log}
      blueprint={f.form<z.infer<typeof multipleSchema>, Resolver<FieldValues>>({
        validation: zodResolver(multipleSchema),
        default_values: {
          change_item: [11],
        },
        fields: {
          name: f.number({
            label: "Name",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
          change_item: f.number({
            label: "Name",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            options: {
              list: [
                {
                  label: "Node JS",
                  value: 10,
                },
                {
                  label: "Python",
                  value: [
                    { label: "Python 3.10", value: 11 },
                    { label: "Python 3.9", value: 20 },
                  ],
                },
              ],
              layout: "multi",
            },
            readOnly: true,
          }),
          hidden_item: f.number({
            label: "Name",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            options: {
              list: [
                {
                  label: "Node JS",
                  value: 10,
                },
                {
                  label: "Python",
                  value: [
                    { label: "Python 3.10", value: 11 },
                    { label: "Python 3.9", value: 20 },
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
