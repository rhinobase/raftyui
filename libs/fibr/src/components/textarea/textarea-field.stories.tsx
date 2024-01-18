import { BlueprintProvider, FibrProvider, Weaver } from "@fibr/react";
import { Meta, StoryObj } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";
import { TextareaField } from "./TextareaField";

const meta: Meta<typeof TextareaField> = {
  title: "fibr / TextareaField",
};

export default meta;
type Story = StoryObj<typeof TextareaField>;

export const Default: Story = {
  render: () => {
    const methods = useForm();
    return (
      <FormProvider {...methods}>
        <FibrProvider
          plugins={[
            {
              textarea: TextareaField,
            },
          ]}
        >
          <BlueprintProvider
            blueprint={{
              textarea: {
                type: "textarea",
                label: "Textarea",
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
