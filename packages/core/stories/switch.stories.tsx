import { Meta, StoryObj } from "@storybook/react";
import { Switch } from "../src/switch";

const meta: Meta<typeof Switch> = {
  title: "Components / Switch",
  decorators: [
    (Story) => (
      <div className="w-full flex flex-col items-center justify-center gap-2 mx-auto max-w-3xl h-[calc(100vh-40px)]">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Variants: Story = {
  render: () => (
    <>
      <div className="flex items-center gap-6 rounded-md border p-4 dark:border-zinc-700 dark:text-white">
        <Switch size="sm" />
      </div>
      <div className="flex items-center gap-6 rounded-md border p-4 dark:border-zinc-700 dark:text-white">
        <Switch />
      </div>
      <div className="flex items-center gap-6 rounded-md border p-4 dark:border-zinc-700 dark:text-white">
        <Switch size="lg" />
      </div>
      <div className="flex items-center gap-6 rounded-md border p-4 dark:border-zinc-700 dark:text-white">
        defaultSelected | isDisabled
        <Switch defaultSelected isDisabled />
      </div>
      <div className="grid w-[640px] grid-cols-2 items-center gap-6 rounded-md border p-4 dark:border-zinc-700 dark:text-white">
        <div className="flex items-center justify-between">
          defaultSelected <Switch defaultSelected />
        </div>
        <div className="flex items-center justify-between">
          isDisabled <Switch isDisabled />
        </div>
      </div>
    </>
  ),
};
