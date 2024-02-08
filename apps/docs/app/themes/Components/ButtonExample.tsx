import { PlusIcon } from "@heroicons/react/24/outline";
import { Button } from "@rafty/ui";
import { useThemeEditorContext } from "../Context";

export function ButtonExample() {
  const { isDisabled } = useThemeEditorContext();

  return (
    <div className="space-y-2">
      <div className="grid grid-cols-2 items-center gap-2">
        <Button colorScheme="primary" isDisabled={isDisabled}>
          Primary Button
        </Button>
        <Button colorScheme="error" isDisabled={isDisabled}>
          Error Button
        </Button>
        <Button isDisabled={isDisabled}>Default Button</Button>
        <Button colorScheme="success" isDisabled={isDisabled}>
          Success Button
        </Button>
      </div>
      <div className="flex w-full items-center justify-between gap-2">
        <Button size="lg" isDisabled={isDisabled}>
          Button
        </Button>
        <Button isDisabled={isDisabled}>Button</Button>
        <Button size="sm" isDisabled={isDisabled}>
          Button
        </Button>
        <Button size="fab" className="w-max" isDisabled={isDisabled}>
          <PlusIcon height={16} width={16} className="stroke-2 " />
        </Button>
      </div>
    </div>
  );
}
