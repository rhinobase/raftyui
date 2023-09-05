import { Textarea } from "@rafty/ui";

export const textarea_examples = {
  "textarea:usage": <Textarea placeholder="placeholder" />,
  "textarea:variant": <Textarea placeholder="abc" variant="solid" />,
  "textarea:unstyled": (
    <Textarea
      placeholder="abc"
      isUnStyled
      className="outline-none hover:border-green-300 border border-secondary-200 bg-transparent rounded-md focus:ring-1 focus:ring-sky-300 ring-offset-0 dark:border-secondary-500"
    />
  ),
};
