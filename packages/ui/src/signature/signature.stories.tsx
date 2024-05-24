import type { Meta, StoryObj } from "@storybook/react";
import { Controller, useForm } from "react-hook-form";
import { Signature } from "./Signature";

const meta: Meta<typeof Signature> = {
  title: "Components / Signature",
  args: {
    disabled: false,
    hidden: false,
  },
};

export default meta;
type Story = StoryObj<typeof Signature>;

export const Default: Story = {
  render: (props) => {
    const { control, watch } = useForm();
    const imageURL = watch("demo");

    return (
      <form className="space-y-4">
        <Controller
          name="demo"
          control={control}
          render={({ field: { onChange } }) => (
            <Signature {...props} onChange={(value) => onChange(value)} />
          )}
        />
        {imageURL && (
          <img src={imageURL} alt="signature" className="h-[200px] w-full" />
        )}
      </form>
    );
  },
};
