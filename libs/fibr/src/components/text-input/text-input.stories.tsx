import { FibrProvider, Loom } from "@fibr/react";
import { Meta, StoryObj } from "@storybook/react";
import { f, plugin } from "..";
import { TextInput } from "./TextInput";

const meta: Meta<TextInput> = {
  title: "fibr / TextInput",
  args: {
    label: "Label",
    defaultValue: "",
    description: "This is the field description",
    disabled: false,
    hidden: false,
    placeholder: "",
    tooltip: "This is Text Input Field",
  },
  argTypes: {
    disabled: {
      control: "boolean",
    },
    hidden: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<TextInput>;

export const Default: Story = {
  render: (props) => (
    <FibrProvider plugins={plugin}>
      <div className="w-full">
        <Loom
          blueprint={f.form({
            onSubmit: console.log,
            components: {
              string: f.textInput({
                ...props,
                name: "string",
              }),
            },
          })}
        />
      </div>
    </FibrProvider>
  ),
};
