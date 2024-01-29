import { FibrProvider, Loom } from "@fibr/react";
import { Meta, StoryObj } from "@storybook/react";
import { f, plugin } from "..";
import { Divider } from "./Divider";

const meta: Meta<Divider> = {
  title: "fibr / Divider",
  args: {
    hidden: false,
    tooltip: "This is a divider",
  },
  argTypes: {
    hidden: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<Divider>;

export const Default: Story = {
  render: (props) => (
    <FibrProvider plugins={plugin}>
      <div className="w-full">
        <Loom
          blueprint={f.form({
            onSubmit: console.log,
            components: {
              divider: f.divider(props),
            },
          })}
        />
      </div>
    </FibrProvider>
  ),
};
