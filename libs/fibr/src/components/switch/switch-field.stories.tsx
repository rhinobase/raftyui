import { BlueprintProvider, FibrProvider, Weaver } from "@fibr/react";
import { Meta, StoryObj } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";
import { SwitchField } from "./SwitchField";

const meta: Meta<typeof SwitchField> = {
  title: "fibr / SwitchField",
};

export default meta;
type Story = StoryObj<typeof SwitchField>;

export const Default: Story = {
  render: () => {
    const methods = useForm();
    return (
      <FormProvider {...methods}>
        <FibrProvider
          plugins={[
            {
              switch: SwitchField,
            },
          ]}
        >
          <BlueprintProvider
            blueprint={{
              switch: {
                type: "switch",
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
