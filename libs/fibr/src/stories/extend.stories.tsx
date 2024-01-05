import f from "@fibr/core";
import { FibrForm, FibrProvider, Fields } from "@fibr/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Meta, StoryObj } from "@storybook/react";
import { FieldValues, Resolver } from "react-hook-form";
import z from "zod";
import withRafty from "..";
import { DevTool, ExtendComponent, OverrideComponent } from "./utils";

const meta: Meta = {
  title: "fibr / Extend",
};

export default meta;

type Story = StoryObj;

const includeSchema = z.object({
  first_name: z.string(),
});

export const Extend: Story = {
  render: () => (
    <FibrProvider
      plugins={[
        withRafty,
        {
          sample_type: ExtendComponent,
        },
      ]}
    >
      <FibrForm
        blueprint={f.form<z.infer<typeof includeSchema>, Resolver<FieldValues>>(
          {
            validation: zodResolver(includeSchema),
            fields: {
              first_name: f.custom({
                type: "sample_type",
                label: "First Name",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              }),
            },
          },
        )}
        onSubmit={console.log}
      >
        <Fields />
        <DevTool />
      </FibrForm>
    </FibrProvider>
  ),
};

export const Override: Story = {
  render: () => (
    <FibrProvider
      plugins={[
        withRafty,
        {
          string: OverrideComponent,
        },
      ]}
    >
      <FibrForm
        blueprint={f.form<z.infer<typeof includeSchema>, Resolver<FieldValues>>(
          {
            validation: zodResolver(includeSchema),
            fields: {
              first_name: f.string({
                label: "First Name",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              }),
            },
          },
        )}
        onSubmit={console.log}
      >
        <Fields />
        <DevTool />
      </FibrForm>
    </FibrProvider>
  ),
};
