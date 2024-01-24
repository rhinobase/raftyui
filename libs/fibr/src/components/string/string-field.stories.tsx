import { FibrProvider, Loom, WeaverProvider } from "@fibr/react";
import { Meta, StoryObj } from "@storybook/react";
import { f, plugin } from "..";
import { StringField } from "./StringField";

const meta: Meta<typeof StringField> = {
  title: "fibr / StringField",
};

export default meta;
type Story = StoryObj<typeof StringField>;

export const Default: Story = {
  render: () => (
    <FibrProvider plugins={plugin}>
      <div className="w-full">
        <Loom
          blueprint={f.form({
            onSubmit: console.log,
            fields: {
              text: f.string({
                name: "text",
                label: "Text",
              }),
            },
          })}
        />
      </div>
    </FibrProvider>
  ),
};
