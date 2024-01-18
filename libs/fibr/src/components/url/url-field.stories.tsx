import { FibrProvider, Loom, WeaverProvider } from "@fibr/react";
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
      <WeaverProvider
        blueprint={f.form({
          onSubmit: console.log,
          fields: {
            url: f.text({
              name: "editableTextarea",
              label: "URL",
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
