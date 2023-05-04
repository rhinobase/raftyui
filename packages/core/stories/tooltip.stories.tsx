import { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "../src/tooltip";
import { Button } from "../src";

const meta: Meta<typeof Tooltip> = {
  title: "Components / Tooltip",
  decorators: [
    (Story) => (
      <div className="w-full flex flex-col items-center justify-center gap-2 mx-auto max-w-3xl h-[calc(100vh-40px)]">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Variants: Story = {
  render: () => (
    <>
      <Tooltip side="top" content="Tooltip Content">
        <Button size="fab">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </Button>
      </Tooltip>
    </>
  ),
};
