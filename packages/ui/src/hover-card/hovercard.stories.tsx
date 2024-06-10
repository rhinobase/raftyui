import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./HoverCard";

const meta: Meta<HoverCardContent> = {
  title: "Components / HoverCard",
  args: {
    side: "bottom",
    sideOffset: 4,
    align: "center",
  },
  argTypes: {
    side: {
      control: "select",
      options: ["bottom", "top", "left", "right"],
    },
    align: {
      control: "select",
      options: ["center", "end", "start"],
    },
  },
};

export default meta;
type Story = StoryObj<HoverCardContent>;

export const Default: Story = {
  render: (props) => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="ghost">@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent {...props} className="w-80">
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@nextjs</h4>
            <p className="text-sm">
              The React Framework - created and maintained by @vercel.
            </p>
            <div className="flex items-center pt-2">
              <span className="text-muted-foreground text-xs">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};
