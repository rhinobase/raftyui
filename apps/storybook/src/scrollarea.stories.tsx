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
      <ScrollArea className="dark:border-secondary-700 h-72 w-48 rounded-md border">
        <div className="p-4">
          <h4 className="dark:text-secondary-100 mb-4 text-sm font-medium leading-none">
            Tags
          </h4>
          {tags.map((tag, index) => (
            <React.Fragment key={index}>
              <div className="dark:text-secondary-100 text-sm" key={tag}>
                {tag}
              </div>
              <div className="bg-secondary-300 dark:bg-secondary-700 my-2 h-[1px]" />
            </React.Fragment>
          ))}
        </div>
      </ScrollArea>
    );
  },
};
