import { Meta, StoryObj } from "@storybook/react";
import { ComboBox, FieldControl } from "../src";
import { expect } from "@storybook/jest";
import { within } from "@storybook/testing-library";
import { Item } from "../src/combobox/Combobox";
import { SunIcon } from "@heroicons/react/24/outline";
import { ReactNode } from "react";

const meta: Meta<typeof ComboBox> = {
  title: "Form / ComboBox",

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

type Story = StoryObj<typeof ComboBox>;

export const Variants: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.findByRole("combobox"));
    // const selects = await canvas.findAllByRole("combobox");

    // TODO Test for comobobox
  },

  render: ({ size, variant }) => {
    // const [search, setSearch] = useState<string>();

    return (
      <div className="max-w-4xl w-full">
        <FieldControl name="combo">
          <ComboBox
            size={size}
            variant={variant}
            label="Favorite Animal"
            onInputChange={(value) => console.log(value)}
          >
            <Item key="red panda" textValue="red panda">
              <div className="flex gap-2 items-center">
                <div className="rounded-full w-5 h-5 bg-red-200">RP</div>Red
                Panda
              </div>
            </Item>
            <Item key="cat">Cat</Item>
            <Item key="dog">Dog</Item>
            <Item key="aardvark">Aardvark</Item>
            <Item key="kangaroo">Kangaroo</Item>
            <Item key="snake">Snake</Item>
          </ComboBox>
        </FieldControl>
      </div>
    );
  },
};
