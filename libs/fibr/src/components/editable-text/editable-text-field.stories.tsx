import { FibrProvider, Loom, WeaverProvider } from "@fibr/react";
import { Meta, StoryObj } from "@storybook/react";
import { f, plugin } from "..";
import { EditableTextField } from "./EditableTextField";

const meta: Meta<typeof EditableTextField> = {
  title: "fibr / EditableTextField",
};

export default meta;
type Story = StoryObj<typeof EditableTextField>;

export const Default: Story = {
  render: () => (
    <FibrProvider plugins={plugin}>
      <WeaverProvider
        blueprint={f.form({
          onSubmit: console.log,
          fields: {
            editableText: f.text({
              name: "editableText",
              label: "Editable Text",
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
