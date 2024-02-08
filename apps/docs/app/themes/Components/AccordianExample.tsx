import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@rafty/ui";
import { useThemeEditorContext } from "../Context";

export function AccordianExample() {
  const { isDisabled } = useThemeEditorContext();

  return (
    <Accordion type="multiple" disabled={isDisabled}>
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
  );
}
