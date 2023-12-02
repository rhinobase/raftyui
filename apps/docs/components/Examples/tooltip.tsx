import { PlusIcon } from "@heroicons/react/24/outline";
import { Button, Tooltip, TooltipContent, TooltipTrigger } from "@rafty/ui";

PlusIcon.displayName = "PlusIcon";

export const tooltip_examples = {
  "tooltip:usage": (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button size="fab">
          <PlusIcon width={24} height={24} className="stroke-2" />
        </Button>
      </TooltipTrigger>
      <TooltipContent side="top">Hover Me!</TooltipContent>
    </Tooltip>
  ),
};
