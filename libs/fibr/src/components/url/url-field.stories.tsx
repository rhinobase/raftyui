import { BlueprintProvider, FibrProvider, Weaver } from "@fibr/react";
import { Meta, StoryObj } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";
import { UrlField } from "./UrlField";

const meta: Meta<typeof UrlField> = {
  title: "fibr / UrlField",
};

export default meta;
type Story = StoryObj<typeof UrlField>;

export const Default: Story = {
  render: () => {
    const methods = useForm();
    return (
      <FormProvider {...methods}>
        <FibrProvider
          plugins={[
            {
              url: UrlField,
            },
          ]}
        >
          <BlueprintProvider
            blueprint={{
              password: {
                type: "url",
                label: "URL",
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
