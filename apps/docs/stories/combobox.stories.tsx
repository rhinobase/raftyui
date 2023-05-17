import { Meta, StoryObj } from "@storybook/react";
import { Combobox, ComboboxItem } from "@rhino/ui";

const meta: Meta<typeof Combobox> = {
  title: "Form / Combobox",

  args: {
    size: "md",
    variant: "outline",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["ghost", "solid", "outline"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Combobox>;

export const Default: Story = {
  render: ({ size, variant }) => {
    return (
      <div className="w-[500px]">
        <Combobox
          size={size}
          variant={variant}
          label="Favorite Animal"
          onInputChange={(value) => console.log(value)}
        >
          <ComboboxItem key="red panda" textValue="red panda">
            <div className="flex gap-2 items-center">
              <div className="rounded-full w-5 h-5 bg-red-200">RP</div>Red Panda
            </div>
          </ComboboxItem>
          <ComboboxItem key="cat">Cat</ComboboxItem>
          <ComboboxItem key="dog">Dog</ComboboxItem>
          <ComboboxItem key="aardvark">Aardvark</ComboboxItem>
          <ComboboxItem key="kangaroo">Kangaroo</ComboboxItem>
          <ComboboxItem key="snake">Snake</ComboboxItem>
        </Combobox>
      </div>
    );
  },
};
