import { FibrProvider, Loom } from "@fibr/react";
import { Meta, StoryObj } from "@storybook/react";
import { f, plugin } from "..";
import { Text } from "./Text";

const meta: Meta<typeof Text> = {
  title: "fibr / Text",
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  render: () => (
    <FibrProvider plugins={plugin}>
      <div className="w-full">
        <Loom
          blueprint={f.form({
            onSubmit: console.log,
            components: {
              text: f.text({
                name: "text",
                value: "👋 Demo",
              }),
            },
          })}
        />
      </div>
    </FibrProvider>
  ),
};
