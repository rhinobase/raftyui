import { FibrProvider, Loom } from "@fibr/react";
import { Meta, StoryObj } from "@storybook/react";
import { f, plugin } from "..";
import { SliderField } from "./SliderField";

const meta: Meta<typeof SliderField> = {
  title: "fibr / SliderField",
};

export default meta;
type Story = StoryObj<typeof SliderField>;

export const Default: Story = {
  render: () => (
    <FibrProvider plugins={plugin}>
      <div className="w-full">
        <Loom
          blueprint={f.form({
            onSubmit: console.log,
            fields: {
              slider: f.slider({
                name: "slider",
                label: "Slider",
                description: "caption",
              }),
            },
          })}
        />
      </div>
    </FibrProvider>
  ),
};
