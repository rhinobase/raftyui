import { BlueprintProvider, FibrProvider, Weaver } from "@fibr/react";
import { Meta, StoryObj } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";
import { EmailField } from "./EmailField";

const meta: Meta<typeof EmailField> = {
  title: "fibr / EmailField",
};

export default meta;
type Story = StoryObj<typeof EmailField>;

export const Default: Story = {
  render: () => {
    const methods = useForm();
    return (
      <FormProvider {...methods}>
        <FibrProvider
          plugins={[
            {
              email: EmailField,
            },
          ]}
        >
          <BlueprintProvider
            blueprint={{
              password: {
                type: "email",
                label: "Email",
              },
            }}
          >
            <div className="w-full space-y-3">
              <Weaver />
            </div>
          </BlueprintProvider>
        </FibrProvider>
      </FormProvider>
    );
  },
};
