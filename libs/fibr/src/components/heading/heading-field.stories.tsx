import { FibrProvider, Loom } from "@fibr/react";
import { Meta, StoryObj } from "@storybook/react";
import { f, plugin } from "..";
import { HeadingField } from "./HeadingField";

const meta: Meta<typeof HeadingField> = {
  title: "fibr / HeadingField",
};

export default meta;
type Story = StoryObj<typeof HeadingField>;

export const Default: Story = {
  render: () => (
    <FibrProvider plugins={plugin}>
      <div className="w-full">
        <Loom
          blueprint={f.form({
            onSubmit: console.log,
            components: {
              heading: f.heading({
                name: "heading",
                value: "Sample",
                level: "3",
              }),
            },
          })}
        />
      </div>
    </FibrProvider>
  ),
};
