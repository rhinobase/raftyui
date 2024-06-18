import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import type { Meta, StoryObj } from "@storybook/react";
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
      options: ["ghost", "outline", "solid"],
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
  render: (props) => (
    // @ts-ignore
    <Accordion {...props} type="single">
      <AccordionItem value="1">
        <AccordionTrigger>Section 1 title</AccordionTrigger>
        <AccordionContent data-cy="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="3">
        <AccordionTrigger>Section 2 title</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const SingleType: Story = {
  render: (props) => (
    // @ts-ignore
    <Accordion {...props} type="single" collapsible>
      <AccordionItem value="1">
        <AccordionTrigger>Section 1 title</AccordionTrigger>
        <AccordionContent data-cy="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="3">
        <AccordionTrigger>Section 2 title</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const MultipleType: Story = {
  render: (props) => (
    // @ts-ignore
    <Accordion {...props} type="multiple">
      <AccordionItem value="1">
        <AccordionTrigger>Section 1 title</AccordionTrigger>
        <AccordionContent data-cy="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="3">
        <AccordionTrigger>Section 2 title</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const CustomIcon: Story = {
  render: (props) => (
    // @ts-ignore
    <Accordion {...props} type="multiple">
      <AccordionItem value="1">
        <AccordionTrigger>Section 1 title</AccordionTrigger>
        <AccordionContent data-cy="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="3">
        <AccordionTrigger
          openIcon={<MinusIcon className="size-4 stroke-2" />}
          closeIcon={<PlusIcon className="size-4 stroke-2" />}
        >
          Section 2 title
        </AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
