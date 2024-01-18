import { FibrProvider, Loom, WeaverProvider } from "@fibr/react";
import { Meta, StoryObj } from "@storybook/react";
import { f, plugin } from "..";
import { TextareaField } from "./TextareaField";

const meta: Meta<typeof TextareaField> = {
  title: "fibr / TextareaField",
};

export default meta;
type Story = StoryObj<typeof TextareaField>;

export const Default: Story = {
  render: () => (
    <FibrProvider plugins={plugin}>
      <WeaverProvider
        blueprint={f.form({
          onSubmit: console.log,
          fields: {
            textarea: f.text({
              name: "textarea",
              label: "Textarea",
            }),
          },
        })}
      >
        <div className="w-full">
          <Loom />
        </div>
      </WeaverProvider>
    </FibrProvider>
  ),
};
