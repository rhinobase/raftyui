import { BlueprintProvider, FibrProvider, Weaver } from "@fibr/react";
import { Meta, StoryObj } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";
import { PasswordField } from "./PasswordField";

const meta: Meta<typeof PasswordField> = {
  title: "fibr / PasswordField",
};

export default meta;
type Story = StoryObj<typeof PasswordField>;

export const Default: Story = {
  render: () => {
    const methods = useForm();
    return (
      <FormProvider {...methods}>
        <FibrProvider
          plugins={[
            {
              password: PasswordField,
            },
          ]}
        >
          <BlueprintProvider
            blueprint={{
              password: {
                type: "password",
                label: "Password",
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
