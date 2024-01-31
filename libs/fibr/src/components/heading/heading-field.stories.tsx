import { FibrProvider, Loom } from "@fibr/react";
import { Meta, StoryObj } from "@storybook/react";
import { f, plugin } from "..";
import type { HeadingField } from "./HeadingField";

const meta: Meta<HeadingField> = {
  title: "fibr / HeadingField",
  args: {
    hidden: false,
    level: "1",
    tooltip: "This is heading field",
    value: "Heading",
  },
  argTypes: {
    hidden: {
      control: "boolean",
    },
    level: {
      control: "select",
      options: ["1", "2", "3", "4", "5", "6"],
    },
  },
};

export default meta;

type Story = StoryObj<HeadingField>;

export const Default: Story = {
  render: (props) => (
    <FibrProvider plugins={plugin}>
      <div className="w-full">
        <Loom
          blueprint={f.form({
            onSubmit: console.log,
            components: {
              heading: f.heading(props),
            },
          })}
        />
      </div>
    </FibrProvider>
  ),
};
