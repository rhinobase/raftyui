import { TvIcon } from "@heroicons/react/24/outline";
import type { Meta, StoryObj } from "@storybook/react";
import { Timeline, TimelineItem } from "./Timeline";

const meta: Meta<typeof Timeline> = {
  title: "Components / Timeline",
  args: {
    size: "md",
    align: "left",
    isReverse: false,
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
  render: (props) => (
    <div className="h-[400px] w-full">
      <Timeline {...props}>
        <TimelineItem>Sample Item 1</TimelineItem>
        <TimelineItem>Sample Item 2</TimelineItem>
        <TimelineItem>Sample Item 3</TimelineItem>
      </Timeline>
    </div>
  ),
};

export const Status: Story = {
  render: (props) => (
    <div className="h-[400px] w-full">
      <Timeline {...props}>
        <TimelineItem status="error">Error Status</TimelineItem>
        <TimelineItem status="info">Info Status</TimelineItem>
        <TimelineItem status="success">Success Status</TimelineItem>
        <TimelineItem status="warning">Warning Status</TimelineItem>
      </Timeline>
    </div>
  ),
};

export const CustomIcon: Story = {
  render: (props) => (
    <div className="h-[400px] w-full">
      <Timeline {...props}>
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
  render: (props) => (
    <div className="h-[400px] w-full">
      <Timeline {...props}>
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
  render: (props) => (
    <div className="h-[400px] w-full">
      <Timeline {...props} isLoading loadingText="Loading more...">
        <TimelineItem>Sample Item 1</TimelineItem>
        <TimelineItem>Sample Item 2</TimelineItem>
        <TimelineItem>Sample Item 3</TimelineItem>
      </Timeline>
    </div>
  ),
};

export const WithoutChildren: Story = {
  render: (props) => (
    <div className="h-[400px] w-full">
      <Timeline {...props}>
        <TimelineItem />
        <TimelineItem />
        <TimelineItem />
      </Timeline>
    </div>
  ),
};
