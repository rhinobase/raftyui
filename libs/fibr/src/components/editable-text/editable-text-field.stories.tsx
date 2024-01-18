import { BlueprintProvider, FibrProvider, Weaver } from "@fibr/react";
import { Meta, StoryObj } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";
import { EditableTextField } from "./EditableTextField";

const meta: Meta<typeof EditableTextField> = {
  title: "fibr / EditableTextField",
};

export default meta;
type Story = StoryObj<typeof EditableTextField>;

export const Default: Story = {
  render: () => {
    const methods = useForm();
    return (
      <FormProvider {...methods}>
        <FibrProvider
          plugins={[
            {
              editText: EditableTextField,
            },
          ]}
        >
          <BlueprintProvider
            blueprint={{
              editText: {
                type: "editText",
                label: "EditText",
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
