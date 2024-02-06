import { PlusIcon } from "@heroicons/react/24/outline";
import { Button } from "@rafty/ui";

export function ButtonExample() {
  return (
    <div className="space-y-2">
      <div className="grid grid-cols-2 items-center gap-2">
        <Button colorScheme="primary">Primary Button</Button>
        <Button colorScheme="error">Error Button</Button>
        <Button>Default Button</Button>
        <Button colorScheme="success">Success Button</Button>
      </div>
      <div className="flex w-full items-center justify-between gap-2">
        <Button size="lg">Button</Button>
        <Button>Button</Button>
        <Button size="sm">Button</Button>
        <Button size="fab" className="w-max">
          <PlusIcon height={16} width={16} className="stroke-2 " />
        </Button>
      </div>
    </div>
  );
}
