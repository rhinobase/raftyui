import { FibrProvider, Loom, WeaverProvider } from "@fibr/react";
import { Meta, StoryObj } from "@storybook/react";
import { f, plugin } from "..";
import { EditableTextareaField } from "./EditableTextareaField";

const meta: Meta<typeof EditableTextareaField> = {
  title: "fibr / EditableTextareaField",
};

export default meta;
type Story = StoryObj<typeof EditableTextareaField>;

export const Default: Story = {
  render: () => (
    <FibrProvider plugins={plugin}>
      <WeaverProvider
        blueprint={f.form({
          onSubmit: console.log,
          fields: {
            editableTextarea: f.text({
              name: "editableTextarea",
              label: "Editable Textarea",
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
