import { BlueprintProvider, FibrProvider, Weaver } from "@fibr/react";
import { Meta, StoryObj } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";
import { SwitchGroupField } from "./SwitchGroupField";

const meta: Meta<typeof SwitchGroupField> = {
  title: "fibr / SwitchGroupField",
};

export default meta;
type Story = StoryObj<typeof SwitchGroupField>;

export const Default: Story = {
  render: () => {
    const methods = useForm();
    return (
      <FormProvider {...methods}>
        <FibrProvider
          plugins={[
            {
              switchGroup: SwitchGroupField,
            },
          ]}
        >
          <BlueprintProvider
            blueprint={{
              switchGroup: {
                type: "switchGroup",
                label: "Switch Group",
                options: {
                  label: ["option 1", "option 2", "option 3"],
                },
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
