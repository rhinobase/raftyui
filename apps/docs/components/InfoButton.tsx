import RaftyIcon from "@rafty/icons";
import { Kbd, Popover, PopoverContent, PopoverTrigger, Text } from "@rafty/ui";
import { PropsWithChildren } from "react";

export function InfoButton({
  children,
  type,
}: PropsWithChildren<{ type: string }>) {
  return (
    <div className="flex gap-1">
      <Kbd>{type}</Kbd>
      <Popover size="sm">
        <PopoverTrigger size="icon" variant="ghost">
          <RaftyIcon
            type="information-circle"
            width={18}
            height={18}
            className="stroke-2"
          />
        </PopoverTrigger>
        <PopoverContent showArrow sideOffset={0}>
          <Text className="text-sm leading-none">{children}</Text>
        </PopoverContent>
      </Popover>
    </div>
  );
}
