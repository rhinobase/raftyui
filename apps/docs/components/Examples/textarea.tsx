import { Textarea } from "@rafty/ui";

export const textarea_examples = {
  "textarea:usage": <Textarea placeholder="This is a sample placeholder" />,
  "textarea:variant": (
    <Textarea placeholder="This is a sample placeholder" variant="solid" />
  ),
  "textarea:disabled": (
    <Textarea placeholder="this is sample placeholder" isDisabled />
  ),
  "textarea:unstyled": (
    <Textarea
      placeholder="This is a sample placeholder"
      isUnstyled
      className="border-secondary-200 dark:border-secondary-500 w-full rounded-md border bg-transparent p-2 outline-none ring-offset-0 hover:border-green-300 focus:ring-1 focus:ring-sky-300"
    />
  ),
};
