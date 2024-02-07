import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
} from "@rafty/ui";
import { useThemeEditorContext } from "../Context";

export function PopoverExample() {
  const { isDisabled } = useThemeEditorContext();

  return (
    <Popover>
      <PopoverTrigger isDisabled={isDisabled}>Popover</PopoverTrigger>
      <PopoverContent className="w-96 space-y-3">
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </Text>
        <div className="flex justify-end gap-3 py-1">
          <Button size="sm">Cancel</Button>
          <Button size="sm" colorScheme="primary">
            Proceed
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
