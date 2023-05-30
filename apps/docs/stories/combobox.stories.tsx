import { Meta, StoryObj } from "@storybook/react";
import { Combobox, ComboboxItem } from "@rafty/ui";

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
          <ComboboxItem textValue="red panda">
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-full bg-red-200">RP</div>Red Panda
            </div>
          </ComboboxItem>
          <ComboboxItem>Cat</ComboboxItem>
          <ComboboxItem>Dog</ComboboxItem>
          <ComboboxItem>Aardvark</ComboboxItem>
          <ComboboxItem>Kangaroo</ComboboxItem>
          <ComboboxItem>Snake</ComboboxItem>
        </Combobox>
      </div>
    );
  },
};
