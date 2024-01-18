import { BlueprintProvider, FibrProvider, Weaver } from "@fibr/react";
import { Meta, StoryObj } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";
import { RadioGroupField } from "./RadioGroupField";

const meta: Meta<typeof RadioGroupField> = {
  title: "fibr / RadioGroupField",
};

export default meta;
type Story = StoryObj<typeof RadioGroupField>;

export const Default: Story = {
  render: () => {
    const methods = useForm();
    return (
      <FormProvider {...methods}>
        <FibrProvider
          plugins={[
            {
              radioGroup: RadioGroupField,
            },
          ]}
        >
          <BlueprintProvider
            blueprint={{
              radioGroup: {
                type: "radioGroup",
                label: "Radio",
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
