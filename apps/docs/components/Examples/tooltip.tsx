import { HiOutlinePlus } from "react-icons/hi2";
import { Button, Tooltip, TooltipContent, TooltipTrigger } from "@rafty/ui";

export const tooltip_examples = {
  "tooltip:usage": (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button size="fab">
          <HiOutlinePlus size={24} className="stroke-2" />
        </Button>
      </TooltipTrigger>
      <TooltipContent side="top">Hover Me!</TooltipContent>
    </Tooltip>
  ),
};
