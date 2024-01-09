import { ClockIcon, TvIcon } from "@heroicons/react/24/outline";
import { Meta, StoryObj } from "@storybook/react";
import { Timeline, TimelineItem } from "./Timeline";

const meta: Meta<typeof Timeline> = {
  title: "Corp / Timeline",
  args: {
    reverse: false,
    loading: false,
    mode: "left",
  },
  argTypes: {
    mode: {
      control: "select",
      options: ["left", "right"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Timeline>;

export const Default: Story = {
  render: ({ reverse, loading, mode }) => (
    <div className="h-[400px] w-full">
      <Timeline reverse={reverse} loading={loading} mode={mode}>
        <TimelineItem
          dot={<TvIcon height={20} width={20} className="text-red-500" />}
        >
          Create a services site 2015-09-01
        </TimelineItem>
        <TimelineItem color="green">
          Solve initial network problems
        </TimelineItem>
        <TimelineItem>Technical testing 2015-09-01</TimelineItem>
      </Timeline>
    </div>
  ),
};

export const WithLabel: Story = {
  render: ({ reverse, loading, mode }) => (
    <div className="h-[200px] w-full">
      <Timeline
        reverse={reverse}
        loading={loading}
        mode={mode}
        loadingDot={
          <ClockIcon height={20} width={20} className="text-purple-600" />
        }
      >
        <TimelineItem
          label="2015-09-01 09:12:11"
          color="rgb(0,0,0)"
          dot={<TvIcon height={20} width={20} className="text-red-500" />}
        >
          Create a services site 2015-09-01
        </TimelineItem>
        <TimelineItem color="green" label="2015-09-01">
          Solve initial network problems
        </TimelineItem>
        <TimelineItem label="2015-09-01 09:12:11">
          Technical testing 2015-09-01
        </TimelineItem>
      </Timeline>
    </div>
  ),
};

export const LoadingWithReactNode: Story = {
  render: ({ reverse, mode }) => (
    <Timeline reverse={reverse} loading="Loading more..." mode={mode}>
      <TimelineItem color="rgb(0,0,0)" dot={<TvIcon height={20} width={20} />}>
        Create a services site 2015-09-01
      </TimelineItem>
      <TimelineItem color="green">Solve initial network problems</TimelineItem>
      <TimelineItem>Technical testing 2015-09-01</TimelineItem>
    </Timeline>
  ),
};
