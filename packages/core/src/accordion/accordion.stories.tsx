import { HiMinus, HiPlus } from "react-icons/hi2";
import { Grid } from "@rhinobase/storybook/components";
import { Accordion, AccordionItem, AccordionButton, AccordionContent } from "./Accordion";
import { AccordionContext } from "./context";

export default {
  title: "New/Accordion",
  component: Accordion,
};

export function Default({ size = "md" }: AccordionContext) {
  return (
    <Grid>
      <div className="w-[640px] rounded-md border p-4 dark:border-zinc-700">
        <Accordion type="single" defaultValue="1" collapsible>
          <AccordionItem value="1">
            <AccordionButton>
              <span className="flex-1 text-left">Section 1 title</span>
            </AccordionButton>
            <AccordionContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="3">
            <AccordionButton openIcon={HiMinus} closeIcon={HiPlus}>
              <span className="flex-1 text-left">Section 2 title</span>
            </AccordionButton>
            <AccordionContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Grid>
  );
}
export function Small({ size = "md" }: AccordionContext) {
  return (
    <Grid>
      <div className="w-[640px] rounded-md border p-4 dark:border-zinc-700">
        <Accordion type="single" defaultValue="1" collapsible size="sm">
          <AccordionItem value="1">
            <AccordionButton>
              <span className="flex-1 text-left">Section 1 title</span>
            </AccordionButton>
            <AccordionContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="2">
            <AccordionButton>
              <span className="flex-1 text-left">Section 2 title</span>
            </AccordionButton>
            <AccordionContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Grid>
  );
}
export function Large({ size = "md" }: AccordionContext) {
  return (
    <Grid>
      <div className="w-[640px] rounded-md border p-4 dark:border-zinc-700">
        <Accordion type="single" defaultValue="1" collapsible size="lg">
          <AccordionItem value="1" className="border-b">
            <AccordionButton>
              <span className="flex-1 text-left">Section 1 title</span>
            </AccordionButton>
            <AccordionContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="2" className="border-b">
            <AccordionButton>
              <span className="flex-1 text-left">Section 2 title</span>
            </AccordionButton>
            <AccordionContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="3" className="border-b">
            <AccordionButton openIcon={HiMinus} closeIcon={HiPlus}>
              <span className="flex-1 text-left">Section 2 title</span>
            </AccordionButton>
            <AccordionContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Grid>
  );
}
