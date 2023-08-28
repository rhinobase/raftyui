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
  "tooltip:side": (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button size="fab">
          <PlusIcon className="h-6 w-6" />
        </Button>
      </TooltipTrigger>
      <TooltipContent side="right">Hover Me!</TooltipContent>
    </Tooltip>
  ),
  "tooltip:barebone": (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button size="fab">
          <PlusIcon className="h-6 w-6" />
        </Button>
      </TooltipTrigger>
      <TooltipContent side="top" align="center">
        Hover Me!
      </TooltipContent>
    </Tooltip>
  ),

  "tooltip:align": (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button size="fab">
          <PlusIcon className="h-6 w-6" />
        </Button>
      </TooltipTrigger>
      <TooltipContent side="top" align="center">
        Hover Me!
      </TooltipContent>
    </Tooltip>
  ),
};
