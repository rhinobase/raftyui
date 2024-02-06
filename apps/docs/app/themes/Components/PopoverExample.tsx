import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
} from "@rafty/ui";

export function PopoverExample() {
  return (
    <Popover>
      <PopoverTrigger>Popover</PopoverTrigger>
      <PopoverContent className="w-96 space-y-3">
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </Text>
        <div className="flex justify-end gap-3 py-1">
          <Button size="sm" colorScheme="success">
            Demo 1
          </Button>
          <Button size="sm" colorScheme="error">
            Demo 2
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
