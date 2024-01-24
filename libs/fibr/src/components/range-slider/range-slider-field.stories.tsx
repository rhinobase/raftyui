import { FibrProvider, Loom } from "@fibr/react";
import { Meta, StoryObj } from "@storybook/react";
import { f, plugin } from "..";
import { RangeSliderField } from "./RangeSliderField";

const meta: Meta<typeof RangeSliderField> = {
  title: "fibr / RangeSliderField",
};

export default meta;
type Story = StoryObj<typeof RangeSliderField>;

export const Default: Story = {
  render: () => (
    <FibrProvider plugins={plugin}>
      <div className="w-full">
        <Loom
          blueprint={f.form({
            onSubmit: console.log,
            fields: {
              rangeSlider: f.rangeSlider({
                name: "rangeSlider",
                label: "Range Slider",
                description: "caption",
              }),
            },
          })}
        />
      </div>
    </FibrProvider>
  ),
};
