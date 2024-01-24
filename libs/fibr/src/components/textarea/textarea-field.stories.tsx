import { FibrProvider, Loom } from "@fibr/react";
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
      <div className="w-full">
        <Loom
          blueprint={f.form({
            onSubmit: console.log,
            components: {
              textarea: f.textarea({
                name: "textarea",
                label: "Textarea",
              }),
            },
          })}
        />
      </div>
    </FibrProvider>
  ),
};
