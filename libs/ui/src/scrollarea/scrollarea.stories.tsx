import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { ScrollArea } from "./ScrollArea";

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
      <ScrollArea
        itemCount={tags.length}
        className="h-60 w-[200px] rounded-md border"
      >
        {({ index, style, data, isScrolling }) => (
          <React.Fragment key={index}>
            <div
              className="dark:text-secondary-100 flex items-center justify-center border-b text-sm"
              style={style}
            >
              {index}
            </div>
          </React.Fragment>
        )}
      </ScrollArea>
    );
  },
};
