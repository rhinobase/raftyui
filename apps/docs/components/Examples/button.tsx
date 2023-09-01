import { Button } from "@rafty/ui";
import {
  HiPhone,
  HiPaperAirplane,
  HiArchiveBox,
  HiBackspace,
} from "react-icons/hi2";

export const button_examples = {
  "button:usage": <Button>Button</Button>,
  "button:size": (
    <div className="flex gap-4 items-center">
      <Button size="sm">Button</Button>
      <Button size="md">Button</Button>
      <Button size="lg">Button</Button>
      <Button size="fab">
        <HiArchiveBox />
      </Button>
      <Button size="icon">
        <HiBackspace />
      </Button>
    </div>
  ),
  "button:colorScheme": (
    <div className="flex gap-4 items-center">
      <Button colorScheme="primary">Button</Button>
      <Button colorScheme="secondary">Button</Button>
      <Button colorScheme="error">Button</Button>
      <Button colorScheme="success">Button</Button>
    </div>
  ),
  "button:variant": (
    <div className="flex gap-4 items-center">
      <Button variant="solid">Button</Button>
      <Button variant="outline">Button</Button>
      <Button variant="ghost">Button</Button>
    </div>
  ),
  "button:icons": (
    <div className="flex gap-4 items-center">
      <Button leftIcon={<HiPhone />} colorScheme="primary" variant="solid">
        Button
      </Button>
      <Button
        rightIcon={<HiPaperAirplane />}
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
      className="bg-white px-5 p-2 hover:bg-secondary-200 rounded-lg dark:bg-secondary-500 dark:text-white dark:hover:bg-secondary-700"
    >
      Button
    </Button>
  ),
  "button:active": <Button isActive>Button</Button>,
  "button:disabled": <Button isDisabled>Button</Button>,
  "button:loading": <Button isLoading>Button</Button>,
};
