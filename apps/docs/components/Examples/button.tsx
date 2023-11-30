import {
  ArchiveBoxIcon,
  BackspaceIcon,
  PaperAirplaneIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@rafty/ui";

export const button_examples = {
  "button:usage": <Button>Button</Button>,
  "button:size": (
    <div className="flex items-center gap-4">
      <Button size="sm">Button</Button>
      <Button size="md">Button</Button>
      <Button size="lg">Button</Button>
      <Button size="fab">
        <ArchiveBoxIcon height={16} width={16} />
      </Button>
      <Button size="icon">
        <BackspaceIcon height={16} width={16} />
      </Button>
    </div>
  ),
  "button:colorScheme": (
    <div className="flex items-center gap-4">
      <Button colorScheme="primary">Button</Button>
      <Button colorScheme="secondary">Button</Button>
      <Button colorScheme="error">Button</Button>
      <Button colorScheme="success">Button</Button>
    </div>
  ),
  "button:variant": (
    <div className="flex items-center gap-4">
      <Button variant="solid">Button</Button>
      <Button variant="outline">Button</Button>
      <Button variant="ghost">Button</Button>
    </div>
  ),
  "button:icons": (
    <div className="flex items-center gap-4">
      <Button
        leftIcon={<PhoneIcon height={16} width={16} />}
        colorScheme="primary"
        variant="solid"
      >
        Button
      </Button>
      <Button
        rightIcon={<PaperAirplaneIcon height={16} width={16} />}
        colorScheme="primary"
        variant="solid"
      >
        Button
      </Button>
    </div>
  ),
  "button:unstyled": (
    <Button
      isUnstyled
      className="hover:bg-secondary-200 dark:bg-secondary-500 dark:hover:bg-secondary-700 rounded-lg bg-white p-2 px-5 dark:text-white"
    >
      Button
    </Button>
  ),
  "button:active": <Button isActive>Button</Button>,
  "button:disabled": <Button isDisabled>Button</Button>,
  "button:loading": <Button isLoading>Button</Button>,
};
