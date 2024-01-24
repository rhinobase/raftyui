import { FibrProvider, Loom } from "@fibr/react";
import { Meta, StoryObj } from "@storybook/react";
import { f, plugin } from "..";
import { ImageField } from "./ImageField";
import Logo from "./logo.avif";

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
            fields: {
              image: f.image({
                name: "image",
                src: Logo,
              }),
            },
          })}
        />
      </div>
    </FibrProvider>
  ),
};
