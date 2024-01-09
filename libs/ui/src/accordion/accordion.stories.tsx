import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { Meta, StoryObj } from "@storybook/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./Accordion";

const meta: Meta<typeof Accordion> = {
  title: "Components / Accordion",
  args: {
    variant: "solid",
    size: "md",
    isUnstyled: false,
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

export const Default: Story = {
  render: ({ variant, size, isUnstyled }) => (
    <div className="w-[640px] rounded-md border p-4 dark:border-zinc-700">
      <Accordion
        size={size}
        variant={variant}
        isUnstyled={isUnstyled}
        type="single"
        defaultValue="1"
        collapsible
      >
        <AccordionItem value="1">
          <AccordionTrigger>
            <span className="flex-1 text-left">Section 1 title</span>
          </AccordionTrigger>
          <AccordionContent data-cy="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="3">
          <AccordionTrigger>Section 2 title</AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

export const SingleType: Story = {
  render: ({ variant, size, isUnstyled }) => (
    <div className="w-[640px] rounded-md border p-4 dark:border-zinc-700">
      <Accordion
        size={size}
        variant={variant}
        isUnstyled={isUnstyled}
        type="single"
        collapsible
      >
        <AccordionItem value="1">
          <AccordionTrigger>
            <span className="flex-1 text-left">Section 1 title</span>
          </AccordionTrigger>
          <AccordionContent data-cy="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="3">
          <AccordionTrigger>Section 2 title</AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

export const MultipleType: Story = {
  render: ({ variant, size, isUnstyled }) => (
    <div className="w-[640px] rounded-md border p-4 dark:border-zinc-700">
      <Accordion
        size={size}
        variant={variant}
        isUnstyled={isUnstyled}
        type="multiple"
      >
        <AccordionItem value="1">
          <AccordionTrigger>
            <span className="flex-1 text-left">Section 1 title</span>
          </AccordionTrigger>
          <AccordionContent data-cy="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="3">
          <AccordionTrigger>Section 2 title</AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

export const OpenClose: Story = {
  render: ({ variant, size, isUnstyled }) => (
    <div className="w-[640px] rounded-md border p-4 dark:border-zinc-700">
      <Accordion
        size={size}
        variant={variant}
        isUnstyled={isUnstyled}
        type="multiple"
      >
        <AccordionItem value="1">
          <AccordionTrigger>
            <span className="flex-1 text-left">Section 1 title</span>
          </AccordionTrigger>
          <AccordionContent data-cy="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="3">
          <AccordionTrigger
            openIcon={<MinusIcon className="h-4 w-4" />}
            closeIcon={<PlusIcon className="h-4 w-4" />}
          >
            <span className="flex-1 text-left">Section 2 title</span>
          </AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};
