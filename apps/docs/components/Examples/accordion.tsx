import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@rafty/ui";

export const accordion_examples = {
  "accordion:usage": (
    <Accordion type="multiple">
      <AccordionItem value="1">
        <AccordionTrigger>
          <span className="flex-1 text-left">Section 1 title</span>
        </AccordionTrigger>
        <AccordionContent data-cy="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="2">
        <AccordionTrigger>
          <span className="flex-1 text-left">Section 2 title</span>
        </AccordionTrigger>
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
        <AccordionTrigger>
          <span className="flex-1 text-left">Section 1 title</span>
        </AccordionTrigger>
        <AccordionContent data-cy="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="2">
        <AccordionTrigger>
          <span className="flex-1 text-left">Section 2 title</span>
        </AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  "accordion:multi_item": (
    <Accordion collapsible type="single">
      <AccordionItem value="1">
        <AccordionTrigger>
          <span className="flex-1 text-left">Section 1 title</span>
        </AccordionTrigger>
        <AccordionContent data-cy="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="2">
        <AccordionTrigger>
          <span className="flex-1 text-left">Section 2 title</span>
        </AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  "accordion:defaultvalue": (
    <Accordion collapsible type="single" defaultValue="1">
      <AccordionItem value="1">
        <AccordionTrigger>
          <span className="flex-1 text-left">Section 1 title</span>
        </AccordionTrigger>
        <AccordionContent data-cy="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="2">
        <AccordionTrigger>
          <span className="flex-1 text-left">Section 2 title</span>
        </AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  "accordion:barebone": (
    <Accordion isBarebone collapsible type="single" defaultValue="1">
      <AccordionItem value="1">
        <AccordionTrigger>
          <span className="flex-1 text-left">Section 1 title</span>
        </AccordionTrigger>
        <AccordionContent data-cy="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="2">
        <AccordionTrigger>
          <span className="flex-1 text-left">Section 2 title</span>
        </AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  "accordion:unstyled": (
    <Accordion collapsible type="single" defaultValue="1">
      <AccordionItem value="1">
        <AccordionTrigger isUnstyled>
          <span className="flex-1 text-left">Section 1 title</span>
        </AccordionTrigger>
        <AccordionContent data-cy="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="2">
        <AccordionTrigger>
          <span className="flex-1 text-left">Section 2 title</span>
        </AccordionTrigger>
        <AccordionContent isUnstyled>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
