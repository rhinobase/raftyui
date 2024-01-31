import { FibrProvider, Loom } from "@fibr/react";
import { Meta, StoryObj } from "@storybook/react";
import { f, plugin } from "..";
import type { Text } from "./Text";

const meta: Meta<Text> = {
  title: "fibr / Text",
  args: {
    value: "This is a sample value",
    hidden: false,
    tooltip: "This is a text field",
  },
  argTypes: {
    hidden: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<Text>;

export const Default: Story = {
  render: (props) => (
    <FibrProvider plugins={plugin}>
      <div className="w-full">
        <Loom
          blueprint={f.form({
            onSubmit: console.log,
            components: {
              text: f.text(props),
            },
          })}
        />
      </div>
    </FibrProvider>
  ),
};
