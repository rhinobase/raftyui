import { BlueprintProvider, FibrProvider, Weaver } from "@fibr/react";
import { Meta, StoryObj } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";
import { CheckboxField } from "./CheckboxField";

const meta: Meta<typeof CheckboxField> = {
  title: "fibr / CheckboxField",
};

export default meta;
type Story = StoryObj<typeof CheckboxField>;

export const Default: Story = {
  render: () => {
    const methods = useForm();
    return (
      <FormProvider {...methods}>
        <FibrProvider
          plugins={[
            {
              checkbox: CheckboxField,
            },
          ]}
        >
          <BlueprintProvider
            blueprint={{
              checkbox: {
                type: "checkbox",
                label: "Name",
              },
            }}
          >
            <Weaver />
          </BlueprintProvider>
        </FibrProvider>
      </FormProvider>
    );
  },
};
