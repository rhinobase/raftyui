import { FibrProvider, Loom, WeaverProvider } from "@fibr/react";
import { Meta, StoryObj } from "@storybook/react";
import { f, plugin } from "..";
import { SwitchField } from "./SwitchField";

const meta: Meta<typeof SwitchField> = {
  title: "fibr / SwitchField",
};

export default meta;
type Story = StoryObj<typeof SwitchField>;

export const Default: Story = {
  render: () => (
    <FibrProvider plugins={plugin}>
      <WeaverProvider
        blueprint={f.form({
          onSubmit: console.log,
          fields: {
            switch: f.text({
              name: "switch",
              label: "Switch",
            }),
          },
        })}
      >
        <div className="w-full">
          <Loom />
        </div>
      </WeaverProvider>
    </FibrProvider>
  ),
};
