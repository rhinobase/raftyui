import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@rafty/ui";

export function AccordianExample() {
  return (
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
  );
}
