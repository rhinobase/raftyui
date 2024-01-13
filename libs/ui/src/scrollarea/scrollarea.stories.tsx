import { Meta, StoryObj } from "@storybook/react";
import {
  ScrollArea,
  ScrollAreaInfinityList,
  ScrollAreaList,
} from "./ScrollArea";

const meta: Meta<typeof ScrollArea> = {
  title: "Components / ScrollArea",
};

export default meta;
type Story = StoryObj<typeof ScrollArea>;

export const Default: Story = {
  render: () => {
    const tags = Array.from({ length: 100 }).map((_, i) => i);

    return (
      <ScrollArea
        itemCount={tags.length}
        className="dark:border-secondary-700 h-60 w-[200px] rounded-md border"
      >
        <ScrollAreaList itemSize={50}>
          {({ index, style }) => (
            <div
              key={index}
              className="dark:text-secondary-100 dark:border-secondary-700 flex items-center justify-center border-b text-sm"
              style={style}
            >
              {tags[index]}
            </div>
          )}
        </ScrollAreaList>
      </ScrollArea>
    );
  },
};

export const InfinityScroll: Story = {
  render: () => {
    const tags = Array.from({ length: 100 }).map((_, i) => i);

    return (
      <ScrollArea
        itemCount={tags.length}
        className="dark:border-secondary-700 h-60 w-[200px] rounded-md border"
      >
        {/* <ScrollAreaInfinityList itemSize={50}>
          {({ index, style }) => (
            <div
              key={index}
              className="dark:text-secondary-100 dark:border-secondary-700 flex items-center justify-center border-b border-b text-sm"
              style={style}
            >
              {tags[index]}
            </div>
          )}
        </ScrollAreaInfinityList> */}
      </ScrollArea>
    );
  },
};
