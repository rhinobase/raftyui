import { FibrProvider, Loom } from "@fibr/react";
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
      <div className="w-full">
        <Loom
          blueprint={f.form({
            onSubmit: console.log,
            components: {
              editableText: f.editableText({
                name: "editableText",
                label: "Editable Text",
              }),
            },
          })}
        />
      </div>
    </FibrProvider>
  ),
};
