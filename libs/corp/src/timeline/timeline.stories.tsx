import { ClockIcon, TvIcon } from "@heroicons/react/24/outline";
import { RadioGroup, RadioGroupItem } from "@rafty/ui";
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Timeline, TimelineItem } from "./Timeline";

const meta: Meta<typeof Timeline> = {
  title: "Corp / Timeline",
  args: {
    reverse: false,
  },
};

export default meta;
type Story = StoryObj<typeof Timeline>;

export const Default: Story = {
  render: ({ reverse }) => (
    <Timeline
      className="!h-[200px] w-full"
      reverse={reverse}
      // loading="Loading..."
      loadingDot={
        <ClockIcon height={20} width={20} className="text-purple-600" />
      }
    >
      <TimelineItem
        color="rgb(0,0,0)"
        dot={<TvIcon height={20} width={20} className="text-red-500" />}
      >
        Create a services site 2015-09-01
      </TimelineItem>
      <TimelineItem color="green">Solve initial network problems</TimelineItem>
      <TimelineItem>Technical testing 2015-09-01</TimelineItem>
    </Timeline>
  ),
};

export const WithLabel: Story = {
  render: ({ reverse }) => (
    <Timeline
      className="!h-[200px] w-full"
      reverse={reverse}
      loading="Loading..."
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
  ),
};

export const Mode: Story = {
  render: ({ reverse }) => {
    const [mode, setMode] = useState<"left" | "right">("left");

    return (
      <div className="h-[200px] w-full space-y-4">
        <RadioGroup
          onValueChange={(value: "left" | "right") => setMode(value)}
          value={mode}
          className="!flex-row"
        >
          <RadioGroupItem value="left" id="left">
            Left
          </RadioGroupItem>
          <RadioGroupItem value="right" id="right">
            Right
          </RadioGroupItem>
        </RadioGroup>
        <Timeline
          reverse={reverse}
          mode={mode}
          loading
          loadingDot={<ClockIcon height={15} width={15} />}
        >
          <TimelineItem
            label="2015-09-01 09:12:11"
            color="rgb(0,0,0)"
            dot={<TvIcon height={15} width={15} />}
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
    );
  },
};
