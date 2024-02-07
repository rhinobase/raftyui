import { Tooltip, TooltipContent, TooltipTrigger } from "@rafty/ui";
import { useThemeEditorContext } from "../Context";

export function TooltipExample() {
  const { isDisabled } = useThemeEditorContext();

  return (
    <Tooltip isDisabled={isDisabled}>
      <TooltipTrigger>Tooltip</TooltipTrigger>
      <TooltipContent side="top">Tooltip</TooltipContent>
    </Tooltip>
  );
}
