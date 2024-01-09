import { Meta, StoryObj } from "@storybook/react";
import { Fragment } from "react";
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
        itemSize={() => 50}
        itemCount={tags.length}
        className="dark:border-secondary-700 h-60 w-[200px] rounded-md border"
      >
        {({ index, style, data, isScrolling }) => (
          <Fragment key={index}>
            <div
              className="dark:text-secondary-100 dark:border-secondary-700 flex items-center justify-center border-b text-sm"
              style={style}
            >
              {index}
            </div>
          </Fragment>
        )}
      </ScrollArea>
    );
  },
};
