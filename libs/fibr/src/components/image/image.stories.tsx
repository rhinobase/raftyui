import { FibrProvider, Loom } from "@fibr/react";
import { Meta, StoryObj } from "@storybook/react";
import { f, plugin } from "..";
import type { Image } from "./Image";

const meta: Meta<Image> = {
  title: "fibr / Image",
  args: {
    src: "https://via.placeholder.com/200",
    alt: "placeholder",
    hidden: false,
    tooltip: "This is a image field",
  },
  argTypes: {
    hidden: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<Image>;

export const Default: Story = {
  render: (props) => (
    <FibrProvider plugins={plugin}>
      <div className="w-full">
        <Loom
          blueprint={f.form({
            onSubmit: console.log,
            components: {
              image: f.image(props),
            },
          })}
        />
      </div>
    </FibrProvider>
  ),
};
