import { Meta, StoryObj } from "@storybook/react";
import { FieldControl } from "../src";
import { Textarea } from "../src/textarea";

const meta: Meta<typeof Textarea> = {
  title: "Components / Textarea",
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Variants: Story = {
  render: () => (
    <>
      <div className="flex w-[640px] flex-col gap-6 dark:text-white">
        <h4>Textarea</h4>
        <FieldControl name="">
          <Textarea placeholder="abc" />
        </FieldControl>

        <h4>Textarea Invalid</h4>
        <FieldControl name="" invalid>
          <Textarea placeholder="abc" />
        </FieldControl>
      </div>
    </>
  ),
};
