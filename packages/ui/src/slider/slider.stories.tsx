import type { Meta, StoryObj } from "@storybook/react";
import { Slider, SliderRange, SliderThumb, SliderTrack } from "./Slider";

const meta: Meta<typeof Slider> = {
  title: "Components / Slider",
  args: {
    size: "md",
    colorScheme: "primary",
    step: 10,
    isDisabled: false,
    isReadOnly: false,
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    colorScheme: {
      control: "select",
      options: ["primary", "secondary", "error", "info", "success", "warning"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Single: Story = {
  render: (props) => (
    <Slider {...props} defaultValue={[20]}>
      <SliderTrack>
        <SliderRange />
      </SliderTrack>
      <SliderThumb />
    </Slider>
  ),
};

export const Double: Story = {
  render: (props) => (
    <Slider {...props} defaultValue={[20, 40]}>
      <SliderTrack>
        <SliderRange />
      </SliderTrack>
      <SliderThumb />
      <SliderThumb />
    </Slider>
  ),
};
