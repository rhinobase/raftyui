import { BlueprintProvider, FibrProvider, Weaver } from "@fibr/react";
import { Meta, StoryObj } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";
import { EditableTextareaField } from "./EditableTextareaField";

const meta: Meta<typeof EditableTextareaField> = {
  title: "fibr / EditableTextareaField",
};

export default meta;
type Story = StoryObj<typeof EditableTextareaField>;

export const Default: Story = {
  render: () => {
    const methods = useForm();
    return (
      <FormProvider {...methods}>
        <FibrProvider
          plugins={[
            {
              editTextarea: EditableTextareaField,
            },
          ]}
        >
          <BlueprintProvider
            blueprint={{
              editTextarea: {
                type: "editTextarea",
                label: "EditTextarea",
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
