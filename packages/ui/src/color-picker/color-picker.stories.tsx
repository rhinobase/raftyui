import { Thread } from "@fibr/react";
import { DevTool } from "@hookform/devtools";
import type { Meta, StoryObj } from "@storybook/react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { ColorPicker } from "./ColorPicker";

const meta: Meta<typeof ColorPicker> = {
  title: "Components / ColorPicker",
};

export default meta;
type Story = StoryObj<typeof ColorPicker>;

export const Default: Story = {
  args: {
    disabled: false,
    readOnly: false,
    size: "md",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },

  render: (props) => <ColorPicker {...props} />,
};
