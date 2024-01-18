import { BlueprintProvider, FibrProvider, Weaver } from "@fibr/react";
import { Meta, StoryObj } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";
import { TextField } from "./TextField";

const meta: Meta<typeof TextField> = {
  title: "fibr / TextField",
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  render: () => {
    const methods = useForm();
    return (
      <FormProvider {...methods}>
        <FibrProvider
          plugins={[
            {
              text: TextField,
            },
          ]}
        >
          <BlueprintProvider
            blueprint={{
              text: {
                type: "text",
                label: "Text",
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
