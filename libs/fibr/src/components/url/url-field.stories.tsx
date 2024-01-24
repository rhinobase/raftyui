import { FibrProvider, Loom } from "@fibr/react";
import { Meta, StoryObj } from "@storybook/react";
import { f, plugin } from "..";
import { UrlField } from "./UrlField";

const meta: Meta<typeof UrlField> = {
  title: "fibr / UrlField",
};

export default meta;
type Story = StoryObj<typeof UrlField>;

export const Default: Story = {
  render: () => (
    <FibrProvider plugins={plugin}>
      <div className="w-full">
        <Loom
          blueprint={f.form({
            onSubmit: console.log,
            components: {
              url: f.url({
                name: "url",
                label: "URL",
              }),
            },
          })}
        />
      </div>
    </FibrProvider>
  ),
};
