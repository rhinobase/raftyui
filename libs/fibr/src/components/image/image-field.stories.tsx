import { FibrProvider, Loom } from "@fibr/react";
import { Meta, StoryObj } from "@storybook/react";
import { f, plugin } from "..";
import { ImageField } from "./ImageField";

const meta: Meta<typeof ImageField> = {
  title: "fibr / ImageField",
};

export default meta;
type Story = StoryObj<typeof ImageField>;

export const Default: Story = {
  render: () => (
    <FibrProvider plugins={plugin}>
      <div className="w-full">
        <Loom
          blueprint={f.form({
            onSubmit: console.log,
            components: {
              image: f.image({
                name: "image",
              }),
            },
          })}
        />
      </div>
    </FibrProvider>
  ),
};
