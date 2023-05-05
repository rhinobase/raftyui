import { Meta, StoryObj } from "@storybook/react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../src";

const meta: Meta<typeof Accordion> = {
  title: "Components / Accordion",
  args: {
    variant: "ghost",
    size: "md",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["ghost", "solid"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Variants: Story = {
  render: ({ variant, size }) => (
    <>
      <div className="w-[640px] rounded-md border p-4 dark:border-zinc-700">
        <Accordion
          size={size}
          variant={variant}
          type="single"
          defaultValue="1"
          collapsible
        >
          <AccordionItem value="1">
            <AccordionTrigger>
              <span className="flex-1 text-left">Section 1 title</span>
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="3">
            <AccordionTrigger
              openIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12h-15"
                  />
                </svg>
              }
              closeIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              }
            >
              <span className="flex-1 text-left">Section 2 title</span>
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  ),
};
