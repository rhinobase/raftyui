import { Meta, StoryObj } from "@storybook/react";
import { ScrollArea } from "@rafty/ui";
import React from "react";

const meta: Meta<typeof ScrollArea> = {
  title: "Components / ScrollArea",
};

export default meta;
type Story = StoryObj<typeof ScrollArea>;

export const Default: Story = {
  render: function Render() {
    const tags = Array.from({ length: 50 }).map(
      (_, i, a) => `v1.2.0-beta.${a.length - i}`,
    );
    return (
      <ScrollArea className="h-72 w-48 rounded-md border dark:border-secondary-700">
        <div className="p-4">
          <h4 className="mb-4 text-sm font-medium leading-none dark:text-secondary-100">
            Tags
          </h4>
          {tags.map((tag, index) => (
            <React.Fragment key={index}>
              <div className="text-sm dark:text-secondary-100" key={tag}>
                {tag}
              </div>
              <div className="my-2 h-[1px] bg-secondary-300 dark:bg-secondary-700" />
            </React.Fragment>
          ))}
        </div>
      </ScrollArea>
    );
  },
};
