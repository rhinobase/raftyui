import { FibrProvider, Loom, WeaverProvider } from "@fibr/react";
import { Meta, StoryObj } from "@storybook/react";
import { f, plugin } from "..";
import { SwitchGroupField } from "./SwitchGroupField";

const meta: Meta<typeof SwitchGroupField> = {
  title: "fibr / SwitchGroupField",
};

export default meta;
type Story = StoryObj<typeof SwitchGroupField>;

export const Default: Story = {
  render: () => (
    <FibrProvider plugins={plugin}>
      <WeaverProvider
        blueprint={f.form({
          onSubmit: console.log,
          fields: {
            switchGroup: f.text({
              name: "switchGroup",
              label: "Switch Group",
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
