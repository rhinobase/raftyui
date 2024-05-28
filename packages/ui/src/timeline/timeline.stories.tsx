import { TvIcon } from "@heroicons/react/24/outline";
import type { Meta, StoryObj } from "@storybook/react";
import { Timeline, TimelineItem } from "./Timeline";

const meta: Meta<typeof Timeline> = {
  title: "Components / Timeline",
  args: {
    reverse: false,
    align: "left",
    size: "md",
  },
  argTypes: {
    align: {
      control: "select",
      options: ["left", "right"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Timeline>;

export const Default: Story = {
  render: ({ reverse, align, size }) => (
    <div className="h-[400px] w-full">
      <Timeline reverse={reverse} align={align} size={size}>
        <TimelineItem>Sample Item 1</TimelineItem>
        <TimelineItem>Sample Item 2</TimelineItem>
        <TimelineItem>Sample Item 3</TimelineItem>
      </Timeline>
    </div>
  ),
};

export const Status: Story = {
  render: ({ reverse, align, size }) => (
    <div className="h-[400px] w-full">
      <Timeline reverse={reverse} align={align} size={size}>
        <TimelineItem status="error">Error Status</TimelineItem>
        <TimelineItem status="info">Info Status</TimelineItem>
        <TimelineItem status="success">Success Status</TimelineItem>
        <TimelineItem status="warning">Warning Status</TimelineItem>
      </Timeline>
    </div>
  ),
};

export const CustomIcon: Story = {
  render: ({ reverse, align, size }) => (
    <div className="h-[400px] w-full">
      <Timeline reverse={reverse} align={align} size={size}>
        <TimelineItem
          icon={<TvIcon height={20} width={20} className="text-red-500" />}
        >
          Sample Item 1
        </TimelineItem>
        <TimelineItem>Sample Item 2</TimelineItem>
        <TimelineItem>Sample Item 3</TimelineItem>
      </Timeline>
    </div>
  ),
};

export const WithDescription: Story = {
  render: ({ reverse, align, size }) => (
    <div className="h-[400px] w-full">
      <Timeline reverse={reverse} align={align} size={size}>
        <TimelineItem description="2015-09-01 09:12:11">
          Sample Item 1
        </TimelineItem>
        <TimelineItem description="2015-09-01">Sample Item 2</TimelineItem>
        <TimelineItem description="2015-09-01 09:12:11">
          Sample Item 3
        </TimelineItem>
      </Timeline>
    </div>
  ),
};

export const Loading: Story = {
  render: ({ reverse, align, size }) => (
    <div className="h-[400px] w-full">
      <Timeline
        reverse={reverse}
        loading="Loading more..."
        align={align}
        size={size}
      >
        <TimelineItem>Sample Item 1</TimelineItem>
        <TimelineItem>Sample Item 2</TimelineItem>
        <TimelineItem>Sample Item 3</TimelineItem>
      </Timeline>
    </div>
  ),
};

export const WithoutChildren: Story = {
  render: ({ reverse, align, size }) => (
    <div className="h-[400px] w-full">
      <Timeline reverse={reverse} align={align} size={size}>
        <TimelineItem />
        <TimelineItem />
        <TimelineItem />
      </Timeline>
    </div>
  ),
};
