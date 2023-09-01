import { PlusIcon } from "@heroicons/react/24/outline";
import { Button, Tooltip, TooltipContent, TooltipTrigger } from "@rafty/ui";

export const tooltip_examples = {
  "tooltip:usage": (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button size="fab">
          <PlusIcon className="h-6 w-6" />
        </Button>
      </TooltipTrigger>
      <TooltipContent side="top">Hover Me!</TooltipContent>
    </Tooltip>
  ),
};
