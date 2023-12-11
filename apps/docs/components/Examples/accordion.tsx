import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@rafty/ui";

export const accordion_examples = {
  "accordion:usage": (
    <Accordion type="single">
      <AccordionItem value="1">
        <AccordionTrigger>Section 1 title</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="2">
        <AccordionTrigger>Section 2 title</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  "accordion:collapsible": (
    <Accordion type="single" collapsible>
      <AccordionItem value="1">
        <AccordionTrigger>Section 1 title</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="2">
        <AccordionTrigger>Section 2 title</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  "accordion:multi_item": (
    <Accordion type="multiple">
      <AccordionItem value="1">
        <AccordionTrigger>Section 1 title</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="2">
        <AccordionTrigger>Section 2 title</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  "accordion:defaultvalue": (
    <Accordion type="single" defaultValue="1">
      <AccordionItem value="1">
        <AccordionTrigger>Section 1 title</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="2">
        <AccordionTrigger>Section 2 title</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  "accordion:size": (
    <Accordion type="single" variant="ghost" size="sm">
      <AccordionItem value="1">
        <AccordionTrigger>Section 1 title</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="2">
        <AccordionTrigger>Section 2 title</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  "accordion:variant": (
    <Accordion type="single" variant="ghost">
      <AccordionItem value="1">
        <AccordionTrigger>Section 1 title</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="2">
        <AccordionTrigger>Section 2 title</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  "accordion:unstyled": (
    <Accordion
      isUnstyled
      collapsible
      type="single"
      className="w-full space-y-2"
    >
      <AccordionItem
        value="1"
        className="dark:bg-secondary-800 rounded-lg bg-white p-2 px-4 shadow-md dark:text-white"
      >
        <AccordionTrigger className="flex w-full items-center justify-between font-medium transition-all [&[data-state=open]>svg]:rotate-180">
          Section 1 title
        </AccordionTrigger>
        <AccordionContent className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden transition-all">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="2"
        className="dark:bg-secondary-800 rounded-lg bg-white p-2 px-4 shadow-md dark:text-white"
      >
        <AccordionTrigger className="flex w-full items-center justify-between font-medium transition-all [&[data-state=open]>svg]:rotate-180">
          Section 2 title
        </AccordionTrigger>
        <AccordionContent className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden transition-all">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  "accordion:unstyledsub": (
    <Accordion collapsible type="single" defaultValue="1">
      <AccordionItem
        value="1"
        className="dark:bg-secondary-800 rounded-lg bg-white p-2 px-4 dark:text-white"
      >
        <AccordionTrigger
          isUnstyled
          className="flex w-full items-center justify-between font-medium transition-all [&[data-state=open]>svg]:rotate-180"
        >
          Section 1 title
        </AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="2">
        <AccordionTrigger>Section 2 title</AccordionTrigger>
        <AccordionContent isUnstyled>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
