import { Grid } from "@rhinobase/docs/components";
import React from "react";
import * as Accordion from "./Accordion";
import { AccordionContext } from "./context";

export default {
  title: "New/Accordion",
  component: Accordion,
};

export function Default({ size = "md" }: AccordionContext) {
  return (
    <Grid>
      <div className="w-[640px] rounded-md border p-4 dark:border-zinc-700">
        <Accordion.Root type="single" defaultValue="1" collapsible>
          <Accordion.Item value="1">
            <Accordion.Trigger>
              <span className="flex-1 text-left">Section 1 title</span>
            </Accordion.Trigger>
            <Accordion.Content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="3">
            <Accordion.Trigger
              openIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 12h-15"
                  />
                </svg>
              }
              closeIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              }
            >
              <span className="flex-1 text-left">Section 2 title</span>
            </Accordion.Trigger>
            <Accordion.Content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </div>
    </Grid>
  );
}
export function Small({ size = "md" }: AccordionContext) {
  return (
    <Grid>
      <div className="w-[640px] rounded-md border p-4 dark:border-zinc-700">
        <Accordion.Root type="single" defaultValue="1" collapsible size="sm">
          <Accordion.Item value="1">
            <Accordion.Trigger>
              <span className="flex-1 text-left">Section 1 title</span>
            </Accordion.Trigger>
            <Accordion.Content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="2">
            <Accordion.Trigger>
              <span className="flex-1 text-left">Section 2 title</span>
            </Accordion.Trigger>
            <Accordion.Content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </div>
    </Grid>
  );
}
export function Large({ size = "md" }: AccordionContext) {
  return (
    <Grid>
      <div className="w-[640px] rounded-md border p-4 dark:border-zinc-700">
        <Accordion.Root type="single" defaultValue="1" collapsible size="lg">
          <Accordion.Item value="1" className="border-b">
            <Accordion.Trigger>
              <span className="flex-1 text-left">Section 1 title</span>
            </Accordion.Trigger>
            <Accordion.Content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="2" className="border-b">
            <Accordion.Trigger>
              <span className="flex-1 text-left">Section 2 title</span>
            </Accordion.Trigger>
            <Accordion.Content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="3" className="border-b">
            <Accordion.Trigger
              openIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 12h-15"
                  />
                </svg>
              }
              closeIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              }
            >
              <span className="flex-1 text-left">Section 2 title</span>
            </Accordion.Trigger>
            <Accordion.Content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </div>
    </Grid>
  );
}
